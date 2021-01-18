'use strict';

class Dialog extends React.Component {
	constructor() {
		super();
		this.handleClose = this.handleClose.bind(this);
	}
	
	componentDidMount() {
		dialogPolyfill.registerDialog(ReactDOM.findDOMNode(this));
	}
	
	setOpen(bool) {
		const dialog = ReactDOM.findDOMNode(this);
		if (bool && !dialog.open) {
			if (this.props.modal) {
				dialog.showModal();
			} else {
				dialog.show();
			}
			if (this.props.handleChange) {
				this.props.handleChange(true);
			}
		} else if (dialog.open && !bool) {
			dialog.close();
		}
	}
	
	isOpen() {return ReactDOM.findDOMNode(this).open;}
	
	handleClose() {
		if (this.props.handleChange) {
			this.props.handleChange(false);
		}
	}
	
	render() {
		let filteredProps = {};
		for (let key in this.props) {
			if (["modal", "handleChange"].indexOf(key) < 0) {filteredProps[key] = this.props[key];}
		}
		return (
			<dialog {...filteredProps} onClose={this.handleClose}>
				{this.props.children}
			</dialog>
		);
	}
}