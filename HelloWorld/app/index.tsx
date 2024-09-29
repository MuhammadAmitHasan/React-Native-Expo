import { Button, Image, ScrollView, Text, View } from 'react-native';

const logoImage = require('../assets/images/icon.png');

export default function Index() {
  return (
    <ScrollView style={{ paddingVertical: 20 }}>
      <View>
        <View
          style={{
            backgroundColor: 'lightblue',
            height: 100,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            React Native With Expo
          </Text>
        </View>

        <View style={{ padding: 10 }}>
          <Button
            title="Click me"
            onPress={() => alert('Button clicked')}
            color="midnightblue"
          />
        </View>

        <View>
          <Image
            style={{ height: 200 }}
            source={{
              uri: 'https://images.unsplash.com/photo-1541275055241-329bbdf9a191?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <Image style={{ height: 200, width: 200 }} source={logoImage} />
        </View>
      </View>
    </ScrollView>
  );
}
