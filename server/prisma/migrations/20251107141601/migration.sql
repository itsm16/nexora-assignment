/*
  Warnings:

  - You are about to drop the column `total` on the `Receipt` table. All the data in the column will be lost.
  - Added the required column `price` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Receipt` DROP COLUMN `total`,
    ADD COLUMN `price` DOUBLE NOT NULL;
