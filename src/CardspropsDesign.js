import React from "react";

// function CardspropsDesign(props){
function CardspropsDesign({data}){
    // let {img,title,description} = data
    return(
        <>
      <div class="card crd">
      {/* <img src={props.data.img} class="card-img-top" alt="..." width={300} height={300} /> */}
      <img src={data.img} class="card-img-top" alt="..." width={300} height={300} />
      {/* <img src={img} class="card-img-top" alt="..." width={300} height={300} /> */}

      <div class="card-body">
      <h5 class="card-title">{data.title.substring(0,10)}</h5>
      <p class="card-text">{data.description.substring(0,40)}</p>
      <a href="#" class="btn btn-primary">Read More</a>
      </div>
      </div>
        </>
    )

}

export default CardspropsDesign