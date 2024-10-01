import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ActionCard from './ActionCard';
import ContactList from './ContactList';
import ElevatedCard from './ElevatedCard';
import FancyCard from './FancyCard';
import FlatCard from './FlatCard';

export default function StyledComponent() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
