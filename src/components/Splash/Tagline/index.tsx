import { useEffect, useMemo, useState } from 'react'
import { HandwritingDiv } from './styles'
import { TAGLINES } from '../../../utils/constants'

const HandwritingTagline = () => {
  const tags = TAGLINES
  const [displayedText, setDisplayedText] = useState('')

  let tagline = useMemo(() => {
    let randNum = Math.floor((Math.random() * 100) % tags.length)
    return TAGLINES[randNum]
  }, [tags])


  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < tagline.length) {
        setDisplayedText(tagline.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return <HandwritingDiv>{displayedText}</HandwritingDiv>
}

export default HandwritingTagline
