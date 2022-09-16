import { useContext } from "react";
import "./Small.css";
import ProductContext from "../context/ProductContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Small({ items }) {

  const { product, count, setCount, basket, setBasket, searchTerm} = useContext(ProductContext);

  const handleSubmit = () => {
    setCount(count + 1);
    setBasket([...basket, product]);
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
            <div className="size" key={i} onClick={() => handleSubmit()} >
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
