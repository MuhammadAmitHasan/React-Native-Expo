import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GreetProps {
  name: string;
}

export default function Greet({ name }: GreetProps) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
