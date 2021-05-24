const apiKey = 'cf812cb87e723672e57ee63a214037d5';
const apiBase = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${apiBase}${endpoint}`);
  const json = await req.json();
  return json
}

export default async function GetHomeList() {

  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
    },
    {
      slug: 'trending',
      title: 'Recomendados',
      items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${apiKey}`)
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
    },
  ];
}


export async function GetMovieInfo(movieId, type){
  let info = {};

  if(movieId){
    switch(type){
  
      case 'movie':
        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`)
      break;
      
      case 'tv':
        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`)
      break;
      default:
        info = null;
    }
  }

  return info;
}