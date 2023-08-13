import { useEffect, useRef } from 'react'
import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

const BabylonScene = ({ width = 716, height = 407 }) => {
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
      console.log(light);
      const box = BABYLON.MeshBuilder.CreateBox(
        'box',
        { size: 2, height: 2 },
        scene
      )

      // Create a material with the desired color
      const material = new BABYLON.StandardMaterial('boxMaterial', scene)
      material.diffuseColor = new BABYLON.Color3(0.4, 0.6, 0.8) // RGB color values (0 to 1)
      box.material = material

      const box1 = BABYLON.MeshBuilder.CreateBox(
        'box',
        { size: 2, height: 40 },
        scene
      )
      box1.position = new BABYLON.Vector3(4, 0, 0) // Set x, y, z coordinates

      // Apply the material to the box
      box1.material = material

      engine.runRenderLoop(() => {
        scene.render()
      })

      return () => {
        engine.dispose()
      }
    }
  }, [])
  return <canvas ref={canvasRef} style={{ width: width, height: height }} />
}

export default BabylonScene
