import React from "react";

function BootNews(props) {
  return (
    <div className="card" >
      <img
        src={props.urlToImage ? props.urlToImage : "https://i.guim.co.uk/img/media/3def6d9a4ee2bae65b47eaa5872c96ab3b8db020/0_258_4224_2535/master/4224.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ead53e40e5bac2b68fb974d378212d0c" }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title ? props.title : "No title"}</h5>
        <p className="card-text">
        {props.description ? props.description : "No Description"}
        </p>
        <a href={props.url} target="_blank" className="btn btn-sm btn-primary ">
          Read more
        </a>
      </div>
    </div>
  );
}

export default BootNews;
