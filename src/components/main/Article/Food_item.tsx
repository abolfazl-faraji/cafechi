import { spawn } from "child_process";
import "./style.css";
function Food_item(attrs: {foodName: string; description: string; foodImage: any; price: number; count: number;}){
    let foodAvailablityClass = "available";
    let CountSpan = <span className="article-food-count">{attrs.count}</span>;
    if (attrs.count === 0){
        foodAvailablityClass = "unavailable";
        CountSpan = <></>;
    }
    if(attrs.count<0){
        CountSpan = <span className="article-food-count"> &infin; </span>
    }
    return(
        <article className={"food-article " + foodAvailablityClass}>
            <img className="article-food-image" src={attrs.foodImage} alt={attrs.foodName} />
            <div className="article-desc">
            <h3 className="article-food-name">{attrs.foodName}</h3>
            <p className="article-food-description">{attrs.description}</p>
            <span className="article-food-price">{attrs.price}</span>
            </div>
            {CountSpan}
        </article>
    );
}
export default Food_item;