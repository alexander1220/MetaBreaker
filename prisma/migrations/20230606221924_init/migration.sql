-- CreateEnum
CREATE TYPE "bug_types" AS ENUM ('bug', 'suggestion');

-- CreateTable
CREATE TABLE "bug_reports" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bug_type" "bug_types" NOT NULL,
    "description" VARCHAR(2000) NOT NULL,

    CONSTRAINT "bug_reports_pkey" PRIMARY KEY ("id")
);
