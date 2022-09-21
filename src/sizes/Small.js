import { useContext } from "react";
import "./Small.css";
import ProductContext from "../context/ProductContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


import { CardActionArea } from "@mui/material";

function Small({ items }) {

  const { count, setCount, basket, setBasket, searchTerm} = useContext(ProductContext);

  const handleSubmit = (item) => {

    const findItemByid = basket.find(Object => {
      return Object.id === item.id
    })

    if (!findItemByid ) {
     setBasket([...basket, {...item,qty:1}]);

    }else{
      findItemByid.qty++
      setBasket([...basket])
    }

    setCount(count + 1);
    
    console.log(setBasket)
};
console.log("basket1", basket);

  return (
    <div className="small">
      <div className="smallList">
      
        {items

 ?.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            // return console.log("mmm")
            return false;
          })
          ?.map((item, i) => (
            <div className="size" key={i}  >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    style={{ width: "200px",  height: "140px" }}
                    src={item?.pictures?.imageURL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item?.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      <strong> R{item?.small}</strong>
                    </Typography>
                    <input type="submit" value="add to cart" onClick={() => handleSubmit(item)} />
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Small;
