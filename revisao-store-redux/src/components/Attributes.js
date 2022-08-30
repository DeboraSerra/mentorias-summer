import React from 'react';
import style from '../styles/PDP.module.css';

class Attributes extends React.Component {
  render() {
    const { attributes } = this.props;
    return (
      <section className={ style.att_sect }>
        {attributes.map(({ id, name, value_name: value }) => (
          <section key={ id }>
            <h3>{name}</h3>
            <p>{value}</p>
          </section>
        ))}
      </section>
    );
  }
}

export default Attributes;
