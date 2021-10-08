import React, { useCallback, useMemo, useRef } from 'react'
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { TabView, SceneMap } from 'react-native-tab-view'
import { ScrollView } from 'react-native-gesture-handler'
import Tapmore from '../Tapmore'
import { Colors } from '../../constants/colors'
import PositiveThinking from '../PositiveThinking'
const { width } = Dimensions.get('window')

const styles = {
  header: {
    backgroundColor: 'white',
    shadowColor: 'black',
    paddingTop: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3
    },
    shadowOpacity: '0.1px',
    elevation: '4px'
  },
  panelHeader: {
    alignItems: 'center'
  },
  panelHandle: {
    width: 40,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'weatheredStone',
    marginBottom: 10
  },
  tabBar: {
    flexDirection: 'row'
  },
  tabItem: {
    flex: 1
  },
  skillText: {
    fontFamily: 'medium',
    fontSize: 14,
    color: Colors.pianoBlack,
    flexBasis: '87%',
    alignSelf: 'center'
  },
  iconContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'grey'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  }
}

const AboutRoute = () => {
  const scrollRef = React.useRef()
  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    })
  }
  return (
    <ScrollView ref={scrollRef}>
      <PositiveThinking onPress={scrollToTop} />
    </ScrollView>
  )
}
const TranscriptRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 24,
      paddingHorizontal: 12
    }}>
    <Text
      style={{
        fontFamily: 'light',
        fontSize: 14,
        color: '#595959',
        marginBottom: 24
      }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
      dolorem excepturi nulla saepe sequi enim ex vel fugit quia amet, officia,
      fuga eligendi tempora obcaecati iure minus voluptas delectus. Labore!
    </Text>

    <Text
      style={{
        fontFamily: 'light',
        fontSize: 14,
        color: '#595959',
        marginBottom: 24
      }}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non possimus
      laborum sint ad sed reprehenderit voluptates, voluptas dolores aspernatur
      aliquam tempore, dolorem veniam numquam, officia vel tempora id!
      Consectetur, perspiciatis.ß
    </Text>
  </View>
)

const FaqRoute = () => (
  <View style={{ flex: 1, paddingHorizontal: 12 }}>
    <Text
      style={{
        fontFamily: 'medium',
        fontSize: 13,
        color: 'pianoBlack',
        marginTop: 24,
        marginBottom: 8
      }}>
      Frequently asked questions #1
    </Text>
    <Text style={{ fontFamily: 'regular', fontSize: 13, color: 'black' }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque minus
      suscipit quae voluptates consequuntur aut optio esse ducimus iste dolorem
      officiis itaque ad quas, pariatur ab deserunt incidunt nobis? Doloremque!
    </Text>
    <Text
      style={{
        fontFamily: 'medium',
        fontSize: 13,
        color: 'pianoBlack',
        marginTop: 24,
        marginBottom: 8
      }}>
      Frequently asked questions #2
    </Text>
    <Text style={{ fontFamily: 'regular', fontSize: 13, color: 'black' }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque minus
      suscipit quae voluptates consequuntur aut optio esse ducimus iste dolorem
      officiis itaque ad quas, pariatur ab deserunt incidunt nobis? Doloremque!
    </Text>
  </View>
)
const renderScene = SceneMap({
  about: AboutRoute,
  transcript: TranscriptRoute,
  faq: FaqRoute
})
function TabViewScreen() {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'about', title: 'About' },
    { key: 'transcript', title: 'Transcript' },
    { key: 'faq', title: 'FAQs' }
  ])

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((_x, i) => i)
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            )
          })

          return (
            <TouchableOpacity
              key={i}
              style={[styles.tabItem]}
              onPress={() => {
                setIndex(i)
              }}>
              <Animated.View
                style={{
                  borderBottomWidth: 3,
                  borderColor: 'rgba(0,0,0,0.5)',
                  opacity,
                  alignItems: 'center',
                  width: '100%',
                  padding: 9
                }}>
                <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width }}
    />
  )
}

const TapMoreWithBottomSheet = ({ onOpen, variant, onClose }) => {
  // ref
  const bottomSheetRef = useRef(null)

  // variables
  const snapPoints = useMemo(() => ['50%', '95%'], [])

  const handleSheetChanges = useCallback(
    (index) => {
      if (index === -1) {
        onClose()
      }
    },
    [onClose]
  )
  // renders
  return (
    <>
      <View
        style={{
          justifyContent: 'center'
        }}>
        <Tapmore
          variant={variant}
          onPress={() => {
            onOpen()
            bottomSheetRef.current?.snapToIndex(0)
          }}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        backgroundStyle={{
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: -3
          },
          shadowColor: 'black',
          elevation: 4,
          shadowOpacity: 0.2
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 12,
            justifyContent: 'space-between'
          }}>
          <Text style={{ fontFamily: 'bold', fontSize: 14 }}>Overview</Text>
          <TouchableOpacity
            onPress={() => {
              onClose()
              bottomSheetRef.current?.close()
            }}>
            <Text style={{ color: Colors.primary }}>Close</Text>
          </TouchableOpacity>
        </View>
        <TabViewScreen />
      </BottomSheet>
    </>
  )
}

TapMoreWithBottomSheet.defaultProps = {
  onPress: () => {},
  onOpen: () => {},
  onClose: () => {}
}
export default TapMoreWithBottomSheet
