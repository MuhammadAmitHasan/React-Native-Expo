import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
      }}
    >
      <View
        style={{ backgroundColor: 'lightblue', height: 200, width: 200 }}
      ></View>
      <View
        style={{ backgroundColor: 'lightgreen', height: 200, width: 200 }}
      ></View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
