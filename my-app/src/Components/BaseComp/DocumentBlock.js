import React from 'react'

const DocumentBlock = (props) => {
    const { documents } = props; 

    return (
      <div className="document_group">
        <div className='document_group_object'>
            <h4 className='document_group_text'>{props.header_text}</h4>
            {documents.map((doc, index) => (
            <div className="document_group_item" key={index}>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="document-link">
                {doc.text}
                </a>
            </div>
        ))}
        </div>
      </div>
    );
}

export default DocumentBlock
