import { OffCanvas } from "@components/admin"
import { FC } from "react"
export const Header: FC<{ pageName: string }> = ({ pageName }) => {
    return <>
        <section className="page-highlight d-flex justify-content-between ">
            <h2>{pageName}</h2>
            <div className="pt-2"> <OffCanvas /></div>
        </section>
    </>
}

