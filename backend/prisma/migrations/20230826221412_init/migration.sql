-- AlterTable
ALTER TABLE `Category` MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `Question` MODIFY `detailNote` LONGTEXT NOT NULL,
    MODIFY `explanation` LONGTEXT NOT NULL;
