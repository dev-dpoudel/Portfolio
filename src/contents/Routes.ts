import HomePage from './Home';
import Contact from './Contact'
import Projects from './Projects'

const route = [
  {
    path: "/",
    component: Projects
  },
  {
    path: "/Home",
    component: HomePage
  },
  {
    path: "/Contact",
    component: Contact
  },
  {
    path: "/Projects",
    component: Projects
  }
];

export { route };
