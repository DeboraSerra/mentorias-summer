import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

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
      <section>
        {photos.map(({ id, url }, index) => (
          <img src={ url } alt={ title } key={ id } onClick={ () => this.handleClick(index) } />
        ))}
        <MdArrowBackIos onClick={ this.handlePrev } />
        <img src={ photos[index].url } alt={ title } />
        <MdArrowForwardIos onClick={ this.handleNext } />
      </section>
    )
  }
}

export default Gallery;
