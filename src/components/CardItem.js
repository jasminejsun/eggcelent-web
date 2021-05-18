import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li class className='cards__item'>
                <Link 
                className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap'>
                        <img src={props.src} alt='Boiled egg option'
                        className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem