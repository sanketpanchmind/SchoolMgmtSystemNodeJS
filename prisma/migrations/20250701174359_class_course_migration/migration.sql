/*
  Warnings:

  - You are about to drop the column `course_id` on the `Class` table. All the data in the column will be lost.
  - Added the required column `class_id` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_course_id_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "course_id";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "class_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;
