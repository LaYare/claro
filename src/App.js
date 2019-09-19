import React, {Component} from 'react';
import spiner from './images/Spinner.gif';
import './App.css';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from './redux/actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSearch: '',
      results: [],
    };
  }

  componentDidMount = () => {
    this.props.actions.traerPeliculas();
  }

  handleSearch = (event) => {
    this.setState({
      toSearch: event.target.value
    })
  }

  handleResults = (event) => {
    event.preventDefault();
    const {
      movies
    } = this.props;
    const title = this.state.toSearch;
    let greaterTen = movies.movies.groups.filter(titles => titles.title.toUpperCase() === title.toUpperCase() );
    this.setState({
      results: greaterTen,
    })
  }

  handleClear = () => {
    this.setState({
      results: [],
    });
    document.getElementById('search').value = '';
  }
  render (){
    const {
      movies
    } = this.props;

    const {
      results
    } = this.state;

    let movi = [];

    if (results.length > 0) {
      movi = results;
    } else if (movies.movies.groups) {
      movi = movies.movies.groups;
    }
    return (
      <section className='container'>
        <header>
          <form>
            <input type='text' id='search' placeholder='Busca tu pelicula favorita' onChange={this.handleSearch}/>
            <input type='submit' value='Buscar' onClick={this.handleResults}/>
            <input type='button' value='Limpiar' onClick={this.handleClear}/>
          </form>
        </header>
        <section className='container-movie-item'>
          { movies.loading && movi ?
            <img src={spiner} alt='spiner'/> :
            movi.map((movie, index) => {
            return (
              <article key={index} className='movie-item'>
                <Link to={`/ifo/${ movie.id }`}>
                  <img src={movie.image_base_horizontal} alt={movie.title} className='movie-item--img'/>
                  <h3 className='movie-item-title'>
                    {movie.title}
                  </h3>
                </Link>
              </article>
            );
          })
          }
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.bookMovies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
