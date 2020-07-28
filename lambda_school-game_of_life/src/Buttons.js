import React, { Component } from 'react';

class Buttons extends Component {
	render() {
		return (
			<div className="buttons">
				<button onClick={this.props.start}>Start</button>
				<button onClick={this.props.stop}>Stop</button>
				<button onClick={this.props.stop}>Clear</button>
				<button onClick={this.props.stop}>Randomizer</button>
			</div>
		);
	}
}

export default Buttons;
