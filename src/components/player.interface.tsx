import { Piece } from "./piece.interface";

export interface Player {
    name: string,
    piece: Piece[],
}