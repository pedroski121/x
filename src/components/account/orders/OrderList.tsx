import Image from "next/image"
import OrdersCss from './Orders.module.css'

export const OrderList = () =>{
    return( <>
            <ul className="list-group">
              <li style={{whiteSpace: "nowrap"}} className={`list-group-item overflow-auto border border-secondary  rounded-0 p-0 mb-3 d-flex flex-row justify-content-between  ${OrdersCss.listGroupItem}`}>
                  <div className={` d-flex flex-row` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/face.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>15 Inch AMD RYZEN™ 3 - 2.6GHz - 3.5GHz- <br/>
                            <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                            <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                        
                        </div>                    

                    </div>
                    <div className="d-none d-md-block" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                    </div>
              </li>
              <li style={{whiteSpace: "nowrap"}} className={`list-group-item overflow-auto border border-secondary  rounded-0 p-0 mb-3 d-flex flex-row justify-content-between  ${OrdersCss.listGroupItem}`}>
                  <div className={` d-flex flex-row` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/child.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>The Child of Olds<br/>
                            <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                            <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                        
                        </div>                    

                    </div>
                    <div className="d-none d-md-block" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                    </div>
              </li>
              <li style={{whiteSpace: "nowrap"}} className={`list-group-item overflow-auto border border-secondary  rounded-0 p-0 mb-3 d-flex flex-row justify-content-between  ${OrdersCss.listGroupItem}`}>
                  <div className={` d-flex flex-row` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/suit.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>Looking dope on suit <br/>
                            <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                            <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                        
                        </div>                    

                    </div>
                    <div className="d-none d-md-block" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                    </div>
              </li>
              <li style={{whiteSpace: "nowrap"}} className={`list-group-item overflow-auto border border-secondary  rounded-0 p-0 mb-3 d-flex flex-row justify-content-between  ${OrdersCss.listGroupItem}`}>
                  <div className={` d-flex flex-row` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/african-women.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>The African Woman <br/>
                            <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                            <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                        
                        </div>                    

                    </div>
                    <div className="d-none d-md-block" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                    </div>
              </li>
              <li style={{whiteSpace: "nowrap"}} className={`list-group-item overflow-auto border border-secondary  rounded-0 p-0 mb-3 d-flex flex-row justify-content-between  ${OrdersCss.listGroupItem}`}>
                  <div className={` d-flex flex-row` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/cover1.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>Cover of a Star <br/>
                            <span className="text-secondary" style={{fontSize:'13px', fontStyle:'italic'}}>Order - 0000000</span></p>
                            <p><span className="badge bg-warning">pending</span> <br/> On 15-07-2023</p>
                        
                        </div>                    

                    </div>
                    <div className="d-none d-md-block" style={{width:"150px"}}>
                            <button className="btn btn-outline-dark py-1 mt-3 rounded-0">See Details</button>
                    </div>
              </li>
           </ul>
    </>)
}