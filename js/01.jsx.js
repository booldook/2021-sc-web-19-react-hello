const app = document.getElementById('app')

// 1. React의 createElement로 DOM생성 - ReactDOM에 쓸 것
const el = React.createElement(
	'h1',
	{ className: 'title-wrap', title: 'React title' },
	'Hello, React2'
)
ReactDOM.render(el, app)
	
// 2. ReactDOM에 JSX 방식으로 적용
ReactDOM.render(<h1>Hello React!</h1>, app)

// 3. 변수를 사용할 수도 있다.
const userid = 'booldook'
const el2 = (
	<div className="title-wrap">
		<h1>Hello { userid }</h1>
	</div>
)
ReactDOM.render(el2, app)
