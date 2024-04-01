// Import
import thaiFoodLogo from "../assets/thai-food-logo.png"; // Thai food logo

// Create the Header component
export default function Header() {
  // JSX Output
  return (
    <header className="pt-10 sm:pt-12">
      <div className="max-w-32 mx-auto">
        <img className="max-w-full" src={thaiFoodLogo} alt="Thai Food Logo" />
      </div>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl md:pt-2 text-lime-700 font-semibold">
        Thai Food
      </h1>
      <p className="text-wrap text-justify lg:text-center  pt-1 sm:pt-2 ">
        Thai food is widely recognised as some of the world’s finest cuisine.
        Adapted by most countries around the world, Thai food is now one of the
        most popular cuisine options.
      </p>
    </header>
  );
}
