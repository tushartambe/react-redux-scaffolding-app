import React from 'react'
import Movie from './Movie'
import { connect } from 'react-redux'
import { loadMovies } from '../actions/movies'

class Movies extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    this.props.onMoviesLoad();
  }

  render() {
    return (
      <div className="container d-flex" style={{ flexWrap: "wrap", maxWidth: "auto" }}>
        {
          this.props.movies.map((movie, index) => <Movie movie={movie} key={index + movie.Title} />)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMoviesLoad: () => { dispatch(loadMovies()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);