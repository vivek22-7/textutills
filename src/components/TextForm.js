import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
        
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        
        setText(event.target.value);
    }
    const emptytext = ()=> {
        if(text === "Enter text here"){
            setText("");
        }        
    }
    const [text, setText] = useState('Enter text here');
    

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
        <textarea className="form-control" value={text} onClick={emptytext} onChange={handleOnChange} id="myBox" rows="8"></textarea>

    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    </div>
  )
}
