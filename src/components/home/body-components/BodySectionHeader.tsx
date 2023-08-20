import { ReactElement } from "react"
import { TiltPrism } from "@utils/font"
import { FC } from "react"
import Link from "next/link"

export const BodySectionHeader: FC<{ text: string, page?: string, navigateTo: string }> = ({ text, page, navigateTo }): ReactElement => {
    return <section className="d-flex flex-row justify-content-between border border-secondary rounded-2 pe-4">
        <h1 className={`${TiltPrism.className} fw-bold ${page === 'category' ? 'px-2' : 'px-0'}`}>{text}</h1>
        <div className="d-flex flex-column justify-content-center">
            <Link href={navigateTo}>
                <button className="btn btn-outline-dark rounded-5  border-0 m-0 p-0 px-1 py-1" >
                    <i className="bi bi-arrow-right fw-bold"></i>
                </button>
            </Link>
        </div>
    </section>
}