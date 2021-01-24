import x from './x.js'
import y from './y.scss'
import z from './z.less'
import a from './a.styl'
import jpg from './assets/webpackDemo.jpg'

const div = document.getElementById('demo')
div.innerHTML = `
    <img src = ${jpg}>
`
const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)
button.onclick = ()=> {
	const promise = import('./b.js')
	promise.then((module) => {
	const fn = module.default
	fn()
	},()=>{
	console.log('模块加载错误')
	})
}