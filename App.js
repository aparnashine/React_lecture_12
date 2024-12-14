// import logo from './logo.svg';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import './App.css';
import React,{ useState } from 'react';
// import About from './component/About';
//imrs







function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =() =>{
    if(mode === 'light')
    {
      setMode('dark');
      // document.body.style.backgroundColor='#212529';
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return ( 
   
<>
<Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode}/>
<div className="container my-3 " >
<TextFrom heading="Enter the text to analyze below" mode={mode} />
{/* <About/> */}
</div>

</>


    
  );
}

export default App;
