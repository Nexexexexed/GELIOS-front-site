import React from 'react'
import './BlockInfo.css'

const BlockInfo = (props) => {
  return (
    <div className='item'>
      <div className='item-ico'>
        <img src={props.image}></img>
      </div>
      <div className='item-header'>
        {props.header}
      </div>
      <div className='item-text'>
        {props.text}
      </div>
      <div className='item-price'>
        {props.price}
      </div>
    </div>
  )
}

export default BlockInfo
