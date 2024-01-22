import { textDecoration } from '@chakra-ui/react';
import style from './CardServices.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function CardServices({logo, title, inverted}) {
    return(
          <div className={`${style.content} ${inverted ? style.inverted : ''}`} style={{}}>
            <div className={style.left} style={{
                backgroundColor: '#fff',
                textDecoration: 'none',
                boxShadow: '2px 2px 2px 2px #000'
            }}>
                <img 
                className={style.icon} 
                src={logo} style={{
                    height: '85px',
                    width: '85px'
                }}/>
                <h2>
                    {title}
                </h2>
            </div>
            <div className={style.right}>

            </div>
          </div>
    )
}

export default CardServices;