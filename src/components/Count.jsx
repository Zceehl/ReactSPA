import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Count = () => {
  const [currentUsers, setCurrentUsers] = useState(1395);
  const counterRef = useRef(null);
  const incrementInterval = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          incrementInterval.current = setInterval(() => {
            setCurrentUsers(prev => prev + Math.floor(Math.random() * 3) + 1);
          }, 2000);
        } else {
          clearInterval(incrementInterval.current);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      clearInterval(incrementInterval.current);
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section className="container border-bottom mb-8 mb-lg-10">
      <div className="row pb-6 pb-lg-8 g-3 g-lg-8 px-3">
        <div className="col-12 col-md-4">
          <h2 className="fs-3 fw-bold lh-sm mb-2 text-center">
            <CountUp end={6} prefix="0" duration={2.5} />
          </h2>
          <h6 className="fs-8 fw-normal lh-lg mb-0 opacity-70 text-center">
            Offices worldwide
          </h6>
        </div>

        <div className="col-12 col-md-4">
          <h2 className="fs-3 fw-bold lh-sm mb-2 text-center">
            <CountUp end={238} duration={2.5} />
          </h2>
          <h6 className="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">
            Available seats
          </h6>
        </div>

        <div ref={counterRef} className="col-12 col-md-4">
          <h2 className="fs-3 fw-bold lh-sm mb-2 text-center">
            <CountUp
              end={currentUsers}
              duration={1.2}
              separator=","
              preserveValue={true}
            />
          </h2>
          <h5 className="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">
            Active workspace users
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Count;