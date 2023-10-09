import { useNavigate } from 'react-router-dom'

const TempNavigate = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/sheet')}>Sheet</button>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default TempNavigate
