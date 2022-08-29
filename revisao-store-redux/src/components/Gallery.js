import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import style from '../styles/PDP.module.css';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    }
  }

  handleClick = (index) => {
    this.setState({ index });
  }

  handleNext = () => {
    const { photos } = this.props;
    const last = photos.length - 1;
    this.setState((prevSt) => ({
      index: prevSt.index === last ? 0 : prevSt.index + 1,
    }))
  }

  handlePrev = () => {
    const { photos } = this.props;
    const last = photos.length - 1;
    this.setState((prevSt) => ({
      index: prevSt.index === 0 ? last : prevSt.index - 1,
    }))
  }

  render() {
    const { photos, title } = this.props;
    const { index } = this.state;
    return (
      <section className={ style.gallery }>
        <section className={ style.active_img }>
          <MdArrowBackIos className={ style.prev_img } onClick={ this.handlePrev } />
          <section className={ style.img_sect }>
            <img className={ style.lg_img } src={ photos[index].url } alt={ title } />
          </section>
          <MdArrowForwardIos className={ style.next_img } onClick={ this.handleNext } />
        </section>
        <section className={ style.sm_gallery }>
          {photos.map(({ id, url }, index) => (
            <img className={ style.sm_img } src={ url } alt={ title } key={ id } onClick={ () => this.handleClick(index) } />
          ))}
        </section>
      </section>
    )
  }
}

export default Gallery;
