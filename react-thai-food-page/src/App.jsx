// Import
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// Components
import Header from "./components/Header"; // Header component
import PopularDish from "./components/PopularDish"; // PopularDish component
import TabButton from "./components/TabButton"; // TabButton component
// Data
import { POPULAR_DISHES } from "./data"; // Popular dishes array
import { RECIPIES } from "./data"; // Object of objects with recipies

// Create the App component
function App() {
  // useState function - it is a react hook that checks the state of the app and rerenders it if something has changed
  // It MUST be on the top level of the component function
  // Create a destructed array to store the value (1 - the current state; 2 - what to change)
  const [selectedTopic, setSelectedTopic] = useState();

  // Add the handleClick function
  function handleClick(selectedButton) {
    // setSelectedTopic function that is controlled by useState
    setSelectedTopic(selectedButton);
  }

  // Define the tabContent
  let tabContent = <p className="">Please select the dish.</p>;
  // if a topic was selected
  if (selectedTopic) {
    tabContent = (
      <div className="bg-lime-200 rounded pt-1  pb-4 md:pb-5 px-2 sm:px-3 md:px-4">
        {/*Ingredients*/}
        <h2 className="font-medium">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/*Automatically fill the list with <ul>'s*/}
          {RECIPIES[selectedTopic].ingredients.map((ingredient) => (
            <li key={ingredient} className="text-sm text-wrap">
              {ingredient}
            </li>
          ))}
        </ul>
        {/*Instructions*/}
        <h2 className="font-medium pt-4">Instructions</h2>
        <ul className="list-decimal list-inside">
          {/*Automatically fill the list with <ul>'s*/}
          {RECIPIES[selectedTopic].instructions.map((instruction) => (
            <li key={instruction} className="text-sm text-wrap pb-2">
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // JSX Output
  return (
    // The whole page
    <div className="container mx-auto px-4">
      {/*Header*/}
      <Header />
      {/*Main content*/}
      <main>
        {/*Popular dishes section*/}
        <div className="bg-lime-600 rounded pt-3  pb-4 md:pb-5  mt-6 md:mt-8">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl text-amber-100">
            Popular Dishes
          </h2>
          {/*Popular dishes list that is filled from an array of objects*/}
          <ul className="flex flex-wrap justify-around gap-5 sm:gap-4 pt-2 sm:pt-3 md:pt-4 px-2">
            {/*Dynamically output PopularDish based on the length of POPULAR_DISHES*/}
            {/*Add key in order to get rid of the warning*/}
            {POPULAR_DISHES.map((dishItem) => (
              <PopularDish key={dishItem.title} {...dishItem} />
            ))}
          </ul>
        </div>
        {/*Recipies section*/}
        <div className="py-3 md:py-4  mt-6 md:mt-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-lime-950 font-medium">
            Recipies
          </h2>
          {/*Buttons of topics - onClick tab-content will be displayed*/}
          <div className="py-3 md:py-4 flex flex-wrap gap-1">
            <TabButton
              text={"Pad Thai"}
              isSelected={selectedTopic === "padThai"}
              onClick={() => handleClick("padThai")}
            />
            <TabButton
              text={"Tom Yum Goong"}
              isSelected={selectedTopic === "tomYumGoong"}
              onClick={() => handleClick("tomYumGoong")}
            />
            <TabButton
              text={"Kaeng Lueang"}
              isSelected={selectedTopic === "kaengLueang"}
              onClick={() => handleClick("kaengLueang")}
            />
            <TabButton
              text={"Khao Pad"}
              isSelected={selectedTopic === "khaoPad"}
              onClick={() => handleClick("khaoPad")}
            />
          </div>
          {/*Tab content that is displayed based on whether a topic is selected*/}
          {tabContent}
        </div>
      </main>
    </div>
  );
}

export default App;
