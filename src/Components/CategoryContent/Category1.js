import React , {useEffect , useState} from 'react'
import LoadingGif from '../Spinners/LoadingGif'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
const Category1 = () => {
    const [images, setimages] = useState([])
     

    const myClientId =  'KeHMOEBT2C9HuLl_dUN5szuLzw6MGdbXk660H0dK4_4';
       
       // eslint-disable-next-line
    const [page, setpage] = useState(1)
       
    // eslint-disable-next-line
    useEffect( async( ) => {
        const res = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${myClientId}&&query=office&&page=${page}`);
       // eslint-disable-next-line
        const thisResImages = res.data.results.map( (element)=>{ return element.urls.regular } )
        setimages(thisResImages);

       // eslint-disable-next-line
   }, [] )
   const fetchMoreData = async () => {
       // eslint-disable-next-line
     let incPage = page + 1 ;
       // eslint-disable-next-line
     setpage( incPage )
       // eslint-disable-next-line
     const res = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${myClientId}&&query=office&&page=${page}`);
     const thisResImages = res.data.results.map( (element)=>{ return element.urls.regular } )
     setimages( [...images , ...thisResImages ]);
     
   };
    return (
        <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreData}
        hasMore={true}
        loader = <LoadingGif />      
       >
        <div className="row mx-2" >
        {images.map((element, index) => (
          <div  className=" col-12  col-sm-6 col-md-4 "key={index}  >
            <div   className="p-3 imageWrapper"  >
            
            <img 
               alt=""
            className=" img-fluid "
            src={element} />
            
            <a target="_blank" rel="noreferrer" href={element}>
            <div 
            className="overlaySheet " 
            >
              <div className="expandSpan mx-auto"> <i className="fas fa-expand"></i> </div>
            </div>
            </a> 
          </div>
            
          </div>
        ))}
        </div>
      </InfiniteScroll>
    )
}

export default Category1
