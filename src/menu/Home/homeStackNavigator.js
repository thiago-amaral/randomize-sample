import { createStackNavigator } from 'react-navigation-stack';

import Home from './index.js';
import RandomNumbers from '../../screens/randomNumbers/index.js';
import GroupsGenerator from '../../screens/groupsGenerator/index.js';
import Lists from '../../screens/listsAndOrders/index.js';
import RandomTable from '../../screens/randomTable/index.js';
import Dice from '../../screens/dice/index.js';
import HeadsOrTails from '../../screens/headsOrTails/index.js';

export default createStackNavigator({
    Home: { screen : Home },
    RandomNumbers: { screen: RandomNumbers },
    GroupsGenerator: { screen: GroupsGenerator },
    Lists: { screen: Lists },
    RandomTable: { screen: RandomTable },
    Dice: { screen: Dice },
    HeadsOrTails: { screen: HeadsOrTails },
}, {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: { headerVisible: false }
});
