import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Notification } from 'aws-amplify-react-native';
import aws_exports from './aws-exports';


export default class App extends React.Component {
  componentWillMount() {
    const n = new Notification(aws_exports);
  }

  handleClick = () => {
    // const appId = "5d6fbb4954064bbf8dbfcabea72ed080";
    // const region = 'us-east-1';
    // const channelType = null;
    // const identityPoolId = "us-east-1:e1bef532-73f3-40b2-86d7-e9e5224f3e83";
    console.log('clicked');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title='clickme' onPress={this.handleClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
