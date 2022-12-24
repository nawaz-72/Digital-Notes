import React from 'react'


const About = () => {
  
  return (
    <div className="container">
    <h1>About Us</h1>
  <div className="accordion" id="accordionExample" >
    <div className="accordion-item" >
      <h2 className="accordion-header" id="headingOne" >
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          
        >
          Gmail
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
        
      >
        <div className="accordion-body" >
          <strong>nawaz72000@gmail.com.</strong>
        </div>
      </div>
    </div>
    <div className="accordion-item" >
      <h2 className="accordion-header" id="headingTwo" >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          
        >
          Contact
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
        
      >
        <div className="accordion-body" >
          <strong>+923188335727.</strong>
        </div>
      </div>
    </div>
    <div className="accordion-item" >
      <h2 className="accordion-header" id="headingThree" >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          
        >
          About website
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
        
      >
        <div className="accordion-body" >
          <strong>This is Digiatal Notebook,</strong> in which you can store personal notes which is not seen to anyone except you
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default About