import JSXComponent from 'metal-jsx';

import Ajax from 'metal-ajax';

import '../css/main.scss';

class Dashboard extends JSXComponent {
	attached() {
		this.callService();
		
		setInterval(() => {
			this.callService();
		}, 60000);
		
	}
	
	callService() {
		Ajax.request(location.origin + '/api/forms/find?analyticskey=analyticskey:test&formid=35490&start=2017-12-04').
			then((xhr) => {
				let json = JSON.parse(xhr.response);
				let sessions = 0;
				
				json.forEach(function (value) {
					sessions += value.sessions;
				});
				
				this.props.sessions = sessions;
			});
	}
	
	render() {
		return (
			<div>
				<Header text='Hello'></Header>
				<div class="container-fluid">
					<section class="row">
						<Sessions sessions={this.props.sessions}></Sessions>
						<div>Leo</div>
						<div>Leo</div>
					</section>
				</div>
			</div>
		);
	}
}

Dashboard.PROPS = {
	sessions: {
		value: 0
	}
}

var Header = ({ text }) => {
	return ( 
		<header class="header">
			<h1 class="container-fluid">
				{text}
			</h1>
		</header>
	);
};

class Sessions extends JSXComponent {

	render() {
		return (
			<article class="col-md-6 box">
				<div class="sessions-container">
					<h2>
						<span>
							{this.props.sessions}
						</span>
					</h2>
					<h3 class="text-center">
						SESSIONS
					</h3>
				</div>

				<div class="sessions-container">
					<h2>
						<span>
							{this.props.started}
						</span>
					</h2>
					<h3 class="text-center">
						STARTED
					</h3>
				</div>

				<div class="sessions-container">
					<h2>
						<span>
							{this.props.converted}
						</span>
					</h2>
					<h3 class="text-center">
						CONVERTED
					</h3>
				</div>
			</article>
		); 
	}
}

Sessions.PROPS = {
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