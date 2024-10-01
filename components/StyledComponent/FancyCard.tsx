import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Nature</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Beautiful Bird</Text>
          <Text style={styles.cardLabel}>Beautiful Bird on a branch</Text>
          <Text style={styles.cardDescription}>
            A beautiful nature. A bird sitting on a brach of flower tree. A
            beautiful nature. A bird sitting on a brach of flower tree. A
            beautiful nature. A bird sitting on a brach of flower tree
          </Text>
          <Text style={styles.cardFooter}>12 min ago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#333',
  },
  card: {
    width: 350,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
    paddingBottom: 20,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'gray',
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {paddingHorizontal: 20},
  cardTitle: {color: '#333', fontSize: 22, fontWeight: 'bold'},
  cardLabel: {fontSize: 14, marginBottom: 6, color: '#333'},
  cardDescription: {
    fontSize: 14,
    color: '#242B2E',
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {color: '#333', fontSize: 12, textAlign: 'right'},
});
