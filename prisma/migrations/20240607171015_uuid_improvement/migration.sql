/*
  Warnings:

  - The primary key for the `Answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Survey` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionID_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_surveyID_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_pkey",
ALTER COLUMN "ID" SET DATA TYPE TEXT,
ALTER COLUMN "questionID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Answer_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "Question" DROP CONSTRAINT "Question_pkey",
ALTER COLUMN "ID" SET DATA TYPE TEXT,
ALTER COLUMN "surveyID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_pkey",
ALTER COLUMN "ID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Survey_pkey" PRIMARY KEY ("ID");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_surveyID_fkey" FOREIGN KEY ("surveyID") REFERENCES "Survey"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionID_fkey" FOREIGN KEY ("questionID") REFERENCES "Question"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
