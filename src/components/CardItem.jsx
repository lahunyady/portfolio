import React from 'react'
import './CardItem.css';

function CardItem(props) {
    return (
        <div>
            <div className="card">
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travel" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <p className="cards__item_text">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardItem
