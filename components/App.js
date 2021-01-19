'use strict';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			page: 1,
			maxPage: 35,
			submenu: "tabs",
			showLightbox: false,
			showStory: false,
			showReferenceCard: false
		}
		this.lightbox = React.createRef();
		this.story = React.createRef();
		this.setPage = this.setPage.bind(this);
		this.changePage = this.changePage.bind(this);
	}
	
	componentDidMount() {
		document.addEventListener("keydown", (e) => {
			if (e.repeat) {return;}
			switch (e.key) {
				case "ArrowLeft":
					if (e.ctrlKey) {
						e.preventDefault();
						this.setPage(1);
						break;
					}
				case "ArrowUp":
				case "PageUp":
					e.preventDefault();
					this.changePage(-1);
					break;
				case "ArrowRight":
					if (e.ctrlKey) {
						e.preventDefault();
						this.setPage(this.state.maxPage);
						break;
					}
				case "ArrowDown":
				case "PageDown":
					e.preventDefault();
					this.changePage(1);
					break;
				case "Home":
					e.preventDefault();
					this.setPage(1);
					break;
				case "End":
					e.preventDefault();
					this.setPage(this.state.maxPage);
					break;
				case "Escape":
					if (!this.anyDialogsOpen()) {
						this.setState({submenu: "tabs"});
					} else {
						return;
					}
					break;
				case "1":
					this.setState({showReferenceCard: !this.state.showReferenceCard});
					break;
				default:
					return;
			}
			document.activeElement.blur();
		});
	}
	
	anyDialogsOpen() {
		return this.state.showLightbox || this.state.showReferenceCard;
	}
	
	setPage(page) {
		this.setState({page: page});
	}
	
	changePage(by) {
		const newPage = this.state.page + by;
		if (newPage >= 1 && newPage <= this.state.maxPage) {this.setState({page: newPage});}
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (this.state.showLightbox && !prevState.showLightbox) {
			ReactDOM.findDOMNode(this.lightbox.current).scrollTop = 0;
		}
		if (this.state.showStory && !prevState.showStory) {
			ReactDOM.findDOMNode(this.story.current).scrollLeft = 0;
		}
	}
	
	render() {
		let submenu;
		switch (this.state.submenu) {
			case "tabs":
				submenu = (<Tabs page={this.state.page} setPage={this.setPage} />);
				break;
			case "contents":
				submenu = (<Contents page={this.state.page} setPage={this.setPage} />);
				break;
			case "instructions":
				submenu = (<Instructions />);
				break;
			case "about":
				submenu = (<About />);
				break;
		}
		return (
			<div id="container">
				<Menu submenu={this.state.submenu} switch={(submenu) => {this.setState({submenu: submenu});}} showCard={() => {this.setState({showReferenceCard: true});}} showStory={() => {this.setState({showStory: true});}} />
				<div className="divider"></div>
				{submenu}
				<PageViewer page={this.state.page} maxPage={this.state.maxPage} changePage={this.changePage} setLightbox={(bool) => {this.setState({showLightbox: bool});}} hide={this.state.showLightbox} />
				<Dialog id="lightbox" open={this.state.showLightbox} ref={this.lightbox} modal handleClose={() => {this.setState({showLightbox: false});}}>
					<PageViewer page={this.state.page} maxPage={this.state.maxPage} changePage={this.changePage} setLightbox={(bool) => {this.setState({showLightbox: bool});}} lightbox />
				</Dialog>
				<Dialog id="story" open={this.state.showStory} ref={this.story} modal className="otherDialog" onClick={() => {this.setState({showStory: false});}} handleClose={() => {this.setState({showStory: false});}}>
					<Story />
				</Dialog>
				<Dialog open={this.state.showReferenceCard} modal className="otherDialog" onClick={() => {this.setState({showReferenceCard: false});}} handleClose={() => {this.setState({showReferenceCard: false});}}>
					<ReferenceCard />
				</Dialog>
			</div>
		);
	}
}