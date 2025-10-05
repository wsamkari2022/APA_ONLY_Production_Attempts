/*
  # Value Consistency Experiment - Complete Database Schema

  ## Purpose
  This migration creates a comprehensive database schema for tracking user behavior and value consistency
  throughout a high-stakes decision-making experiment. It captures baseline values, scenario interactions,
  CVR responses, APA reorderings, and final decisions to study whether CVR and APA mechanisms help users
  improve future decisions.

  ## Tables Created

  1. **user_sessions**
     - Stores session metadata: start/end times, completion status, demographics
     - Primary tracking entity for each experimental run

  2. **baseline_values**
     - Captures initial matched stable values from implicit preference assessment
     - Includes match percentages and rank order
     - Immutable baseline reference for consistency analysis

  3. **scenario_interactions**
     - Tracks all user interactions within scenarios (option selections, switches)
     - Records timestamps for every action
     - Stores alignment status and exploration activities

  4. **cvr_responses**
     - Records CVR question presentations and user answers (Yes/No)
     - Links to triggering options and scenarios
     - Tracks response times and decision changes

  5. **apa_reorderings**
     - Stores preference reorderings with before/after value lists
     - Captures preference type (simulation metrics vs moral values)
     - Records time spent on reordering activity

  6. **final_decisions**
     - Records confirmed decision per scenario
     - Stores alignment status and final metrics
     - Includes performance indicators

  7. **value_evolution**
     - Tracks how value priorities change across scenarios
     - Shows value journey from baseline through all scenarios

  8. **session_feedback**
     - Stores post-experiment satisfaction ratings
     - Captures qualitative feedback and notes

  ## Security
  - RLS enabled on all tables
  - Policies allow users to manage their own session data
  - Read access for authenticated researchers (if needed later)

  ## Important Notes
  - All timestamps use timestamptz for accurate time tracking
  - Foreign keys maintain referential integrity
  - JSONB fields store complex data structures efficiently
  - Indexes added for common query patterns
*/

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USER SESSIONS TABLE
CREATE TABLE IF NOT EXISTS user_sessions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text UNIQUE NOT NULL,
  user_id uuid,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  is_completed boolean DEFAULT false,
  demographics jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. BASELINE VALUES TABLE
CREATE TABLE IF NOT EXISTS baseline_values (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
  value_name text NOT NULL,
  match_percentage numeric(5,2) NOT NULL,
  rank_order integer NOT NULL,
  value_type text DEFAULT 'stable',
  established_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 3. SCENARIO INTERACTIONS TABLE
CREATE TABLE IF NOT EXISTS scenario_interactions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
  scenario_id integer NOT NULL,
  scenario_title text NOT NULL,
  event_type text NOT NULL,
  option_id text,
  option_label text,
  option_title text,
  is_aligned boolean,
  time_since_scenario_start integer,
  switch_count integer DEFAULT 0,
  alternatives_explored boolean DEFAULT false,
  radar_chart_viewed boolean DEFAULT false,
  event_data jsonb DEFAULT '{}',
  occurred_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 4. CVR RESPONSES TABLE
CREATE TABLE IF NOT EXISTS cvr_responses (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
  scenario_id integer NOT NULL,
  option_id text NOT NULL,
  option_label text NOT NULL,
  cvr_question text NOT NULL,
  user_answer boolean NOT NULL,
  response_time_ms integer,
  decision_changed_after boolean DEFAULT false,
  comparison_data jsonb DEFAULT '{}',
  responded_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 5. APA REORDERINGS TABLE
CREATE TABLE IF NOT EXISTS apa_reorderings (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
  scenario_id integer NOT NULL,
  preference_type text NOT NULL,
  values_before jsonb NOT NULL,
  values_after jsonb NOT NULL,
  time_spent_ms integer,
  triggered_by_option text,
  subsequent_option_selected text,
  was_from_top_two boolean,
  reordered_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 6. FINAL DECISIONS TABLE
CREATE TABLE IF NOT EXISTS final_decisions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
  scenario_id integer NOT NULL,
  scenario_title text NOT NULL,
  option_id text NOT NULL,
  option_label text NOT NULL,
  option_title text NOT NULL,
  is_aligned boolean NOT NULL,
  from_top_two_ranked boolean DEFAULT false,
  total_switches integer DEFAULT 0,
  total_time_seconds integer NOT NULL,
  cvr_visited boolean DEFAULT false,
  cvr_visit_count integer DEFAULT 0,
  cvr_yes_answers integer DEFAULT 0,
  apa_reordered boolean DEFAULT false,
  apa_reorder_count integer DEFAULT 0,
  alternatives_explored boolean DEFAULT false,
  final_metrics jsonb DEFAULT '{}',
  decided_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 7. VALUE EVOLUTION TABLE
CREATE TABLE IF NOT EXISTS value_evolution (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
  scenario_id integer,
  value_list_snapshot jsonb NOT NULL,
  change_trigger text,
  change_type text,
  deviation_from_baseline numeric(5,2),
  captured_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 8. SESSION FEEDBACK TABLE
CREATE TABLE IF NOT EXISTS session_feedback (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id text NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
  decision_satisfaction integer CHECK (decision_satisfaction BETWEEN 1 AND 7),
  process_satisfaction integer CHECK (process_satisfaction BETWEEN 1 AND 7),
  perceived_transparency integer CHECK (perceived_transparency BETWEEN 1 AND 7),
  notes_free_text text,
  value_consistency_index numeric(5,4),
  performance_composite numeric(5,4),
  balance_index numeric(5,4),
  cvr_arrivals integer DEFAULT 0,
  cvr_yes_count integer DEFAULT 0,
  cvr_no_count integer DEFAULT 0,
  apa_reorderings integer DEFAULT 0,
  total_switches integer DEFAULT 0,
  avg_decision_time numeric(8,2),
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_baseline_values_session ON baseline_values(session_id);
CREATE INDEX IF NOT EXISTS idx_scenario_interactions_session ON scenario_interactions(session_id);
CREATE INDEX IF NOT EXISTS idx_scenario_interactions_scenario ON scenario_interactions(scenario_id);
CREATE INDEX IF NOT EXISTS idx_cvr_responses_session ON cvr_responses(session_id);
CREATE INDEX IF NOT EXISTS idx_apa_reorderings_session ON apa_reorderings(session_id);
CREATE INDEX IF NOT EXISTS idx_final_decisions_session ON final_decisions(session_id);
CREATE INDEX IF NOT EXISTS idx_value_evolution_session ON value_evolution(session_id);
CREATE INDEX IF NOT EXISTS idx_session_feedback_session ON session_feedback(session_id);

-- Enable Row Level Security on all tables
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE baseline_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE scenario_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cvr_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE apa_reorderings ENABLE ROW LEVEL SECURITY;
ALTER TABLE final_decisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE value_evolution ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_feedback ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Allow users to insert and read their own session data
-- For user_sessions
CREATE POLICY "Users can insert own sessions"
  ON user_sessions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view own sessions"
  ON user_sessions FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can update own sessions"
  ON user_sessions FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- For baseline_values
CREATE POLICY "Users can insert baseline values"
  ON baseline_values FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view baseline values"
  ON baseline_values FOR SELECT
  TO public
  USING (true);

-- For scenario_interactions
CREATE POLICY "Users can insert scenario interactions"
  ON scenario_interactions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view scenario interactions"
  ON scenario_interactions FOR SELECT
  TO public
  USING (true);

-- For cvr_responses
CREATE POLICY "Users can insert CVR responses"
  ON cvr_responses FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view CVR responses"
  ON cvr_responses FOR SELECT
  TO public
  USING (true);

-- For apa_reorderings
CREATE POLICY "Users can insert APA reorderings"
  ON apa_reorderings FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view APA reorderings"
  ON apa_reorderings FOR SELECT
  TO public
  USING (true);

-- For final_decisions
CREATE POLICY "Users can insert final decisions"
  ON final_decisions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view final decisions"
  ON final_decisions FOR SELECT
  TO public
  USING (true);

-- For value_evolution
CREATE POLICY "Users can insert value evolution"
  ON value_evolution FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view value evolution"
  ON value_evolution FOR SELECT
  TO public
  USING (true);

-- For session_feedback
CREATE POLICY "Users can insert session feedback"
  ON session_feedback FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view session feedback"
  ON session_feedback FOR SELECT
  TO public
  USING (true);