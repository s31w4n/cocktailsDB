export const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const searchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// Format drinks object
export function formatDrinks(data) {
  const formattedDrinks = data.map((item) => {
    const {
      idDrink,
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strGlass,
      strCategory,
    } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
      category: strCategory,
    };
  });

  return formattedDrinks;
}

// Format single drink data object
export function formatSingleDrink(data) {
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  // Pull out valid ingredients
  const ingredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  const newCocktail = {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  };

  return newCocktail;
}
