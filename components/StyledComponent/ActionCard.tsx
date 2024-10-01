import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Cox's Bazar Tour Guide</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.description} numberOfLines={3}>
            As life gets monotonous with every passing day, the most incredible
            way to relax is to go somewhere completely different. The beach is
            as far away from work as feasible for those in the city. From the
            longest sandy beach in the world to famous traditional food and
            seafood, Cox's Bazar has made itself one of Bangladesh's most
            prominent tourist destinations. Cox's Bazar is located on the
            southwest coast of Bangladesh, about 150 km (90 miles) south of the
            city of Chattogram (Chittagong).
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://sharetrip.net/travel-guide/post/explore-coxs-bazar-complete-travel-guide'
              )
            }
          >
            <Text style={styles.footerButton}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/mdamithasan97/')
            }
          >
            <Text style={styles.footerButton}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#333',
    marginBottom: 16,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  elevatedCard: {
    marginVertical: 12,
  },
  headingContainer: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  bodyContainer: {
    padding: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  footerButton: {
    fontSize: 14,
    color: '#6200ea',
    fontWeight: 'bold',
  },
});
