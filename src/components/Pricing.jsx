const Pricing = () => {
    return (    
        <section className="bg-300" id="pricing">
            <div className="container py-8 py-lg-10">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7">
                  <h3 className="fs-4 fs-lg-3 fw-bold text-center mb-2 mb-lg-x1 lh-sm">Pricing made easy</h3>
                  <p className="fs-8 mb-7 mb-lg-8 text-center lh-lg fw-normal">Show your pricing to your customers once they’re here with easily modifiable pricing cards. </p>
                </div>
                <div className="col-12">
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                    <div className="p-x1 text-center price-card-1 bg-transparent border mb-3 mb-md-0 rounded-2 pricing-card">
                      <p className="fs-10 text-uppercase mb-3 fw-bold text-primary ls-2"> Starter</p>
                      <h2 className="mb-3"><span className="fs-6 fs-md-7 fw-bold">$</span><span className="fs-2 fs-md-1 fw-bold">19</span><span className="fs-9 lh-xl font-sans-serif">/ mo</span></h2>
                      <ul className="list-unstyled fs-8 lh-xl fw-light text-1100 ls-1">
                        <li className="py-x1 px-1 border-top"> Upto 100 Team Members </li>
                        <li className="py-x1 px-1 border-top"> 100 GB Cloud Storage </li>
                        <li className="py-x1 px-1 border-top"> Unlimited Meetings </li>
                        <li className="py-x1 px-1 border-top"> Premium Support </li>
                        <li className="mt-1 d-grid"> <button className="btn btn-secondary btn-lg lh-xl">Get Started Now</button></li>
                      </ul>
                    </div>
                    <div className="p-x1 text-center bg-white border shadow-sm rounded-2 pricing-card">
                      <p className="fs-10 text-uppercase mb-3 fw-bold text-primary ls-2"> Unlimited</p>
                      <h2 className="mb-3"><span className="fs-6 fs-md-7 fw-bold">$</span><span className="fs-2 fs-md-1 fw-bold">99</span><span className="fs-9 lh-xl font-sans-serif">/ mo</span></h2>
                      <ul className="list-unstyled fs-8 lh-xl fw-light text-1100 ls-1">
                        <li className="py-x1 px-1 border-top"> Unlimited Team Members </li>
                        <li className="py-x1 px-1 border-top"> Unlimited Cloud Storage </li>
                        <li className="py-x1 px-1 border-top"> Unlimited Meetings </li>
                        <li className="py-x1 px-1 border-top"> Premium Support </li>
                        <li className="mt-1 d-grid"> <button className="btn btn-primary btn-lg lh-xl">Get Started Now</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Pricing
