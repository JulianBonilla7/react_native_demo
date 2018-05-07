import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { Card } from '../components/Card'; 

export default class Detail extends Component {

  static navigationOptions = {
    title: 'Detail',
    headerRight: (<View></View>),
  };

  render() {
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;

    return (
      <View style={styles.container}>
        <Image source={{ uri: item.thumbnail }} style={styles.avatar} />
        <Card player={item} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
});
