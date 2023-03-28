import React, { useState } from "react";
import { commonUrl } from "../../services/config";
import ContactModel from "../elements/contact-model";
import Footer from "./footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputValidate, setInputValidate] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const sendMail = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    };
    if (
      inputValidate.name !== inputValue.name &&
      inputValidate.email !== inputValue.email
    ) {
      fetch(`${commonUrl}/send`, options)
        .then((response) => response.json())
        .then((response) => {
          //console.log(response, "hello world");
          if (response.code === 200) {
            setInputValidate(inputValue);

            setShowModal(true);
            setTimeout(() => {
              setShowModal(false);
            }, 5000);
          } else {
            toast.error("Something went wrong!, Try again later");
          }
        })
        .then((response) => {
          setInputValue({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          toast.dismiss();
          toast.error("Something went wrong!, Try again later");
          console.error(err, "error from client");
        });
    } else {
      toast.dismiss();
      toast.warning("It looks like you have already submitted the form!");
    }
  };
  return (
    <div>
      <div className="text-gray-600 relative font-common ">
        <div className="flex flex-col text-center w-full  px-1 py-5">
          <span className="sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900 font-common">
            Contact Us
          </span>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Have any questions? we'd love to hear from you.
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 "
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              title="map"
              // src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              src="https://maps.google.com/maps?q=21,%20elkhorn%20street,%20bellbird%20park&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <a
                  href="https://goo.gl/maps/zD5wbBjVa8BBKnTE7"
                  //</div>target="_blank"
                >
                  <p className="mt-1">
                    21 Elkhorn street, Bellbird Park, Queensland - 4300,
                    Australia.
                  </p>
                </a>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="https://mail.google.com"
                  //target={"_blank"}
                  className="text-indigo-500 leading-relaxed"
                >
                  excelbeesdigital@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a href="tel:0416683460">
                  <p className="leading-relaxed">+61 416 683 460</p>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please comment to improve our knowledge.
            </p>
            <div className=" w-full ">
              <form onSubmit={(e) => sendMail(e)}>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={inputValue.name}
                    onChange={(e) => handleChange(e)}
                    name="name"
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={inputValue.email}
                    onChange={(e) => handleChange(e)}
                    name="email"
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={inputValue.message}
                    onChange={(e) => handleChange(e)}
                    name="message"
                  />
                </div>
                <button
                  className="text-white bg-[#00A6fb] border-0 py-2 px-6 focus:outline-none hover:bg-[#0582ca] transition-all ease-in-out duration-300  hover:scale-105 rounded text-lg w-full"
                  type="submit"
                >
                  Button
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        {showModal && (
          <ContactModel handle={setShowModal} tickState={showModal} />
        )}
      </div>
      <Footer />
    </div>
  );
}
