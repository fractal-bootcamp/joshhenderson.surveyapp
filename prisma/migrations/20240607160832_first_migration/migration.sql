-- CreateTable
CREATE TABLE "Survey" (
    "ID" INTEGER NOT NULL,
    "Title" TEXT NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Question" (
    "ID" INTEGER NOT NULL,
    "Body" TEXT NOT NULL,
    "surveyID" INTEGER,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Answer" (
    "ID" INTEGER NOT NULL,
    "Body" TEXT NOT NULL,
    "questionID" INTEGER,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_surveyID_fkey" FOREIGN KEY ("surveyID") REFERENCES "Survey"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionID_fkey" FOREIGN KEY ("questionID") REFERENCES "Question"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
