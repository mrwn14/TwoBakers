import "./Chatbot.css";
import { useState } from "react";
import bread from "../assets/bread.png";

function Chatbot() {
  const [expand, setExpand] = useState(false);

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${day} ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable
  // console.log(dateTime);

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, 20 April 2022") {
      //if the dateTime is Thursday, 20 April 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".status"); // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Inactive";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const humanMessage = document.querySelector("#message2");

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"]; //adding the bad words
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Please do not use bad words"; // display this message
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let welcome = ["Sup|sup|Hello|Hi|hello|hi|Yo|Halla|yello|yelow"];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Hello There how are you doing today?";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let bye = [
      "Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you",
    ];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Bye, have a nice day";
        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not active";
        status.style.color = "red";
      }, 5000);
    }

    let thanks = [
      "Thanks|thanks|thank you|thank you very much|thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "You are welcome";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am fine, thank you";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "😁";
        document.querySelector("#input").value = "";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good|good|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "That is good";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name|Who are you|who are you",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "My name is Bot";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Don't worry about it ;)";
        document.querySelector("#input").value = "";
      }, 2000);
    }


    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am 1 year old";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    humanMessage.innerHTML = document.querySelector("#input").value; // display the input
  };
  return (
    <div className="App fixed right-0 z-50 translate-y-44" onLoad={checkStatus}>
      <div className={" w-[100%]" + (expand ? " flex" : " hidden")}>
        <div className="wrapper w-full -translate-y-44">
          <div className="content">
            <div className="header">
              <div className="img">
                <img src={bread} alt="robot" />
              </div>
              <div className="right">
                <div className="name">ChatBot</div>
                <div className="status"></div>
              </div>
            </div>
            <div className="main">
              <div className="main_content">
                <div className="messages">
                  <div className="bot-message" id="message1"></div>
                  <div className="human-message" id="message2"></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="btm">
                <div className="input">
                  <input
                    type="text"
                    id="input"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="btn">
                  <button onClick={handleInput}>
                    <i className="fas fa-paper-plane"></i>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="text-black text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none cursor-pointer"
        type="button"
        onClick={() => setExpand(!expand)}
      >
        {expand ? (
            <svg fill="#FFD0D0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z"/></svg>
            ) : (
            <svg fill="#FFD0D0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z"/></svg>
        )}
      </button>
    </div>
  );
}

export default Chatbot;
