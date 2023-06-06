import { genNodz } from '../../api'
import NodzForm from '../../components/NodzForm'

const NodzFormContainer = () => {
  const handleSubmit = e => genNodz(e.num)
  const handleEdit = () => null
  return <NodzForm initialValues={{ num: 90 }} handleSubmit={handleSubmit} />
}

export default NodzFormContainer
