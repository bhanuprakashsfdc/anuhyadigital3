import React from 'react'
import WebDesignJson from '../../data/webdesign.json'

const WebDesignKeywords = () => {
    return (
        <div className="seokeywords">
        <h2 className="headerseo">{WebDesignJson.header}</h2>
        <div className='lsdata'>
            {WebDesignJson.content.map((item, index) => (
              <span className='lsdatavariable' key={index}>{item}</span>
            ))}
        </div>
    </div>
   )
}

export default WebDesignKeywords
