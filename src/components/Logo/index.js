import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function Logo(props) {
  return (
    <Svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#16161A">
        <Path d="M35.14 3.125a5.554 5.554 0 00-7.548-1.646c-5.425 3.407-9.707 7.599-12.715 12.472a36.455 36.455 0 00-5.214 16.238 5.4 5.4 0 005.818 5.792 5.42 5.42 0 005.078-4.905c.753-8.858 4.976-15.59 12.922-20.558a5.27 5.27 0 001.671-7.406l-.013.013zM11.653 11.233A6.48 6.48 0 102.49 2.068a6.48 6.48 0 009.164 9.165z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h36v36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Logo
