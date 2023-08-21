import { ChangeEvent, useState } from "react"
import { playerInitial } from "./player/player.initial"
import { pieceInitial } from "./piece/piece.initial"
import { fieldInitial } from "./field/field.initial"
import { dice } from "../service/dice"
import { FieldShow } from "../containers/field/field.show"

export const AA = () => {
    const [player, setPlayer] = useState(playerInitial)
    const [roll, setRoll] = useState(0)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setPlayer({ ...player, [event.target.name]: event.target.value }) }
    const step = () => {
        setPlayer({...player, 
            piece=>({...piece, [0]: 23
        }) })
        console.log(player.piece[0].position)
    }
    const rollDice = () => {
        setRoll(dice(6))
    }

    return(
        <>
            <button color="one" onClick={rollDice}>{roll} Roll</button>
            <button color="secondary" onClick={step}>{player.piece[0].position} Step</button>
            {JSON.stringify(player.piece[0].position)}
            {JSON.stringify(player.piece[1].position)}
            {JSON.stringify(player.piece[2].position)}
            {JSON.stringify(player.piece[3].position)}
            {/* <FieldShow name={player.name} piece={player.piece}/> */}
        </>
    )
}