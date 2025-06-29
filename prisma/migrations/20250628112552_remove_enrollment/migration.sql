/*
  Warnings:

  - You are about to drop the `Enrollment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `enrollment_date` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_class_id_fkey";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_stud_id_fkey";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "enrollment_date" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Enrollment";
