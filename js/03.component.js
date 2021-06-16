// react는 컴포넌트 제작을 통해서 재사용 가능한 조각으로 나눈다.
// 컴포넌트는 항상 대문자로 시작해야 된다. 소문자로 시작하면 태그로 인식된다.

const app = document.getElementById('app')

// 1. 클래스로 만들기
class Sample extends React.Component {
	render() {
		return (
			<h1>Hello, Class</h1>
		)
	}
}
ReactDOM.render(<Sample />, app)

// 2. 함수형(Hooks)으로 만들기
const Sample2 = () => {
	return (
		<h1>Hello, Hooks</h1>
	)
}
ReactDOM.render(<Sample2 />, app)


// 3. 컴포넌트 불러오기 - class
class App extends React.Component {
	render() {
		return (
			<div>
				<Sample />
				<Sample2 />
			</div>
		)
	}
}
ReactDOM.render(<App />, app)

// 4. 컴포넌트 불러오기 - hooks
const App2 = () => {
	return (
		<div>
			<Sample />
			<Sample2 />
		</div>
	)
}
ReactDOM.render(<App2 />, app)