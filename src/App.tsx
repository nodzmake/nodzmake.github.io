import './App.css'
import { APP_NAME } from './utils/constants'
import { Container, FlexContainer, PageContainer, SideMenu } from './layouts/'
import COLORS from './utils/theme'
import Output from './components/Output'
import CanvasSettings from './components/CanvasSettings'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()
  const data = location.state

  // utilize this data according to business logic
  if (data) console.log({ data })

  return (
    <Container>
      <SideMenu style={{ color: COLORS['@text-color'] }}>
        <h2>{APP_NAME}</h2>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </SideMenu>
      <FlexContainer
        style={{
          flexDirection: 'row',
          overflow: 'hidden',
          width: '100%',
          backgroundColor: COLORS['@container-background']
        }}
      >
        <PageContainer
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Output />
        </PageContainer>
        <SideMenu
          style={{
            flex: 1,
            color: COLORS['@text-color'],
            height: '100%',
            maxWidth: '25%',
            justifyContent: 'flex-end'
          }}
        >
          <CanvasSettings bColor={COLORS['@primary-color']} />
        </SideMenu>
      </FlexContainer>
    </Container>
  )
}

export default App
