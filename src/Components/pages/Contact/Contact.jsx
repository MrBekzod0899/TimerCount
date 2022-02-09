import React, { useEffect } from "react";
import styles from "./contact.module.css";
import Aos from "aos";
import Footer from "../LandingPage/Footer/";
import Header from "../LandingPage/Header";

const iframe ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.182363317845!2d69.31507891497732!3d41.34838977926773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef49ea6884449%3A0x753619b3ebe003!2z0JHQvtKT0LjRiNCw0LzQvtC7INC60Z7Rh9Cw0YHQuCwg0KLQvtGI0LrQtdC90YIsIE9gemJla2lzdG9u!5e0!3m2!1suz!2s!4v1643640519171!5m2!1suz!2s"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>';


export default function Contact2() {
    const  [Elements, setElements] = React.useState({});
    
  useEffect(() => {
    Aos.init();
  });

  const handleSubmit=(obj)=>{
    setElements(obj)
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <> 
    <Header handleSubmit={handleSubmit} handleOpen={handleOpen} handleClose={handleClose} open={open}/>   
    <div className={styles.Container}>
      <div className="container">
        <div className="row">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="col-lg-3 col-md-6 col-sm-6 col-12"
          >
            <div className={styles.officePosition}>
              <div className="card p-4">
                <div className={styles.positionIcon1}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={styles.MainOffice}>
                  <h4>Our Location</h4>
                </div>
                <div>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="col-lg-3 col-md-6 col-sm-6 col-12"
          >
            <div className={styles.officePosition}>
              <div className="card p-4">
                <div className={styles.positionIcon2}>
                  <i className="fas fa-phone"></i>
                </div>
                <div className={styles.MainOffice}>
                  <h4>Our Contact</h4>
                </div>
                <div>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            className="col-lg-3 col-md-6 col-sm-6 col-12"
          >
            <div className={styles.officePosition}>
              <div className="card p-4">
                <div className={styles.positionIcon3}>
                  <i className="fas fa-fax"></i>
                </div>
                <div className={styles.MainOffice}>
                  <h4>Our Fax</h4>
                </div>
                <div>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            className="col-lg-3 col-md-6 col-sm-6 col-12"
          >
            <div className={styles.officePosition}>
              <div className="card p-4">
                <div className={styles.positionIcon4}>
                  <i className="far fa-envelope"></i>
                </div>
                <div className={styles.MainOffice}>
                  <h4>Our Email</h4>
                </div>
                <div>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            className="col-lg-6 col-md-6 col-sm-12 col-12 p-0"
          >
            <div className={styles.contactInfo}>
              <div className={styles.contactForm}>
                <h2 data-aos="fade-left" data-aos-duration="1000">
                  Biz bilan a'loqa
                </h2>
                <div className={styles.formLeft}>
                  <label data-aos="fade-left" data-aos-duration="2000">
                    Ismni Kiriting
                  </label>
                  <input
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    type="text"
                    placeholder="Ism"
                  />
                </div>
                <div className={styles.formRight}>
                  <label data-aos="fade-left" data-aos-duration="2000">
                    Telefon raqam
                  </label>
                  <input
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    type="text"
                    placeholder="raqam"
                  />
                </div>
                <div className={`mt-2 ${styles.clear}`}></div>
                <label htmlFor="textarea" className="d-block">
                  Xabar junatish
                </label>
                <textarea
                  data-aos="zoom-in-right"
                  data-aos-duration="2000"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Masalan: Biz judayam minnatdormiz! Raxmat janob."
                ></textarea>
                <button type="submit" className={styles.SendInfoContact}>
                  Junatish
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <div className={styles.contactMaps}>
              <div dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div> 
    </>
   
  );
}