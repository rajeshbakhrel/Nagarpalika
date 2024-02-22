
import './App.css';
import Gallery from './component/Gallery';
import Header from './component/Header';
import {Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer';
import Schools from './component/Schools';


import Firstschool from './component/Firstschool';
import Secondschool from './component/Secondschool';
import Thirdschool from './component/Thirdschool';
import Fourthschool from './component/Fourthschool';
import Fifthschool from './component/Fifthschool';
import Sixthschool from './component/Sixthschool';
import Seventhschool from './component/Sevinthschool';
import Eightschool from './component/Eightschool';


const App = () =>{
  
  return (
    <div className="App">
     
     <Header/>
    {/* <Body/> */}
    {/* <Gallery/> */}
    {/* <Schools/> */}
    

     {/* <Fullpage/> */}
     <Routes>

        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/About" element="#"/>
        <Route exact path ="/Schools" element={<Schools/>}/>
        <Route exact path ="/Gallery" element={<Gallery/>}/>
        <Route exact path ="/Notice" element="#"/>



        <Route exact path ="/Firstschool" element={<Firstschool/>}/>
        <Route exact path ="/Secondschool" element={<Secondschool/>}/>
        <Route exact path ="/Thirdschool" element={<Thirdschool/>}/>
        <Route exact path ="/Fourthschool" element={<Fourthschool/>}/>
        <Route exact path ="/Fifthschool" element={<Fifthschool/>}/>
        <Route exact path ="/Sixthschool" element={<Sixthschool/>}/>
        <Route exact path ="/Seventhschool" element={<Seventhschool/>}/>
        <Route exact path ="/Eightschool" element={<Eightschool/>}/>

        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
