import {
	BoxGeometry,
	MeshStandardMaterial,
	Mesh,
	ShaderMaterial,
	Vector2,
	Vector4,
	DoubleSide,
	TorusGeometry,
	MeshBasicMaterial,
	Points,
} from 'three'
import vertexShader from '/@/shaders/vertex.glsl'
import fragmentShader from '/@/shaders/fragment.glsl'
export const addMeshes = () => {
	const geometry = new BoxGeometry(1, 1, 1)
	const material = new MeshStandardMaterial({ color: 0xff0000 })
	const mesh = new Mesh(geometry, material)
	mesh.position.set(-2, 0, 0)
	return mesh
}
export const testPoints = () => {
	const geometry = new TorusGeometry(10, 5, 16, 100)
	const material = new MeshBasicMaterial({ color: 'white' })
	const mesh = new Points(geometry, material)
	mesh.position.set(-2, 0, 0)
	return mesh
}

export const addShader = () => {
	const geometry = new BoxGeometry(1, 1, 1)
	const material = new ShaderMaterial({
		extensions: {
			derivatives: '#extension GL_OES_standard_derivatives : enable',
		},
		side: DoubleSide,
		uniforms: {
			uTime: { type: 'f', value: 0 },
			resolution: { type: 'v4', value: new Vector4() },
			uvRate1: {
				value: new Vector2(1, 1),
			},
			displacementStrength: { type: 'f', value: 0.5 },
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader,
	})
	const mesh = new Mesh(geometry, material)
	mesh.position.set(2, 0, 0)
	return mesh
}
