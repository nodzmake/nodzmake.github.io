import { LegacyRef, useEffect, useRef } from 'react'
import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

type props = {
  data: any
  width?: number
  height?: number
}

const BabylonScene = ({ width = 716, height = 407, data }: props) => {
  const canvasRef = useRef()

  const createBox = (
    scene: any,
    material: any,
    boxSize: any,
    boxHeight: any,
    posX: any,
    posY: any,
    posZ: any
  ) => {
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
      material.diffuseColor = new BABYLON.Color3(0.4, 0.6, 0.8) // RGB color values (0 to 1)

      if (data) {
        data.map((obj: any, i: any) => {
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
  }, [data])

  return (
    <canvas
      ref={canvasRef as unknown as LegacyRef<HTMLCanvasElement>}
      style={{ width: width, height: height }}
    />
  )
}

export default BabylonScene
