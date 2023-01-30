import prisma from '../database/database.js';
import { NewVolumeToDB, UpdateVolumeToDB, FisinhedVolumeToDB } from "../protocols/volumes.js";

async function findVolumes() {
    const result = await prisma.volumes.findMany();
    return result;
}

async function findSerie(serie) {
    const result = await prisma.series.findFirst({
        where: {
            name: serie
        }
    });
    return result;
}

async function insertNewVolume(volume: NewVolumeToDB) {
    const result = await prisma.volumes.create({
        data: {
            serie_id: volume.serie_id,
            number: volume.number,
            image: volume.image,
            total_chapters: volume.total_chapters
        },
    });
    return result;
}

async function findVolume(serie_id, volume) {
    const result = await prisma.volumes.findFirst({
        where: {
                serie_id: serie_id,
                number: volume
        }
    });
    return result;
}

async function updateVolume(volume: UpdateVolumeToDB) {
    const result = await prisma.volumes.update({
        where: {
            id: volume.id
        },
        data: {
            status: volume.status,
            read_chapters: volume.read_chapters
        }
    });
    return result;
}

async function finishVolume(volume: FisinhedVolumeToDB) {
    const result = await prisma.volumes.update({
        where: {
            id: volume.id
        }, 
        data: {
            status: volume.status,
            read_chapters: volume.read_chapters,
            rating: volume.rating,
            description: volume.description
        }
    })
    return result;
}

async function deleteVolume(id: number) {
    const result = await prisma.volumes.delete({
        where: {
            id
        }
    })
    return result;
}

export {
    findVolumes,
    findSerie,
    insertNewVolume,
    findVolume,
    updateVolume,
    finishVolume,
    deleteVolume
}