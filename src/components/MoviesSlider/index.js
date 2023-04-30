import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  console.log(movies)
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="moviesSliderContainer">
      <Slider {...settings}>
        {movies.map(each => (
          <MovieItem each={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
