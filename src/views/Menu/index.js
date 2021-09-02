import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './modules/actions';
import DrinkCard from '../../components/DrinkCard';
import { useDebounce } from '../../util/debounce';

import './styles.scss';

const Menu = props => {
  const {
    loading,
    drinks,
    fetchDrinks,
  } = props;

  const cn = 'menu-page';

  const [searchString, setSearchString] = useState('');
  const [visibleDrinks, setVisibleDrinks] = useState(drinks);

  const debouncedSearchString = useDebounce(searchString, 300);

  useEffect(() => {
    fetchDrinks();
  }, []);

  useEffect(() => {
    if (debouncedSearchString !== '') {
      setVisibleDrinks(drinks.filter(d => d.name.toLowerCase().includes(debouncedSearchString.toLowerCase())));
    } else {
      setVisibleDrinks(drinks);
    }
  }, [debouncedSearchString, JSON.stringify(drinks)]);

  return (
    <div className={cn}>
      <div className={`${cn}__actions`}>
        <input
          type="text"
          placeholder="Enter cocktail name"
          onChange={e => setSearchString(e.target.value)}
          value={searchString}
        />
        <button className="primary-color">View My Cart</button>
      </div>
      <div className={`${cn}__drinks-grid`}>
        {
          !loading ? visibleDrinks?.map(drink => <DrinkCard key={drink.drink_id} {...drink} />) : <p>Loading...</p>
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
