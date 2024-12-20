import React from 'react'

const AsSectionInfo = (props) => {
  return (
    <div className='as_section'>
        <div className='as_setion_text_1 as_setion_text'>
            {props.text_1}
        </div>
        <div className='as_setion_text_2 as_setion_text' >
            {props.text_2}
        </div>
    </div>
  )
}

export {AsSectionInfo}
