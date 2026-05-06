
import { StatusBar,  useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { CountScreen } from './Components';
import React from 'react';
import { colors } from './themes';
import { appStyles } from './App.style';


type AppProps = {
  atributo: String;
}

class App extends React.Component <AppProps> {
private  count: number = 0;
private label: string = 'Hello';

handleOnPress = () => {
  console.log("Press Button")
}
  render(){
   return (
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={colors.white} />
        <SafeAreaProvider style={appStyles.safeArea}>
          <View style={appStyles.container}>
            <CountScreen
              label={this.label}
              OnPress={this.handleOnPress}
            ></CountScreen>
          </View>
        </SafeAreaProvider>
      </SafeAreaProvider>
  );
  }
}

export default App;
