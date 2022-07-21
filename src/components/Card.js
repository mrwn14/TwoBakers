import React from "react";
import { useNavigate } from "react-router-dom";

function Card({menuItem, languageFlag}) {
  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 pb-5 grid-cols-1 lg:mx-40 md:mx-20">
      {menuItem.map((item) => {
        return (
          <a onClick={() => navigate("/TwoBakers/Recipe" , {state:{item: item}})} target="_blank">
            <div
              className=" bg-white border drop-shadow-xl p-10 m-b5 hover:bg-gray-200 m-4 hover:scale-105 transition ease-in-out cursor-pointer"
              key={item.id}
            >
              <div className="lg:h-card md:h-mcard overflow-hidden justify-center text-center">
                <img
                  className="w-full mb-5 border"
                  src={item.image}
                  alt="food"
                />
                {languageFlag ? (
                  <h2 className="text-xl">{item.titleFR}</h2>
                ) : (
                  <h2 className="text-xl">{item.title}</h2>
                )}
                {languageFlag ? (
                  <p>{item.descriptionFR}</p>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Card;
