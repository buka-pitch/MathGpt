/*
  Warnings:

  - Added the required column `answer` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calculation` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detailNote` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `explanation` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Question` ADD COLUMN `answer` VARCHAR(191) NOT NULL,
    ADD COLUMN `calculation` VARCHAR(191) NOT NULL,
    ADD COLUMN `detailNote` VARCHAR(191) NOT NULL,
    ADD COLUMN `explanation` VARCHAR(191) NOT NULL;
