import React from  'react';
import ReactDOM from 'react-dom';

function Popup(props){
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <a className='close-btn' onClick={() => props.setTrigger(false)}>
                    close
                </a>
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Popup;