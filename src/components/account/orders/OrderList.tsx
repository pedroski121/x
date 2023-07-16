import Image from "next/image"

export const OrderList = () =>{
    return( <>
                     <div style={{height:"65vh", overflowY:'scroll', overflowX:'hidden'}}>
            <ul className="list-group gap-3 ">
              <li className="list-group-item border border-secondary overflow-auto rounded-0 p-0 m-0 d-flex flex-row justify-content-between">
                    <div className=" d-flex flex-row">
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/face.jpg' style={{ objectFit: "contain" }} alt="An item in the bag image" fill />
                         </div>
                         <div className=" text-center text-md-start px-3 ">
                        <p className={`fw-bold `}>15 Inch AMD RYZEN™ 3 - 2.6GHz - 3.5GHz- <br/>
                        <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                        <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                     
                    </div>
                    </div>

                    <div className="" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                          </div>
              </li>
              <li className="list-group-item border border-secondary overflow-auto rounded-0 p-0 m-0 d-flex flex-row justify-content-between">
                    <div className=" d-flex flex-row">
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/okirika.jpg' style={{ objectFit: "contain" }} alt="An item in the bag image" fill />
                         </div>
                         <div className=" text-center text-md-start px-3 ">
                        <p className="fw-bold">My Face is Beautiful <br/>
                        <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                        <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                     
                    </div>
                    </div>

                    <div className="" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                          </div>
              </li>
              <li className="list-group-item border border-secondary overflow-auto rounded-0 p-0 m-0 d-flex flex-row justify-content-between">
                    <div className=" d-flex flex-row">
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/suit.jpg' style={{ objectFit: "contain" }} alt="An item in the bag image" fill />
                         </div>
                         <div className=" text-center text-md-start px-3 ">
                        <p className="fw-bold">Doper Suit. Looks Good <br/>
                        <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                        <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                     
                    </div>
                    </div>

                    <div className="" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                          </div>
              </li>
              <li className="list-group-item border border-secondary overflow-auto rounded-0 p-0 m-0 d-flex flex-row justify-content-between">
                    <div className=" d-flex flex-row">
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/face.jpg' style={{ objectFit: "contain" }} alt="An item in the bag image" fill />
                         </div>
                         <div className=" text-center text-md-start px-3 ">
                        <p className="fw-bold">Need to try On <br/>
                        <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                        <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                     
                    </div>
                    </div>

                    <div  style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                          </div>
              </li>
           </ul>
           </div>
    </>)
}