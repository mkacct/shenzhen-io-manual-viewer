'use strict';

class ReferenceCard extends React.Component {
	render() {
		return (
			<img src="res/card.png" alt="Reference Card" style={{
				maxWidth: "min(425px, calc(100vw - 4em))",
				maxHeight: "min(550px, calc(100vh - 4em))"
			}}/>
		);
	}
}