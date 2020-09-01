import * as React from 'react';
import { Alert, Button, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One のタブ1</Text>
      <Image source={require('../assets/images/bg.png')} style={{ width: 400, height: 200 }} />
      <Button
       onPress={() => Alert.alert('not yet implemented')}
       title="まだできていないLearn Moreボタン"
       color="#aaf"
       accessibilityLabel="Learn more about this purple button"
      />
      <ExitButton/>
      <Button
       onPress={() => self.x = self.x + "z"}
       title={'TITLE:' + x}
       color="#f88"
       accessibilityLabel="Learn more about this purple button"
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Tab One 本体</Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

class ExitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "eabr",
    };
  }
  render() {
    return (
      <Button
       onPress={() => this.setState({ value: this.state.value + "eabc"})}
       title={this.state.value}
       color="#aaf"
       accessibilityLabel="Learn more about this purple button"
      />
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
});
