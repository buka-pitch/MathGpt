-- DropIndex
DROP INDEX `Category_id_key` ON `Category`;

-- DropIndex
DROP INDEX `Question_id_key` ON `Question`;

-- AlterTable
ALTER TABLE `Question` MODIFY `answer` TEXT NOT NULL,
    MODIFY `calculation` TEXT NOT NULL;
