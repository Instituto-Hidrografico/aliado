import { ChangeEvent, useState } from "react"
import { Button } from "../containers/button"
import { Field } from "../containers/field"
import { fieldInitial } from "./field.initial"
import { pieceInitial } from "./piece.initial"
import { Piece as PieceInterface } from "./piece.interface"

export const FieldList = () => {
    const [field, setField] = useState(fieldInitial)
    const [piece, setPiece] = useState(pieceInitial)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setField({ ...field, [event.target.name]: event.target.value }) }
    const dice = (sides: number): number => {
        return Math.floor(Math.random() * sides) + 1;
    }
    const handleChangePiece = (sides: number) => {
        setPiece({ ...piece, position: dice(6) })
    }
    const maping = () => {
        field?.piece.map(item => {
            return <Field position="one">item</Field>
        })
    }
    const value = (position: number): PieceInterface => {
        return pieceInitial
    }
    return (
        <>
            {/* {maping()} */}
            {JSON.stringify(piece.position)}
            {field?.piece.map(item => {
                <Field position="one">item.position</Field>
            })}
            {/* <Field position="one">{JSON.stringify(field.piece)}</Field> */}
            <Field position="two">{JSON.stringify(field.piece)}</Field>
            <Field position="three"></Field>
            <Field position="four"></Field>
            <Field position="five"></Field>
            <Field position="six"></Field>
            {/* <button onClick={() => handleChangePiece("er")} name="dice">Dice</button> */}
            <button color="secondary" onClick={() => handleChangePiece(7)} data-bs-toggle="modal">Roll</button>
            {/* <button color="warning" onClick={() => handleChangePiece(7)} data-bs-toggle="modal">Roll</button> */}
        </>
    )
}