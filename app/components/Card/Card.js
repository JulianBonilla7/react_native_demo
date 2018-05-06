import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import CardItem from './CardItem'
import styles from './styles';

const Card = ({ player }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardHeaderText}>{player.name}</Text>
    </View>
    <ScrollView style={styles.cardBody}>
      <View style={styles.cardContent}>
        <CardItem title='Age:' value={player.age} />
        <CardItem title='Hair color:' value={player.hair_color} />
        <CardItem title='Weight:' value={player.weight} />
        <CardItem title='Height:' value={player.height} />
        <CardItem title='Professions:' value={''} />
        <View style={styles.cardList}>
          {
            player.professions.map((profession, i) => (
              <Text key={ i }>{ profession.trim() }</Text>
            ))
          }
        </View>
      </View>
    </ScrollView>
  </View>
);

export default Card;
