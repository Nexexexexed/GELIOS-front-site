import React from 'react'
import cross from '../../images/fi_cross.svg'
import './InterpreterModal.css'
import InterpreterModalElement from './InterpreterModalElement'


const InterpreterModal = ({active,setActive,mass}) => {
  return (
    <div className={active? 'modal_active':'modal'}>
        <div className='modal_content'>
            <button className='modal-cross' onClick={()=>{setActive(false)}}>
                <img src={cross} alt="" className='img-modal-cross'></img>
            </button>

            <div className='modal_body'>
                <p className='search-tip'>
                    Найдено {mass.length} {mass===1?("пункта"):("пункт")}
                </p>    
            </div>
            <div className='search_result'>
            {mass.map((item, index) => (
            <InterpreterModalElement
                key={index}
                link={item.link}
                title={item.title}
                text={item.text}
            />
            ))} 
            </div>
        </div>
    </div>
  )
}

export default InterpreterModal
