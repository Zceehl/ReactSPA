import Collaborator from '../assets/img/Hero/Collaborator.webp'

const Collab = () => {
    return (    
        <section className="container mb-8 mb-lg-13">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-xl-5 order-lg-1"><img className="img-fluid" src={Collaborator} alt="" /></div>
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="row justify-content-center justify-content-lg-start">
                  <div className="col-sm-10 col-md-8 col-lg-11">
                    <h2 className="fs-4 fs-lg-3 fw-bold mb-2 text-center text-lg-start"> Organize remote team fast & easily.</h2>
                    <p className="fs-8 mb-4 mb-lg-5 lh-lg text-center text-lg-start fw-normal">Organizing and managing your remote teams has never been this easy!</p>
                  </div>
                  <div className="col-12">
                    <div className="mb-x1 mb-lg-3">
                      <h5 className="fs-8 fw-bold lh-lg mb-1">Create Unlimited Teams </h5>
                      <p className="b-0 lh-xl">Create unlimited teams and boost productivity with efficient collaboration.</p>
                    </div>
                    <div>
                      <h5 className="fs-8 fw-bold lh-lg mb-1"> Hasslefree Chat with Everyone</h5>
                      <p className="lh-xl mb-0">With unique and simple UIs, keep yourself connected across all the teams.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Collab
