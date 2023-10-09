import React from 'react'
import { genNodz } from '../../api'
import NodzForm from '../../components/NodzForm'

const NodzFormContainer = () => {
  const handleSubmit = (e) => genNodz(e.num)
  // const handleEdit = () => null
  const validateForm = () => null
  return (
    <NodzForm
      initialValues={{ num: 90 }}
      handleSubmit={handleSubmit}
      validateForm={validateForm}
    />
  )
}

export default NodzFormContainer
