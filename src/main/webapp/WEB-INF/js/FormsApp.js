import JSXComponent from 'metal-jsx';

import '../css/main.scss';

class Dashboard extends JSXComponent {

	render() {
		return (
			<div>
				<Header text='Hello'></Header>
				<Summary></Summary>
			</div>
		);
	}
}

var Header = ({ text }) => {
	return ( 
		<header class="header">{text}</header>
	);
};

class Summary extends JSXComponent {

	render() {
		return (
			<div class="box">
				<h2>{this.state.sessions}</h2>
				<h2>{this.state.started}</h2>
				<h2>{this.state.converted}</h2>
			</div>
		); 
	}
}

Summary.STATE = {
	sessions: {
		value: 0
	},
	started: {
		value: 0
	},
	converted: {
		value: 0
	}
}

export { Dashboard };