export type Fighter = {
    name: string,
    rank?: number | undefined,
    imageUrl: string,
    fightId: string,
}

export type Fight = {
    id: string,
    fighters: Fighter[],
}
