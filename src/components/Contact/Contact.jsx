import React from "react";

export const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="innerwrap">
        <section className="text-center py-10">
          <div className="mb-2 uppercase">Contact Us</div>
          <div className="h-1 bg-gray-300 mx-auto w-36 my-2"></div>
          <h1 className="text-3xl text-purple-600">Drop Us a Mail</h1>
        </section>

        <section className="flex flex-wrap justify-between mx-auto">
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden" style={{ height: "550px" }}>
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
          <div className="w-full md:w-1/2 mt-8 md:mt-0 p-4">
            <div>
              <p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
              <p><span className="text-gray-500">Phone :</span> +91 976885083</p>
              <p><span className="text-gray-500">Email :</span> vivek.mengu016@gmail.com</p>
              <p><span className="text-gray-500">Fax :</span> +91 9768850839</p>
            </div>
            <div className="mt-8">
              <h3 className="text-purple-600 border-b border-gray-200 pb-4">Want to Know More?? Drop Us a Mail</h3>
              <form>
                <div className="flex flex-wrap mb-2">
                  <input
                    className="flex-1 m-1 p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="FirstName"
                  />
                  <input
                    className="flex-1 m-1 p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="LastName"
                  />
                </div>
                <div className="flex flex-wrap mb-2">
                  <input
                    className="flex-1 m-1 p-2 border border-gray-300 rounded"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="flex-1 m-1 p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="Contact Number"
                  />
                </div>
                <textarea
                  className="w-full m-1 p-2 border border-gray-300 rounded"
                  rows="4"
                  placeholder="Your message here..."
                ></textarea>
                <button type="submit" className="block mx-auto bg-purple-600 text-white px-6 py-2 rounded mt-4">Send</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
