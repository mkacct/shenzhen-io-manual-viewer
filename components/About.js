'use strict';

class About extends React.Component {
	render() {
		return (
			<div className="submenu">
				<h2>About</h2>
				<p>This content originates from the SHENZHEN I/O manual. <a href="http://www.zachtronics.com/shenzhen-io/" target="_blank">SHENZHEN I/O</a> is a game by <a href="http://www.zachtronics.com/" target="_blank">Zachtronics</a> which can be purchased on <a href="https://store.steampowered.com/app/504210/SHENZHEN_IO/" target="_blank">Steam</a> among other platforms.</p>
				<a href="https://mkps.app" target="_blank"><img src="res/mk.png" alt="MK" style={{height: "1.5em"}} /></a>
				<p style={{marginTop: 0}}>Created by Madeline Kahn</p>
			</div>
		);
	}
}