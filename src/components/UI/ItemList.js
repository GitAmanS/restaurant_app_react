import React from 'react'
import "./ItemList.css"
const ItemsData= [
    {
        id:1,
        name:"sushi",
        desc:"this is sushi",
        price: 5
    },
    {
        id:2,
        name:"sushi",
        desc:"this is sushi",
        price: 5
    },
    {
        id:3,
        name:"sushi",
        desc:"this is sushi",
        price: 5
    },
]
const ItemList = () => {
  return (
    <div className='Items-container'>
        {ItemsData.map((item)=>{
            return <div key={item.id} className='Item'>
                <h1 className='itemname'>{item.name}</h1>
                <p className='itemdesc'>{item.desc}</p>
                <h1 className='itemprice'>Rs{item.price}</h1>
            </div>
        })}
    </div>
  )
}

export default ItemList