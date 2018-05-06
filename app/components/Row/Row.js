import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles';

const Row = ({ player, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.row} activeOpacity={0.7}>
    <Image source={{ uri: player.thumbnail }} style={styles.image} />
    <View>
      <View style={styles.rowContent}>
        <Text style={styles.header}>
          {player.name}
        </Text>
        <Text style={styles.subheader}>
          Age: {player.age}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Row;
