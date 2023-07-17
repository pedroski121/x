import Image from "next/image"

export const WishListItems = () =>{
    return <>
         <ul className="list-group">
              <li style={{whiteSpace: "nowrap", height:"150px"}} className={`list-group-item overflow-auto border border-secondary rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                  <div className={` d-flex flex-row ` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/face.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>15 Inch AMD RYZEN™ 3 - 2.6GHz - 3.5GHz- <br/> <span className="badge bg-success p-2 mt-2">AVAILABLE</span>     
 </p> 
      
                        </div>                    
      
                    </div>
                    <div  className=" d-flex justify-content-between flex-column m-2">
                            <button className="btn btn-dark rounded-0">See Details</button>
                            <button className="btn btn-outline-danger py-1 rounded-0">Remove</button>
                    </div>
              </li>
              <li style={{whiteSpace: "nowrap", height:"150px"}} className={`list-group-item overflow-auto border border-secondary rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                  <div className={` d-flex flex-row ` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/child.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>Polo for Kids<br/> <span className="badge bg-danger p-2 mt-2">NOT AVAILABLE</span>     
 </p> 
      
                        </div>                    
      
                    </div>
                    <div  className=" d-flex justify-content-between flex-column m-2">
                            <button className="btn btn-dark rounded-0">See Details</button>
                            <button className="btn btn-outline-danger py-1 rounded-0">Remove</button>
                    </div>
              </li>
              <li style={{whiteSpace: "nowrap", height:"150px"}} className={`list-group-item overflow-auto border border-secondary rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                  <div className={` d-flex flex-row ` }>
                        <div style={{height:"100%", width:"140px", position:"relative"}}>
                         <Image src='/women/gelle.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                         </div>

                            <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>Woman Gelle <br/> <span className="badge bg-danger p-2 mt-2">NOT AVAILABLE</span>     
 </p> 
      
                        </div>                    
      
                    </div>
                    <div  className=" d-flex justify-content-between flex-column m-2">
                            <button className="btn btn-dark rounded-0">See Details</button>
                            <button className="btn btn-outline-danger py-1 rounded-0">Remove</button>
                    </div>
              </li>
           </ul>
    </>
}