import { OffCanvas } from "@components/admin"
import { FC, ReactNode } from "react"
export const Header: FC<{ pageName: string}> = ({ pageName }) => {
    return <>
        <section className="page-highlight d-flex justify-content-between ">
            <h2 className="display-6">{pageName}</h2>
            <div className="pt-2"> <OffCanvas /></div>
        </section>
    </>
}

