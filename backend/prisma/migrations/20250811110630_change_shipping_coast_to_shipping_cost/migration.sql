/*
  Warnings:

  - You are about to drop the column `shippingCoast` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "shippingCoast",
ADD COLUMN     "shippingCost" DOUBLE PRECISION NOT NULL DEFAULT 0;
