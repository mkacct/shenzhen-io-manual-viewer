'use strict';

class Prefs extends React.Component {
	constructor() {
		super();
		this.defaultState = {
			notesLink: ""
		}
		this.state = {};
		for (let key in this.defaultState) {
			this.state[key] = this.defaultState[key];
		}
		this.handleChange = this.handleChange.bind(this);
		this.saveData = this.saveData.bind(this);
		this.submit = this.submit.bind(this);
	}
	
	componentDidMount() {this.loadData();}
	
	componentWillUnmount() {this.saveData();}
	
	handleChange(e) {
		const {name, value, type, checked} = e.target;
		this.setState({[name]: (type == "checkbox" ? checked : value)});
	}
	
	loadData() {
		let newState = {};
		for (let key in this.defaultState) {
			const gotValue = localStorage.getItem(key);
			if (gotValue) {
				newState[key] = gotValue;
			} else {
				newState[key] = this.defaultState[key];
			}
		}
		this.setState(newState);
	}
	
	saveData() {
		const trimmedNotesLink = this.state.notesLink.trim();
		if (trimmedNotesLink == "" || /^[a-zA-Z][a-zA-z\d+.-]*:.*$/.test(trimmedNotesLink)) {
			localStorage.setItem("notesLink", trimmedNotesLink);
		} else {
			alert("URL is not valid");
		}
		this.loadData();
	}
	
	submit(e) {
		e.preventDefault();
		this.saveData();
	}
	
	render() {
		return (
			<div className="submenu">
				<h2>Preferences</h2>
				<form onSubmit={this.submit}>
					<h3>Notes link</h3>
					<p>You can set a URL (ex. of a notes web app) to be opened with the "Engineering Notes" button.</p>
					<input
						name="notesLink"
						type="text"
						placeholder="URL"
						value={this.state.notesLink}
						autoComplete="off"
						spellCheck="false"
						onChange={this.handleChange}
						onBlur={this.saveData}
		 			/>
				</form>
			</div>
		);
	}
}