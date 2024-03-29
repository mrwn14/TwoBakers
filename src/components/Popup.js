import React from "react";
import { useNavigate } from "react-router-dom";

function Popup({ name, email, language }) {
  const navigate = useNavigate();
  console.log(language);
  return (
    <div
      className="absolute z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    {language ? "Commentaires envoyés" : "Feedback Sent"}
                  </h3>
                  <div className="mt-2">
                    {language ? (
                      <p className="text-sm text-gray-500">
                        Merci {name} pour vos commentaires ! <br />
                        Un courriel à "{email}" sera envoyé dans les 2 à 4 jours
                        ouvrables.
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Thank you {name} for your feedback! <br />
                        An email to "{email}" will be sent in 2 to 4 business
                        days.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={() => navigate("/TwoBakers")}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {language
                  ? "Retourner à la page principale"
                  : "Go back to main page"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
