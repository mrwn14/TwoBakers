import "./Chatbot.css";
import { useState } from "react";
import bread from "../assets/bread.png";

function Chatbot(props) {
  const { language } = props;
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
    const botMessage = document.querySelector("#message2");
    const humanMessage = document.querySelector("#message1");

    let welcome = [
      "Sup|sup|Hello|Hi|hello|Bonjour|bonjour|bonsoir|Bonsoir|Salut|salut|hey|Hey|Yo",
    ];
    let words2 = new RegExp(welcome);

    let bye = [
      "Bye|bye|goodbye|Goodbye|See you later|see you later|See you|see you|nice day|au revoir|Au revoir",
    ];
    let words3 = new RegExp(bye);
    let thanks = ["Thanks|thanks|thank|thank|Thank|merci|Merci"];
    let words4 = new RegExp(thanks);
    let how = [
      "How are you|how are you doing|how are you doing today|How are you doing today|how are you|Comment allez-vous|comment allez-vous|Comment allez vous|comment allez vous",
    ];
    let words5 = new RegExp(how);
    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice|tres bien|très bien|Tres bien|Très bien|cool|Cool",
    ];
    let words6 = new RegExp(good);
    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good|good|I'm good|i'm good|great|Great|Je vais bien|je vais bien",
    ];
    let words7 = new RegExp(response);
    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name|Who are you|who are you|Quel est votre nom|quel est votre nom|qui êtes vous|Qui êtes vous|qui etes vous|Qui etes vous",
    ];
    let words8 = new RegExp(nameAsk);
    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you|Quel est votre âge|Quel est votre age|quel est votre âge|quel est votre age|Quel age avez vous|quel age avez vous",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    let recipeAsk = [
      "about the recipe|about the recipes|About the recipe|About the recipes|À propos des recettes|A propos des recettes|a propos des recettes",
    ]; //adding the age-question
    let words12 = new RegExp(recipeAsk);

    let bakeryAsk = [
      "about the bakery|About the bakery|À propos de la boulangerie|A propos de la boulangerie|a propos de la boulangerie",
    ]; //adding the age-question
    let words13 = new RegExp(bakeryAsk);

    let helpAsk = ["help|Help|Aide|aide"];
    let words14 = new RegExp(helpAsk);

    let contactAsk = [
      "How to contact|how to contact|Comment nous contacter|comment nous contacter",
    ];
    let words15 = new RegExp(contactAsk);

    let callAsk = [
      "I want to call|i want to call|Je veux appeler|je veux appeler",
    ];
    let words16 = new RegExp(callAsk);

    let complaintAsk = [
      "I have a complaint|i have a complaint|J'ai une plainte|j'ai une plainte",
    ];
    let words17 = new RegExp(complaintAsk);

    let addAsk = [
      "I want to add a recipe|i want to add a recipe|Je veux ajouter une recette|je veux ajouter une recette",
    ];
    let words18 = new RegExp(addAsk);

    //hello
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Bonjour à vous ! En quoi puis-je vous aider?")
          : (botMessage.innerHTML = "Hello there! What can I help you with?");

        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    //bye
    else if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "J'espère que cela vous a été utile, bonne journée!")
          : (botMessage.innerHTML = "Hope this was helpful, have a nice day!");

        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    //thanks
    else if (words4.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML = "Pas de soucis ! Autre chose?")
          : (botMessage.innerHTML = "No worries! Anything else?");
        document.querySelector("#input").value = "";
      }, 2000);
    }
    //how are you
    else if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Je vais très bien! En quoi puis-je vous aider?")
          : (botMessage.innerHTML =
              "I'm doing great! What can I help you with?'");

        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    //nice
    else if (words6.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "😁";
        document.querySelector("#input").value = "";
      }, 1000);
    }
    //i'm fine answer
    else if (words7.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML = "C'est bien.")
          : (botMessage.innerHTML = "That is good");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //whats your name
    else if (words8.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Mon nom est Bot, je suis votre assistant virtuel.")
          : (botMessage.innerHTML =
              "My name is Bot, I am your virtual assistant.");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //how old are you
    else if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML = "J'ai 19 ans.")
          : (botMessage.innerHTML = "I am 19 years old");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //abour recipes
    else if (words12.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Nos recettes sont 100% artisanales, saines et les meilleures que vous puissiez goûter. Découvrez-les sur la page 'Recipes'.")
          : (botMessage.innerHTML =
              "Our recipes are 100% handmade, healthy, and the best you'll ever taste. Check them out on the 'Recipes' page.");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //about bakery
    else if (words13.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Les informations relatives à la boulangerie se trouvent dans la section 'About'.")
          : (botMessage.innerHTML =
              "Information about the bakery is located in the 'About' section.");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //help
    else if (words14.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Les questions que vous pouvez poser : \n - À propos de la boulangerie \n - À propos des recettes \n - Comment nous contacter \n - Je veux appeler \n - J'ai une plainte \n - Je veux ajouter une recette ")
          : (botMessage.innerHTML =
              "Questions you can ask: \n - About the bakery \n - About the recipes \n - How to contact \n - I want to call \n - I have a complaint \n - I want to add a recipe");
        document.querySelector("#input").value = "";
      }, 2000);
    }
    //how to contact
    else if (words15.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Vous pouvez nous contacter en remplissant le formulaire de la page 'Contact', ou nous appeler au (123) 456-7890.")
          : (botMessage.innerHTML =
              "You can contact us by filling the form in the 'Contact' page, or call us at (123) 456-7890");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //i want to call
    else if (words16.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Bien sûr ! Vous pouvez nous appeler au (123) 456-7890.")
          : (botMessage.innerHTML =
              "Of course! You can give us a call at (123) 456-7890");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //i have a complaint
    else if (words17.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Nous sommes désolés de l'apprendre, faites-le nous savoir via le formulaire de contact et nous vous enverrons une réponse dès que possible.")
          : (botMessage.innerHTML =
              "We're sorry to hear that, let us know through the Contact form and we'll send you a response as soon as possible");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //i want to add a recipe
    else if (words18.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "C'est génial, envoyez-nous le formulaire de contact et nous l'ajouterons dans la prochaine mise à jour.")
          : (botMessage.innerHTML =
              "That's great, send it our way though the Contact form and we'll add it in the next update");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    //anything
    else {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        language
          ? (botMessage.innerHTML =
              "Je n'ai pas compris. Tapez 'aide' pour obtenir des suggestions!")
          : (botMessage.innerHTML =
              "I did not understand. Type 'help' for suggestions!");

        document.querySelector("#input").value = "";
      }, 2000);
    }
    humanMessage.innerHTML = document.querySelector("#input").value; // display the input
  };
  return (
    <div className=" fixed bottom-0 right-0 z-50 " onLoad={checkStatus}>
      <div className={" w-[100%]" + (expand ? " flex" : " hidden")}>
        <div className="fixed right-0 bottom-0 wrapper w-full ">
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
                  <div className="human-message" id="message2"></div>
                  <div className="bot-message" id="message1"></div>
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
          <svg
            fill="#8510d8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z" />
          </svg>
        ) : (
          <div className="flex flex-col justify-end animate-bounce">
            <div className=" bg-white whitespace-nowrap py-2 px-3 border-solid border-2 border-black rounded-full -translate-x-6 translate-y-5">
              Come Chat!
            </div>
            <div className="ml-auto">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 25 4 C 12.316406 4 2 12.972656 2 24 C 2 30.1875 5.335938 36.066406 10.949219 39.839844 C 10.816406 40.890625 10.285156 43.441406 8.183594 46.425781 L 7.078125 47.992188 L 9.054688 48 C 14.484375 48 18.15625 44.671875 19.363281 43.394531 C 21.195313 43.796875 23.089844 44 25 44 C 37.683594 44 48 35.027344 48 24 C 48 12.972656 37.683594 4 25 4 Z" />
              </svg>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

export default Chatbot;
