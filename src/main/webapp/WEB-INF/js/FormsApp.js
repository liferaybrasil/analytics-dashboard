import JSXComponent from 'metal-jsx';
import Ajax from 'metal-ajax';
import {
	Header, 
	CardC,
	CardD,
	CardE,
	CardTime,
	Icon,
    Button, 
    Footer, 
    Dropdown, 
    ArrowIndicator
} from './components';

import '../css/main.scss';

class Dashboard extends JSXComponent {
	attached() {
		// this.callService();
		
		// setInterval(() => {
		// 	this.callService();
		// }, 60000);
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
			<div id="wrapper">
				<Header icon="page-template" title="My Company Site > Paths > Forms" />
				<main>
					<div class="container-fluid">
						<SectionMain />
						<SectionCard1 />
						<SectionCard2 />
					</div>
				</main>
				<Footer title="© 2017 Liferay Inc. All Rights Reserved" />
			</div>
		);
	}
}

class SectionMain extends JSXComponent {
	render() {
		return (
			<div class="row margin-top margin-bottom">
				<div class="col-sm-12">
					<div class="flex flex--space-between">
						<h3 class="title">
							<Icon symbol="blogs" /> DXP Trial
						</h3>
						
						<Dropdown 
							label="this is a dropdown" 
							style="primary margin-right" 
							list={['item 1', 'item 2', 'item 3']}
						/>
					</div>
				</div>
			</div>
		);
	}
}

class SectionCard1 extends JSXComponent {
	render() {
		return (
			<div class="row">
				<div class="col-sm-2">
					<CardC icon="archive" title="11" description="fields" />
				</div>
				<div class="col-sm-2">
					<CardC icon="cards" title="2" description="pages" />
				</div>
				<div class="col-sm-2">
					<CardC icon="live" description="Active" />
				</div>
			</div>
		);
	}
}

class SectionCard2 extends JSXComponent {
	render() {
		return (
			<div class="row">
				<div class="col-sm-6">
					<CardE items={this.state.items} />
				</div>
				<div class="col-sm-3">
					<CardD 
						icon="check-circle-full" 
						number="533" 
						title="DROPOFF" 
						percent="83.6"
					/>
				</div>
				<div class="col-sm-3">
					<CardTime 
						time="2m35s" 
						message="AVARAGE COMPLETION TIME" 
					/>
				</div>
				
			</div>
		);
	}
}

SectionCard2.STATE = {
    items: {
        value: [
            {
                title: 'SESSIONS',
                icon: 'order-arrow-down',
                number: 1.000,
                percent: ''
            },
            {
                title: 'STARTED',
                icon: 'play',
                number: 467,
                percent: 46.7
            },
            {
                title: 'CONVERTED',
                icon: 'check',
                number: 164,
                percent: 16.4
            }
        ]
    }
}

export { Dashboard };