// Import image paths
import gaengDaengImg from "./assets/gaeng-daeng.jpeg";
import keengLueangImg from "./assets/keeng-lueang.jpeg";
import khaoPadImg from "./assets/khao-pad.jpeg";
import padThaiImg from "./assets/pad-thai.jpeg";
import tomYumImg from "./assets/tom-yum.jpeg";

// Export array of objects with popular dishes
export const POPULAR_DISHES = [
  {
    image: padThaiImg,
    title: "Pad Thai",
    description:
      "Stir-fried noodles. An iconic Thai dish, Pad Thai is usually made with flat rice noodles, combined with seafood (or chicken or pork)",
  },
  {
    image: tomYumImg,
    title: "Tom Yum Goong",
    description:
      "An iconic dish from the central region, this clear soup boasts an extravagant combination of shallots, lemongrass, mushroom, red chili peppers, lime juice, galangal, and fish sauce.",
  },
  {
    image: keengLueangImg,
    title: "Kaeng Lueang",
    description:
      "Yellow Curry. Known for its delicious range of curries from the mild to the explosive, there are a wide range of regional curry variations, however, there are three main types of Thai curry.",
  },
  // {
  //   image: gaengDaengImg,
  //   title: "Gaeng Daeng",
  //   description:
  //     "Red Curry. The authentic Thai red curry is a happy medium between the yellow and green curry options, it is spicier than yellow curry but not as hot as green curry.",
  // },
  {
    image: khaoPadImg,
    title: "Khao Pad",
    description:
      "Thai Fried Rice.  A lunchtime favourite, this Thai fried rice is made with either chicken, beef, pork, seafood or fish. This is stir-fried with jasmine rice, eggs, fish sauce and vegetables.",
  },
];

// Export object of objects with recipies
export const RECIPIES = {
  // Pad Thai
  padThai: {
    ingredients: [
      "8 oz. rice noodles, broken in half",
      "6 tbsp. peanut or vegetable oil, divided",
      "1 lb. medium shrimp, peeled, deveined, tails removed",
      "3 large eggs",
      "3 tbsp. palm sugar",
      "3 tbsp. Thai fish sauce",
      "2 tbsp. tamarind puree",
      "1 tbsp. fresh lime juice, plus lime wedges for serving",
      "1/4 tsp. cayenne pepper",
      "1 medium shallot, finely chopped (about 3 tbsp.)",
      "3 cloves garlic, finely chopped",
      "6 scallions, cut into 1 pieces",
      "1 c. bean sprouts",
      "1/4 c. coarsely chopped peanuts",
      "2 tbsp. coarsely chopped fresh cilantro (optional)",
    ],
    instructions: [
      "If using dried noodles, in a large pot or heatproof bowl, soak noodles in boiling water until tender, 20 to 30 minutes.",
      "Meanwhile, in a large wok over high heat, heat 1 tablespoon oil. Add shrimp and cook, turning halfway through, until just cooked through and pink, 2 to 3 minutes. Transfer to a medium bowl.",
      "In same wok, heat 1 tablespoon oil. In a small bowl, whisk eggs until blended. Cook, stirring occasionally and breaking up curds with a spoon, until just set, 1 to 2 minutes. Transfer to bowl with shrimp.",
      "In a small bowl, whisk palm sugar, fish sauce, tamarind concentrate, lime juice, cayenne, 2 tablespoons oil, and 1 tablespoon water until combined.",
      "In same wok over medium-high heat, heat 2 tablespoons oil. Cook shallot and garlic, stirring frequently, until lightly golden, about 1 minute. Add scallions and cook, stirring frequently, until softened, 1 to 2 minutes. Stir in sauce and bring to a simmer.",
      "Add eggs, shrimp, and noodles and cook, tossing constantly, until warmed through and noodles are softened, about 2 minutes more. Add bean sprouts and peanuts and toss again to combine.",
      "Divide pad Thai among plates. Top with cilantro (if using).",
    ],
  },
  tomYumGoong: {
    ingredients: [
      "4 cups vegetable broth",
      "1 pound raw shrimp, unpeeled and deveined",
      "4 limes, juiced with pulp",
      "4 Thai chile peppers, quartered (Optional)",
      "2 stalks lemongrass, quartered",
      "4 (1/4-inch-thick) slices fresh ginger root",
      "2 tablespoons tom yum paste",
      "1 ½ tablespoons fish sauce",
      "1 tablespoon white sugar",
      "1 tablespoon chile sauce",
      "6 baby bella mushrooms, sliced",
      "2 green onions, thinly sliced",
    ],
    instructions: [
      "Combine vegetable broth and shrimp in a large pot over medium-high heat. Bring to a low boil for 10 minutes, then lower heat and simmer for 10 minutes. Remove shrimp from broth; remove and discard shells. Set cooked shrimp aside.",
      "Add lime juice and pulp, chile peppers, lemongrass, ginger, tom yum paste, fish sauce, sugar, and chile sauce to broth; cook for 10 minutes. Remove chile peppers, lemongrass, and ginger slices with a slotted spoon and discard. Return cooked shrimp to broth and remove the pot from heat.",
      "Ladle soup into bowls. Top with mushrooms and green onions.",
    ],
  },
  kaengLueang: {
    ingredients: [
      "1/2 English cucumber",
      "2 large shallots or 1/2 medium red onion, peeled and sliced thinly lengthwise",
      "1 green or red jalapeño pepper, sliced thinly crosswise",
      "1/2 cup granulated sugar",
      "1/2 cup white distilled vinegar (no substitute)",
      "2 tablespoons water",
      "1/2 teaspoon salt",
      "1/4 cup kari (karee) curry paste (see note)",
      "1 1/2 cups full-fat coconut milk",
      "1 pound low-starch, waxy potatoes, peeled (optional) and cut into 2-inch cubes",
      "1 pound medium yellow or white onions, peeled and cut lengthwise into 6 wedges",
      "2 tablespoons fish sauce, or to taste",
      "1 pound boneless, skinless chicken breasts or thighs, cut into 2-inch cubes",
    ],
    instructions: [
      "Cut the half cucumber in half lengthwise. With the cut side down, cut each half crosswise into thin slices; place in a glass bowl. Add shallot (or red onion) slices and pepper slices to cucumber bowl; set aside.",
      "Combine sugar, vinegar, water, and salt in a small saucepan. Set over medium heat and cook, stirring occasionally until sugar has completely dissolved (the mixture doesn't have to be boiled), immediately remove from heat. Allow the sauce to cool down to slightly warmer than room temperature, then pour it over cucumber-shallot-pepper mixture. Stir, cover with a piece of plastic wrap, and keep chilled.",
      "In a 2-quart saucepan set over medium-high heat, heat about 1/2 cup of coconut cream (the thick part that rises to the top of the can) with curry paste. Once coconut fat splits, add potato, onion, remaining coconut milk, and fish sauce to the saucepan. Add just enough water, if necessary, to keep the ingredients submerged. Bring to a boil; cover, lower the heat so the mixture simmers, and cook, stirring occasionally, until potatoes cubes are softened, about 15 minutes.",
      "Add chicken to the pot. Bring mixture back to a gentle boil, cover and simmer until chicken is cooked through, 5 to 8 minutes. Check for seasoning, adding more fish sauce if necessary.",
      "Serve with steamed jasmine rice and prepared ajat.",
    ],
  },
  khaoPad: {
    ingredients: [
      "2 tablespoons vegetable oil",
      "2 teaspoons minced garlic - this equates to roughly 3 fat garlic cloves.",
      "1 teaspoon grated ginger - or finely sliced",
      "2 eggs",
      "3 tablespoons light soy sauce",
      "1 tablespoon oyster sauce - and/or fish sauce",
      "1 teaspoon sugar",
      "few pinches white pepper (to taste) - or black pepper",
      "800 grams cooked Jasmine rice - refrigerated overnight",
      "50 grams spring onions - Finely sliced. Use both green and white parts. This equates to roughly 3-4 medium spring onions.",
      "2 heaped tablespoons coriander - chopped",
      "1-2 red chillies (optional) - finely sliced",
      "lime wedges for serving",
    ],
    instructions: [
      "Measure out your sauces and have all your chopped ingredients ready. This is a fast-cooking dish, so it's helpful to have everything at the ready.",
      "In a large frying pan or wok, heat the oil over medium-high heat.",
      "Add the chopped garlic and ginger and fry until you see a few specks of garlic browning.",
      "Break the eggs into the pan and let them sit for a few seconds until they just start to set a little.",
      "Using your spatula, break the eggs up and move them around the pan quickly to prevent sticking and too rapid browning.",
      "Cook the eggs until they are soft-set and avoid over-scrambling them. This should not take much longer than 30 seconds from when you broke the eggs into the pan.",
      "Add the soy and oyster sauce, pepper and sugar. Tip all the cold, cooked rice into the pan as well.",
      "Still over medium-high heat and working quickly, move the rice around the pan, breaking it up and combining it with the rest of the ingredients. Stir until the rice is hot throughout.",
      "Remove the pan from the heat and add the spring onions, chopped coriander and optional chopped chilli.",
      "Stir your fresh additions through the rice and serve immediately with a wedge of lime on the side.",
    ],
  },
};
