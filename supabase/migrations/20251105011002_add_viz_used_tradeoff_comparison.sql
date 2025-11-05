/*
  # Add Visualization Trade-off Comparison Usage Tracking

  1. Changes
    - Add `viz_used_tradeoff_comparison` column to track whether participants used the trade-off comparison view

  2. New Column
    - `viz_used_tradeoff_comparison` (boolean): Tracks if participant used the radar and bar chart visualizations
      - null: Not yet answered
      - true: Used the visualization tools
      - false: Did not use the visualization tools

  3. Purpose
    - Acts as a gating question for the Decision Support Tools feedback section
    - Allows conditional display of detailed visualization feedback questions
    - Reduces survey fatigue for participants who didn't use these features

  4. Security
    - Inherits RLS policies from session_feedback table
    - No additional security changes needed
*/

-- Add the new column to track whether participants used the trade-off comparison view
ALTER TABLE session_feedback
ADD COLUMN IF NOT EXISTS viz_used_tradeoff_comparison boolean DEFAULT null;

-- Add comment for documentation
COMMENT ON COLUMN session_feedback.viz_used_tradeoff_comparison IS 'Boolean: Did participant use the trade-off comparison view (radar and bar charts)';
