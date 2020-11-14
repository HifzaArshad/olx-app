import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Log,Categories} from './component/Header';
import {Slider,Appp,Fresh} from './component/slider';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render(){
  
    return(
      
      <div>
          <Log />
          <Categories/>
          <Slider />
          <Appp />
          <Fresh />
         <Footer/>
        
     
      </div>
    )
  }
}


export default App;
