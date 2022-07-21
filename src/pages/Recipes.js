import React, { useState } from "react";
import Card from "../components/Card";
import items from "../allData";
import Button from "../components/Button";
import Chatbot from "../components/Chatbot";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];
const allCategoriesFR = [
  "Tout",
  ...new Set(items.map((item) => item.categoryFR)),
];

function Recipes(props) {
  const { language } = props;
  const [menuItem, setMenuItem] = useState(items);

  const filter = (button) => {
    if (button === "All" || button === "Tout") {
      setMenuItem(items);
      return;
    }
    var filteredData = "";
    language
      ? (filteredData = items.filter((item) => item.categoryFR === button))
      : (filteredData = items.filter((item) => item.category === button));
    setMenuItem(filteredData);
  };

  return (
    <div className="pb-16">
      <Chatbot language = {language} />
      <p className="text-center text-4xl pt-5 pb-5 underline underline-offset-2">
        {language ? "Explorez nos recettes!" : "Explore our recipes!"}
      </p>
      <Button
        button={language ? allCategoriesFR : allCategories}
        filter={filter}
      />
      <Card menuItem={menuItem} languageFlag={language} />
    </div>
  );
}

export default Recipes;
