/*import React, { Component } from "react";

export default class MyComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>{this.props.title}</div>
				<button onClick={this.props.onBtnClicked}>Click me</button>
			</div>
		);
	}
}

*/

import React, { Component } from "react";

export default class MyComponent extends Component {
	constructor(props) {
		super(props);

		// in class components - always declare state in the constructor
		// also, state should be immutable - this means dont change state directly -> use setState for it
		this.state = {
			count: 0,
		}

		// yes, we all know javascript is weird. The following is happening here: 
		// you reassign the variable this.countUp to the function this.countUp.bind(this)
		// the bind keyword jsut saying, that no matter how this function is invoked, it has always the "this" from the MyComponent-Component
		this.countUp = this.countUp.bind(this);
	}

	countUp() {
		this.setState({
			count: this.state.count +1,
		})
	}

	render() {

		/*Destructering the props here. compare to the commented out solution above */
		const {title, onBtnClicked} = this.props;

		return (
			<div>
				<div>{title}</div>
				<button onClick={onBtnClicked}>Click me</button>
				<button onClick={this.countUp}>Count: {this.state.count}</button>
			</div>
		);
	}
}