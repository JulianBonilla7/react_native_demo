import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    flex: 1,
    justifyContent: 'center',
    marginTop: -25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    width: '90%',
  },
  cardHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    padding: 15,
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardBody: {
    flex: 1,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  cardText: {
    flex: 1,
  },
  cardTextBold: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardContent: {
    padding: 8,
  },
  cardList: {
    paddingLeft: 40,
  },
});