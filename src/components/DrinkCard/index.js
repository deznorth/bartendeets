import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DrinkCard = props => {
  const {
    drink_id,
    name,
    description,
    image_url,
    handleAction,
  } = props;

  const cn = "drink-card";

  return (
    <div className={cn}>
      <p className={`${cn}__name`}>{name}</p>
      <div
        className={`${cn}__content`}
        style={{ '--imageurl': `url(${image_url})` }}
      >
        <p className={`${cn}__content__description ${cn}__extra`}>{description}</p>
        <button
          className={`primary-color ${cn}__extra`}
          onClick={() => handleAction(drink_id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

DrinkCard.propTypes = {
  drink_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default DrinkCard;
