import React from 'react'
import './ProdComp.css'



const ProdComp = (props) => {
    const Components = Array.from(props.map.entries()).map(([key, value]) => (
        <a className="url" href={value} key={key}>
            {key}{'>'}
        </a>
    ));

  return (
    <div className={`prod-item ${props.reverse===true? 'reverse':''}`} >
        <div className="prod-deskription " >
            <div className='prod-head'>
                <div className='prod-icon'>
                    <img src={props.image_ico}></img>
                </div>
                <div className='prod-type'>
                    <span>{props.type}</span>
                </div>
            </div>
            <div className='prod-text'>
                {props.text}
            </div>
            <div className='prod-link'>
                {Components}
            </div>
        </div>
        <div className={`prod-image ${props.reverse===true? 'left':''}`}>
            <img src={props.imageURL}></img>
        </div>
    </div>
  )
}

export {ProdComp}
