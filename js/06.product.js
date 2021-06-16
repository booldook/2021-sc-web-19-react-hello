const { Component, createRef } = React
const { render } = ReactDOM

class Title extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 className="fa-2x">{ this.props.title.headTitle }</h1>
				<hr />
				<h2>{ this.props.title.subTitle }</h2>
			</div>
		)
	}
}

class Search extends Component {

	state = {
		query: ''
	}

	searchRef = createRef()

	onClose = (e) => {
		this.setState({
			query: ''
		})
		this.searchRef.current.focus()
	}

	onChange = (e) => {
		this.setState({
			query: e.target.value
		})
	}

	render() {
		return (
			<form className="form-search">
				<input
				autoFocus 
				type="text"
				className="form-control"
				placeholder="검색할 이벤트를 적어주세요." 
				ref={this.searchRef} 
				onChange={this.onChange} 
				value={this.state.query} />
				{
					this.state.query === '' 
					? '' 
					: <i className="fa fa-times-circle bt-close" onClick={this.onClose} />
				}
			</form>
		)
	}
}

class App extends Component {
	state = {

	}
	
	title = {
		headTitle: 'React를 배워봅시다.',
		subTitle: 'Component 배우기'
	}
	
	render() {
		return (
			<div className="container">
				<Title title={ this.title }/>
				<Search />
			</div>
		)
	}
}

render(<App />, document.querySelector('#app'))