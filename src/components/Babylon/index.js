import { useEffect, useRef } from 'react'
import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

const BabylonScene = ({width=716,height=407}) => {
  const canvasRef = useRef()

  useEffect(() => {
    if (canvasRef.current) {
      const engine = new BABYLON.Engine(canvasRef.current, true)

      const scene = new BABYLON.Scene(engine)
      const camera = new BABYLON.ArcRotateCamera(
        'camera',
        -Math.PI / 2,
        Math.PI / 2.5,
        10,
        BABYLON.Vector3.Zero(),
        scene
      )
      camera.attachControl(canvasRef.current, true)

      const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )
      const box = BABYLON.MeshBuilder.CreateBox('box', { size: 2 }, scene)

      engine.runRenderLoop(() => {
        scene.render()
      })

      return () => {
        engine.dispose()
      }
    }
  }, [])
  return <canvas ref={canvasRef} style={{ width: width, height: height }} />;
}

export default BabylonScene
