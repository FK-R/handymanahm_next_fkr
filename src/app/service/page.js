

import Image from "next/image";
import Link from "next/link";
import ac from "../images/ac.jpg";
import cabinet from "../images/cabinet.jpg";
import door from "../images/door.jpg";
import electrical from "../images/electrical.jpg";
import furniture from "../images/furniture.jpg";
import plumbing from "../images/plumbing.jpg";
import sink from "../images/sink.jpg";
import water from "../images/water_leakage.jpg";
import wiring from "../images/wiring.jpg";

import hmr1 from "../images/hmr1.jpg";
import hmr2 from "../images/hmr2.jpg";
import hmr3 from "../images/hmr3.jpg";
import hmr4 from "../images/hmr4.jpg";
import hmr5 from "../images/hmr5.jpg";
import hmr6 from "../images/hmr6.jpg";

const Service = () => {
    return (
        <>







<div className="container mt-5 pt-5">


<button class="custom position-relative rounded-4">
<p className=" text_justify mt-4 p-5">At handymanahm, we understand that every home requires unique attention. That's why we offer a wide range of expert handyman solutions to cater to all your repair and maintenance needs. From minor fixes like water leakages and repairing sliding doors to handling more complex tasks like plumbing issues, kitchen sink installations, furniture assembling, electrical repairs, cabinet installations, aircon services, house wiring, and even full home renovation projects, our skilled team is here to help.</p>

  <span class="position-absolute top-0 start-75 translate-middle badge rounded-2 bg-danger  p-2">
  <h4>Wide Range of Expert Solutions</h4>

  </span>
</button>

</div>

<section>
    <div className="container">
        <div className="row p-5">
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={water} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Water Leakage</h5>
    <p class="card-text">Effective water leakage solutions provided by professionals to detect and repair leaks, preventing water damage and ensuring a dry and safe environment.</p>
  </div>

  <div class="card-body">
    <Link href="water_leakage" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={door} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Sliding Door Repair</h5>
    <p class="card-text">Specialized sliding door repair services fix jammed or misaligned doors, ensuring smooth functionality, improved access, & enhanced security.</p>
  </div>
 
  <div class="card-body">
    <Link href="door_repair" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={plumbing} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Plumbing</h5>
    <p class="card-text">Comprehensive plumbing services for installation, repair, & maintenance, ensuring reliable water systems & efficient functionality in residential & commercial properties.</p>
  </div>

  <div class="card-body">
    <Link href="plumbing" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>



            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={sink} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Kitchen Sink</h5>
    <p class="card-text">Professional kitchen sink services for installation, repair, and maintenance, ensuring optimal functionality and efficient water flow in your kitchen area.</p>
  </div>

  <div class="card-body">
    <Link href="kitchen_sink" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={furniture} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Furniture Assembling</h5>
    <p class="card-text">Reliable furniture assembling services to expertly assemble and set up your furniture pieces, saving you time and ensuring a hassle-free and properly assembled resul</p>
  </div>

  <div class="card-body">
    <Link href="furniture" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={electrical} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Electrical</h5>
    <p class="card-text">Skilled electrical services for installation, repair, and maintenance, ensuring safe and reliable electrical systems in homes and businesses.</p>
  </div>

  <div class="card-body">
    <Link href="electrical" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={cabinet} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cabinet</h5>
    <p class="card-text">Professional cabinet services for installation, repair, and customization, enhancing storage efficiency and aesthetics in residential and commercial spaces.</p>
  </div>

  <div class="card-body">
    <Link href="cabinet" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={ac} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Aircon</h5>
    <p class="card-text">
Comprehensive air conditioning services, including installation, repair, and maintenance, ensuring efficient cooling and optimal comfort in residential and commercial environments.</p>
  </div>

  <div class="card-body">
    <Link href="aircon" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 p-4 ">
            <div class="card">
  <Image src={wiring} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">House Wiring</h5>
    <p class="card-text">Expert house wiring services for installation, repair, and maintenance, ensuring safe and efficient electrical connections in residential properties for reliable power distribution.</p>
  </div>

  <div class="card-body">
    <Link href="house_wiring" class="card-link text-info">Learn More</Link>

  </div>
</div>
            </div>
        </div>
    </div>
</section>




<section>
<div className="container p-5 rounded-4" style={{background:"#FFF8FB"}} >
  <div className="row align-items-center">
    <div className="col-12 col-lg-6">

    <h4>Home Renovation</h4>
<p className="text_justify">While some individuals like taking on challenging DIY home renovation tasks, others, like our many satisfied clients, prefer the labor of experts like us. Please let us know if you prefer to hire a professional or overdo it yourself. Since we made our firm known to the public, we have worked on innumerable projects and had a wide range of clientele. We have more than two years of expertise, put a premium on providing excellent services, charge reasonable prices, and offer all of our client's free labor estimates. Your entire pleasure is guaranteed
</p>
       </div>

       <div className="col-12 col-lg-6">
       <div className="home_renovation">
    <div className="container">
    <div class="row">
  <div class="col-lg-4 mb-4 mb-lg-0">
    <Image
      src={hmr1}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <Image
      src={hmr6}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <Image
       src={hmr3}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <Image
   src={hmr4}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <Image
      src={hmr5}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <Image
      src={hmr2}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
    </div>
</div>
       </div>
  </div>
</div>

</section>



<section className="p-5 pb-0">
  <div style={{background:"#EDFAFE"}} className="container p-5 rounded-3">

    <div className="p-3">
 <h3>   Top Handyman Services in Singapore for All Your Home Repair Needs</h3>
<h6 className="mt-3 p_col">When it comes to reliable and efficient handyman services in Singapore, our team stands out as the best choice. We take pride in offering a comprehensive range of expert solutions, ensuring that your home remains in optimal condition.
</h6>

<button className="btn btn-col text-white fw-bold mt-4"><Link className="text-white fw-bold" href="/about"> Explore Us</Link> <i class="fa-regular fa-circle-right"></i></button>
    </div>

  </div>
</section>





<div class="container1 container">
 <h4 className="text-center pb-5">We also provide painting service</h4>
  <div class="gallery-wrap">
    <div class="item item-1"></div>
    <div class="item item-2"></div>
    <div class="item item-3"></div>
    <div class="item item-4"></div>
    <div class="item item-5"></div>
  </div>
 </div>



        </>
    );
};

export default Service;