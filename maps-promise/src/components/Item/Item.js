import './Item.css';
import '../Button/Button.css';

import {useState, useEffect} from 'react';
const Item = ({ name, img, description, price}) => {
    const [showMore, setView] = useState(false)
   
    useEffect(() => {
        console.log('Se acaba de montar el componente')
       
    })

    useEffect(() => {
        console.log('cambio el count')
    }, [showMore])

    const viewMore = () => {
        if(showMore){   
            setView(false)
        }else{
            setView(true)
        }
        
    }

    return(
        <div className={showMore ? "item show" : "item hide"}>
            <div className='wrapper'>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            
            <button className='btn view' onClick={viewMore}>Ver Detalle</button>
            {showMore
                ? <div className='detail'>
                    <div className='center'>
                <p>{description}</p>
                <div className='price'>
                    <span>${price}</span>
                </div>
                <button className='btn cerrar' onClick={viewMore}>Cerrar</button>
                </div>
                </div>
                : ''
            }

            </div>
            
        </div>
    )
}

export default Item