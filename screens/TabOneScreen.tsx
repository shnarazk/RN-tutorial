import * as React from 'react';
import { Alert, Button, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One のタブ1</Text>
      <Image source={require('../assets/images/bg.png')} style={{ width: 400, height: 200 }} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.button}>
        <Button
         onPress={() => Alert.alert('not yet implemented')}
         title="まだできていないLearn Moreボタン"
         color="#aaf"
         accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <IncrementButton/>
      <ExitButton/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Tab One 本体</Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

class IncrementButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <View style={styles.button}>
        <Button
         onPress={() => this.setState({ value: this.state.value + 1})}
         title={"増やすボタン: " + this.state.value}
         color="#8c3"
         accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

class ExitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "EXIT",
    };
  }
  render() {
    return (
      <View style={styles.exit}>
        <Button
          color="red"
          onPress={() => this.setState({ value: this.state.value + "_eabc_"})}
          title={this.state.value}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

var x = "a1a2a3a" + "a00";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  exit: {
     color: "#f00",
     fontSize: 20,
     fontWeight: 'bold',
     width: 100,
     margin: 8,
     padding: 0,
     borderWidth: 2,
     borderColor: "#000",
     borderStlye: "solid",
  },
  button: {
     width: 300,
     margin: 8,
     padding: 0,
     borderWidth: 2,
     borderColor: "#f55",
     borderStlye: "solid",
  }
});
