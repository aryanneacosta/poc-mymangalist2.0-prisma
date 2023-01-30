-- CreateEnum
CREATE TYPE "genre_type" AS ENUM ('shounen', 'shoujo', 'seinen', 'josei');

-- CreateEnum
CREATE TYPE "rating_type" AS ENUM ('empty', 'zero', 'one', 'two', 'three', 'four', 'five');

-- CreateEnum
CREATE TYPE "status_type" AS ENUM ('unread', 'reading', 'read');

-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "author" VARCHAR(50) NOT NULL,
    "genre" "genre_type" NOT NULL,
    "image" VARCHAR(500),

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volumes" (
    "id" SERIAL NOT NULL,
    "serie_id" INTEGER NOT NULL,
    "status" "status_type" NOT NULL DEFAULT 'unread',
    "image" VARCHAR(500),
    "read_chapters" INTEGER DEFAULT 0,
    "total_chapters" INTEGER NOT NULL,
    "rating" "rating_type" NOT NULL DEFAULT 'empty',
    "description" VARCHAR(500) NOT NULL DEFAULT 'empty',
    "number" INTEGER NOT NULL,

    CONSTRAINT "volumes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "volumes" ADD CONSTRAINT "volumes_serie_id_fkey" FOREIGN KEY ("serie_id") REFERENCES "series"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
