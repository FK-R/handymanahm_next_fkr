
import ContactForm from "@/app/components/ContactForm";

import ContactCard from "@/app/components/ContactCard";
import Image from "next/image";
import baner from "../images/contact.jpg";
import faq from "../images/faq.png";
const Contact = () => {
    return (
        <>
<div className="bg-contact">
<Image src={baner} alt="Contact HandymanAHM"    />
</div>
<ContactCard/>

<ContactForm/>
<section>
<div className="container">
   <div className="row align-items-center">
   <div className="col-lg-6">
        
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
             
Do you provide other all handyman services?



              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              Yes, we provide all kinds of handyman services as your need.
                </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       
Do you provide painting services?


              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              Yes, we also provide painting services and we have expertise to decorate your house nicely.
                </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
   
Do you provide home renovation as well?



              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              We also do that service.
                   </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree3" aria-expanded="false" aria-controls="flush-collapseThree3">
       
Do you provide wooden floor polishing service?



              </button>
            </h2>
            <div id="flush-collapseThree3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample3">
              <div class="accordion-body">
              We gladly do that service.
                   </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
     
Do you provide security, warenty of products and quotations?



              </button>
            </h2>
            <div id="flush-collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
              <div class="accordion-body">
              Ofcourse we do that. We ensure you the best possible security and good warenty of products as requirements.we also provide quotations for our valuable customer.
                      </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree1" aria-expanded="false" aria-controls="flush-collapseThree1">
           Are your company certified?
              </button>
            </h2>
            <div id="flush-collapseThree1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
              <div class="accordion-body">
              We are certified.
                </div>
                 </div>
          </div>
        </div>
            </div>
            <div className="col-lg-6 p-5">
            <Image src={faq} className="faq" alt="handymanahm faq"    />
            </div>
   </div>
</div>

</section>
         
        </>
    );
};

export default Contact;