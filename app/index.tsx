import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

const logoImage = require('../assets/images/icon.png');

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={{ paddingVertical: 20 }}>
      <StatusBar backgroundColor="midnightblue" barStyle="default" />
      {/* Activity Indicator */}
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator />
        <ActivityIndicator size="large" color="midnightblue" />
        <ActivityIndicator
          size="large"
          color="midnightblue"
          // control visibility
          animating={false}
        />
      </View>

      <View style={{ paddingHorizontal: 5 }}>
        <View>
          {/* https://reactnative.dev/docs/pressable */}

          <Pressable onPress={() => setModalVisible(true)}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                padding: 15,
                backgroundColor: 'coral',
                color: 'white',
                textAlign: 'center',
                marginBottom: 20,
                borderRadius: 10,
              }}
            >
              Click Here To Open Modal
            </Text>
          </Pressable>

          {/* Modal section */}
          <Modal
            visible={modalVisible}
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={() => setModalVisible(false)}
          >
            <ImageBackground
              style={{
                height: 300,
                justifyContent: 'center',
                marginTop: 100,
              }}
              source={{
                uri: 'https://images.unsplash.com/photo-1486944859394-ed1c44255713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  padding: 10,
                }}
              >
                Image Background
              </Text>
            </ImageBackground>
            <View style={{ paddingHorizontal: 20 }}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 15,
                    backgroundColor: 'coral',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: 20,
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                >
                  Close
                </Text>
              </Pressable>
            </View>
          </Modal>
          {/* Modal section */}
        </View>
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

        {/* Alert is one API. There are a lot APIs to enhance the react native */}
        {/* https://reactnative.dev/docs/alert */}
        <View style={{ paddingVertical: 10 }}>
          <Button
            title="Alert Button"
            onPress={() => Alert.alert('Button clicked')}
            color="midnightblue"
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Button
            title="Alert Button 2"
            onPress={() => Alert.alert('Button clicked', '2nd param text')}
            color="midnightblue"
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Button
            title="Alert Button 3"
            onPress={() =>
              Alert.alert('Button clicked', '3rd param array of objects', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                },
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                },
              ])
            }
            color="midnightblue"
          />
        </View>
        <View>
          <Pressable
            onPress={() => console.log('Component Pressed')}
            onLongPress={() => console.log('Long Pressed')}
            onHoverIn={() => console.log('Hover In')}
            onPressIn={() => console.log('Press In')}
            onPressOut={() => console.log('Press Out')}
          >
            <Image
              style={{ height: 200 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1541275055241-329bbdf9a191?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </Pressable>
          <View>
            <Pressable onPress={() => alert('Component Pressed')}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam voluptas, quod, voluptates, incidunt, autem quas quae
                quia repudiandae quibusdam ipsa doloremque. Quisquam voluptas,
                quod, voluptates, incidunt, autem quas quae quia repudiandae
                quibusdam ipsa doloremque.
              </Text>
            </Pressable>
          </View>
          <Image style={{ height: 200, width: 200 }} source={logoImage} />
        </View>
      </View>
    </ScrollView>
  );
}
