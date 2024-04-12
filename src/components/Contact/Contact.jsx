import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="container">
      <div className="innerwrap">
        <section className="section1 clearfix">
          <div className="textcenter">
            <span className="shtext">Contact Us</span>
            <span className="seperator"></span>
            <h1>Drop Us a Mail</h1>
          </div>
        </section>

        <section className="section2 clearfix">
          <div className="col2 column1 first">
            {/* Using an iframe to display Google Maps */}
            <div
              className="sec2map"
              style={{ overflow: "hidden", height: "550px", width: "100%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6120.792724789083!2d91.42053501709134!3d23.83736638671194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ed626f9bf605%3A0xa275e562390127f!2sNIT%20Agartala!5e0!3m2!1sen!2sin!4v1712903905127!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col2 column2 last">
            <div className="sec2innercont">
              <div className="sec2addr">
                <p>
                  45 BC, a Latin professor at Hampden-Sydney College in Virginia
                </p>
                <p>
                  <span className="collig">Phone :</span> +91 976885083
                </p>
                <p>
                  <span className="collig">Email :</span>{" "}
                  vivek.mengu016@gmail.com
                </p>
                <p>
                  <span className="collig">Fax :</span> +91 9768850839
                </p>
              </div>
            </div>
            <div className="sec2contactform">
              <h3 className="sec2frmtitle">
                Want to Know More?? Drop Us a Mail
              </h3>
              <form action="">
                <div className="clearfix">
                  <input
                    className="col2 first"
                    type="text"
                    placeholder="FirstName"
                  />
                  <input
                    className="col2 last"
                    type="text"
                    placeholder="LastName"
                  />
                </div>
                <div className="clearfix">
                  <input
                    className="col2 first"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="col2 last"
                    type="text"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="clearfix">
                  <textarea
                    name="textarea"
                    cols="30"
                    rows="7"
                    defaultValue="Your message here..."
                  ></textarea>
                </div>
                <div className="clearfix">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
