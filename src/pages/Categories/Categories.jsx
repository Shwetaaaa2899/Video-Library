import { categories } from "../../db/categories-db"
import "./Category.css"
import {Link} from "react-router-dom"
export  const Category = () =>{
    return <div className = "main-wrapper">


        
        {
            categories.length > 0 &&
            categories.map((item)=><div  className = "card" key = {item._id}>
             <Link to = {`/category/${item.category}`}>
<img src = {item.thumbnail} />
<h4>{item.category}</h4>

</Link>
            </div>) 
    
        }
 

    </div>
}