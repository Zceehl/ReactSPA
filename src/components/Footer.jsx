import appstore from '../assets/img/logos/App_Store.webp'
import playstore from '../assets/img/logos/Play_Store.webp'

const Footer = () => {
    return (
        <footer className="pt-7 pt-lg-8">
          <div className="container">
            <div className="row gy-4 g-md-3 border-bottom pb-8 pb-lg-9 justify-content-center">
              <div className="col-6 col-md-3">
                <p className="mb-2 lh-lg ls-1">Company</p>
                <ul className="list-unstyled text-1100">
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#about">About us</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#contact"> Contact us</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!">Careers</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!">Press</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <p className="mb-2 lh-lg">Product</p>
                <ul className="list-unstyled text-1100">
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!">Features</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!"> Pricing</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!"> News</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!"> Help desk</a></li>
                  <li className="mb-1"><a className="ls-1 lh-xl" href="#!"> Support</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <p className="mb-2 lh-lg"> Legal</p>
                <ul className="list-unstyled text-1100">
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!">Privacy</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!"> Terms & Conditions</a></li>
                  <li className="mb-1"> <a className="ls-1 lh-xl" href="#!"> Return Policy</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-3 d-md-flex flex-column align-items-md-end pe-md-0">
                <div>
                  <p className="mb-2 lh-lg"> Download Our App</p>
                  <div className="mb-1 mb-lg-2"> <a className="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#!"> <img className="img-fluid" src={appstore} alt="assets/img/logos/App_Store.webp" /></a></div><a className="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#!"> <img className="img-fluid" src={playstore} alt="assets/img/logos/Play_Store.webp" /></a>
                </div>
              </div>
            </div>
            <div className="row gy-2 py-3 justify-content-center justify-content-md-between">
              <div className="col-auto ps-0">
                <p className="text-center text-md-start lh-xl text-1100"> © 2024 Copyright, All Right Reserved, Made by <a className="fw-semi-bold" href="">USer X </a>❤️</p>
              </div>
              <div className="col-auto pe-0"><a className="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#!"><span className="uil uil-twitter"> </span></a><a className="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#!"><span className="uil uil-instagram"></span></a><a className="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#!"><span className="uil uil-linkedin"> </span></a></div>
            </div>
          </div>
        </footer>
    )
}

export default Footer