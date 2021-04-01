import React , {useEffect , useState} from 'react'
import LoadingGif from './LoadingGif'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
const Category3 = () => {
    const [images, setimages] = useState([])
    const myClientId =  'KeHMOEBT2C9HuLl_dUN5szuLzw6MGdbXk660H0dK4_4';
    const [page, setpage] = useState(1)
    useEffect( async( ) => {
        const res = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${myClientId}&&query=Night&&page=${page}`);
        console.log(res);
        const thisResImages = res.data.results.map( (element)=>{ return element.urls.regular } )
        console.log(thisResImages);
        setimages(thisResImages);
        console.log(res.data);
       // const mydata  = res.data;
   }, [] )
   const fetchMoreData = async () => {
     let incPage = page + 1 ;
     setpage( incPage )
     const res = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${myClientId}&&query=Night&&page=${page}`);
     const thisResImages = res.data.results.map( (element)=>{ return element.urls.regular } )
     setimages( [...images , ... thisResImages ]);
     
   };
    return (
        <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreData}
        hasMore={true}
        loader={LoadingGif}
      >
        <div class="row mx-2" >
        {images.map((element, index) => (
          <div  class=" col-12  col-sm-6 col-md-4 "key={index}  >
            <div   class="p-3 imageWrapper"  >
            <img 
            class="img-fluid"
            src={element} /> 
            <div 
            class="overlaySheet " 
            >

            </div>
          </div>
            
          </div>
        ))}
        </div>
      </InfiniteScroll>
    )
}

export default Category3
