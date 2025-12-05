import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import About from './components/about';
import Home from './components/home';
import { BrowserRouter,Routes,Route } from "react-router-dom";




function App() {
  return (
   <>
   <div className='signup' id='Singup'>
  <div className="child1">
    <div className='allinput'>
    <div><input type="text"placeholder='Enter Your Name' id='Name'/></div>
      <div><input type="text"placeholder='Enter Your FatherName' id='FName'/></div>
        <div><input type="text"placeholder='Enter Your Email' id='Email'/></div>
        </div>
        <button onClick={btn} className='btn1'>Submit</button>A


  </div>
   </div>
   
   <BrowserRouter>
       <Routes>
          <Route path="/home" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
       </Routes>
     </BrowserRouter>
   
   </>
  );
}
export default App;

  
function btn (){
  const Name = document.getElementById("Name").value;
  const FName = document.getElementById("FName").value;
  const Email = document.getElementById("Email").value;

  if(Name === "" || FName === "" || Email === ""){
    alert("Please All filed")
  }
  else{
    alert("Successfully")

  }
document.getElementById("Name").value = "";
document.getElementById("FName").value = "";
document.getElementById("Email").value = "";
}
