import { useState } from "react";
import "./style.css";
function Food_item(attrs: {foodName: string; description: string; foodImage: any; price: number; count: number; mode:string;}){
    let foodAvailablityClass = "available";
    let mode = attrs.mode;
    const [foodCount, setFoodCount] = useState(attrs.count);
    if (foodCount === 0){
        foodAvailablityClass = "unavailable";
    }
    const handleScreenClick = () => {
        if (mode === 'increase' && foodCount < attrs.count){
            setFoodCount(foodCount + 1)
        }
        else if(mode==='decrease' && foodCount > 0){
            setFoodCount(foodCount - 1)
        }
        console.log(foodCount);
    }
    return(
        <article className={"food-article " + foodAvailablityClass} onClick={handleScreenClick}>
            <img className="article-food-image" src={attrs.foodImage} alt={attrs.foodName} />
            <div className="article-desc">
                <h3 className="article-food-name">{attrs.foodName}</h3>
                <p className="article-food-description">{attrs.description}</p>
                <span className="article-food-price">{attrs.price}</span>
            </div>
            {attrs.count < 0 && <span className="article-food-count"> &infin; </span>}
            {attrs.count > 0 && <span className="article-food-count">{foodCount}</span>}
        </article>
    );
}
export default Food_item;