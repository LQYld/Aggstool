import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import MTLresource from '../../../public/ecosphere.mtl'
import OBJresource from '../../../public/ecosphere.obj'
import styles from './index.module.css'
export default function ThreeDCelestialBody() {
  const webglDom = useRef(null)
  useEffect(() => {
    if (webglDom.current) {
      const webglWidth = webglDom.current.offsetWidth
      const webglHeight = webglDom.current.offsetHeight

      // 创建场景
      const scene = new THREE.Scene()

      // 设置环境光（十六进制颜色）
      const ambient = new THREE.AmbientLight(0x444444)

      // 将环境光添加到场景中
      scene.add(ambient)

      // 设置点光源（十六进制颜色）
      const point = new THREE.PointLight(0xffffff)

      // 设置点光源的位置（x轴, y轴, z轴）
      point.position.set(400, 200, 300)

      // 将点光源添加到场景中
      scene.add(point)

      // 创建透视相机（角度, 宽高比, 最近距离, 最远距离）
      const camera = new THREE.PerspectiveCamera(
        60,
        webglWidth / webglHeight,
        0.1,
        2000
      )

      // 设置相机的位置（x轴, y轴, z轴）
      camera.position.set(100, 100, 100)

      // 将相机指向场景中心
      camera.lookAt(scene.position)

      // 创建渲染器
      const renderer = new THREE.WebGLRenderer()

      // 设置渲染器的初始颜色（十六进制颜色, 透明度）
      renderer.setClearColor(0xeeeeee, 1)

      // 设置渲染器大小（标签宽度, 标签高度）
      renderer.setSize(webglWidth, webglHeight)

      // 将渲染器添加到渲染容器中（渲染器元素）
      webglDom.current.appendChild(renderer.domElement)
      renderer.render(scene, camera)

      // 创建 OBJ 模型加载器

      const mtlLoader = new MTLLoader()
      mtlLoader.load(MTLresource, function (materials) {
        materials.preload()
        const objLoader = new OBJLoader()
        objLoader.load(OBJresource, function (obj) {
          obj.scale.x = obj.scale.y = obj.scale.z = 100
          obj.rotation.y = 500
          const mesh = obj
          mesh.position.y = -50
          scene.add(mesh)
        })
      })
    }
  }, [])
  return <div ref={webglDom} className={styles.container}></div>
}
