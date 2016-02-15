'use strict';

import React, {
	View,
	Text,
	Component,
	StyleSheet,
} from 'react-native';

// 对外申明ES6使用 export default，代替ES5的 module.exports
export default class Hello extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Hello world</Text>
			</View>
			);
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#666666'
	},
	welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// module.exports = Hello;
