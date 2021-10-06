import React from 'react'
import PropTypes from 'prop-types'
import { Themed } from 'theme'

const containerStyle = {
  marginBottom: 10,
  marginTop: 1
}
const Title = ({ title }) => {
  return (
    <Themed.View sx={containerStyle}>
      <Themed.Text
        sx={{
          color: 'mako',
          fontSize: 34,
          letterSpacing: 0.37,
          fontFamily: 'bold',
          lineHeight: '41px'
        }}>
        {title}
      </Themed.Text>
    </Themed.View>
  )
}

Title.defaultProps = {
  title: 'Title'
}
Title.propTypes = {
  title: PropTypes.string
}
export default Title
