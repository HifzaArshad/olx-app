import olx from '../image/olx.png';
import React from 'react';
import { BrowserRouter as Router,Link, Route } from "react-router-dom";
class Log extends React.Component{
    render(){
        return(
         
            <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">
              <img width='60px' src={olx} alt='' />
            </a>
          
           
              <form className="form-inline my-2 my-lg-0">
                
              
          
                <input className="form-control mr-sm-2" type="search" aria-label="Search" />
                <i className="fa fa-search fa-lg"   ></i>
              </form>
              <form className="example" action="action_page.php">
            <input type="text" placeholder="Find Cars,Mobile,Phones and more..." name="search" />
              <button  type="submit"><i class="fa fa-search fa-lg"></i></button>

            
            
</form> 

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Login<span class="sr-only">(current)</span></a>
      </li>
      <button className='sell-button'><i class="fa fa-plus" aria-hidden="true " >SELL</i></button>
      </ul>
     
      </div>
    
          </nav>
          </div>
        
                )
              }
 
            }
            class Categories extends React.Component{
              render(){
                return(
            <div className='categories'>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <h6>All Categories<button class="fa fa-arrow-down"></button></h6>
            
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="Mobile-phone">Mobile Phones <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Cars</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Motorcycles</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Houses</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">TV-Video-Audio</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Tablets</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Land and Plots</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  
      
  )
  }
  }
  





export  {
  Log,
  Categories
};