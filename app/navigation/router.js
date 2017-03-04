import { createRouter } from '@exponent/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import Faves from '../scenes/Faves';
import Layout from './NavigationLayout';
import Speaker from '../scenes/Speaker';
import Maps from '../scenes/Maps';

const Router = createRouter(() => ({
  layout: () => Layout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
  faves: () => Faves,
  speaker: () => Speaker,
  maps: () => Maps,
}));

export default Router;