import * as ExampleProxy from './example';
import * as AuthProxy from './auth';
import * as DrinksProxy from './drinks';
import * as OrdersProxy from './orders';

// Root Proxy
const rootProxy = {
  ...ExampleProxy,
  ...AuthProxy,
  ...DrinksProxy,
  ...OrdersProxy,
};

export default rootProxy;