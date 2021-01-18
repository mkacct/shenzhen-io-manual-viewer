'use strict';

class Instructions extends React.Component {
	render() {
		return (
			<div className="submenu" id="instructions">
				<h2>Viewer Instructions</h2>
				<p>Click the left or right side of the page image to go to the previous or next page. Click the center of the page image to show it full size.</p>
				<h3>Keyboard controls</h3>
				<table>
					<tr>
						<td style={{width: "100%"}}>Previous page</td>
						<td>
							Left<br />
							Up<br />
							Page Up
						</td>
					</tr>
					<tr>
						<td>Next page</td>
						<td>
							Right<br />
							Down<br />
							Page Down
						</td>
					</tr>
					<tr>
						<td>First page</td>
						<td>
							Home<br />
							Ctrl + Left
						</td>
					</tr>
					<tr>
						<td>Last page</td>
						<td>
							End<br />
							Ctrl + Right
						</td>
					</tr>
					<tr>
						<td>Show/hide Reference Card</td>
						<td>1</td>
					</tr>
					<tr>
						<td>Close dialog</td>
						<td>Esc</td>
					</tr>
					<tr>
						<td>Back to Tabs</td>
						<td>Esc</td>
					</tr>
				</table>
			</div>
		);
	}
}