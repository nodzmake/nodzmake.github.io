import { ReactNode, useLayoutEffect, useState } from 'react'
import { APP_NAME } from '../../utils/constants'
import NodzMakeSvg from './nodzmake'
import COLORS from '../../utils/theme'
import HandwritingTagline from './Tagline'
interface MyComponentProps {
  children: ReactNode | JSX.Element
  image?: JSX.Element
}

const Splash = ({
  children,
  image = <NodzMakeSvg fill={COLORS['@primary-color']} />
}: MyComponentProps) => {
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    document.title = APP_NAME
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [children])

  return loading ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      {image}
      <HandwritingTagline />
    </div>
  ) : (
    <div>{children}</div>
  )
}
export default Splash
