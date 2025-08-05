-- CreateEnum
CREATE TYPE "FeeStatus" AS ENUM ('paid', 'pending', 'overdue', 'cancelled', 'partially_paid');

-- CreateTable
CREATE TABLE "Feestbl" (
    "fee_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "payment_date" TIMESTAMP(3),
    "due_date" TIMESTAMP(3) NOT NULL,
    "payment_method" TEXT,
    "status" "FeeStatus" NOT NULL,
    "academic_year" TEXT NOT NULL,
    "semester" TEXT,
    "description" TEXT,
    "receipt_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feestbl_pkey" PRIMARY KEY ("fee_id")
);

-- AddForeignKey
ALTER TABLE "Feestbl" ADD CONSTRAINT "Feestbl_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feestbl" ADD CONSTRAINT "Feestbl_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;
