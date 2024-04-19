import { useContext, useState } from "react";
import { CountControlContext } from "../../../App";
import { ThemeModeContext } from "../../../App";
import "./style.css";

function Food_item(attrs:{
    foodName: string;
    description: string;
    foodImage: any;
    price: number;
    count: number;
}){

    let foodAvailablityClass = "available";
    const [foodCount, setFoodCount] = useState(attrs.count);
    if (foodCount === 0){
        foodAvailablityClass = "unavailable";
    }
    const themeMode = useContext(ThemeModeContext);
    const mode = useContext(CountControlContext);
    const handleScreenClick = () => {
        if (mode > 0  && foodCount < attrs.count){
            setFoodCount(foodCount + 1)
        }
        else if(mode < 0 && foodCount > 0){
            setFoodCount(foodCount - 1)
        }
        console.log(foodCount);
    }
    return(
        <article className={"food-article-" + themeMode + " " + foodAvailablityClass} onClick={handleScreenClick}>
            <img className={"article-food-image-" + themeMode} src={attrs.foodImage} alt={attrs.foodName} />
            <div className="article-desc">
                <h3 className={"article-food-name-" + themeMode}>{attrs.foodName}</h3>
                <p className={"article-food-description-" + themeMode}>{attrs.description}</p>
                <span className={"article-food-price-" + themeMode}>{attrs.price}</span>
            </div>
            {foodCount < 0 && <span className={"article-food-count-" + themeMode}> &infin; </span>}
            {foodCount > 0 && <span className={"article-food-count-" + themeMode}>{foodCount}</span>}
        </article>
    );
}
export default Food_item;