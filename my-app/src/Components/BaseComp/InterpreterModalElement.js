import React from 'react'

const InterpreterModalElement = (props) => {
  return (
    <div className='search_result_product'>
        <div className='search_result_product_item'>
            <div className='sr_product_item_head'>
                <p>{props.title}</p>
            </div>
            <div className='sr_product_item_text'>
                <p>{props.text}</p>
            </div>
            <div className='sr_product_action'>
                <a href={props.link}>Подробнее о продукте</a>
            </div>
        </div>
    </div>
  )
}

export default InterpreterModalElement
