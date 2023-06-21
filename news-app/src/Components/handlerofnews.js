import React, { useEffect,useState} from 'react'
import BootNews from './bootnews'

function HandlerNews(props) {
    const [alljson, setalljson] = useState([])
    const [page, setpage] = useState(1);
    const [total, settotal] = useState(0);
    const pagesize=10;
    useEffect(()=>{
        const myfun=async ()=>{
           const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=84f3014603a04683abf5d92ca889faa4&category=${props.category}&page=${page}&pagesize=${pagesize}`;
            const comingdata=await fetch(url);
            const data1=await comingdata.json();
            setalljson(data1.articles);
            settotal(data1.totalResults);
        }
        myfun();
        
    },[])
    const prevpage = () => {
        const myFunc = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=84f3014603a04683abf5d92ca889faa4&category=${props.category}&&page=${page - 1}&pagesize=${pagesize}`;
          const response = await fetch(url);
          const data = await response.json();
          setalljson(data.articles);
        };
      
        myFunc();
        setpage(page => page - 1);
      };
    const nextpage = () => {
        const myFunc = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=84f3014603a04683abf5d92ca889faa4&category=${props.category}&&page=${page + 1}&pagesize=${pagesize}`;
          const response = await fetch(url);
          const data = await response.json();
          setalljson(data.articles);
          
          
          
        };
      
        myFunc();
        setpage(page => page + 1);
      };
      
  return (
      <div className='container my-3'>
        <h1 style={{ textAlign: 'center',marginBottom:'30px' }}>News-App Top Headlines</h1>
    <div className='row'>
      {alljson.map((element)=>{
        
        return <div className='col-md-4' key={element.url}>
              <BootNews title={element.title} urlToImage={element.urlToImage} description={element.description} url={element.url}/>
              </div>
      })}
      <div className='container d-flex justify-content-between'>
  <button disabled={page<=1} type="button" className="btn btn-dark " onClick={prevpage}>&larr;Previous</button>
  <button disabled={page>=Math.ceil(total/pagesize)} type="button" className="btn btn-dark " onClick={nextpage}>Next&rarr;</button>
</div>


    
   
  
    </div>
    
    </div>
  )
}

export default HandlerNews