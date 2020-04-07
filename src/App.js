import React from "react";
import axios from 'axios';


// 063426a1e0139ca2b7238d48958dadc5

class App extends React.Component {
  state = {
    movies: []
  }

  // getMovies = async () => {
  //   await fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=063426a1e0139ca2b7238d48958dadc5&language=en-US&page=1"
  //   ).then(response => response.json()).then(json => this.setState({
  //     movies: json.results
  //   }));
 
  // }

  getMovies = async () => {
    const {data: {results}} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=063426a1e0139ca2b7238d48958dadc5&language=en-US&page=1");
    this.setState({movies: results});
  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const {movies} = this.state;
    return (
      <>
      {movies.map(movie => {
        return <div>{movie.title}</div>
      })}
      </>
    )
  }
}
export default App;