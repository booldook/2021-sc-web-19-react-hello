// List, Search, Title, App
const { useState, useRef, useMemo, useCallback, useEffect } = React

const List = (props) => {
	return (
		<div>
			<h3>{ props.title }</h3>
		</div>
	)
}

const Title = (props) => {
	return (
		<div>
			<h1>{ props.title }</h1>
		</div>
	)
}

const Search = (props) => {

	// useRef()로 선언하면 DOM을 직접 접근할 수 있다.
	const inputRef = useRef(null) 

	const onSearchChange = (e) => {
		props.searchChange(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		// props.searchSubmit(e.target.query.value)
		props.searchSubmit(inputRef.current.value)
		inputRef.current.value = ''
		inputRef.current.focus()
	}

	return (
		<form onSubmit={onSubmit}>
			<input type="text" name="query" onChange={ onSearchChange } ref={ inputRef }
			placeholder="타이틀을 입력" autoFocus />
			<button>등록</button>
		</form>
	)
}

const App = () => {

	// state 선언
	const [title, setTitle] = useState('Hello Hooks');
	const [lists, setLists] = useState([]);
	
	const searchChange = (v) => {
		setTitle(v)
	}

	const searchSubmit = (v) => {
		setLists([...lists, v])
	}

	return (
		<div>
			<Title title={ title } />
			<Search searchChange={ searchChange } searchSubmit={ searchSubmit } />
			<div className="list-wrap">
				{
					lists.map( v => <List title={ v } key={ uuidv4() } /> )
				}
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))