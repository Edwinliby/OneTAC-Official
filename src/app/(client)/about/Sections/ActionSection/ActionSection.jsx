import Marquee from "react-fast-marquee"
import RandomBlock from "./randomBlock"

export default function ActionSection() {
    return (
        <Marquee>
            <RandomBlock />
            <RandomBlock />
        </Marquee>
    )
}