import React, {useState} from "react";
import bread from "../assets/bread.png"
import {useNavigate} from 'react-router-dom'

function Footer(props) {
  const navigate = useNavigate();
  const {language} = props;
  return (
    <footer class="p-4 bg-gray-100 sm:p-6 dark:bg-gray-800">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a class="flex items-center cursor-pointer justify-center mb-10">
            <img
              src={bread}
              class="mr-3 h-8"
              alt="Two Bakers Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Two Bakers
            </span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
               {language ? "Ressources" : "Resources"}
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://www.pinterest.ca/lovefromtheoven/baking-recipes-to-try/" class="hover:underline">
                {language ? "Idées de pâtisserie" : "Baking Ideas"}
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/TwoBakers/About/#top")} class="hover:underline cursor-pointer">
                {language ? "A Propos" : "About"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            {language ? "Suivez-nous" : "Follow Us"}
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="https://www.facebook.com/bakersthreee/"
                  class="hover:underline "
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.ca/lovefromtheoven/baking-recipes-to-try/" class="hover:underline">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://www.privacypolicies.com/blog/privacy-policy-template/" class="hover:underline">
                {language ? "Politique de confidentialité" : "Privacy Policy"}
                </a>
              </li>
              <li>
                <a href="https://termly.io/resources/templates/terms-and-conditions-template/#:~:text=A%20terms%20and%20conditions%20agreement,your%20website%20and%20its%20users." class="hover:underline">
                {language ? "conditions générales" : "Terms and Conditions"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-300 w-1/2 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex items-center justify-center">
        <span class="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022{" "}
          <a href="" class="hover:underline">
            Two Bakers
          </a>
          {language ? ". Tous Droits Réservés" : ". All Rights Reserved."}
          
        </span>
      </div>
    </footer>
  );
}

export default Footer;
