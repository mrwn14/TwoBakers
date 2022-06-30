import React from "react";
import me from "../assets/thatme.png";
import bread from "../assets/bread.png";
import Chatbot from '../components/Chatbot'

function About() {
  return (
    <div id="top" className="relative grid h-full md:flex">
      <Chatbot/>
      {/* right side of the website */}
      <div className="grid-cols-1 mx-auto md:flex-[3_3_0%]">
        <img className="md:w-[75%] w-[90%] mx-auto mb-10 mt-5 drop-shadow-xl" src={me} />
        <div className="w-[75%] mx-auto">
          <h1 id="History" className=" text-2xl font-semibold mb-5">Our History</h1>
          <p className="mb-16">
            Two Bakers is the trusted destination for bakers of all levels to
            learn, be inspired, and share their enthusiasm for baking with those
            they love. Home to the best recipes, content, tips and tools; we
            bring baking to life in everything we do, so you can do the same in
            your own home. <br /> <br />
            We want to create, educate and inspire you to become the best baker
            you can be, so we never show you a cake without helping you make it,
            reveal a product without a recipe, or recommend anything that
            doesn’t make you and your baking better. <br /> <br />
            Our recipes are scrumptious, and like all good things in life are
            best enjoyed as part of a balanced lifestyle. With that in mind, we
            create alternative recipe options to suit your needs including;
            reduced sugar, no-nuts, gluten-free and many more. Have a peek at
            those recipes here. <br /> <br />
            As part of The Silver Spoon Company; a trusted family of baking
            brands including Silver Spoon Sugar, Allinson Flour, Billington’s
            Sugar and Nielsen-Massey Vanilla and Flavoured Extracts, we will
            only ever bring you brands we believe will make you a better baker.
            If you know of a brand, or you are a brand that you think deserves
            to be a part of the mixing bowl contact us here
          </p>
          <p className="w-full h-px my-5 bg-gray-700"></p>
          <h1 id="Beginning" className=" text-2xl font-semibold mb-5">The Beginning of Two Bakers Bakery</h1>
          <p className="mb-16">
            Two Bakers is the trusted destination for bakers of all levels to
            learn, be inspired, and share their enthusiasm for baking with those
            they love. Home to the best recipes, content, tips and tools; we
            bring baking to life in everything we do, so you can do the same in
            your own home. <br /> <br />
            We want to create, educate and inspire you to become the best baker
            you can be, so we never show you a cake without helping you make it,
            reveal a product without a recipe, or recommend anything that
            doesn’t make you and your baking better. <br /> <br />
            Our recipes are scrumptious, and like all good things in life are
            best enjoyed as part of a balanced lifestyle. With that in mind, we
            create alternative recipe options to suit your needs including;
            reduced sugar, no-nuts, gluten-free and many more. Have a peek at
            those recipes here. <br /> <br />
            As part of The Silver Spoon Company; a trusted family of baking
            brands including Silver Spoon Sugar, Allinson Flour, Billington’s
            Sugar and Nielsen-Massey Vanilla and Flavoured Extracts, we will
            only ever bring you brands we believe will make you a better baker.
            If you know of a brand, or you are a brand that you think deserves
            to be a part of the mixing bowl contact us here
          </p>
        </div>
      </div>

      {/* right side of the website  */}
      <div className="relative flex-1 md:bg-gray-200 pb-40">
        
        <div className="w-2/3 translate-y-10 mx-auto">
          <div className="hidden md:block">
            <a
              className=" flex font-bold leading-relaxed  py-2 whitespace-nowrap uppercase text-white"
              href="#"
            >
              <img className="h-7" src={bread} />
              <p className="px-4 text-md lg:text-lg text-black">Two Bakers</p>
            </a>
          </div>
          <p className="w-full h-px my-5 bg-gray-700"></p>
          <h1 className=" text-center text-2xl">Quick Links</h1>
          <p className="w-full h-px my-5 bg-gray-700 mb-10"></p>
          <a href="#History" className="text-red-500 font-semibold mt-10 mb-5 cursor-pointer">
            Our history
          </a>
          <br />
          <div className="my-6"></div>
          <a  href="#Beginning" className="text-red-500 font-semibold my-10 cursor-pointer">
            The Beginning of Two Bakers Bakery
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
