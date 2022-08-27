import { ChangeEvent, useState } from "react"
import { Button } from "../containers/button"
import { Input } from "../containers/input"

const playerOne = {name:""}


export const Player = () => {
    const [player,setPlayer] = useState(playerOne)
    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>  { setPlayer({...player,[event.target.name]:event.target.value}) } 
    return(<>
    {/* <input onChange={handleChange} value={player.name} type="text" name="name" /> */}
    <Input onChange={handleChange} value={player.name} type="text" name="name" />
    <Button>ENVIAR</Button>
    {JSON.stringify(player.name)}
    </>)
}


