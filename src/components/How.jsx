const How = () => {
    return (    
        <section className="container mb-8 mb-lg-11">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-7">
                <h3 className="fs-4 fs-lg-3 fw-bold text-center mb-2 mb-lg-x1"> How does <span className="text-nowrap">it work?</span></h3>
                <p className="fs-8 mb-7 mb-lg-8 text-center lh-lg">You can use this as it is or tweak it as you seem necessary. you seem necessary.</p>
              </div>
              <div className="col-12">
                <div className="row g-sm-2 g-lg-3 align-items-center timeline">
                  <div className="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
                    <div className="timeline-step-1 w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                      <div className="timeline-item d-flex justify-content-center">
                        <div className="timeline-icon bg-primary rounded-circle d-flex justify-content-center align-items-center"><span className="fs-6 fs-lg-5 fs-xl-4 text-white"> 1</span></div>
                      </div>
                    </div>
                    <div className="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                      <h6 className="fs-8 fw-bold text-lg-center lh-lg mb-2">Install App</h6>
                      <p className="text-lg-center lh-xl mb-0">Install the app with a single click.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
                    <div className="timeline-step-2 w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                      <div className="timeline-item d-flex justify-content-center">
                        <div className="timeline-icon bg-success rounded-circle d-flex justify-content-center align-items-center"><span className="fs-6 fs-lg-5 fs-xl-4 text-white"> 2</span></div>
                      </div>
                    </div>
                    <div className="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                      <h6 className="fs-8 fw-bold text-lg-center lh-lg mb-2">Add Team Members</h6>
                      <p className="text-lg-center lh-xl mb-0">Start with adding team members to <span className="text-nowrap">your channels. </span></p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
                    <div className="timeline-step-3 position-relative z-1 overflow-hidden w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                      <div className="timeline-item d-flex justify-content-center">
                        <div className="timeline-icon bg-info rounded-circle d-flex justify-content-center align-items-center"><span className="fs-6 fs-lg-5 fs-xl-4 text-white"> 3</span></div>
                      </div>
                    </div>
                    <div className="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                      <h6 className="fs-8 fw-bold text-lg-center lh-lg mb-2">Start Rolling</h6>
                      <p className="text-lg-center lh-xl mb-0">Start operating your business in a simpler way <span className="text-nowrap">and grow!</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default How
