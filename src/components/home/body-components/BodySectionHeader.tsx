import { ReactElement } from "react"
import { TiltPrism } from "@utils/font"
import { FC } from "react"



export const BodySectionHeader: FC<{ text: string }> = ({ text }): ReactElement => {
    return <section className="d-flex flex-row justify-content-between border border-secondary rounded-2 pe-4">
        <h1 className={`${TiltPrism.className} fw-bold`}>{text}</h1>
    </section>
}