// Заголовок -> Сайдбар с информацией о погоде
import React from 'react';
export default function HeaderSide(props) {

    return (
        <div className='header-side'>
            <div>Погода</div>
            <img src='https://image.shutterstock.com/image-vector/rain-icon-trendy-flat-style-600w-421269391.jpg' alt='weather' />
            <span>-10 °C</span>
        </div>
    )
}