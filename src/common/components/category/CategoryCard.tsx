import Link from "next/link"

export const CategoryCard = () =>{
    return (
        <>
            <div className="col-6 col-md-4 p-2">     
                <div className="card">
                     <img src="/suit.jpg" className="card-img-top" alt="..."/>
                     <div className="card-body">
                        <Link href='£' legacyBehavior>
                           <a className="stretched-link text-decoration-none text-dark">
                            <p className="card-text fw-bold">Suits</p>
                           </a>
                        </Link>
                     </div>
                     </div>
               </div>
        </>
    )
}
