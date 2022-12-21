import { useState } from "react"
import { Field } from "./field"
import { fieldInitial } from "../../components/field/field.initial"
import { Player } from "../../components/player/player.interface"
import { Player as PP } from "../Player"

export const FieldShow = (player: Player) => {
    const [field, setField] = useState(fieldInitial)
    let count: number = 0
    const color = (index: number): any => {
        let color:any = "one"
        switch(index){
            case 1: {
                color = "one"
                break
            }
            case 2: {
                color = "two"
                break
            }
            case 3: {
                color = "three"
                break
            }
            case 4: {
                color = "four"
                break
            }
            case 5: {
                color = "five"
                break
            }
            case 6: {
                color = "six"
                break
            }
        }
        return color
    }
    return (
        <>
            {field.step.map((element, index) => {
                if(index%6){
                    count++
                } else {
                    count = 0
                }
                return  <Field position={color(count+1)}>
                            {player.piece.position == index && <PP team="two"/>}
                        </Field>
            })}
        </>
    )
}