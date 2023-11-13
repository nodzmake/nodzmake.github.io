import BabylonScene from '../Babylon'

const Output = ({ data, settings }) => {
  return (
    <div>
      <BabylonScene data={data} settings={settings} />
    </div>
  )
}

export default Output
