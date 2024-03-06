import React from 'react'
import "./ItemList.css"
import Item from './Item'
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
            return <Item item={item}/>
        })}
    </div>
  )
}

export default ItemList