import { useContext } from "react";
import "./Small.css";
import ProductContext from "../context/ProductContext";

function Small({items}) {
  const { searchTerm } = useContext(ProductContext);

  return (
    <div className="small">

    <div className="smallList">
    {items
                ?.filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                    // return console.log("mmm")
                    return false;
                })
                ?.map((x, i) => (
                    <div className="size"  key={i}> 
                        <div >
                            <img style={{ width: "200px", padding: "20px" }} src={x?.photo?.url} className="card-img-top  " alt="" />
                           
                        </div >

                        <div  className="card-body me-auto">
                          
                                <p id="cardTitle" className="card-title ">
                                    {(x?.name)}
                                </p>
                           
                            <strong>{(x?.small)}</strong>
                        </div>
                       
                    </div>
                ))}


    </div>
    
  </div>
  )
}

export default Small