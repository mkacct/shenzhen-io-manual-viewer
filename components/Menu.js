'use strict';

class Menu extends React.Component {
	render() {
		return (
			<div id="menu">
				<img src="res/logo.png" alt="Shenzhen Longteng Technical Document Organizer" />
				<button onClick={() => {this.props.switch("tabs");}} className={this.props.submenu == "tabs" ? "selected" : null}>Tabs</button>
				<button onClick={() => {this.props.switch("contents");}} className={this.props.submenu == "contents" ? "selected" : null}>Contents</button>
				<button>Story Documents</button>
				<button onClick={this.props.showCard}>Reference Card</button>
				<button onClick={() => {this.props.switch("instructions");}} className={this.props.submenu == "instructions" ? "selected" : null}>Viewer Instructions</button>
				<button onClick={() => {this.props.switch("about");}} className={this.props.submenu == "about" ? "selected" : null}>About</button>
			</div>
		);
	}
}