import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

const Landing = () => {
  const cn = 'landing-page';

  const history = useHistory();

  return (
    <div className={cn}>
      <div className={`${cn}__left ${cn}__landing-column`} onClick={() => history.push('/menu')}>
        <h2>order drinks</h2>
        <div className={`${cn}__column-content`}>
          <p>Choose from our curated list of drinks for an amazing experience that will keep the fun going throughout the night!</p>
          <p className="credits">Photo by <strong>Drew Beamer</strong> on <strong>Unsplash</strong></p>
        </div>
      </div>
      <div className={`${cn}__center`}>
        <h1>Bartendeets</h1>
      </div>
      <div className={`${cn}__right ${cn}__landing-column`} onClick={() => history.push('/queue')}>
        <h2>Make drinks</h2>
        <div className={`${cn}__column-content`}>
          <p>Login to get access to our order queue and help keep the drinks coming</p>
          <p className="credits">Photo by <strong>Stanislav Rozhkov</strong> on <strong>Unsplash</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
