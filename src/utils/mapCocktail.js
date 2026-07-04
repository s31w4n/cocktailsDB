export function getIngredients(drink) {
  return Array.from({ length: 15 }, (_, index) => {
    return drink[`strIngredient${index + 1}`];
  }).filter(Boolean);
}

export function mapCocktailSummary(drink) {
  const {
    idDrink,
    strDrink,
    strGlass,
    strCategory,
    strAlcoholic,
    strDrinkThumb,
  } = drink;

  return {
    id: idDrink,
    name: strDrink,
    image: strDrinkThumb,
    info: strAlcoholic,
    glass: strGlass,
    category: strCategory,
  };
}

export function mapCocktailDetail(drink) {
  const {
    strDrink: name,
    strGlass: glass,
    strAlcoholic: info,
    strDrinkThumb: image,
    strCategory: category,
    strInstructions: instructions,
  } = drink;

  return {
    name,
    info,
    image,
    glass,
    category,
    instructions,
    ingredients: getIngredients(drink),
  };
}
