import '../MLListContainer/MLListContainer.css';
import ItemML from '../ItemML/ItemML'

import { useState, useEffect } from 'react'

const MLListContainer = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    const [item, setItem] = useState([])
    const [showItem, setShowItem] = useState(false)

  

    

    const handleSearch = () => {
        console.log('buscar');
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                setProducts(res.results)
                setShowItem(true)
            })
    }

    const viewItem = e =>{
        const itemID = e.target.getAttribute("data-item");
        console.log('show '+itemID);

        fetch(`https://api.mercadolibre.com/items/${itemID}`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                console.log([res])
                setItem(res)
            })
    }

    return(
        <div>
            <h1>Mercado Libre</h1>
     
            <div className='searcher'>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSearch}>Buscar</button>
                
            </div>
            <ItemML key={item.id} show={showItem} {...item}/>
            <div>
              tit:   {item.title}                
            </div>
            <ul>
                {products.map(p => {
                return (
                    
                    <li key={p.id}>
                        <img src={p.thumbnail} alt={p.title}/>
                        <p>{p.title}</p>
                        <p>{p.id}</p>
                        <p>${p.price}</p>
                        <button data-item={p.id} onClick={viewItem}>Ver más</button>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default MLListContainer