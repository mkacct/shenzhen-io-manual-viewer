'use strict';

class Tabs extends React.Component {
	render() {
		let tabData = [
			{
				page: 1,
				title: "Application Notes"
			},
			{
				page: 4,
				title: "Language Reference"
			},
			{
				page: 8,
				title: "Parts Datasheets"
			},
			{
				page: 24,
				title: "Supplemental Data"
			}
		];
		let tabs = [];
		for (let i in tabData) {
			let page = this.props.page;
			tabs.push(
				<button
					key={tabData[i].page}
					onClick={() => {this.props.setPage(tabData[i].page)}}
					className={(page >= tabData[i].page && (!tabData[Number(i) + 1] || page < tabData[Number(i) + 1].page)) ? "selected" : null}
				>
					{tabData[i].title}
				</button>
			);
		}
		return (
			<div className="submenu" id="tabs">
				<h2>Tabs</h2>
				{tabs}
				<button onClick={this.props.engineeringNotes}>Engineering Notes</button>
			</div>
		);
	}
}