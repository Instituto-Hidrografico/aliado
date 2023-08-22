import { Player } from "./player.interface";
import { pieceInitial } from "../piece/piece.initial";

export const playerInitial : Player = {
    name: "",
    pieces: [pieceInitial, pieceInitial, pieceInitial, pieceInitial],
}