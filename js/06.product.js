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
		this.props.onChange(e.target.value)
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

class Lists extends Component {
	render() {
		return (
			<ul className="list-wrapper">
				{
					this.props.evt.map( v => <List key={ uuidv4() } v={ v } />)
				}
			</ul>
		);
	}
}

class List extends Component {
	render() {
		const { src, title, price } = this.props.v
		return (
			<li className="list-wrap">
				<div className="img-wrap">
					<img src={ "../img/" + src } alt={ title } className="w-100" />
				</div>
				<div className="content-wrap">
					<h2 className="title">{ title }</h2>
					<h3 className="price">${ price }</h3>
				</div>
			</li>
		);
	}
}

class App extends Component {
	state = {
		evt: [],
		searchEvt: []
	}

	title = {
		headTitle: 'React를 배워봅시다.',
		subTitle: 'Component 배우기'
	}

	async componentDidMount() {
		try {
			const { data } = await axios('../json/product.json') 
			this.setState({
				evt: [...data],
				searchEvt: [...data]
			})
		}
		catch(err) {
			console.log(err)
		}
	}

	onChange = query => {
		this.setState({
			...this.state,
			searchEvt: this.state.evt.filter( v => v.title.includes(query) )
		})
	}
	
	render() {
		return (
			<div className="container">
				<Title title={ this.title }/>
				<Search onChange={ this.onChange } />
				<Lists evt={ this.state.searchEvt } />
			</div>
		)
	}
}

render(<App />, document.querySelector('#app'))