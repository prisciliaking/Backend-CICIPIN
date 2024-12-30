/*
  Warnings:

  - Added the required column `date` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reviews" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
