import React from "react"
import img2 from "../src/assets/peakpx.jpg"
import img1 from "../src/assets/peakpx2.jpg"
import img3 from "../src/assets/peakpx3.jpg"

function Carousel(){
    return(
  
      <div class="mcrl" id="Home">
   <div id="carouselExampleIndicators" class="carousel slide crl" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." width={400} height={400} />
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." width={400} height={400}/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." width={400} height={400}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
</div>
        
    )
}

export default Carousel