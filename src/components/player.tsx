import { ChangeEvent, useState } from "react"
import { Button } from "../containers/button"
import { playerInitial } from "./player.initial"

export const PlayerList = () => {
    const [player, setPlayer] = useState(playerInitial)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setPlayer({ ...player, [event.target.name]: event.target.value }) }
    return (<>
        <Button>ENVIAR {player.name}</Button>
    </>)
}


