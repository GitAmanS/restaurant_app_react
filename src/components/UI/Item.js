import React from 'react'
import "./Item.css"
import {useState} from 'react'
const Item = ({item}) => {
    const [Amount, SetAmount] = useState(1)
    function addamount(){
        SetAmount((oldamount)=>{
            return oldamount+1
        })
    }
  return (
    <div key={item.id} className='itemparent'>
        <div className='Item'>
        <h1 className='itemname'>{item.name}</h1>
        <p className='itemdesc'>{item.desc}</p>
        <h1 className='itemprice'>Rs{item.price}</h1>
        </div>

        <div className='amountcontainer'>
            <h1>Amount:{Amount}</h1>
            <button className='amountbutton' onClick={addamount}>Add+</button>
        </div>
    </div>
  )
}

export default Item