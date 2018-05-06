import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const CardItem = ({ title, value }) => (
  <View style={styles.cardItem}>
    <Text style={styles.cardTextBold}>
      {title}
    </Text>
    <Text style={styles.cardText}>
      {value}
    </Text>
  </View>
);

export default CardItem;
