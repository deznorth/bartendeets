import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './modules/actions';

const Landing = props => {
  const {
    init,
    exampleResponse,
  } = props;

  useEffect(() => {
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <pre>{JSON.stringify(exampleResponse, null, 2)}</pre>
    </div>
  );
};

export default connect(state => ({
  ...state.landingPage,
}), {
  init: actions.init,
})(Landing);
