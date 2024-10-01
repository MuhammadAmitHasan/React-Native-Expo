import StyledComponent from '@/components/StyledComponent/StyledComponent';
import { ScrollView, StatusBar } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={{ paddingVertical: 20 }}>
      <StatusBar backgroundColor="midnightblue" barStyle="default" />
      <StyledComponent />
      {/* <SC /> */}
    </ScrollView>
  );
}
