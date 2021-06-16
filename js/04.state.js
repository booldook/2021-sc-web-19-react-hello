/*********** TitleBar *************/
class Title extends React.Component {
	render() {
		return (
			<h1 className="title-bar">{ this.props.title }</h1>
		)
	}
}


/*********** Search *************/
class Search extends React.Component {
	onChange = (e) => {
		// 하위 컴포넌트가 상위 컴포넌트에게 값을 전달하기
		this.props.onChangeTitle(e.target.value)
	}
	render() {
		return (
			<input type="text" className="input" name="query" onChange={this.onChange} />
		)
	}
}


/*********** App *************/
class App extends React.Component {

	state = {
		title: ''
	}

	changeTitle = (v) => {
		this.setState({
			title: v
		})
	}

	render() {
		return (
			<div>
				<Title title={ this.state.title } />
				<Search onChangeTitle={this.changeTitle} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))