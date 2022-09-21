import React, { useContext} from "react";
import ProductContext from "../context/ProductContext";

function SearchBar() {
  const {setSearchTerm} = useContext(ProductContext)
  
  const handleChange =(e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
  }
  return (
    <>
    <form>
<label>
  <input onChange={handleChange} type="text" name="name" />
</label>

</form>
    </>
  );
}

export default SearchBar;

