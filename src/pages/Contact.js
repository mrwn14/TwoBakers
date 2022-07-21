import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import Popup from "../components/Popup";

function Contact(props) {
  const navigate = useNavigate();
  const { language } = props;
  const nameRef = React.useRef();
  const phoneRef = React.useRef();
  const emailRef = React.useRef();
  const expertiseRef = React.useRef();
  const messageRef = React.useRef();
  const [popup, setPopup] = useState(false);

  const handlePopup = (event) => {
    setPopup((popup) => !popup);
  };

  const Submit = () => {
    const message1 = "Name value";
    const message2 = "phone Number";
    const message3 = "Email address";
    const message4 = "Expertise in baking value";
    const message5 = "Message value";
    var count = 0;
    var lastMessage = "";
    if (nameRef.current.value === "") {
      lastMessage += message1;
      count++;
    }
    if (phoneRef.current.value === "") {
      lastMessage += " and " + message2;
      count++;
    }
    if (emailRef.current.value === "") {
      lastMessage += " and " + message3;
      count++;
    }
    if (expertiseRef.current.value === "") {
      lastMessage += " and " + message4;
      count++;
    }
    if (messageRef.current.value === "") {
      lastMessage += " and " + message5;
      count++;
    }

    if (lastMessage === "") {
      handlePopup();
    } else {
      if (count == 1) {
        lastMessage += " is empty";
      } else {
        lastMessage += " are empty";
      }
      if (lastMessage.slice(0, 5) === " and ") {
        lastMessage = lastMessage.slice(5);
      }

      alert(lastMessage);
    }
  };

  return (
    <div>
      <Chatbot language={language} />
      {popup ? (
        <Popup
          name={nameRef.current.value}
          email={emailRef.current.value}
          language={language}
        />
      ) : (
        <div></div>
      )}

      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {language ? "Donnez-nous votre avis!" : "Give us your feedback!"}
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 -m-2">
              <div className="p-2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    {language ? "Nom" : "Name"}
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 ">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {language ? "Numéro de Téléphone" : "Phone Number"}
                  </label>
                  <input
                    ref={phoneRef}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {language ? "Adresse Courriel" : "Email Address"}
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {language
                      ? "Experience en Pâtisserie"
                      : "Expertise in baking"}
                  </label>
                  <input
                    ref={expertiseRef}
                    type="text"
                    id="shipping"
                    name="shipping"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              {/* <Link
                to={"/TwoBakers/"}
                >
                  <button onClick={alert("Thank you for your feedback!")} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">

                  </button>
                </Link> */}
              <div
                className="self-end"
                onClick={() => {
                  Submit();
                }}
              >
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  {language ? "Soumettre" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
