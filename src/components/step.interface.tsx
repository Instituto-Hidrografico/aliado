import { Piece } from "./piece.interface";

export interface Step {
    color: number,
    pieces: Piece[],
}