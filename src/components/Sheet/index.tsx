import { useEffect, useState } from 'react'
import { APP_NAME } from '../../utils/constants'
import { Container, FlexContainer, PageContainer } from '../../layouts'
import COLORS from '../../utils/theme'
import { read, utils } from 'xlsx'

const Sheet = () => {
  interface President {
    Name: string
    Index: number
  }

  const [pres, setPres] = useState<President[]>([])

  useEffect(() => {
    document.title = APP_NAME
    ;(async () => {
      const f = await (
        await fetch('https://sheetjs.com/pres.xlsx')
      ).arrayBuffer()
      const wb = read(f)
      const ws = wb.Sheets[wb.SheetNames[0]]
      const data: President[] = utils.sheet_to_json<President>(ws)
      setPres(data)
    })()
  }, [])

  return (
    <Container>
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
          <div style={{ color: 'white' }}>
            <table>
              <thead>
                <th>Name</th>
                <th>Index</th>
              </thead>
              <tbody>
                {pres.map(row => (
                  <tr>
                    <td>{row.Name}</td>
                    <td>{row.Index}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageContainer>
      </FlexContainer>
    </Container>
  )
}

export default Sheet
