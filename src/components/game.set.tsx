import { ChangeEvent, useState } from "react"
import { fieldInitial } from "./field/field.initial"
import { dice } from "../service/dice"
import { playerInitial } from "./player/player.initial"
import { FieldShow } from "../containers/field/field.show"

export const GameSet = () => {
    const [player, setPlayer] = useState(playerInitial)
    const [roll, setRoll] = useState(0)
    const [able, setAble] = useState(true)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setPlayer({ ...player, [event.target.name]: event.target.value }) }
    const step = (index: number) => {
        let array = player.pieces
        array.splice(index, 1, { position: player.pieces[index].position + roll})
        setPlayer({ name:"12", pieces: array })
        setRoll(0)
        setAble(!able)
    }
    const rollDice = () => {
        setRoll(dice(6))
        setAble(!able)
    }

    return(
        <>
            <button disabled={!able} color="one" onClick={rollDice}>{roll} Roll</button>
            <button disabled={able} color="secondary" onClick={()=>step(0)}>{player.pieces[0].position} Step P1</button>
            <button disabled={able} color="secondary" onClick={()=>step(1)}>{player.pieces[1].position} Step P2</button>
            <button disabled={able} color="secondary" onClick={()=>step(2)}>{player.pieces[2].position} Step P3</button>
            <button disabled={able} color="secondary" onClick={()=>step(3)}>{player.pieces[3].position} Step P4</button>
            {JSON.stringify(player.pieces[0].position)}
            {JSON.stringify(player.pieces[1].position)}
            {JSON.stringify(player.pieces[2].position)}
            {JSON.stringify(player.pieces[3].position)}
            <FieldShow name={player.name} pieces={player.pieces}/>
        </>
    )
}