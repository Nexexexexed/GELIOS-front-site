import React from 'react'
import image from '../../images/logo.png'
import './BlockWrap.css'

const BlockWrap = (props) => {
  return (
    <div className='item-block'>
        <img src={image} className='image-item-block'></img>
        <p className='text-item-block'>{props.text}</p>
    </div>
  )
}

export default BlockWrap
