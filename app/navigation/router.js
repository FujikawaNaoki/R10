import { createRouter } from '@exponent/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import Layout from './NavigationLayout';

export default Router = createRouter(() => ({
  layout: () => Layout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
}));