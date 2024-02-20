import React, { useEffect, useState } from 'react'
import"./Home.scss";
import axios from "axios";
import{AiFillPlayCircle} from 'react-icons/ai';
import{AiOutlinePlus} from 'react-icons/ai';
const apiKey="8c64200bf72ccf123a8f52a424869a47";
const imgUrl="http://image.tmdb.org/t/p/original" 
const url="http://api.themoviedb.org/3"
const popular="popular";
const nowPlaying="now_playing"
const upcoming="upcoming";
const topRated="top_rated";


const Card = ({img}) => {
  return(
  <img className='card' src={img} alt=''/>
  )
}

const Row =({title, arr=[]}) => {
  return(
  <div className="row">
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index)=>(
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }
    
    </div>
  </div>
  )

}

const Home = () => {
  const[upcomingMovies,setUpcomingMovies]=useState([]);
  const[nowPlayingMovies,setNowPlayingMovies]=useState([]);
  const[topRatedMovies,setTopRatedMovies]=useState([]);
  const[popularMovies,setPopularMovies]=useState([]);

  useEffect(()=>{
    const fatchUpcoming = async()=>{
     const{data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
     
     setUpcomingMovies(results)

    };
    const fatchNowPlaying = async()=>{
      const{data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      
      setNowPlayingMovies(results)
 
     };
     const fatchTopRated = async()=>{
      const{data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
      
      setTopRatedMovies(results)
 
     };
     const fatchPopular = async()=>{
      const{data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      
      setPopularMovies(results)
 
     };
    fatchUpcoming();
    fatchNowPlaying();
    fatchPopular();
    fatchTopRated();

  },[])
  return (
    
    <section className='home'>
      <div className="banner" style={{
        backgroundImage: popularMovies[0]?`url(${imgUrl}/${popularMovies[0].poster_path})`:"rgb(16,16,16)"
      }}>
        {
          popularMovies[0]&&
          (
          <h1>{popularMovies[0].original_title}</h1>
          )
        }
         {
          popularMovies[0]&&
          (
          <p>{popularMovies[0].overview}</p>
          )
        }
        <div>
        <button type='button'><AiFillPlayCircle/>Play</button>
        <button type='button'>My List<AiOutlinePlus/></button>
        </div>
    

      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
      <Row title={"Now Playing Movies"} arr={nowPlayingMovies}/>
      <Row title={"Popular Movies"} arr={popularMovies}/>
      <Row title={"Top Rated Movies"} arr={topRatedMovies}/>
      
    </section>
    
  )
}

export default Home;