import React from 'react'
import './myStyle.css'
function StyleSheet(props) {
    let className = props.primary?'primary':''
    return (
        <div>
            <div className={`${className} font-xl`}>Style Sheet</div>
        </div>
    )
}

export default StyleSheet
