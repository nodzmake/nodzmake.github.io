import { useEffect, useRef } from 'react'
import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

const BabylonScene = ({ width = 716, height = 407, data, settings }) => {
  const canvasRef = useRef()

  const createBox = (scene, material, boxSize, boxHeight, posX, posY, posZ) => {
    const box = BABYLON.MeshBuilder.CreateBox(
      'box',
      { size: boxSize, height: boxHeight },
      scene
    )
    box.position = new BABYLON.Vector3(posX, posY, posZ)
    box.material = material
  }

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
      console.log(light)

      const material = new BABYLON.StandardMaterial('boxMaterial', scene)
      if (settings && settings.color) {
        const { h, s, v } = settings.color
        material.diffuseColor = new BABYLON.Color3.FromHSV(h, s, v)
      }

      if (data) {
        data.map((obj, i) => {
          createBox(scene, material, i, i, i * i, i / 2, 0)
          return obj
        })
      }

      engine.runRenderLoop(() => {
        scene.render()
      })

      return () => {
        engine.dispose()
      }
    }
  }, [data, settings])

  return <canvas ref={canvasRef} style={{ width: width, height: height }} />
}

export default BabylonScene
