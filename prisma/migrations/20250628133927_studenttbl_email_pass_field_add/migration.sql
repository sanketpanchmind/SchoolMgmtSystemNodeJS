/*
  Warnings:

  - Added the required column `emailId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "emailId" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
