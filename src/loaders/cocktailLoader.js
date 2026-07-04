import { getCocktailById } from '../api/cocktailDb';

export async function cocktailLoader({ params }) {
  try {
    const cocktail = await getCocktailById(params.id);

    if (!cocktail) {
      throw new Response('Cocktail not found', { status: 404 });
    }

    return cocktail;
  } catch (error) {
    if (error instanceof Response) {
      throw error;
    }

    throw new Response('Failed to fetch cocktail', { status: 500 });
  }
}
