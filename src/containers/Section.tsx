import { stitches } from "./globalStyles";

const { styled } = stitches;

export const Section = styled('section',{
    display: "flex",
    backgroundColor: "$letterColor",
})
export const Article = styled('article',{
    backgroundColor: "$squareBottom",
    margin: "10px",
    padding: "20px",
    fontSize: "30px",
})