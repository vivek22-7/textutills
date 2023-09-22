import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange = (event)=> {
        
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Box Cleared!", "success");
    }
    // const emptytext = ()=> {
    //     if(text === "Enter text here"){
    //         setText("");
    //     }        
    // }
    // const handleCopy = ()=>{
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // // }
    // const handleCopy = () => {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.select());
    //     props.showAlert("Text Copied!", "success");
    // }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
    

  return (
    <>
    <div className='container' style={{color :props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
        <textarea className="form-control" value={text} placeholder='Enter Text Here' onChange={handleOnChange} style={{backgroundColor :props.mode === 'dark'?'grey':'white', color :props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>

    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
    {/* <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> */}
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className="container my-3" style={{color :props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text === 'Enter text here' || text.length === 0? "Enter something in the text box above to preview here" : text}</p>
    </div>
    </>
  )
}
