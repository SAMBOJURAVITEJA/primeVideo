import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')

  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="bg-container">
      <img
        className="primeVideoImage"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="contentContainer">
        <h1>Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
        <h1>Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
