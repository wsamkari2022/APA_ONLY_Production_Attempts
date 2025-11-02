/*
  # Add Demographic Fields to User Sessions Table

  ## Purpose
  This migration updates the user_sessions table to capture demographic data as explicit
  columns instead of storing them in a JSONB field. This makes queries easier and provides
  better data validation.

  ## Changes

  ### New Columns Added to user_sessions
  - age (integer): User's age (18-120)
  - gender (text): User's gender (Male, Female, Other)
  - ai_experience (text): Experience with AI systems (Never, Rarely, Often, Very Often, Most of the Time)
  - moral_reasoning_experience (text): Experience with moral reasoning (Poor, Fair, Good, Very Good, Excellent)

  ## Migration Strategy
  - Uses ALTER TABLE to add new columns
  - Adds CHECK constraints for data validation
  - Maintains backward compatibility by keeping demographics JSONB field
  - Existing data in demographics JSONB remains intact

  ## Data Validation
  - Age must be between 18 and 120
  - Gender must be one of: Male, Female, Other
  - AI Experience must be one of: Never, Rarely, Often, Very Often, Most of the Time
  - Moral Reasoning Experience must be one of: Poor, Fair, Good, Very Good, Excellent

  ## Important Notes
  - The demographics JSONB field is kept for backward compatibility
  - New inserts should populate both JSONB and explicit columns
  - Explicit columns make querying and analysis much easier
  - All columns allow NULL for backward compatibility with existing records
*/

-- Add demographic columns to user_sessions table
DO $$
BEGIN
  -- Add age column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_sessions' AND column_name = 'age'
  ) THEN
    ALTER TABLE user_sessions ADD COLUMN age integer;
    ALTER TABLE user_sessions ADD CONSTRAINT age_valid_range CHECK (age >= 18 AND age <= 120);
  END IF;

  -- Add gender column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_sessions' AND column_name = 'gender'
  ) THEN
    ALTER TABLE user_sessions ADD COLUMN gender text;
    ALTER TABLE user_sessions ADD CONSTRAINT gender_valid_values
      CHECK (gender IN ('Male', 'Female', 'Other'));
  END IF;

  -- Add ai_experience column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_sessions' AND column_name = 'ai_experience'
  ) THEN
    ALTER TABLE user_sessions ADD COLUMN ai_experience text;
    ALTER TABLE user_sessions ADD CONSTRAINT ai_experience_valid_values
      CHECK (ai_experience IN ('Never', 'Rarely', 'Often', 'Very Often', 'Most of the Time'));
  END IF;

  -- Add moral_reasoning_experience column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_sessions' AND column_name = 'moral_reasoning_experience'
  ) THEN
    ALTER TABLE user_sessions ADD COLUMN moral_reasoning_experience text;
    ALTER TABLE user_sessions ADD CONSTRAINT moral_reasoning_experience_valid_values
      CHECK (moral_reasoning_experience IN ('Poor', 'Fair', 'Good', 'Very Good', 'Excellent'));
  END IF;
END $$;

-- Create an index on demographic fields for analysis queries
CREATE INDEX IF NOT EXISTS idx_user_sessions_demographics
  ON user_sessions(age, gender, ai_experience, moral_reasoning_experience);

-- Add helpful comment to the table
COMMENT ON COLUMN user_sessions.age IS 'User age (18-120)';
COMMENT ON COLUMN user_sessions.gender IS 'User gender: Male, Female, or Other';
COMMENT ON COLUMN user_sessions.ai_experience IS 'Experience with AI systems: Never, Rarely, Often, Very Often, or Most of the Time';
COMMENT ON COLUMN user_sessions.moral_reasoning_experience IS 'Experience with moral reasoning: Poor, Fair, Good, Very Good, or Excellent';
