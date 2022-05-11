import React, {useState, useEffect} from 'react';
import {View, Text, Button, Switch} from 'react-native';
const Demo = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const linkPage = name => {
    navigation.navigate(name);
  };
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  useEffect(() => {
    if (isEnabled) {
      navigation.navigate('Welcome');
    }
  }, [isEnabled]);
  return (
    <View>
      <Text>i'm Text</Text>
      <Button title="link Welcome" onPress={() => linkPage('Welcome')}></Button>
      <Switch onValueChange={toggleSwitch} value={isEnabled}></Switch>
    </View>
  );
};

export default Demo;
