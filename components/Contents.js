'use strict';

class Contents extends React.Component {
	render() {
		let tabData = [ // except it's contents instead
			{
				page: 1,
				title: "Application Notes",
				primary: true
			},
			{
				page: 1,
				title: "AN268: Two Interfaces, Limitless Possibilities"
			},
			{
				page: 2,
				title: "AN393: Make Sure To Get Enough Sleep!"
			},
			{
				page: 3,
				title: "AN650: Reference Design: Touch-Activated Light Controller"
			},
			{
				page: 4,
				title: "MCxxxx Family Language Reference",
				primary: true
			},
			{
				page: 4,
				title: "Introduction"
			},
			{
				page: 4,
				title: "Program Structure"
			},
			{
				page: 4,
				title: "Comments"
			},
			{
				page: 4,
				title: "Labels"
			},
			{
				page: 5,
				title: "Conditional Execution"
			},
			{
				page: 5,
				title: "Registers"
			},
			{
				page: 5,
				title: "Instruction Operands"
			},
			{
				page: 6,
				title: "Basic Instructions"
			},
			{
				page: 6,
				title: "Arithmetic Instructions"
			},
			{
				page: 7,
				title: "Test Instructions"
			},
			{
				page: 8,
				title: "Parts Datasheets",
				primary: true
			},
			{
				page: 8,
				title: "MC4000"
			},
			{
				page: 9,
				title: "MC6000"
			},
			{
				page: 10,
				altPage: 11,
				title: "DX300"
			},
			{
				page: 12,
				title: "100P-14"
			},
			{
				page: 13,
				title: "200P-14"
			},
			{
				page: 14,
				title: "LC70Gxx"
			},
			{
				page: 15,
				title: "DT2415"
			},
			{
				page: 16,
				title: "C2S-RF901"
			},
			{
				page: 17,
				title: "FM/iX"
			},
			{
				page: 18,
				title: "N4PB-8000"
			},
			{
				page: 18,
				title: "LX700"
			},
			{
				page: 18,
				title: "LX910C"
			},
			{
				page: 19,
				title: "MC4010"
			},
			{
				page: 20,
				title: "D80C010-F"
			},
			{
				page: 21,
				title: "KUJI-EK1"
			},
			{
				page: 22,
				title: "PGA33X6"
			},
			{
				page: 23,
				title: "NLP2"
			},
			{
				page: 24,
				title: "Supplemental Data",
				primary: true
			},
			{
				page: 24,
				title: "Harmonic Maximization Engine"
			},
			{
				page: 25,
				title: "2A27 Geometric Specifications"
			},
			{
				page: 26,
				title: "DarkLord555's Creepy Sound Effects Page"
			},
			{
				page: 27,
				title: "PP-221 Carbine Target Illuminator"
			},
			{
				page: 28,
				title: "The Assembled Meat Primer: Sample Specifications"
			},
			{
				page: 29,
				title: "List of Spoiler-Related Keywords"
			},
			{
				page: 30,
				title: "iNK SmartDye Colour Space"
			},
			{
				page: 31,
				title: "The Elegant Bachelor: Making the Most of a Few Simple Ingredients"
			},
			{
				page: 32,
				title: "Figure 7G: Sector Map"
			},
			{
				page: 33,
				title: "SushiRobo Restaurant / Kitchen Preliminary Design"
			},
			{
				page: 34,
				title: "Thorium Salt Reactor Custom LCD"
			},
			{
				page: 35,
				title: "Mass Production of a Neural Processing Lattice"
			},
		];
		let tabs = [];
		for (let i in tabData) {
			let page = this.props.page;
			tabs.push(
				<button
					key={i}
					onClick={() => {this.props.setPage(tabData[i].page)}}
					className={tabData[i].primary ? null : ("secondary" + ((page == tabData[i].page || page == tabData[i].altPage) ? " selected" : ""))}
				>
					{tabData[i].title}
				</button>
			);
		}
		return (
			<div className="submenu" id="contents">
				<h2>Table of Contents</h2>
				<div id="contentsDiv">
					{tabs}
				</div>
			</div>
		);
	}
}