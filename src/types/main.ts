export type Fighter = {
    name: string,
    rank: number,
    imageUrl: string,
}

export type Fight = {
    name: string,
    hash: string,
    fighters: Fighter[],
}
