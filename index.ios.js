/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
     AppRegistry,
     ScrollView,
     StyleSheet,
     Text,
     View,
     Image
 } from 'react-native';

 import {
  Button
} from 'react-native-elements'


 import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

 import {
   // Kaede,
   // Hoshi,
   // Jiro,
   // Isao,
   // Madoka,
   // Akira,
   Hideo,
   // Kohana,
   // Makiko,
   // Sae,
   // Fumi,
 } from 'react-native-textinput-effects';

 // eslint-disable-next-line no-console
 console.ignoredYellowBox = [
   // https://github.com/facebook/react-native/issues/9093
   'Warning: You are manually calling a React.PropTypes validation',
 ];

class DealinmapApp extends Component {
    render() {
        return (
            <Image
                style={styles.container}
                source={require('./images/background1.jpg')}
              >
                <View style={[styles.card2, { backgroundColor: 'rgba(0,0,0,0.2))' }]}>
                  <Hideo
                    iconClass={FontAwesomeIcon}
                    iconName={'envelope'}
                    iconColor={'white'}
                    iconBackgroundColor={'#f2a59d'}
                    inputStyle={{ color: '#464949'}}
                  />
                  <Hideo
                    style={styles.input}
                    iconClass={FontAwesomeIcon}
                    iconName={'user'}
                    iconColor={'white'}
                    iconBackgroundColor={'#f2a59d'}
                    inputStyle={{ color: '#464949' }}
                  />
                  <Button
                      small
                      raised
                      icon={{name: 'lock-open'}}
                      title='登入'
                      buttonStyle={{marginLeft: 0, marginRight: 0, marginTop: 4,}}
                      backgroundColor={'#f2a59d'}
                      />
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'transparent',
    width: null,
    height: null,
    justifyContent: 'center',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});

AppRegistry.registerComponent('DealinmapApp', () => DealinmapApp);
