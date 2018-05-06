import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  rowContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 18,
  },
  subheader: {
    fontSize: 12,
    color: '#666',
  },
});