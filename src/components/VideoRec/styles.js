import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  camera: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    flex: 0.6,
    width: '66%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.01,
    textAlign: 'center'
  },
  centered: { alignItems: 'center', justifyContent: 'center' }
})

export default styles
