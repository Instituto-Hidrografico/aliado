import { ChangeEvent, useState } from "react"
import { fieldInitial } from "./field/field.initial"
import { dice } from "../service/dice"
import { playerInitial } from "./player/player.initial"
import { FieldShow } from "../containers/field/field.show"

export const GameList = () => {
    const [field, setField] = useState(fieldInitial)
    const [player, setPlayer] = useState(playerInitial/*[playerInitial]*/)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setField({ ...field, [event.target.name]: event.target.value }) }

    const handleChangePlayerPiece = () => {
        setPlayer({ ...player, piece: { position: player.piece.position + dice(6)} })
    }
    return (
        <>
            <button color="primary" onClick={handleChangePlayerPiece}>Roll</button>
            <FieldShow name={player.name} piece={player.piece}/>
            <> x </>{JSON.stringify(player.piece.position)}
        </>
    )
}