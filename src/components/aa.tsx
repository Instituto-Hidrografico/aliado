import { ChangeEvent, useState } from "react"
import { playerInitial } from "./player/player.initial"
import { pieceInitial } from "./piece/piece.initial"
import { fieldInitial } from "./field/field.initial"
import { dice } from "../service/dice"
import { FieldShow } from "../containers/field/field.show"
import { Piece } from "./piece/piece.interface"

export const AA = () => {
    const [player, setPlayer] = useState(playerInitial)
    const [roll, setRoll] = useState(0)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setPlayer({ ...player, [event.target.name]: event.target.value }) }
    const step = (index: number) => {
        let arr = player.pieces
        arr.splice(index, 1, { position: player.pieces[index].position + roll})
        setPlayer({ name:"12", pieces: arr })
    }
    const rollDice = () => {
        setRoll(dice(6))
    }

    return(
        <>
            <button color="one" onClick={rollDice}>{roll} Roll</button>
            <button color="secondary" onClick={()=>step(0)}>{player.pieces[0].position} Step P1</button>
            <button color="secondary" onClick={()=>step(1)}>{player.pieces[1].position} Step P2</button>
            <button color="secondary" onClick={()=>step(2)}>{player.pieces[2].position} Step P3</button>
            <button color="secondary" onClick={()=>step(3)}>{player.pieces[3].position} Step P4</button>
            {JSON.stringify(player.pieces[0].position)}
            {JSON.stringify(player.pieces[1].position)}
            {JSON.stringify(player.pieces[2].position)}
            {JSON.stringify(player.pieces[3].position)}
            {/* <FieldShow name={player.name} piece={player.piece}/> */}
        </>
    )
}