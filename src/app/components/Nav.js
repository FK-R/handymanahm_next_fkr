'use client'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Link from 'next/link';


const Nav = () => {

    return (
        <>

        <nav class="navbar  navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container">
    <Link class="navbar-brand" href="/">HandymanAHM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse container" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/service">Service</Link>
        </li>
    
        <li class="nav-item">
          <Link class="nav-link" href='/about'>About Us</Link>
        </li>
      </ul>
      <form class="d-flex align-items-center gap-4" role="search">
  
 


<Link class="fs-4 text-primary" target='_blank'   href="https://www.facebook.com/profile.php?id=100072178856281"><i class="fab fa-facebook"></i></Link>
      <Link class="fs-4 text-success" target='_blank'  href="https://wa.link/xqqjco"><i class="fab fa-whatsapp"></i></Link>
      <Link class="fs-5 text-info" target='_blank'  href="tel:+6585966244"><i class="fas fa-phone"></i></Link>

        <button class="btn btn-col3 fw-bold text-white rounded-0" type="submit"><Link href="/contact" className='text-white' >Contact Us</Link></button>
      </form>
    </div>
  </div>
</nav>

        </>

    );
};

export default Nav;