export type Fighter = {
    id: string,
    name: string,
    rank?: number | undefined,
    imageUrl: string,
    fightId: string,
}

export type Fight = {
    id: string,
    started: boolean | null,
    fighters: Fighter[],
}
