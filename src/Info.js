import React, {Component} from 'react';
import './App.css';
import back from './images/back.svg'
import spiner from './images/Spinner.gif';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from './redux/actions/index';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      names: [],
      open: false,
    };
  }

  componentDidMount = () => {
    this.props.actions.traerInfo(this.props.match.params.id);
  }

  render (){
    const {
      info
    } = this.props;

    let common = '';

    if (info.info.group) {
      common = info.info.group.common;
    }

    if (info.loading) {
      return (
        <section className='info-movie-container'>
          <p><Link to={`/`} className='back-link'><img src={back} alt='back' className='back-icon'/>REGRESAR</Link></p>
          <img src={spiner} alt='spiner'/>
        </section>
      );
    }

    return (
      <section className='info-movie-container'>
        <Link to={`/`} className='back-link'><img src={back} alt='back' className='back-icon'/>REGRESAR</Link>
        <h1 className='info-movie-title'>{ info.info.group ? common.title : null }</h1>
        {
          info.info.group ?
          <section className='container-movie-item'>
            <article>
              <img src={ common.image_base_horizontal } alt={ common.image_large_alt } className='movie-item--img'/>
            </article>
            <article className='info-movie-text'>
              <p className='movie-title-text'>{common.title}</p> <br/>
              <p className='movie-text-date'>
                <span>({common.extendedcommon.media.publishyear})</span>
                <span>{common.extendedcommon.media.duration}</span>
                <span title={common.extendedcommon.media.rating.desc} className='cursor'>
                  {common.extendedcommon.media.rating.code}
                </span>
              </p>
              <br/>
              <p className='info-movie-genders font-weight'>Géneros:
              {
                common.extendedcommon.genres.genre.map((star, index) => {
                  return (
                    <span key={index} >
                      &nbsp;{star.desc},&nbsp;
                    </span>
                  );
                })
              }
              </p>
              <br/>
             <p><span className='font-weight'>Reseña: </span>{ common.extendedcommon.media.rating.desc }</p>
             <br/>
             {common.extendedcommon.roles.role.map((title, index) => {
                 return (
                   <p key={index} className='info-movie-genders'>
                     <span className='font-weight'> {title.desc}:</span>
                     {
                       title.talents.talent.map((nam, i) => {
                         return (
                           <span key={i} className='movie-text-box'>
                             {nam.fullname}
                           </span>
                         );
                       })
                     }
                   </p>
                 );
               })
             }
            <br/>
            <p><span className='font-weight'>Título original: </span>{ common.title}</p>
            </article>
          </section>
          : null
        }
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.infoMovie
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
)(Info);
