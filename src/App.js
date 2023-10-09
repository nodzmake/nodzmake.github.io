import './App.css'
import { APP_NAME } from './utils/constants'
import { Container, FlexContainer, PageContainer, SideMenu } from './layouts'
import COLORS from './utils/theme'
import Output from './components/Output'
import CanvasSettings from './components/CanvasSettings'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const App = () => {
  const location = useLocation()
  const data = location.state
  const [csvData, setCsvData] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      setCsvData(data)
    } else {
      navigate('/import')
    }
  }, [data, navigate])

  if (!data) return null

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
          <Output data={csvData} />
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
