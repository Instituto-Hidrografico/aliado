import { ChangeEvent, useState } from "react"
import { fieldInitial } from "./field/field.initial"
import { dice } from "../service/dice"
import { playerInitial } from "./player/player.initial"
import { FieldShow } from "../containers/field/field.show"

export const GameList = () => {
    const [field, setField] = useState(fieldInitial)
    const [player, setPlayer] = useState(playerInitial)
    const [roll, setRoll] = useState(0)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setField({ ...field, [event.target.name]: event.target.value }) }

    const step = () => {
        setPlayer({ ...player, player.piece[0].position: { position: player.piece[0].position + roll} })
    }
    const rollDice = () => {
        setRoll(dice(6))
    }
    return (
        <>
            <button color="one" onClick={rollDice}>{roll} Roll</button>
            <button color="secondary" onClick={step}>{player.piece[0].position} Step</button>
            <FieldShow name={playerInitial.name} piece={playerInitial.piece}/>
        </>
    )
}