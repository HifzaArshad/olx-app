import React from 'react';
import olxapp from '../image/footer.PNG'
class Footer extends React.Component{
    render(){
        return(

            <div >

                <img className='olxapp' src={olxapp} alt=''/>

                <div className='main-footer'>
                <div className='row row-footer'>
                <div className='col col-md-3'>
                    <span>POPULAR CATEGORIES</span>
                <ul>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/cars_c84">Cars</a>
                        </li>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/apartments-flats_c1723">Flats for rent</a>
                        </li>
                        <li>
                            <a className="_2XmAi" rel="" data-aut-id="" href="/jobs_c4">Jobs</a>
                        </li>
                        <li>
                            <a className="_2XmAi" rel="" data-aut-id="" href="/jobs_c4">Mobile phones</a>
                        </li>
                    </ul>
                
                </div> 




                <div className='col col-md-2'>
                    <span>TRENDING SEARCHES</span>
                <ul>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/cars_c84">Bikes</a>
                        </li>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/apartments-flats_c1723">Watches</a>
                        </li>
                        <li>
                            <a className="_2XmAi" rel="" data-aut-id="" href="/jobs_c4">Books</a>
                        </li>
                        <li>
                            <a class="_2XmAi" rel="" data-aut-id="" href="/jobs_c4">Dogs</a>
                        </li>
                    </ul>
                
                </div> 



                <div className='col col-md-3'>
                    <span>ABOUT US</span>
                <ul>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/cars_c84">About OLX Group</a>
                        </li>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/apartments-flats_c1723">OLX Blog</a>
                        </li>
                        <li>
                            <a className="_2XmAi" rel="" data-aut-id="" href="/jobs_c4">Contact us</a>
                        </li>
                        <li>
                            <a class="_2XmAi" rel="" data-aut-id="" href="/jobs_c4">OLX Businesses</a>
                        </li>
                    </ul>
                
                </div> 




                <div className='col col-md-2'>
                    <span>OLX</span>
                <ul>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/cars_c84">Helo</a>
                        </li>
                        <li><a className="_2XmAi" rel="" data-aut-id="" href="/apartments-flats_c1723">Legal&Privacy information</a>
                        </li>
                        <li>
                            <a className="_2XmAi" rel="" data-aut-id="" href="/jobs_c4">Sitemap</a>
                        </li>
                        
                    </ul>
                
                </div> 



                <div className='col col-md-2'>
                    <span>FOLLOW US</span> <br/>
                    <div className='icon'>
                    <a className='fa fa-facebook-square' href="https://www.facebook.com/olxpakistan" />
                    <a className='fa fa-twitter-square' href="https://www.facebook.com/olxpakistan" />
                    <a className='fa fa-youtube-play' href="https://www.facebook.com/olxpakistan" />
                    <a className='fa fa-instagram' href="https://www.facebook.com/olxpakistan" />
                   </div>
                    </div>
                
                </div>







                </div>




   </div>
        )
    }
}


export default Footer;