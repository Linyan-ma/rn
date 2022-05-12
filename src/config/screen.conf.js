import Demo from '../views/Demo'
import Home from '../views/Home'

import Welcome from '../views/Welcome'
import TabNavigator from '../views/TabNavigator'

const Screen = [
  {
    name: 'Demo',
    component: Demo,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Welcome',
    component: Welcome,
  },
  {
    name: 'TabNavigator',
    component: TabNavigator,
    options: {
      headerShown: false,
    },
  },
]
export default Screen
