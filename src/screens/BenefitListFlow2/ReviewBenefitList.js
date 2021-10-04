import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Svg, { Rect, Path, Circle, G } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Colors } from '../../constants/colors'

const List = ({ title, list }) => {
  const renderItem = ({ item, index }) => {
    return <Card index={index} item={item} />
  }
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text
        style={{
          color: Colors.pianoBlack,
          fontFamily: 'medium',
          fontSize: 13,
          marginBottom: 12
        }}>
        {title}
      </Text>
      <FlatList
        keyExtractor={(item, index) => `${index}-${item}`}
        horizontal
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  )
}
const ReviewBenefitList = ({ shortTerms = [], longTerms = [] }) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DCDCDD' }}>
      <ScrollView>
        <View>
          <Svg
            width={375}
            height={153}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M110.465 48h1.859v-4.607h2.623L117.388 48h2.15l-2.69-4.898c1.461-.49 2.325-1.8 2.325-3.411v-.017c0-2.224-1.528-3.652-3.985-3.652h-4.723V48zm1.859-6.118v-4.3h2.623c1.437 0 2.316.814 2.316 2.142v.017c0 1.361-.83 2.141-2.257 2.141h-2.682zm12.639 6.292c2.307 0 3.552-1.328 3.851-2.515l.017-.075-1.735.009-.033.066c-.216.465-.905 1.038-2.059 1.038-1.486 0-2.432-1.005-2.465-2.731h6.391v-.631c0-2.706-1.544-4.524-4.059-4.524s-4.142 1.884-4.142 4.698v.009c0 2.855 1.594 4.656 4.234 4.656zm-.083-7.885c1.22 0 2.125.78 2.266 2.39h-4.582c.157-1.552 1.087-2.39 2.316-2.39zM133.185 48h1.917l3.254-9.015h-1.893l-2.241 7.189h-.141l-2.249-7.189h-1.91L133.185 48zm7.749-10.625c.614 0 1.128-.506 1.128-1.12 0-.623-.514-1.13-1.128-1.13a1.13 1.13 0 00-1.129 1.13c0 .614.506 1.12 1.129 1.12zM140.029 48h1.793v-9.015h-1.793V48zm8.031.174c2.308 0 3.553-1.328 3.852-2.515l.016-.075-1.735.009-.033.066c-.216.465-.905 1.038-2.059 1.038-1.485 0-2.432-1.005-2.465-2.731h6.392v-.631c0-2.706-1.544-4.524-4.059-4.524s-4.142 1.884-4.142 4.698v.009c0 2.855 1.593 4.656 4.233 4.656zm-.083-7.885c1.22 0 2.125.78 2.266 2.39h-4.582c.158-1.552 1.087-2.39 2.316-2.39zM155.668 48h1.834l1.86-6.724h.141L161.37 48h1.851l2.482-9.015h-1.784l-1.611 6.956h-.141l-1.859-6.956h-1.71l-1.859 6.956h-.133l-1.619-6.956h-1.809l2.49 9.015zm19.59.058c.349 0 .681-.041.971-.091V46.53a5.94 5.94 0 01-.681.033c-.888 0-1.253-.398-1.253-1.37v-4.79h1.934v-1.419h-1.934v-2.274h-1.834v2.274h-1.412v1.42h1.412v5.221c0 1.735.813 2.432 2.797 2.432zm2.984-.058h1.802v-5.288c0-1.452.821-2.357 2.141-2.357s1.943.739 1.943 2.233V48h1.792v-5.835c0-2.15-1.112-3.354-3.129-3.354-1.311 0-2.175.581-2.615 1.544h-.132v-4.906h-1.802V48zm13.809.174c2.307 0 3.553-1.328 3.851-2.515l.017-.075-1.735.009-.033.066c-.216.465-.905 1.038-2.059 1.038-1.486 0-2.432-1.005-2.465-2.731h6.392v-.631c0-2.706-1.544-4.524-4.06-4.524-2.515 0-4.142 1.884-4.142 4.698v.009c0 2.855 1.594 4.656 4.234 4.656zm-.083-7.885c1.22 0 2.125.78 2.266 2.39h-4.582c.158-1.552 1.087-2.39 2.316-2.39zm15.29 7.86c2.275 0 3.735-1.818 3.735-4.648v-.017c0-2.855-1.444-4.656-3.735-4.656-1.237 0-2.291.614-2.772 1.585h-.133V35.45h-1.801V48h1.801v-1.42h.133c.523.988 1.51 1.57 2.772 1.57zm-.506-1.535c-1.503 0-2.432-1.187-2.432-3.113v-.017c0-1.925.929-3.112 2.432-3.112 1.502 0 2.407 1.178 2.407 3.112v.017c0 1.934-.905 3.113-2.407 3.113zm10.007 1.56c2.307 0 3.552-1.328 3.851-2.515l.017-.075-1.735.009-.033.066c-.216.465-.905 1.038-2.059 1.038-1.486 0-2.432-1.005-2.465-2.731h6.391v-.631c0-2.706-1.544-4.524-4.059-4.524s-4.142 1.884-4.142 4.698v.009c0 2.855 1.594 4.656 4.234 4.656zm-.083-7.885c1.22 0 2.125.78 2.266 2.39h-4.582c.157-1.552 1.087-2.39 2.316-2.39zM222.698 48h1.801v-5.288c0-1.452.822-2.357 2.142-2.357 1.32 0 1.942.739 1.942 2.233V48h1.793v-5.835c0-2.15-1.112-3.354-3.129-3.354-1.312 0-2.175.581-2.615 1.544h-.133v-1.37h-1.801V48zm13.808.174c2.308 0 3.553-1.328 3.852-2.515l.017-.075-1.735.009-.033.066c-.216.465-.905 1.038-2.059 1.038-1.486 0-2.432-1.005-2.465-2.731h6.391v-.631c0-2.706-1.544-4.524-4.059-4.524s-4.142 1.884-4.142 4.698v.009c0 2.855 1.594 4.656 4.233 4.656zm-.083-7.885c1.221 0 2.125.78 2.267 2.39h-4.582c.157-1.552 1.087-2.39 2.315-2.39zM243.085 48h1.793v-7.595h1.984v-1.42h-2.001v-.863c0-.913.39-1.395 1.387-1.395.282 0 .523.017.689.042v-1.32a6.589 6.589 0 00-1.063-.083c-1.876 0-2.789.88-2.789 2.673v.946h-1.486v1.42h1.486V48zm6.57-10.625c.614 0 1.129-.506 1.129-1.12 0-.623-.515-1.13-1.129-1.13a1.13 1.13 0 00-1.129 1.13c0 .614.507 1.12 1.129 1.12zM248.75 48h1.793v-9.015h-1.793V48zm7.65.058c.348 0 .68-.041.971-.091V46.53a5.94 5.94 0 01-.681.033c-.888 0-1.253-.398-1.253-1.37v-4.79h1.934v-1.419h-1.934v-2.274h-1.835v2.274h-1.411v1.42h1.411v5.221c0 1.735.814 2.432 2.798 2.432zm6.047.116c2.142 0 3.735-1.137 3.735-2.805v-.017c0-1.303-.83-2.042-2.565-2.449l-1.427-.323c-1.013-.241-1.428-.59-1.428-1.154v-.017c0-.722.714-1.212 1.702-1.212 1.012 0 1.652.473 1.826 1.104v.017h1.718v-.008c-.158-1.47-1.477-2.499-3.536-2.499-2.042 0-3.503 1.129-3.503 2.698v.008c0 1.32.789 2.092 2.49 2.482l1.436.332c1.046.24 1.47.623 1.47 1.187v.017c0 .738-.772 1.245-1.885 1.245-1.071 0-1.726-.457-1.95-1.137l-.009-.009h-1.801v.009c.174 1.51 1.552 2.531 3.727 2.531z"
              fill="#16161A"
            />
            <Path
              d="M30.24 78h1.23v-3.903h2.427L36.01 78h1.442l-2.283-4.095c1.237-.39 1.982-1.456 1.982-2.823v-.014c0-1.77-1.244-2.932-3.144-2.932H30.24V78zm1.23-4.997V69.23h2.373c1.271 0 2.037.704 2.037 1.88v.013c0 1.203-.718 1.88-1.983 1.88H31.47zM42.18 78.13c1.736 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.199.445-.814.916-1.812.916-1.312 0-2.153-.888-2.187-2.413h5.304v-.465c0-2.2-1.217-3.691-3.22-3.691-2.002 0-3.301 1.559-3.301 3.835v.007c0 2.31 1.271 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.893.691 2.016 2.147H40.04c.13-1.401.964-2.146 2.058-2.146zm7.16 6.44h1.203l2.728-7.37H51.93l-2.017 6.071h-.109l-2.017-6.07H46.53L49.257 78zm6.272-8.791c.451 0 .82-.37.82-.82 0-.451-.369-.82-.82-.82-.451 0-.82.368-.82.82 0 .45.369.82.82.82zM54.927 78h1.19v-7.37h-1.19V78zm6.58.13c1.736 0 2.79-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.814.916-1.812.916-1.312 0-2.153-.888-2.187-2.413h5.304v-.465c0-2.2-1.216-3.691-3.22-3.691-2.002 0-3.301 1.559-3.301 3.835v.007c0 2.31 1.271 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.075c.13-1.401.964-2.146 2.058-2.146zM68.059 78h1.19l1.64-5.701H71L72.646 78h1.196l2.065-7.37h-1.183l-1.45 5.893h-.109l-1.647-5.892H70.39l-1.647 5.892h-.11l-1.449-5.892h-1.19L68.06 78zm15.06 0h1.189l1.64-5.701h.11L87.705 78h1.197l2.064-7.37h-1.183l-1.449 5.893h-.11l-1.647-5.892H85.45l-1.647 5.892h-.11l-1.449-5.892h-1.19L83.119 78zm9.628 0h1.19v-4.361c0-1.292.744-2.085 1.92-2.085s1.723.635 1.723 1.962V78h1.19v-4.772c0-1.75-.924-2.727-2.578-2.727-1.087 0-1.777.458-2.146 1.237h-.11v-4.033h-1.19V78zm10.339.13c.991 0 1.764-.43 2.228-1.217h.11V78h1.189v-5.045c0-1.531-1.005-2.454-2.802-2.454-1.573 0-2.694.78-2.885 1.934l-.007.042h1.189l.007-.02c.192-.575.773-.903 1.654-.903 1.101 0 1.655.492 1.655 1.401v.67l-2.113.13c-1.715.102-2.686.861-2.686 2.174v.013c0 1.34 1.06 2.188 2.461 2.188zm-1.244-2.215v-.014c0-.731.492-1.128 1.613-1.196l1.969-.123v.67c0 1.053-.882 1.846-2.092 1.846-.854 0-1.49-.438-1.49-1.183zm9.703 2.14c.233 0 .458-.028.691-.069v-1.011c-.219.02-.335.027-.547.027-.766 0-1.067-.349-1.067-1.217v-4.17h1.614v-.984h-1.614v-1.907h-1.23v1.907h-1.162v.984h1.162v4.47c0 1.41.636 1.97 2.153 1.97zm7.314 2.529c1.306 0 1.914-.478 2.523-2.133l2.878-7.82h-1.251l-2.017 6.063h-.109l-2.024-6.063h-1.271l2.727 7.376-.136.437c-.267.848-.677 1.156-1.354 1.156-.164 0-.348-.007-.492-.035v.978c.164.027.369.041.526.041zm9.868-2.454c2.099 0 3.397-1.45 3.397-3.808v-.013c0-2.366-1.298-3.808-3.397-3.808-2.099 0-3.398 1.442-3.398 3.808v.013c0 2.359 1.299 3.808 3.398 3.808zm0-1.053c-1.395 0-2.181-1.018-2.181-2.755v-.013c0-1.744.786-2.755 2.181-2.755 1.394 0 2.181 1.011 2.181 2.755v.013c0 1.737-.787 2.755-2.181 2.755zm7.851 1.053c1.08 0 1.825-.444 2.187-1.23h.11V78h1.189v-7.37h-1.189v4.362c0 1.292-.691 2.085-1.989 2.085-1.176 0-1.655-.636-1.655-1.962v-4.484h-1.189v4.771c0 1.743.861 2.728 2.536 2.728zm5.841-6.105h.882l1.073-3.89h-1.36l-.595 3.89zM148.465 78h1.203l2.728-7.37h-1.258l-2.016 6.071h-.11l-2.016-6.07h-1.258L148.465 78zm8.378.13c1.736 0 2.789-.984 3.042-1.983l.013-.054h-1.189l-.028.061c-.198.445-.813.916-1.811.916-1.313 0-2.153-.888-2.188-2.413h5.305v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.301 1.559-3.301 3.835v.007c0 2.31 1.271 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.893.691 2.016 2.147h-4.074c.13-1.401.964-2.146 2.058-2.146zm9.358 6.44h1.189V67.705h-1.189V78zm4.241-8.791c.451 0 .821-.37.821-.82 0-.451-.37-.82-.821-.82-.451 0-.82.368-.82.82 0 .45.369.82.82.82zM169.759 78h1.189v-7.37h-1.189V78zm6.101.13c1.674 0 2.953-.91 2.953-2.222v-.014c0-1.052-.67-1.654-2.058-1.989l-1.135-.273c-.868-.212-1.237-.526-1.237-1.026v-.013c0-.65.643-1.1 1.518-1.1.888 0 1.463.403 1.62.984h1.169c-.164-1.204-1.238-1.976-2.782-1.976-1.566 0-2.742.923-2.742 2.146v.007c0 1.06.622 1.661 2.003 1.99l1.142.273c.909.219 1.285.567 1.285 1.066v.014c0 .67-.704 1.142-1.695 1.142-.944 0-1.532-.404-1.73-1.019h-1.217c.137 1.217 1.265 2.01 2.906 2.01zm7.488-.075c.233 0 .458-.028.691-.069v-1.011c-.219.02-.335.027-.547.027-.766 0-1.067-.349-1.067-1.217v-4.17h1.614v-.984h-1.614v-1.907h-1.23v1.907h-1.162v.984h1.162v4.47c0 1.41.636 1.97 2.153 1.97zm5.506.075c1.737 0 2.79-.984 3.042-1.983l.014-.054h-1.189l-.028.061c-.198.445-.813.916-1.811.916-1.313 0-2.153-.888-2.188-2.413h5.305v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.301 1.559-3.301 3.835v.007c0 2.31 1.271 3.787 3.376 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.074c.13-1.401.964-2.146 2.057-2.146zm7.933 6.57c1.026 0 1.846-.486 2.297-1.306h.11V78h1.189V67.705h-1.189v4.088h-.11c-.403-.786-1.285-1.292-2.297-1.292-1.873 0-3.089 1.497-3.089 3.808v.013c0 2.297 1.223 3.808 3.089 3.808zm.274-1.053c-1.347 0-2.147-1.039-2.147-2.755v-.013c0-1.716.8-2.755 2.147-2.755 1.34 0 2.16 1.052 2.16 2.755v.013c0 1.702-.82 2.755-2.16 2.755zm11.846 1.053c.991 0 1.764-.43 2.229-1.217h.109V78h1.19v-5.045c0-1.531-1.005-2.454-2.803-2.454-1.572 0-2.693.78-2.885 1.934l-.007.042h1.19l.007-.02c.191-.575.772-.903 1.654-.903 1.1 0 1.654.492 1.654 1.401v.67l-2.112.13c-1.716.102-2.687.861-2.687 2.174v.013c0 1.34 1.06 2.188 2.461 2.188zm-1.244-2.215v-.014c0-.731.492-1.128 1.613-1.196l1.969-.123v.67c0 1.053-.882 1.846-2.092 1.846-.854 0-1.49-.438-1.49-1.183zM214.666 78h1.19v-4.361c0-1.292.745-2.085 1.921-2.085 1.176 0 1.722.635 1.722 1.962V78h1.19v-4.772c0-1.75-.923-2.727-2.577-2.727-1.087 0-1.778.458-2.147 1.237h-.109v-1.107h-1.19V78zm11.037.13c1.025 0 1.846-.486 2.297-1.306h.109V78h1.19V67.705h-1.19v4.088H228c-.404-.786-1.285-1.292-2.297-1.292-1.873 0-3.09 1.497-3.09 3.808v.013c0 2.297 1.224 3.808 3.09 3.808zm.273-1.053c-1.346 0-2.146-1.039-2.146-2.755v-.013c0-1.716.8-2.755 2.146-2.755 1.34 0 2.161 1.052 2.161 2.755v.013c0 1.702-.821 2.755-2.161 2.755zm9.892.923h1.189v-2.796l.691-.67L240.509 78h1.497l-3.424-4.272 3.212-3.097h-1.442l-3.185 3.22h-.11v-6.146h-1.189V78zm10.339.13c1.736 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.814.916-1.812.916-1.312 0-2.153-.888-2.187-2.413h5.304v-.465c0-2.2-1.216-3.691-3.219-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.271 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.893.691 2.016 2.147h-4.074c.13-1.401.964-2.146 2.058-2.146zm8.22 6.57c1.736 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.814.916-1.812.916-1.312 0-2.153-.888-2.187-2.413h5.304v-.465c0-2.2-1.216-3.691-3.219-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.271 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.893.691 2.017 2.147h-4.075c.13-1.401.964-2.146 2.058-2.146zm5.212 8.9h1.19v-3.622h.109c.403.786 1.285 1.292 2.297 1.292 1.873 0 3.09-1.497 3.09-3.808v-.013c0-2.297-1.224-3.808-3.09-3.808-1.025 0-1.846.485-2.297 1.306h-.109V70.63h-1.19v9.83zm3.322-3.383c-1.339 0-2.16-1.053-2.16-2.755v-.013c0-1.703.821-2.755 2.16-2.755 1.347 0 2.147 1.039 2.147 2.755v.013c0 1.716-.8 2.755-2.147 2.755zm12.059.978c.232 0 .458-.028.69-.069v-1.011c-.219.02-.335.027-.547.027-.765 0-1.066-.349-1.066-1.217v-4.17h1.613v-.984h-1.613v-1.907h-1.231v1.907h-1.162v.984h1.162v4.47c0 1.41.636 1.97 2.154 1.97zm2.676-.055h1.189v-4.361c0-1.292.745-2.085 1.921-2.085 1.176 0 1.723.635 1.723 1.962V78h1.189v-4.772c0-1.75-.922-2.727-2.577-2.727-1.087 0-1.777.458-2.146 1.237h-.11v-4.033h-1.189V78zm11.323.13c1.737 0 2.79-.984 3.042-1.983l.014-.054h-1.189l-.028.061c-.198.445-.813.916-1.811.916-1.313 0-2.153-.888-2.188-2.413H292v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.301 1.559-3.301 3.835v.007c0 2.31 1.271 3.787 3.376 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.074c.13-1.401.964-2.146 2.057-2.146zm5.213 6.44h1.189v-4.566c0-1.04.732-1.88 1.696-1.88.929 0 1.531.567 1.531 1.442V78h1.189v-4.737c0-.937.677-1.71 1.702-1.71 1.039 0 1.538.54 1.538 1.628V78h1.19v-5.093c0-1.545-.841-2.406-2.345-2.406-1.018 0-1.859.513-2.256 1.292h-.109c-.342-.766-1.039-1.292-2.037-1.292-.964 0-1.661.458-1.989 1.251h-.11v-1.121h-1.189V78zm17.028-8.791c.451 0 .82-.37.82-.82a.823.823 0 00-.82-.82.823.823 0 00-.821.82c0 .45.37.82.821.82zM310.412 78h1.19v-7.37h-1.19V78zm3.572 0h1.189v-4.361c0-1.292.745-2.085 1.921-2.085 1.176 0 1.723.635 1.723 1.962V78h1.189v-4.772c0-1.75-.923-2.727-2.577-2.727-1.087 0-1.777.458-2.146 1.237h-.11v-1.107h-1.189V78zm15.011.055c.233 0 .458-.028.691-.069v-1.011c-.219.02-.335.027-.547.027-.766 0-1.067-.349-1.067-1.217v-4.17h1.614v-.984h-1.614v-1.907h-1.23v1.907h-1.162v.984h1.162v4.47c0 1.41.636 1.97 2.153 1.97zm2.676-.055h1.19v-4.361c0-1.292.745-2.085 1.921-2.085 1.176 0 1.722.635 1.722 1.962V78h1.19v-4.772c0-1.75-.923-2.727-2.577-2.727-1.087 0-1.778.458-2.147 1.237h-.109v-4.033h-1.19V78zm11.324.13c1.736 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.814.916-1.812.916-1.312 0-2.153-.888-2.187-2.413h5.305v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.272 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.075c.13-1.401.964-2.146 2.058-2.146zM30.877 97.13c1.867 0 3.09-1.51 3.09-3.808v-.013c0-2.311-1.217-3.808-3.09-3.808-1.011 0-1.893.506-2.296 1.292h-.11v-4.088h-1.19V97h1.19v-1.176h.11c.45.82 1.271 1.306 2.296 1.306zm-.273-1.053c-1.34 0-2.16-1.053-2.16-2.755v-.013c0-1.703.82-2.755 2.16-2.755 1.347 0 2.146 1.039 2.146 2.755v.013c0 1.716-.8 2.755-2.146 2.755zm7.372 1.053c.992 0 1.764-.43 2.229-1.217h.11V97h1.189v-5.045c0-1.531-1.005-2.454-2.803-2.454-1.572 0-2.693.78-2.885 1.934l-.007.042H37l.007-.02c.191-.575.772-.903 1.654-.903 1.1 0 1.654.492 1.654 1.401v.67l-2.112.13c-1.716.102-2.687.861-2.687 2.174v.013c0 1.34 1.06 2.188 2.461 2.188zm-1.244-2.215v-.014c0-.731.492-1.128 1.614-1.196l1.968-.123v.67c0 1.053-.882 1.846-2.092 1.846-.854 0-1.49-.438-1.49-1.183zm10.1 2.215c1.77 0 2.762-.95 3.063-2.283l.013-.075-1.175.006-.014.041c-.274.82-.903 1.258-1.894 1.258-1.312 0-2.16-1.087-2.16-2.782v-.014c0-1.66.834-2.727 2.16-2.727 1.06 0 1.716.588 1.9 1.312l.008.02h1.182l-.007-.04c-.218-1.313-1.292-2.345-3.083-2.345-2.064 0-3.377 1.49-3.377 3.78v.014c0 2.338 1.32 3.835 3.384 3.835zM51.86 97h1.19v-2.796l.69-.67L56.5 97H58l-3.425-4.272 3.213-3.097h-1.443l-3.185 3.22h-.11v-6.146h-1.19V97zm14.779.13c2.099 0 3.397-1.45 3.397-3.808v-.013c0-2.366-1.299-3.808-3.397-3.808-2.099 0-3.398 1.442-3.398 3.808v.013c0 2.359 1.3 3.808 3.398 3.808zm0-1.053c-1.395 0-2.18-1.018-2.18-2.755v-.013c0-1.744.785-2.755 2.18-2.755 1.394 0 2.18 1.011 2.18 2.755v.013c0 1.737-.786 2.755-2.18 2.755zm5.875.923h1.19v-6.385h1.675v-.984h-1.675v-.786c0-.807.342-1.224 1.19-1.224.211 0 .41.007.553.034v-.95a4.124 4.124 0 00-.793-.068c-1.401 0-2.14.704-2.14 2.174v.82h-1.223v.984h1.223V97zm9.427 2.584c1.305 0 1.914-.478 2.522-2.133l2.878-7.82h-1.25l-2.017 6.063h-.11l-2.023-6.063h-1.272l2.728 7.376-.137.437c-.267.848-.677 1.156-1.354 1.156-.163 0-.348-.007-.492-.035v.978c.164.027.37.041.527.041zm9.867-2.454c2.099 0 3.398-1.45 3.398-3.808v-.013c0-2.366-1.3-3.808-3.398-3.808s-3.397 1.442-3.397 3.808v.013c0 2.359 1.299 3.808 3.397 3.808zm0-1.053c-1.394 0-2.18-1.018-2.18-2.755v-.013c0-1.744.786-2.755 2.18-2.755 1.395 0 2.18 1.011 2.18 2.755v.013c0 1.737-.785 2.755-2.18 2.755zm7.851 1.053c1.08 0 1.825-.444 2.188-1.23h.109V97h1.19v-7.37h-1.19v4.362c0 1.292-.69 2.085-1.99 2.085-1.175 0-1.653-.636-1.653-1.962v-4.484h-1.19v4.771c0 1.743.861 2.728 2.536 2.728zm5.848-.13h1.19v-4.566c0-1.08.806-1.798 1.941-1.798.26 0 .485.027.731.068V89.55a3.99 3.99 0 00-.594-.048c-.998 0-1.689.451-1.969 1.224h-.109V89.63h-1.19V97zm9.55 0h1.189v-4.566c0-1.04.732-1.88 1.695-1.88.93 0 1.532.567 1.532 1.442V97h1.189v-4.737c0-.937.677-1.71 1.702-1.71 1.039 0 1.538.54 1.538 1.628V97h1.19v-5.093c0-1.545-.841-2.406-2.345-2.406-1.018 0-1.859.513-2.256 1.292h-.109c-.342-.766-1.039-1.292-2.037-1.292-.964 0-1.661.458-1.989 1.251h-.11v-1.121h-1.189V97zm12.95-8.791c.451 0 .821-.37.821-.82 0-.451-.37-.82-.821-.82-.451 0-.82.368-.82.82 0 .45.369.82.82.82zM127.406 97h1.189v-7.37h-1.189V97zm3.571 0h1.19v-4.361c0-1.292.745-2.085 1.921-2.085 1.175 0 1.722.635 1.722 1.962V97H137v-4.772c0-1.75-.923-2.727-2.577-2.727-1.087 0-1.778.458-2.147 1.237h-.109v-1.107h-1.19V97zm11.037.13c1.025 0 1.846-.486 2.297-1.306h.109V97h1.19V86.705h-1.19v4.088h-.109c-.404-.786-1.285-1.292-2.297-1.292-1.873 0-3.09 1.497-3.09 3.808v.013c0 2.297 1.224 3.808 3.09 3.808zm.273-1.053c-1.346 0-2.146-1.039-2.146-2.755v-.013c0-1.716.8-2.755 2.146-2.755 1.34 0 2.16 1.052 2.16 2.755v.013c0 1.702-.82 2.755-2.16 2.755zm11.245.923h1.19l1.64-5.701h.11L158.119 97h1.196l2.065-7.37h-1.183l-1.449 5.893h-.109l-1.648-5.892h-1.128l-1.647 5.892h-.11l-1.449-5.892h-1.189L153.532 97zm9.628 0h1.19v-4.361c0-1.292.745-2.085 1.921-2.085 1.176 0 1.722.635 1.722 1.962V97h1.19v-4.772c0-1.75-.923-2.727-2.577-2.727-1.087 0-1.778.458-2.147 1.237h-.109v-4.033h-1.19V97zm11.324.13c1.736 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.814.916-1.812.916-1.312 0-2.153-.888-2.187-2.413h5.305v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.272 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.075c.13-1.401.964-2.146 2.058-2.146zm5.212 6.44h1.19v-4.361c0-1.292.745-2.085 1.921-2.085 1.175 0 1.722.635 1.722 1.962V97h1.19v-4.772c0-1.75-.923-2.727-2.577-2.727-1.087 0-1.778.458-2.147 1.237h-.109v-1.107h-1.19V97zm15.408.13c1.771 0 2.762-.95 3.063-2.283l.013-.075-1.175.006-.014.041c-.274.82-.902 1.258-1.894 1.258-1.312 0-2.16-1.087-2.16-2.782v-.014c0-1.66.834-2.727 2.16-2.727 1.06 0 1.716.588 1.901 1.312l.007.02h1.182l-.007-.04c-.218-1.313-1.292-2.345-3.083-2.345-2.064 0-3.377 1.49-3.377 3.78v.014c0 2.338 1.32 3.835 3.384 3.835zm7.988 0c2.098 0 3.397-1.45 3.397-3.808v-.013c0-2.366-1.299-3.808-3.397-3.808-2.099 0-3.398 1.442-3.398 3.808v.013c0 2.359 1.299 3.808 3.398 3.808zm0-1.053c-1.395 0-2.181-1.018-2.181-2.755v-.013c0-1.744.786-2.755 2.181-2.755 1.394 0 2.18 1.011 2.18 2.755v.013c0 1.737-.786 2.755-2.18 2.755zm5.383.923h1.189v-4.566c0-1.04.732-1.88 1.696-1.88.929 0 1.531.567 1.531 1.442V97h1.189v-4.737c0-.937.677-1.71 1.703-1.71 1.039 0 1.538.54 1.538 1.628V97h1.189v-5.093c0-1.545-.841-2.406-2.345-2.406-1.018 0-1.859.513-2.255 1.292h-.11c-.342-.766-1.039-1.292-2.037-1.292-.964 0-1.661.458-1.989 1.251h-.11v-1.121h-1.189V97zm12.322 2.46h1.189v-3.622h.109c.404.786 1.286 1.292 2.297 1.292 1.873 0 3.09-1.497 3.09-3.808v-.013c0-2.297-1.223-3.808-3.09-3.808-1.025 0-1.845.485-2.297 1.306h-.109V89.63h-1.189v9.83zm3.322-3.383c-1.34 0-2.16-1.053-2.16-2.755v-.013c0-1.703.82-2.755 2.16-2.755 1.347 0 2.146 1.039 2.146 2.755v.013c0 1.716-.799 2.755-2.146 2.755zm5.431.923h1.189V86.705h-1.189V97zm6.62.13c1.737 0 2.789-.984 3.042-1.983l.014-.054h-1.189l-.028.061c-.198.445-.813.916-1.811.916-1.313 0-2.154-.888-2.188-2.413h5.305v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.272 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.074c.13-1.401.964-2.146 2.057-2.146zm7.831 6.495c.232 0 .458-.028.69-.069v-1.011c-.219.02-.335.027-.547.027-.765 0-1.066-.349-1.066-1.217v-4.17h1.613v-.984h-1.613v-1.907h-1.231v1.907h-1.162v.984h1.162v4.47c0 1.41.636 1.97 2.154 1.97zm3.236-8.846c.452 0 .821-.37.821-.82a.823.823 0 00-.821-.82c-.451 0-.82.368-.82.82 0 .45.369.82.82.82zM246.472 97h1.189v-7.37h-1.189V97zm3.572 0h1.189v-4.361c0-1.292.745-2.085 1.921-2.085 1.176 0 1.723.635 1.723 1.962V97h1.189v-4.772c0-1.75-.923-2.727-2.577-2.727-1.087 0-1.778.458-2.147 1.237h-.109v-1.107h-1.189V97zm11.35 2.598c2.01 0 3.282-1.053 3.282-2.7V89.63h-1.19v1.217h-.082c-.451-.834-1.258-1.347-2.297-1.347-1.927 0-3.117 1.497-3.117 3.561v.014c0 2.065 1.183 3.541 3.09 3.541 1.012 0 1.846-.458 2.311-1.271h.109v1.49c0 1.087-.786 1.709-2.106 1.709-1.059 0-1.715-.397-1.845-.957l-.007-.007h-1.231l-.013.007c.184 1.21 1.319 2.01 3.096 2.01zm-.054-4.034c-1.367 0-2.133-1.025-2.133-2.488v-.013c0-1.463.766-2.51 2.133-2.51 1.36 0 2.187 1.047 2.187 2.51v.013c0 1.463-.82 2.489-2.187 2.489zm10.397 4.02c1.306 0 1.914-.478 2.522-2.133l2.878-7.82h-1.251l-2.016 6.063h-.11l-2.023-6.063h-1.272l2.728 7.376-.137.437c-.266.848-.676 1.156-1.353 1.156a2.82 2.82 0 01-.492-.035v.978c.164.027.369.041.526.041zm9.867-2.454c2.099 0 3.398-1.45 3.398-3.808v-.013c0-2.366-1.299-3.808-3.398-3.808-2.098 0-3.397 1.442-3.397 3.808v.013c0 2.359 1.299 3.808 3.397 3.808zm0-1.053c-1.394 0-2.18-1.018-2.18-2.755v-.013c0-1.744.786-2.755 2.18-2.755 1.395 0 2.181 1.011 2.181 2.755v.013c0 1.737-.786 2.755-2.181 2.755zm7.851 1.053c1.081 0 1.826-.444 2.188-1.23h.109V97h1.19v-7.37h-1.19v4.362c0 1.292-.69 2.085-1.989 2.085-1.176 0-1.654-.636-1.654-1.962v-4.484h-1.19v4.771c0 1.743.862 2.728 2.536 2.728zm5.848-.13h1.19v-4.566c0-1.08.807-1.798 1.941-1.798.26 0 .486.027.732.068V89.55a3.992 3.992 0 00-.595-.048c-.998 0-1.688.451-1.969 1.224h-.109V89.63h-1.19V97zm10.972 0h1.189l1.641-5.701h.109L310.862 97h1.196l2.064-7.37h-1.182l-1.449 5.893h-.11l-1.647-5.892h-1.128l-1.648 5.892h-.109l-1.449-5.892h-1.19L306.275 97zm12.294.13c1.736 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.813.916-1.812.916-1.312 0-2.153-.888-2.187-2.413h5.305v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.272 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.074c.129-1.401.963-2.146 2.057-2.146zm8.22 6.57c1.737 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.813.916-1.811.916-1.313 0-2.154-.888-2.188-2.413h5.305v-.465c0-2.2-1.217-3.691-3.22-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.272 3.787 3.377 3.787zm-.082-6.57c1.087 0 1.894.691 2.017 2.147h-4.074c.129-1.401.963-2.146 2.057-2.146zm5.281 6.44h1.189v-2.796l.691-.67L336.547 97h1.497l-3.424-4.272 3.213-3.097h-1.443l-3.185 3.22h-.11v-6.146h-1.189V97zm7.741 0h1.19V86.705h-1.19V97zm4.242 2.584c1.306 0 1.914-.478 2.522-2.133l2.878-7.82h-1.251l-2.016 6.063h-.11l-2.023-6.063h-1.272l2.728 7.376-.137.437c-.266.848-.677 1.156-1.353 1.156a2.82 2.82 0 01-.492-.035v.978c.164.027.369.041.526.041zM144.451 116.13c1.77 0 2.761-.95 3.062-2.283l.014-.076-1.176.007-.014.041c-.273.821-.902 1.258-1.893 1.258-1.313 0-2.16-1.087-2.16-2.782v-.014c0-1.661.834-2.727 2.16-2.727 1.059 0 1.716.588 1.9 1.312l.007.021h1.183l-.007-.041c-.219-1.313-1.292-2.345-3.083-2.345-2.065 0-3.377 1.49-3.377 3.78v.014c0 2.338 1.319 3.835 3.384 3.835zm7.987 0c2.099 0 3.398-1.449 3.398-3.808v-.013c0-2.366-1.299-3.808-3.398-3.808-2.098 0-3.397 1.442-3.397 3.808v.013c0 2.359 1.299 3.808 3.397 3.808zm0-1.053c-1.394 0-2.18-1.018-2.18-2.755v-.013c0-1.744.786-2.755 2.18-2.755 1.395 0 2.181 1.011 2.181 2.755v.013c0 1.737-.786 2.755-2.181 2.755zm5.384.923h1.189v-4.566c0-1.039.731-1.88 1.695-1.88.93 0 1.532.567 1.532 1.442V116h1.189v-4.737c0-.937.677-1.709 1.702-1.709 1.039 0 1.538.54 1.538 1.627V116h1.19v-5.093c0-1.545-.841-2.406-2.345-2.406-1.019 0-1.859.513-2.256 1.292h-.109c-.342-.766-1.039-1.292-2.037-1.292-.964 0-1.662.458-1.99 1.251h-.109v-1.121h-1.189V116zm12.321 0h1.19v-4.566c0-1.039.731-1.88 1.695-1.88.93 0 1.531.567 1.531 1.442V116h1.19v-4.737c0-.937.676-1.709 1.702-1.709 1.039 0 1.538.54 1.538 1.627V116h1.189v-5.093c0-1.545-.841-2.406-2.344-2.406-1.019 0-1.86.513-2.256 1.292h-.11c-.341-.766-1.039-1.292-2.037-1.292-.964 0-1.661.458-1.989 1.251h-.109v-1.121h-1.19V116zm12.951-8.791c.451 0 .82-.369.82-.82a.823.823 0 00-.82-.821.824.824 0 00-.821.821c0 .451.37.82.821.82zm-.602 8.791h1.19v-7.369h-1.19V116zm6.19.055c.232 0 .458-.028.69-.069v-1.011c-.218.02-.335.027-.546.027-.766 0-1.067-.349-1.067-1.217v-4.17h1.613v-.984h-1.613v-1.907h-1.23v1.907h-1.162v.984h1.162v4.471c0 1.408.635 1.969 2.153 1.969zm2.608-.055h1.189v-4.566c0-1.039.732-1.88 1.695-1.88.93 0 1.532.567 1.532 1.442V116h1.189v-4.737c0-.937.677-1.709 1.702-1.709 1.039 0 1.538.54 1.538 1.627V116h1.19v-5.093c0-1.545-.841-2.406-2.345-2.406-1.018 0-1.859.513-2.256 1.292h-.109c-.342-.766-1.039-1.292-2.037-1.292-.964 0-1.661.458-1.989 1.251h-.11v-1.121h-1.189V116zm15.329.13c1.736 0 2.789-.984 3.042-1.983l.014-.054h-1.19l-.027.061c-.198.445-.813.916-1.811.916-1.313 0-2.154-.888-2.188-2.413h5.305v-.465c0-2.201-1.217-3.691-3.22-3.691s-3.302 1.559-3.302 3.835v.007c0 2.31 1.272 3.787 3.377 3.787zm-.082-6.569c1.087 0 1.894.69 2.017 2.146h-4.074c.129-1.401.963-2.146 2.057-2.146zm5.212 6.439h1.19v-4.361c0-1.292.745-2.085 1.921-2.085 1.176 0 1.722.635 1.722 1.962V116h1.19v-4.771c0-1.75-.923-2.728-2.577-2.728-1.087 0-1.778.458-2.147 1.237h-.109v-1.107h-1.19V116zm10.934.055c.233 0 .458-.028.691-.069v-1.011c-.219.02-.335.027-.547.027-.766 0-1.067-.349-1.067-1.217v-4.17h1.614v-.984h-1.614v-1.907h-1.23v1.907h-1.162v.984h1.162v4.471c0 1.408.636 1.969 2.153 1.969zm5.001.075c1.675 0 2.953-.909 2.953-2.222v-.013c0-1.053-.67-1.655-2.058-1.99l-1.135-.273c-.868-.212-1.237-.527-1.237-1.026v-.013c0-.65.643-1.101 1.518-1.101.888 0 1.463.404 1.62.985h1.169c-.164-1.204-1.238-1.976-2.782-1.976-1.566 0-2.742.923-2.742 2.146v.007c0 1.06.622 1.661 2.003 1.99l1.142.273c.909.219 1.285.567 1.285 1.066v.014c0 .67-.704 1.142-1.695 1.142-.944 0-1.532-.404-1.73-1.019h-1.217c.137 1.217 1.265 2.01 2.906 2.01zm5.909-.062a.888.888 0 10.003-1.779.888.888 0 00-.003 1.779z"
              fill="#4D4D4D"
            />
          </Svg>
          <List title="Short-term benefits" list={shortTerms} />
          <View style={{ marginTop: 24 }} />
          <List title="Long-term benefits" list={longTerms} />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', padding: 16 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginRight: 4,
            borderRadius: 100,
            width: 168,
            height: 52,
            justifyContent: 'center',
            backgroundColor: 'rgba(25, 51, 64, 0.08)'
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              textAlign: 'center'
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Feedback')}
          style={{
            marginLeft: 4,
            borderRadius: 100,
            width: 168,
            height: 52,
            justifyContent: 'center',
            backgroundColor: '#193340'
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#fff',
              fontWeight: '500',
              textAlign: 'center'
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ReviewBenefitList
