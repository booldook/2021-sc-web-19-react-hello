const { useState, useRef, useEffect } = React
const { Component, createRef } = React
const { render } = ReactDOM

const Title = ({ title }) => {
	return (
		<div className="jumbotron">
			<h1 className="fa-2x">{ title.headTitle }</h1>
			<hr />
			<h2>{ title.subTitle }</h2>
		</div>
	)
}

const Search = ({ dispatchChange }) => {
	const [query, setQuery] = useState('')
	const searchRef = useRef(null)

	const onClose = (e) => {
		setQuery('')
		searchRef.current.focus()
	}

	const onChange = (e) => {
		setQuery(e.target.value)
		dispatchChange(e.target.value)
	}

	return (
		<form className="form-search">
			<input
			autoFocus 
			type="text"
			className="form-control"
			placeholder="검색할 이벤트를 적어주세요." 
			ref={ searchRef } 
			onChange={ onChange } 
			value={ query } />
			{
				query === '' 
				? '' 
				: <i className="fa fa-times-circle bt-close" onClick={ onClose } />
			}
		</form>
	)
}

const Lists = ({ evt }) => {
	return (
		<ul className="list-wrapper">
			{
				evt.map( v => <List key={ uuidv4() } v={ v } />)
			}
		</ul>
	);
}

const List = ({ v }) => {
	return (
		<li className="list-wrap">
			<div className="img-wrap">
				<img src={ "../img/" + v.src } alt={ v.title } className="w-100" />
			</div>
			<div className="content-wrap">
				<h2 className="title">{ v.title }</h2>
				<h3 className="price">${ v.price }</h3>
			</div>
		</li>
	);
}

const App = () => {
	const [evt, setEvt] = useState([])
	const [searchEvt, setSearchEvt] = useState([])
	const title = {
		headTitle: 'React를 배워봅시다.',
		subTitle: 'Component 배우기'
	}

	useEffect(async () => {
		try {
			const { data } = await axios('../json/product.json') 
			setEvt([...data])
			setSearchEvt([...data])
			return () => {
				//componentWillUnmount
			}
		}
		catch(err) {
			console.log(err)
		}
		finally {
			// 무조건 해야될 일
		}
	}, [])

	const onChange = query => {
		setSearchEvt(evt.filter( v => v.title.includes(query)))
	}
	
	return (
		<div className="container">
			<Title title={ title }/>
			<Search dispatchChange={ onChange } />
			<Lists evt={ searchEvt } />
		</div>
	)
}

render(<App />, document.querySelector('#app'))