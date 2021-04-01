import React , {useEffect, useState } from 'react'

import LoadingGif from './LoadingGif'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

import Category1 from './Category1'
import Category2 from './Category2'
import Category3 from './Category3'


const Main = (  ) => {
  
  const [activeNavTab , setactiveNavTab] = useState("Category 1") 
  
  const navBtnClick = (e)=>{
      console.log(e.target);
      console.log(e.target.textContent);
      setactiveNavTab(e.target.textContent);
  }
    return (
        <div>
         <div class="container my-5" >
            <ul class="nav  pagecontrol">
              <li class="nav-item">
                <span 
                 className={ (activeNavTab==='Category 1')?"nav-link activePageControl" : "nav-link"} 
                // className="nav-link"
               onClick={ navBtnClick } >Category 1</span>
              </li>
              <li class="nav-item mx-5">
                <span className={ (activeNavTab==='Category 2')?"nav-link activePageControl" : "nav-link"} onClick={ navBtnClick }> 
            
                Category 2</span>
              </li>
              <li class="nav-item">
                <span className={ (activeNavTab==='Category 3')?"nav-link activePageControl" : "nav-link"} onClick={ navBtnClick }>Category 3</span>
              </li>
            
            </ul>
          </div>
          {/* <LoadingGif/> */}
         <div  class="w-100">
            
          { 
            ( activeNavTab==="Category 1" )? ( 
            <Category1 />
              ) 
            : 
            (
                (activeNavTab==="Category 2")?( 
                  <Category2 />
                ) : ( <Category3 /> )
            ) 
          }
          
          
            
          </div>
        </div>
    )
}

export default Main
