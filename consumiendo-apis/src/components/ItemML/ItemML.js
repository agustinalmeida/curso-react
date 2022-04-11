import './ItemML.css';
import {useState, useEffect} from 'react';

const ItemML = ({ id, show, title, secure_thumbnail, permalink}) => {
    const [showMore, setView] = useState(show);

    useEffect(() => {
        console.log('Se acaba de montar el componente')
       
    })

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
                <img src={secure_thumbnail} alt={id}/>
            </picture>
            <h3>{title}</h3>
            <a className='link' href={permalink} target="_blank">Ver en mercado libre</a>
            <button className='btn cerrar' onClick={viewMore}>Cerrar</button>
            </div>
            
            <div className='blur'></div>
        </div>
    )
}

export default ItemML