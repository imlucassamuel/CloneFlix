import React, { useEffect, useState } from 'react'
import GetHomeList, { GetMovieInfo } from './tmdb';
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

import './App.css'

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackLineHeader, setBlackLineHeader] = useState(false);
  
  useEffect(() => {
    const loadAll = async () => {
      let list = await GetHomeList();
      setMovieList(list)

      let getOriginals = list.filter(movie => movie.slug === 'originals');
      let radomChosen = Math.floor(Math.random() * (getOriginals[0].items.results.length - 1));
      let chosen = getOriginals[0].items.results[radomChosen];
      let chosenInfo = await GetMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      
    }
    loadAll()
  }, []);

  useEffect(() => {
    const scrollListner = () => {
      if(window.scrollY > 10){
        setBlackLineHeader(true);
      }
      else{
        setBlackLineHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListner)

    return () => {
     window.removeEventListener('scroll', scrollListner)

    }
  }, [])

  return (
    <div className='page'>
      <Header display={blackLineHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        <p>Feito com <span role="img" aria-label="coração">❤</span></p>
        <p>Direitos de imagem para Netflix</p>
        <p>Dados obtidos no themoviedb.org</p>
      </footer>

      
    </div>

   
   
  );
}

