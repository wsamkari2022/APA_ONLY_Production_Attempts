/*
  # Add CVR Purpose Clarity Column

  1. Changes
    - Add `cvr_purpose_clarity` (integer) column to track CVR purpose understanding
    - Range: 1-7 scale measuring clarity of CVR section purpose

  2. Purpose
    - Measures how clear the CVR purpose was in helping participants reconsider decisions
    - Evaluates understanding of value reinterpretation in changing moral contexts

  3. Notes
    - Added as the first slider question after the two yes/no CVR questions
    - Default value set to NULL (not required for existing records)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'session_feedback' AND column_name = 'cvr_purpose_clarity'
  ) THEN
    ALTER TABLE session_feedback ADD COLUMN cvr_purpose_clarity integer;
  END IF;
END $$;
