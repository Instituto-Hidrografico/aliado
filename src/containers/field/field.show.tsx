import { useState } from "react"
import { Field } from "./field"
import { fieldInitial } from "../../components/field/field.initial"
import { Player } from "../../components/player/player.interface"

export const FieldShow = (player: Player) => {
    const [field, setField] = useState(fieldInitial)
    const colo: any = "five"
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
                if(count<5){
                    count++
                } else {
                    count = 0
                }
                return  <Field position={color(index)}>
                            {player.piece.position == index && player.name}
                            {/* {index < 6 ? count+index: count}      */}
                            {count}
                        </Field>
            })}
        </>
    )
}