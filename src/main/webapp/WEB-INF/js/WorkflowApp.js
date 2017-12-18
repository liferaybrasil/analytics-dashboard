import JSXComponent from 'metal-jsx';
import Ajax from 'metal-ajax';
import {MultiMap} from 'metal-structs';
import {fetch} from './utils';

import {
    Header, 
    CardA, 
    Button, 
    Footer, 
    Dropdown, 
    ArrowIndicator
} from './components';

import '../css/main.scss';

const TIME_UPDATE = 6000;

class Dashboard extends JSXComponent {
    attached() {
        this.callService();

        setInterval(() => {
            this.callService();
        }, TIME_UPDATE);
    }

    callService() {
        fetch('workflow', 'summary/2017-12-17').then(json => { 
            console.log(json);

            this.setState({ 
                workflows: json.workflows,
                published: json.published,  
                unpublished: json.unpublished,  
                total: json.total,  
                started: json.started,  
                progress: json.progress,    
                completed: json.completed,  
                workflowDTOs: json.workflowDTOs
            });

        }).catch(function(error) { 
            console.log(error); 
        });
    }

	render() {

        const {
            state: {
                headerTitle,
                footerTitle,
                workflows,
                published,
                unpublished,
                total,
                started,
                progress,
                completed,
                workflowDTOs
            }
        } = this;

		return (
            <div id="wrapper">
                <Header icon="page-template" title={headerTitle} />
                <main>
                    <div class="container-fluid">
                        <DropdownSection />
                        <CardSection number={{
                            workflows,
                            published,
                            unpublished,
                            total,
                            started,
                            progress,
                            completed
                        }} />
                        <TableSection items={workflowDTOs} />
                    </div>
                </main>
                {/* <Footer title={footerTitle} /> */}
            </div>
		);
	}
}

Dashboard.STATE = {
    headerTitle: {
        value: 'My Company Site > Workflow'
    },
    footerTitle: {
        value: '© 2017 Liferay Inc. All Rights Reserved'
    },
    workflows: {
        value: 0
    },
    published: {
        value: 0
    },
    unpublished: {
        value: 0
    },
    total: {
        value: 0
    },
    started: {
        value: 0
    },
    progress: {
        value: 0
    },
    completed: {
        value: 0
    },
    workflowDTOs: {
        value: []
    }
}

class DropdownSection extends JSXComponent {
    render() {
        return (
            <div class="row margin-top margin-bottom">
                <div class="col-sm-12 text-right">

                    <Dropdown 
                        label="this is a dropdown" 
                        style="primary margin-right" 
                        list={['item 1', 'item 2', 'item 3']} />
                    
                    <Dropdown 
                        label="this is a dropdown 2" 
                        style="primary" 
                        list={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']} />

                </div>
            </div>
        );
    }
}

class CardSection extends JSXComponent {

    getNumber(number) {
        return number ? number.toString() : '0';
    }

    render() {

        const {number} = this.props;

        return (
            <div class="row">
                <div class="col-md-5 col-sm-12">
                    <div class="row row__no-margin">
                        <div class="col-md-4 col-sm-12">
                            <CardA 
                                title="Workflows" 
                                icon="share"
                                number={this.getNumber(number.workflows)} 
                            />
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <CardA 
                                title="Published"
                                icon="share"
                                number={this.getNumber(number.published)} 
                            />
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <CardA 
                                title="Unpublished"
                                icon="share"
                                number={this.getNumber(number.unpublished)} 
                            />
                            <ArrowIndicator align="right" side="right" />
                        </div>
                    </div>
                </div>
                <div class="col-md-7 col-sm-12">
                    <div class="row row__no-margin">
                        <div class="col-md-3 col-sm-12">
                            <CardA 
                                title="Process"
                                icon="share"
                                number={this.getNumber(number.total)} 
                            />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <CardA 
                                title="Started"
                                icon="share"
                                number={this.getNumber(number.started)} 
                            />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <CardA 
                                title="In Progress"
                                icon="share"
                                number={this.getNumber(number.progress)} 
                            />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <CardA 
                                title="Completed"
                                icon="share"
                                number={this.getNumber(number.completed)} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class TableSection extends JSXComponent {

    getNumber(number) {
        return number ? number.toString() : '0';
    }

    getStatus(status) {
        return status ? 'active' : 'inactive';
    }

    renderTableBody() {

        const {items} = this.props;

        return [].map.call(items, (item, index) => {
            return (
                <tr>
                    <td class="text-left">{item.title}</td>
                    <td class="text-center">{this.getStatus(item.status)}</td>
                    <td class="text-right">{this.getNumber(item.total)}</td>
                    <td class="text-right">{this.getNumber(item.started)}</td>
                    <td class="text-right">{this.getNumber(item.progress)}</td>
                    <td class="text-right">{this.getNumber(item.completed)}</td>
                    <td class="text-right">
                        <a href={`/workflow/process?id=${item.id}`}
                            type="button"
                            class="btn btn-dashboard btn-secondary">
                            view report
                        </a>
                    </td>
                </tr>
            );
        });
    }

    render() {

        if(this.props.items.length === 0) {
            return;
        }

        return (
            <div class="row">
                <div class="col-sm-12">
                    <table class="table-dashboard table table-autofit table-list table-responsive-lg">
                        <thead>
                            <tr>
                                <th class="text-left">Workflow</th>
                                <th class="text-center">Status</th>
                                <th class="text-right">Process</th>
                                <th class="text-right">Started</th>
                                <th class="text-right">In Progress</th>
                                <th class="text-right">Completed</th>
                                <th class="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>{this.renderTableBody()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export { Dashboard };
