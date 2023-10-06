import BabylonScene from '../Babylon'

type props = {
  data: any
}

const Output = ({ data }: props) => {
  return (
    <div>
      <BabylonScene data={data} />
    </div>
  )
}

export default Output
