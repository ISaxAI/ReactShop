import {useContext} from "react";
import {ShopContext} from "../context";

function GoodsItem(props) {
    const {
        offerId,
        displayName,
        displayDescription,
        price: { regularPrice },
        displayAssets: [{ full_background }],
    } = props;
    const {addToBasket} = useContext(ShopContext)
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={`Картинка ${displayName}`}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>
                    {displayDescription}
                </p>
            </div>
            <div className="card-action">
                <button className='btn blue lighten-3' onClick={()=>(addToBasket({offerId, displayName, regularPrice}))}>Купить</button>
                <span className='right '>{regularPrice} руб.</span>
            </div>
        </div>)
}
export {GoodsItem}