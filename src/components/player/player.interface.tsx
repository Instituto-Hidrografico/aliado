import { Piece } from "./../piece/piece.interface";

export interface Player {
    name: string,
    pieces: [Piece, Piece, Piece, Piece],
}