import React from 'react';
import styles from './Column.scss';
import { checkPropTypes } from 'prop-types';

class Column extends React.Component {
  static protypes = {
    title: checkPropTypes.node,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.colTitle}</h3>
      </section>
    )
  }
}

export default Column;