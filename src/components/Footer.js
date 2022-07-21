import React, { useState } from "react";
import bread from "../assets/bread.png";
import { useNavigate } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();
  const { language } = props;
  return (
    <footer className="p-4 bg-gray-100 sm:p-6 dark:bg-gray-800">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a
            onClick={() => navigate("/TwoBakers")}
            className="flex items-center cursor-pointer justify-center mb-10"
          >
            <img src={bread} className="mr-3 h-8" alt="Two Bakers Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Two Bakers
            </span>
          </a>
          <div className="self-center text-md whitespace-nowrap dark:text-white">
            Phone number : (123) 456-7890
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {language ? "Ressources" : "Resources"}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://www.pinterest.ca/lovefromtheoven/baking-recipes-to-try/"
                  className="hover:underline"
                >
                  {language ? "Idées de pâtisserie" : "Baking Ideas"}
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/TwoBakers/About/#top")}
                  className="hover:underline cursor-pointer"
                >
                  {language ? "A Propos" : "About"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {language ? "Suivez-nous" : "Follow Us"}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://www.facebook.com/bakersthreee/"
                  className="hover:underline "
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.ca/lovefromtheoven/baking-recipes-to-try/"
                  className="hover:underline"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://www.privacypolicies.com/blog/privacy-policy-template/"
                  className="hover:underline"
                >
                  {language ? "Politique de confidentialité" : "Privacy Policy"}
                </a>
              </li>
              <li>
                <a
                  href="https://termly.io/resources/templates/terms-and-conditions-template/#:~:text=A%20terms%20and%20conditions%20agreement,your%20website%20and%20its%20users."
                  className="hover:underline"
                >
                  {language ? "conditions générales" : "Terms and Conditions"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300 w-1/2 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022{" "}
          <a href="" className="hover:underline">
            Two Bakers
          </a>
          {language ? ". Tous Droits Réservés" : ". All Rights Reserved."}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
