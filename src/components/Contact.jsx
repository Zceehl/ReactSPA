import greenDot from '../assets/img/illustrations/Green_dots.svg'
import Wave3 from '../assets/img/illustrations/Wave_3.svg'

const Contact = () => {
    return (    
        <section className="bg-300 position-relative z-0" id="contact">
            <div className="container py-8 py-lg-9">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-8">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <h2 className="fs-4 fs-lg-3 fw-bold text-center mb-2 lh-sm">Get latest updates</h2>
                      <p className="fs-8 mb-5 mb-lg-6 text-center lh-lg fw-normal"> Subscribe to our monthly newsletter to stay connected with everything you need!</p>
                    </div>
                    <div className="col-10 col-lg-7">
                      <form method="POST" onSubmit="return false;">
                        <div className="mb-2 w-100"><input className="form-control email-input" id="email" type="email" placeholder="Enter your email" required="required" /></div>
                        <div className="d-grid"><button className="btn btn-lg btn-primary lh-xl mb-x1" type="submit"> Subscribe </button></div>
                      </form>
                    </div>
                    <div className="col-10 col-lg-7">
                      <p className="text-center lh-lg mb-0">We’ll never share your details with third parties. View our Privacy Policy for more info.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute bottom-0 end-0 z-n1 d-none d-lg-block"><img src={greenDot} alt="" /></div>
            <div className="position-relative bottom-0 start-0 z-1"><img className="img-fluid w-100" src={Wave3} alt="" /></div>
          </section>
    )
}

export default Contact
