import { StyleSheet } from 'react-native';


const RouteStyles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  input: {
    marginTop: 6,
  },
  button: {
    width: '100%',
    marginTop: 14,
  },
  sitesListContainer: {
    width: '100%',
    display: 'flex',
    color: 'black',
    marginTop: 16,
    padding: 16,
    backgroundColor: '#ededed',
    borderRadius: 6,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
    height: 3,
    backgroundColor: 'black',
  },
  sendButton: {
    marginBottom: 6,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 50,
  },
  horizontalHelper: {
    paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  buttonTextDescr: {
    fontSize: 13,
  },
  headerBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 3,
  },
  headerRightBtn: {
    paddingHorizontal: 0,
    width: 70,
    alignItems: 'center',
  },
  burgerMenuWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 3,
  },
});

export default RouteStyles;
