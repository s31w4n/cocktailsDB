import { COCKTAIL_DB_ENDPOINTS } from '../constants/cocktailDb';
import { mapCocktailDetail, mapCocktailSummary } from '../utils/mapCocktail';

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export async function searchCocktails(searchTerm) {
  const data = await fetchJson(`${COCKTAIL_DB_ENDPOINTS.search}${searchTerm}`);
  const { drinks } = data;

  if (!drinks) {
    return [];
  }

  return drinks.map(mapCocktailSummary);
}

export async function getCocktailById(id) {
  const data = await fetchJson(`${COCKTAIL_DB_ENDPOINTS.lookup}${id}`);

  if (!data.drinks?.[0]) {
    return null;
  }

  return mapCocktailDetail(data.drinks[0]);
}
