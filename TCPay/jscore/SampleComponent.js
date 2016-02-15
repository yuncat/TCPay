'use strict'

import React,{
    View,
    Navigator
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

class SampleComponent extends React.Component {

    render() {
        var defaultName = 'FirstPageComponent';
        var defaultComponent = FirstPageComponent;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );

    }
}

export default SampleComponent
