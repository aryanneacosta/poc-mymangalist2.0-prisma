export type SerieEntity = {
    id: number,
    name: string,
    author: string,
    genre: any,
    image: string
}

export type NewSerie = Omit<SerieEntity, "id">