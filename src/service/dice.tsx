export const dice = (sides: number): number => {
    return Math.floor(Math.random() * sides) + 1;
}