'use strict';

class PageViewer extends React.Component {
	render() {
		return (
			<div className="page" style={this.props.hide ? {visibility: "hidden"} : null}>
				<img src={"res/" + this.props.page + ".png"} alt="Manual page" />
				{this.props.page > 1 ? (<button aria-label="Previous page" className="imgNav left" onClick={() => {this.props.changePage(-1);}}></button>) : null}
				<button aria-label={this.props.lightbox ? "Close" : "Show lightbox"} className={"imgNav center" + (this.props.lightbox ? " inLightbox" : "")} onClick={() => {this.props.setLightbox(!this.props.lightbox);}}></button>
				{this.props.page < this.props.maxPage ? (<button aria-label="Next page" className="imgNav right" onClick={() => {this.props.changePage(1);}}></button>) : null}
			</div>
		);
	}
}