import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Dimensions } from 'react-native'
import { Themed } from 'theme'

const { width } = Dimensions.get('window')

const containedStyle = {
  borderWidth: 0,
  backgroundColor: 'charcoal'
}

const outlinedStyle = {
  borderWidth: 2,
  borderColor: 'charcoal'
}

const commonMediumStyle = {
  marginHorizontal: 4,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 9,
  alignSelf: 'center',
  width: width / 2 - 32
}
const styles = {
  contained: {
    big: {
      content: {
        ...containedStyle,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 32,
        paddingVertical: 16,
        paddingHorizontal: 24
      }
    },
    small: {
      content: {
        ...containedStyle,
        marginHorizontal: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 9,
        alignSelf: 'center'
      }
    },
    medium: {
      content: {
        ...containedStyle,
        ...commonMediumStyle
      }
    },
    labelColor: 'cultured'
  },
  outlined: {
    big: {
      content: {
        ...outlinedStyle,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 32,
        paddingVertical: 16,
        paddingHorizontal: 24
      }
    },
    small: {
      content: {
        ...outlinedStyle,
        marginHorizontal: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 9,
        alignSelf: 'center'
      }
    },
    medium: {
      content: {
        ...outlinedStyle,
        ...commonMediumStyle
      }
    },
    labelColor: 'charcoal'
  },
  text: {
    big: {
      content: {
        paddingVertical: 16,
        backgroundColor: 'transparent'
      }
    },
    small: {
      content: {
        paddingVertical: 8,
        backgroundColor: 'transparent'
      }
    },
    labelColor: 'charcoal'
  }
}

const Button = ({
  onPress,
  label,
  disabled,
  variant,
  size,
  backgroundColor,
  testID,
  labelColor
}) => {
  const contentStyle = {
    ...styles[variant][size].content,
    backgroundColor:
      backgroundColor ?? styles[variant][size].content.backgroundColor,
    alignSelf: size === 'big' ? 'center' : 'auto'
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled}
      testID={testID}>
      <Themed.View sx={contentStyle}>
        <Themed.Text
          sx={{
            color: labelColor ?? styles[variant].labelColor,
            fontSize: size === 'small' ? 15 : 17,
            fontFamily: 'regular',
            letterSpacing: -0.41,
            textAlign: 'center'
          }}>
          {label}
        </Themed.Text>
      </Themed.View>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  testID: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  variant: 'contained',
  size: 'big'
}

export default Button
