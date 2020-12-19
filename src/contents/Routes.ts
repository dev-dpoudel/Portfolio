import HomePage from './Home';
import Contact from './Contact'
import Projects from './Projects'

const route = [
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "/projects",
      component: Projects
    }
  ];

export {route};
