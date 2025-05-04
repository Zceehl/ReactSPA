import Team from '../assets/img/Hero/Team.webp'

const About = () => {
    return (    
        <section className="container mb-8 mb-lg-13" id="about">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-xl-7"><img className="img-fluid" src={Team} alt="" /></div>
              <div className="col-12 col-lg-6 col-xl-5">
                <div className="row justify-content-center justify-content-lg-start">
                  <div className="col-sm-10 col-md-8 col-lg-12">
                    <h2 className="fs-4 fs-lg-3 fw-bold mb-2 text-center text-lg-start">Collaborate with team members.</h2>
                    <p className="fs-8 mb-4 mb-lg-5 lh-lg text-center text-lg-start fw-normal">We share common trends and strategies for improving your rental income</p>
                  </div>
                  <div className="col-12">
                    <div className="mb-x1 mb-lg-3">
                      <h5 className="fs-8 fw-bold lh-lg mb-1">Project Based Groups </h5>
                      <p className="mb-0 lh-xl">You can use this module to monitor ongoing projects seamlessly.</p>
                    </div>
                    <div>
                      <h5 className="fs-8 fw-bold lh-lg mb-1"> Unlimited Video Meetings</h5>
                      <p className="lh-xl mb-0">Conduct unlimited video meetings with us for better business operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default About
