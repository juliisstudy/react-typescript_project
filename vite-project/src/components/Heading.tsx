import { ReactElement } from "react"

type HeadingProps = {title:string} //define the type

const Heading=({title}:HeadingProps):ReactElement=>{ 
    return (
        <div>{title}</div>
    )
}
export default Heading