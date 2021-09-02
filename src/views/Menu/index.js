import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './modules/actions';
import DrinkCard from '../../components/DrinkCard';

import './styles.scss';

const Menu = props => {
  const {
    loading,
    drinks,
    fetchDrinks,
  } = props;

  const cn = 'menu-page';

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div className={cn}>
      <div className={`${cn}__actions`}>
        <input type="text" placeholder="Enter cocktail name" />
        <button className="primary-color">View My Cart</button>
      </div>
      <div className={`${cn}__drinks-grid`}>
        {
          !loading && drinks?.map(drink => <DrinkCard key={drink.drink_id} {...drink} />)
        }
      </div>
    </div>
  );
};

Menu.propTypes = {
  loading: PropTypes.bool.isRequired,
  drinks: PropTypes.array.isRequired,
  fetchDrinks: PropTypes.func.isRequired,
};

export default connect(state => ({
  ...state.menuPage,
}), {
  fetchDrinks: actions.fetchDrinks,
})(Menu);
