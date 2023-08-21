import { Piece } from "./../piece/piece.interface";

export interface Player {
    name: string,
    piece: [Piece, Piece, Piece, Piece],
}