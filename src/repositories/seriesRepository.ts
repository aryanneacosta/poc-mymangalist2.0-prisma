import prisma from '../database/database.js';
import { NewSerie } from "../protocols/series.js";

async function findSeries(){
    const result = await prisma.series.findMany();
    return result;
}

async function insertNewSerie(serie: NewSerie) {
    const result = await prisma.series.create({
        data: {
            name: serie.name,
            author: serie.author,
            genre: serie.genre,
            image: serie.image
        }
    })
    
    return result;
}

async function filterSerie(genre) {
    const result = await prisma.series.findMany({
        where: {
            genre
        }
    });
    return result;
}

export {
    findSeries,
    insertNewSerie,
    filterSerie
}