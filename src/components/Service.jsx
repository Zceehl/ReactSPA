import { useRef, useState } from 'react';
import Tech from '../assets/video/Tech_video.mp4';
import Poster from '../assets/img/Hero/experiences.webp';
import Play from '../assets/img/illustrations/play-solid.svg';
import Pause from '../assets/img/illustrations/pause-solid.svg';
import Roadmap from '../assets/img/icons/roadmap.svg';
import Dots from '../assets/img/illustrations/Dots.webp';
import Users from '../assets/img/icons/users-wm.svg';
import Share from '../assets/img/icons/share-91.svg';
import Meeting from '../assets/img/icons/video_meeting.svg';
import Opening from '../assets/img/icons/opening-times.svg';
import Favorite from '../assets/img/icons/card-favorite.svg';
import Wave from '../assets/img/illustrations/Wave_2.svg';

const Service = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowOverlay(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowOverlay(true);
    }
  };

  const services = [
    {
      icon: Roadmap,
      title: "Unlimited Projects",
      description: "Manage multiple projects at once for seamless business operation."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Manage your cross-functional teams better than ever with our easily manageable app."
    },
    {
      icon: Share,
      title: "File Sharing",
      description: "Easily share files where necessary with enhanced security and protection."
    },
    {
      icon: Meeting,
      title: "Video Meeting",
      description: "Conduct video meetings and keep records for further use with cloud storage."
    },
    {
      icon: Opening,
      title: "Time Tracking",
      description: "Track time to ensure meeting all deadlines while managing multiple projects."
    },
    {
      icon: Favorite,
      title: "Payment System",
      description: "Create invoices and get paid all in the same place with our easy payment system."
    }
  ];

  return (
    <section className="experience position-relative overflow-hidden" id="service">
      <div className="position-absolute top-0 start-0 end-0">
        <div className="bg-white py-3 py-md-9 py-xl-10"></div>
        <img className="wave" src={Wave} alt="Decorative wave pattern" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          
          <div className="col-12">
            <div className="position-relative z-1 text-center mb-8 mb-lg-9">
              <video
                ref={videoRef}
                className="w-100 h-100 rounded-4"
                src={Tech}
                poster={Poster}
                loop
                muted
              >
                Your browser does not support the video tag.
              </video>
              
              {showOverlay && (
                <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 rounded-4 bg-1100 bg-opacity-50"></div>
              )}
              
              <button 
                className="btn play-button position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "4rem", 
                  height: "4rem", 
                  transform: "translate(-50%, -50%)"
                }}
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <img 
                  className="play-pause-icon" 
                  src={isPlaying ? Pause : Play} 
                  alt=""
                  style={{
                    width: "1.5rem", 
                    height: "1.5rem"
                  }} 
                />
              </button>
              
              <div className="position-absolute dots d-none d-sm-block">
                <img className="img-fluid w-100" src={Dots} alt="Decorative dots" />
              </div>
            </div>
          </div>

          <div className="col-md-8 col-lg-7">
            <h2 className="fs-4 fs-lg-3 fw-bold text-center text-white mb-5 mb-lg-9 lh-sm">
              We made this app to solve your problems.
            </h2>
          </div>

          <div className="col-12">
            <div className="row gy-4 g-md-3 pb-8 pb-lg-11 px-1">
              {services.map((service, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-3">
                  <img src={service.icon} alt="" aria-hidden="true" />
                  <div>
                    <h5 className="fs-8 text-white lh-lg fw-bold">{service.title}</h5>
                    <p className="text-white text-opacity-50 lh-xl mb-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;