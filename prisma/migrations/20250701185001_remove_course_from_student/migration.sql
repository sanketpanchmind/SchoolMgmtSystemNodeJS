/*
  Warnings:

  - You are about to drop the column `courseId` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_courseId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "courseId",
ADD COLUMN     "courseCourse_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_courseCourse_id_fkey" FOREIGN KEY ("courseCourse_id") REFERENCES "Course"("course_id") ON DELETE SET NULL ON UPDATE CASCADE;
