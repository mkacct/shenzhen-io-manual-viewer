'use strict';

class Dialog extends React.Component {
	constructor() {
		super();
		this.handleClose = this.handleClose.bind(this);
	}
	
	componentDidMount() {dialogPolyfill.registerDialog(ReactDOM.findDOMNode(this));}
	
	componentDidUpdate() {
		const dialog = ReactDOM.findDOMNode(this);
		if (this.props.open && !dialog.open) {
			if (this.props.modal) {
				dialog.showModal();
			} else {
				dialog.show();
			}
		} else if (dialog.open && !this.props.open) {
			dialog.close();
		}
	}
	
	handleClose() {
		if (this.props.handleClose) {this.props.handleClose();}
	}
	
	render() {
		let filteredProps = {};
		for (let key in this.props) {
			if (["open", "modal", "handleClose"].indexOf(key) < 0) {filteredProps[key] = this.props[key];}
		}
		return (
			<dialog {...filteredProps} onClose={this.handleClose}>
				{this.props.children}
			</dialog>
		);
	}
}