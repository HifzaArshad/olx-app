import React from 'react';
import { Component } from 'react';
 import Carousel from 'react-elastic-carousel';

 import 'bootstrap/dist/css/bootstrap.min.css';

import addvertise  from '../image/olx-slider.PNG'
import phone from '../image/mobile.jpeg';
import car  from '../image/car.jpg';
import cup from '../image/cup.jpg';
import furniture from '../image/furniture.jpg'
import chair from '../image/chair1.jpg'



class Slider extends React.Component{
    render(){
        return(
            <div className='addvertise'>
                  <img src={addvertise} alt=''/>  
            </div>
        )
    }
}

      



// class Moreon extends Component{
//     render(){
//         return(
 
// <div className='container'>
     
//    </div>


// )
// }
// }

   const breakPoints=[
     { width :1 ,itemsToShow:1},
     { width:550,itemsToShow:2},
     { width:750,itemsToShow:3},
     { width:1200,itemsToShow:4},
     { width:1780,itemsToShow:4}
   ];

   function Appp(){
     return(
      
  <div className='App'>
    <p>Based on Your Last Search</p>      
   <Carousel breakPoints={breakPoints}>
     <item>         <div className="card" >
  <img className="card-img-top-mobile" src={phone} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:17,000</h5>
    <a href="#" className="btn btn-light">i phone 7Plus 128 GB Matte Black</a>
   
  </div>
  </div>
  </item>
     <item>             <div className="card" >
  <img className="card-img-top" src={car} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:51,999</h5>
    <a href="#" className="btn btn-light">New Honda Civic 2020 Model</a>

</div>
</div> 
 </item>
     <item>
              <div className="card" >
  <img className="card-img-top" src={cup} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:419</h5>
    <a href="#" className="btn btn-light">Italian Cup Set with cheapest Rate</a>

</div>
</div>    
  </item>
     <item>
         <div className="card" >
  <img className="card-img-top" src={furniture} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:7,300</h5>
    <a href="#" className="btn btn-light">modern tv lounge leather Corner sofa</a>

</div>
</div>
</item>

<item>
         <div className="card" >
  <img height='140px' className="card-img-top" src={chair} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:2035</h5>
    <a href="#" className="btn btn-light">Relax chair with stylish lavish color</a>

</div>
</div>
</item>
    
     
    
   </Carousel>
        
 </div>
 )
}


class Fresh extends React.Component{
  render(){
    return(
      <div className='fluid'>
        <p className='fresh-para'>Fresh recommendations</p>
        <div className='row fresh'>
      <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:300,000</h5>
    <a href="#" className="btn btn-light">Stlish Home with best location and parking</a>

</div>
</div>
 </div>




      <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://www.gardenplayhouses.ie/wp-content/uploads/tara-swing-set.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:12,500</h5>
    <a href="#" className="btn btn-light">Tara Swing set and SeeSaw</a>

</div>
</div>
</div>



<div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://zahcomputers.pk/wp-content/uploads/2019/08/Arozzi-Verona-Junior-Gaming-Chair-Price-in-Pakistan.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:17,000</h5>
    <a href="#" className="btn btn-light">Arozzi Verona Gaming Chair</a>

</div>
</div>
  </div>


  <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://cnet4.cbsistatic.com/img/krmv6ZRQv8f87Uy9t8L-iRJgf4o=/1200x675/2020/05/28/7c683cc4-7348-4e3e-b856-6ebd2b3ad79c/gettyimages-1185143893.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:7,240</h5>
    <a href="#" className="btn btn-light">Best Online Guiter you can take free..</a>

</div>
</div>
  </div>

        </div>






        <div className='row fresh'>
      <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://media.istockphoto.com/photos/fresh-shower-behind-wet-glass-window-with-water-drops-splashing-picture-id917616066?k=6&m=917616066&s=612x612&w=0&h=y-E1R3HWbbb1_04kIsGtUIRMG6B4w8-EfNOxBUIQD08=' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:4400</h5>
    <a href="#" className="btn btn-light">BROGRUND 5-spray shower</a>

</div>
</div>
 </div>


 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://apollo-singapore.akamaized.net/v1/files/hoqq65i6q1wr1-PK/image;s=850x0'alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:32,999</h5>
    <a href="#" className="btn btn-light">Window Ac one ton</a>

</div>
</div>
 </div>


 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdSIw7no68voW494W-yESCDQ86VAfZZ7Oq2A&usqp=CAU'alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:250,000</h5>
    <a href="#" className="btn btn-light">Smart Fortwo Red Color</a>

</div>
</div>
 </div>



 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://www.lg.com/in/images/refrigerators/md06236177/gallery/GL-T292RSCY-Refrigerators-Front-View-Top-Door-Open-Without-Content-D-05.jpg'alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:60,000</h5>
    <a href="#" className="btn btn-light">Haier Refrigerator new model</a>

</div>
</div>
 </div>
 </div>


 <div className='row fresh'>
      <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:44,300</h5>
    <a href="#" className="btn btn-light">Samsung Glaxy pro max</a>

</div>
</div>
 </div>




 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://cb2.scene7.com/is/image/CB2/DondraBedQueenSHS16_1x1/$web_zoom$/190905020920/dondra-queen-bed.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:19000</h5>
    <a href="#" className="btn btn-light">Dondra Tek Bed</a>

</div>
</div>
 </div>



 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://i.pinimg.com/originals/f8/e5/d1/f8e5d1848db891e1ad5df91860e4aa82.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:23,336</h5>
    <a href="#" className="btn btn-light">Blue Tea Set</a>

</div>
</div>
 </div>


 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://www.cellsii.com/images/detailed/18/Baseus-Wireless-Bluetooth-Selfie-Stick-price-in-bd.jpg789.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:900</h5>
    <a href="#" className="btn btn-light">Wireless selfie-stick</a>

</div>
</div>
 </div>

</div>





<div className='row fresh'>
      <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://manahilestate.com/wp-content/uploads/2014/02/Pictures-of-Golden-Location-Ideal-Plots-CDA-Sector-B-17-Islamabad1.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:22,000</h5>
    <a href="#" className="btn btn-light">1 kanal plot for sale</a>

</div>
</div>
 </div>



 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src=' https://images-na.ssl-images-amazon.com/images/I/41Suha-bBBL._AC_.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:400</h5>
    <a href="#" className="btn btn-light">Selfie ring light</a>

</div>
</div>
 </div>


 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://media.wired.com/photos/5b64db3717c26f0496f4d62d/125:94/w_1976,h_1486,c_limit/Canon-G7XII-SOURCE-Canon.jpg' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:80,000</h5>
    <a href="#" className="btn btn-light">Best Compact camera</a>

</div>
</div>
 </div>


 <div className='col col-md-3'>
      <div className="card" >
  <img height='140px' className="card-img-top" src='https://apollo-singapore.akamaized.net/v1/files/qzheu62p2l022-PK/image;s=850x0' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Rs:4900</h5>
    <a href="#" className="btn btn-light">Sofa set</a>

</div>
</div>
 </div>



</div>
      </div>
    )
  }
}



export  {
  
    Slider,
    Appp,
    Fresh
  
   
}