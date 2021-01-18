'use strict';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			page: 1,
			maxPage: 35,
			submenu: "tabs",
			lightboxReadOpen: false
		}
		this.lightbox = React.createRef();
		this.referenceCard = React.createRef();
		this.setPage = this.setPage.bind(this);
		this.changePage = this.changePage.bind(this);
		this.setLightbox = this.setLightbox.bind(this);
	}
	
	componentDidMount() {
		document.addEventListener("keydown", (e) => {
			if (e.repeat) {return;}
			switch (e.key) {
				case "ArrowLeft":
					if (e.ctrlKey) {
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
						this.setPage(this.state.maxPage);
						break;
					}
				case "ArrowDown":
				case "PageDown":
					e.preventDefault();
					this.changePage(1);
					break;
				case "Home":
					this.setPage(1);
					break;
				case "End":
					this.setPage(this.state.maxPage);
					break;
				case "Escape":
					if (!this.anyDialogsOpen()) {this.setState({submenu: "tabs"});}
					break;
				case "1":
					this.referenceCard.current.setOpen(!this.referenceCard.current.isOpen());
					break;
			}
		});
	}
	
	anyDialogsOpen() {
		return this.lightbox.current.isOpen();
	}
	
	setPage(page) {
		this.setState({page: page});
	}
	
	changePage(by) {
		const newPage = this.state.page + by;
		if (newPage >= 1 && newPage <= this.state.maxPage) {this.setState({page: newPage});}
	}
	
	setLightbox(bool) {
		this.lightbox.current.setOpen(bool);
		if (bool) {ReactDOM.findDOMNode(this.lightbox.current).scrollTop = 0;}
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
				<Menu submenu={this.state.submenu} switch={(submenu) => {this.setState({submenu: submenu});}} showCard={() => {this.referenceCard.current.setOpen(true);}} />
				<div className="divider"></div>
				{submenu}
				<PageViewer page={this.state.page} maxPage={this.state.maxPage} changePage={this.changePage} setLightbox={this.setLightbox} hide={this.state.lightboxReadOpen} />
				<Dialog id="lightbox" ref={this.lightbox} modal handleChange={(isOpen) => {this.setState({lightboxReadOpen: isOpen});}}>
					<PageViewer page={this.state.page} maxPage={this.state.maxPage} changePage={this.changePage} setLightbox={this.setLightbox} lightbox />
				</Dialog>
				<Dialog ref={this.referenceCard} modal className="otherDialog">
					<ReferenceCard />
				</Dialog>
			</div>
		);
	}
}