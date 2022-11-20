import { Piece } from "./../piece/piece.interface";

export interface Step {
    color: number,
    pieces: Piece[],
}