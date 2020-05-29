import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Card from '../Card/Card';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    //icon: PropTypes.node,
    cards: PropTypes.array,
    //addCard: PropTypes.func,
  };

  render() {
    const {cards, title} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData}/>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;