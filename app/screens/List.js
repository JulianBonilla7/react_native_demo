import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Row } from '../components/Row';

export default class List extends PureComponent {

  static navigationOptions = {
    title: 'List players',
  };

  state = {
    loading: true,
    error: false,
    posts: [],
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('http://www.mocky.io/v2/5aa722ea2f0000e8048ea463')
      const posts = await response.json()

      this.setState({ loading: false, posts })
    } catch (e) {
      this.setState({ loading: false, error: true })
    }
  }

  onPress = (item) => {
    this.props.navigation.navigate('Details', {
      item,
    });
  }

  renderPost = (item, i) => {
    return <Row player={item} onPress={() => this.onPress(item)} key={item.id} />
  }

  render() {
    const { posts, loading, error } = this.state

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load posts!
          </Text>
        </View>
      )
    }

    return (
      <FlatList
        style={styles.container}
        data={posts}
        renderItem={({ item }) => this.renderPost(item)}
        keyExtractor={item => item.id.toString()}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
