// Element는 React앱의 가장 작은 단위
// Element가 모여서 Component가 된다.
const app = document.getElementById('app')
const el = <h1>Hello World</h1>

ReactDOM.render(el, app)

function tick() {
	const el = (
		<div>
		{/* jsx안에서 주석은 지금처럼 표현된다. */}
		{/* jsx는 항상 하나의 root태그를 갖는다 */}
		{/* 이 안에서는 JS 표현식만 가능하다. (안되는거: 변수선언, 함수선언, if, for)*/}
		{/* if 대신 삼항연산자, for 대신 map, filter */}
		{/* new Date().toLocaleTimeString() */}
		{/* arr.map( v => v + 1 ) */}
			<h1>Hello, World</h1>
			<h2>현재 시간은 { new Date().toLocaleTimeString() }</h2>
		</div>
	)
	ReactDOM.render(el, app)
}
setInterval(tick, 1000)

function htmlTick() {
	var html  = '<div>'
	html += '<h1>Hello World</h1>'
	html += '<h2>현재시간은 ' + new Date().toLocaleTimeString() + '</h2>'
	html += '</div>'
	app.innerHTML = html
} 
// setInterval(htmlTick, 1000)