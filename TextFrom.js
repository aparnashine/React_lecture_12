import React, {useState} from 'react';



export default function TextFrom(props) {
 
    const handleUpClick = ()=>{
       // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
     // console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }


  const handleClearClick = ()=>{
    // console.log("uppercase was clicked" + text);
     let newText = '';
     setText(newText);
 }

 const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
   
}

    const undo = ()=>{
      let m = localStorage.getItem(0);
      setText(m);
      }

    const handleOnChange = (event)=>{
        console.log("handleOnChange clicked");
        setText(event.target.value);
    }
    
    //copy
    const copyText = () =>{
      let text = document.getElementById("myBox");
      text.select();
      // text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }

    //remove Extra spaces
    const removeExtraSpaces = () =>{
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
    }



    
    // const [text, setText] = useState("Enter text here 3");
    const [text, setText] = useState("");
    // text = "new text"; //wroung way to change state
    // setText("aparna");  //correct way to change state
  return (
   

    <> 
    <div className='container' style={{color:props.mode === 'light'?'#042743':'white'}}>
      
       <h1>{props.heading} </h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode === 'light'?'white':'grey',color:props.mode === 'light'?'#042743':'white'}}></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-1"  onClick={undo}>Undo</button>
        <button className="btn btn-primary mx-1"  onClick={copyText}>Copy Text </button>
        <button className="btn btn-primary mx-1"  onClick={removeExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container my-3" style={{color:props.mode === 'light'?'#042743':'white'}}>
      <h2>Your Text Summary </h2>
      <p> { text==="" ?0 :text.trim().split(" ").length} <b> words </b> &  {text.length} <b> characters </b> </p>
     
      <p> {0.008 *text.split(" ").length } Minutes to read </p>
      <h3>preview</h3>
      {/* <p>{text}</p> */}
      <p>{text.length > 0? text:"Enter somthing in the textbox above to priview"}</p>
    </div>


    </>
    
  );
}
 