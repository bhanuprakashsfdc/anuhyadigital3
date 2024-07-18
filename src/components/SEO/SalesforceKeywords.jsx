import React from 'react'
import Salesforcejson from '../../data/salesforce.json'

const SalesforceKeywords = () => {
    return (
        <div className="seokeywords">
        <h2 className="headerseo">{Salesforcejson.header}</h2>
        <div className='lsdata'>
            {Salesforcejson.content.map((item, index) => (
              <span className='lsdatavariable' key={index}>{item}</span>
            ))}
        </div>
    </div>
   )
}

export default SalesforceKeywords
