import COLORS from '../../utils/theme'
import NodzMakeSvg from './nodzmake'

const Splash = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <NodzMakeSvg fill={COLORS['@primary-color']} />
    </div>
  )
}
export default Splash
