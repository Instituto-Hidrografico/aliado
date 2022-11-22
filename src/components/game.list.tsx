import { ChangeEvent, useState } from "react"
import { fieldInitial } from "./field/field.initial"
import { dice } from "../service/dice"
import { playerInitial } from "./player/player.initial"
import { FieldShow } from "../containers/field/field.show"
import { Button } from "../containers/button"

export const GameList = () => {
    const [field, setField] = useState(fieldInitial)
    const [player, setPlayer] = useState(playerInitial/*[playerInitial]*/)
    const [dice1, setDice] = useState(0)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setField({ ...field, [event.target.name]: event.target.value }) }

    const step = () => {
        setPlayer({ ...player, piece: { position: player.piece.position + dice1} })
    }
    const rollDice = () => {
        setDice(dice(6))
    }
    return (
        <>
            <Button color="one" onClick={rollDice}>{dice1} Roll</Button>
            <button color="secondary" onClick={step}>{player.piece.position} Step</button>
            <FieldShow name={player.name} piece={player.piece}/>
        </>
    )
}