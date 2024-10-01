import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'Amit Hasan',
      position: 'Software Engineer',
      imageUrl:
        'https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-that-says-he-is-smiling_1132399-5341.jpg?w=740',
    },
    {
      uid: '2',
      name: 'Mahedi Hasan',
      position: 'Software Engineer',
      imageUrl:
        'https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-that-says-he-is-smiling_1132399-5341.jpg?w=740',
    },
    {
      uid: '3',
      name: 'Muhammad Nayeem',
      position: 'Intern',
      imageUrl:
        'https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-that-says-he-is-smiling_1132399-5341.jpg?w=740',
    },
    {
      uid: '4',
      name: 'Musfiqur Rahman',
      position: 'DevOps Engineer',
      imageUrl:
        'https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-that-says-he-is-smiling_1132399-5341.jpg?w=740',
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({uid, name, imageUrl, position}) => (
          <View key={uid} style={styles.contactCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.position}>{position}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#333',
    marginBottom: 10,
  },
  container: {
    paddingVertical: 10,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    elevation: 3,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  position: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
