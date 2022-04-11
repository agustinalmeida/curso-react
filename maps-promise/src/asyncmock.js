const products = [
    { 
        id: 1, 
        name: 'Bebé', 
        price: 1000, 
        category: 'celular', 
        img:'https://argentina.poett.com/wp-content/uploads/2017/06/suavidad-bebe-1.jpg', 
        stock: 25, 
        description:'Decile sí a la vida con amor, esperanza y los tiernos olores de la rosa, la violeta y el talco'
    },
    { id: 2, name: 'Suavidad de Algodón', price: 800, category: 'celular', img:'https://argentina.poett.com/wp-content/uploads/2017/06/suavidad.jpg', stock: 16, description:'Sentite única y renovada con los ricos aromas de la peonía, la naranja y el durazno.'},
    { id: 3, name: 'Sólo para Ti', price: 1200, category: 'tablet', img:'https://argentina.poett.com/wp-content/uploads/2017/06/solo-1.jpg', stock: 10, description:'Sumale nuevas experiencias a tus días con un aroma sofisticado que combina toda la alegría de las flores y los frutos rojos con la sabiduría de la madera.'},
    { id: 4, name: 'Sólo para Ti', price: 1200, category: 'tablet', img:'https://argentina.poett.com/wp-content/uploads/2017/06/solo-1.jpg', stock: 10, description:'Sumale nuevas experiencias a tus días con un aroma sofisticado que combina toda la alegría de las flores y los frutos rojos con la sabiduría de la madera.'},
    { id: 5, name: 'Sólo para Ti', price: 1200, category: 'tablet', img:'https://argentina.poett.com/wp-content/uploads/2017/06/solo-1.jpg', stock: 10, description:'Sumale nuevas experiencias a tus días con un aroma sofisticado que combina toda la alegría de las flores y los frutos rojos con la sabiduría de la madera.'},
    { id: 6, name: 'Sólo para Ti', price: 1200, category: 'tablet', img:'https://argentina.poett.com/wp-content/uploads/2017/06/solo-1.jpg', stock: 10, description:'Sumale nuevas experiencias a tus días con un aroma sofisticado que combina toda la alegría de las flores y los frutos rojos con la sabiduría de la madera.'},
    { id: 7, name: 'Sólo para Ti', price: 1200, category: 'tablet', img:'https://argentina.poett.com/wp-content/uploads/2017/06/solo-1.jpg', stock: 10, description:'Sumale nuevas experiencias a tus días con un aroma sofisticado que combina toda la alegría de las flores y los frutos rojos con la sabiduría de la madera.'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}