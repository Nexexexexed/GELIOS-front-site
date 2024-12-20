import React from 'react'
import img_del from '../../images/delete.png'


const CartComponent = ({ name, q, handleClick }) => {
    console.log(name)
    return (
        <div>
            <div className='cart_component'>
                <div className='cart_info cart_info_first'>
                    <p><strong>{name}:</strong></p>
                </div>
                <div className='cart_info'>
                    <p> {q} шт</p>
                </div>
                <div className='cart_info cart_info_last'>
                    <button className='btn_cart_component'><img src={img_del} className='img_del' onClick={()=>handleClick(name)}></img></button>
                </div>
            </div>
        </div>

    )
}

export default CartComponent
