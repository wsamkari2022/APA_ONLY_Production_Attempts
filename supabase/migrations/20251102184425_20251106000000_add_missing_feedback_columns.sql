/*
  # Add Missing Feedback Columns to session_feedback

  1. Changes
    - Add missing CVR feedback columns
    - Add missing visualization feedback columns  
    - Add missing overall feedback columns
    - Add missing tracking list columns

  2. New Columns Added
    - CVR: cvr_initial_reconsideration, cvr_final_reconsideration, cvr_confidence_change, 
           cvr_helpfulness, cvr_clarity, cvr_comfort_level, cvr_perceived_value, 
           cvr_overall_impact, cvr_comments
    - Visualization: viz_tradeoff_value, viz_expert_usefulness, viz_comments
    - APA: apa_comments
    - Overall: scenarios_final_decision_labels, checking_alignment_list

  3. Security
    - No RLS changes needed (inherits from table)
*/

-- Add missing CVR feedback columns
ALTER TABLE session_feedback
ADD COLUMN IF NOT EXISTS cvr_initial_reconsideration boolean,
ADD COLUMN IF NOT EXISTS cvr_final_reconsideration boolean,
ADD COLUMN IF NOT EXISTS cvr_confidence_change integer CHECK (cvr_confidence_change BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS cvr_helpfulness integer CHECK (cvr_helpfulness BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS cvr_clarity integer CHECK (cvr_clarity BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS cvr_comfort_level integer CHECK (cvr_comfort_level BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS cvr_perceived_value integer CHECK (cvr_perceived_value BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS cvr_overall_impact integer CHECK (cvr_overall_impact BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS cvr_comments text DEFAULT '';

-- Add missing visualization feedback columns
ALTER TABLE session_feedback
ADD COLUMN IF NOT EXISTS viz_tradeoff_value integer CHECK (viz_tradeoff_value BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS viz_expert_usefulness integer CHECK (viz_expert_usefulness BETWEEN 1 AND 7),
ADD COLUMN IF NOT EXISTS viz_comments text DEFAULT '';

-- Add missing APA feedback column
ALTER TABLE session_feedback
ADD COLUMN IF NOT EXISTS apa_comments text DEFAULT '';

-- Add missing tracking list columns
ALTER TABLE session_feedback
ADD COLUMN IF NOT EXISTS scenarios_final_decision_labels text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS checking_alignment_list text[] DEFAULT '{}';

-- Add comments for documentation
COMMENT ON COLUMN session_feedback.cvr_initial_reconsideration IS 'Boolean: Did CVR cause initial reconsideration of choice';
COMMENT ON COLUMN session_feedback.cvr_final_reconsideration IS 'Boolean: Did CVR cause final change in decision';
COMMENT ON COLUMN session_feedback.cvr_confidence_change IS 'Rating 1-7: Change in confidence after CVR questions';
COMMENT ON COLUMN session_feedback.cvr_helpfulness IS 'Rating 1-7: Helpfulness of CVR questions';
COMMENT ON COLUMN session_feedback.cvr_clarity IS 'Rating 1-7: Clarity of CVR questions';
COMMENT ON COLUMN session_feedback.cvr_comfort_level IS 'Rating 1-7: Comfort level with CVR process';
COMMENT ON COLUMN session_feedback.cvr_perceived_value IS 'Rating 1-7: Perceived value of CVR feature';
COMMENT ON COLUMN session_feedback.cvr_overall_impact IS 'Rating 1-7: Overall impact of CVR on decisions';
COMMENT ON COLUMN session_feedback.cvr_comments IS 'Open-ended feedback about CVR experience';

COMMENT ON COLUMN session_feedback.viz_tradeoff_value IS 'Rating 1-7: Value of trade-off comparisons in visualizations';
COMMENT ON COLUMN session_feedback.viz_expert_usefulness IS 'Rating 1-7: Usefulness of expert analyses';
COMMENT ON COLUMN session_feedback.viz_comments IS 'Open-ended feedback about visualizations';

COMMENT ON COLUMN session_feedback.apa_comments IS 'Open-ended feedback about APA experience';

COMMENT ON COLUMN session_feedback.scenarios_final_decision_labels IS 'Array of final decision labels for each scenario';
COMMENT ON COLUMN session_feedback.checking_alignment_list IS 'Array of options checked for alignment';
