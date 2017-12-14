import JSXComponent from 'metal-jsx';
import Ajax from 'metal-ajax';
import {
	Header, 
	CardC,
	CardD,
	CardE,
	CardTime,
	CardPerformance,
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
						<SectionPerformance />
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

class SectionPerformance extends JSXComponent {
	render() {
		return (
			<div class="row">
				<div class="col-sm-12">
					<CardPerformance 
						title="Page 1 - Personal Information"
						data={this.state.data} 
					/>
				</div>
				<div class="col-sm-12">
					<CardPerformance 
						title="Page 2 - Company Information"
						data={this.state.data} 
					/>
				</div>
			</div>
		); 
	}
}

SectionPerformance.STATE = {
	data: {
		value: {
			name: 'Sessions',
			total: 2050,
			visitors: 533,
			dropOff: {
				total: 0, percent: 53.3
			},
			fields: [
				{
					name: 'Email Address',
					total: 330,
					time: {
						value: 11.24,
						warning: false
					},
					reload: {
						value: 7.2,
						warning: true
					},
					page: {
						value: 11.1,
						warning: true,
					},
					dropOff: {
						total: 0, percent: 0
					},
				},
				{
					name: 'Password',
					total: 550,
					time: {
						value: 4.77,
						warning: false
					},
					reload: {
						value: 7.2,
						warning: false
					},
					page: {
						value: 11.1,
						warning: true,
					},
					dropOff: {
						total: 14, percent: 1.4
					},
				},
				{
					name: 'First Name',
					total: 250,
					time: {
						value: 4.17,
						warning: false
					},
					reload: {
						value: 8.4,
						warning: false
					},
					page: {
						value: 12.5,
						warning: true,
					},
					dropOff: {
						total: 88, percent: 8.8
					},
				},
				{
					name: 'Last Name',
					total: 30,
					time: {
						value: 2.46,
						warning: true
					},
					reload: {
						value: 5.8,
						warning: false
					},
					page: {
						value: 11.8,
						warning: true,
					},
					dropOff: {
						total: 3, percent: 0.3
					},
				},
				{
					name: 'Number',
					total: 155,
					time: {
						value: 6.91,
						warning: false
					},
					reload: {
						value: 5.4,
						warning: false
					},
					page: {
						value: 12.1,
						warning: true,
					},
					dropOff: {
						total: 2, percent: 0.2
					},
				},
				{
					name: 'Company',
					total: 735,
					time: {
						value: 4.95,
						warning: false
					},
					reload: {
						value: 6.8,
						warning: false
					},
					page: {
						value: 15.6,
						warning: true,
					},
					dropOff: {
						total: 3, percent: 0.3
					},
				}
			]
		}
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