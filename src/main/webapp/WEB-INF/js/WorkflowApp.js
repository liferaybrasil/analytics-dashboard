import JSXComponent from 'metal-jsx';
import Ajax from 'metal-ajax';
import {MultiMap} from 'metal-structs';
import {Config} from 'metal-state';
import {clock, fetch} from './utils';

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
    
    created() {
        this.clock = new clock();
    }
    
    attached() {
        this.callService();

        setInterval(() => {
            this.callService();
        }, TIME_UPDATE);
    }

    handleOnClick(item) {
        console.log(item);
    }

    setterDate_() {
        return this.clock.getDateNow();
    }

    callService() {
        fetch('workflow', `summary/${this.state.date}`).then(json => { 
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
                completed,
                footerTitle,
                headerTitle,
                progress,
                published,
                started,
                total,
                unpublished,
                workflowDTOs,
                workflows
            }
        } = this;

		return (
            <div id="wrapper">
                <Header icon="page-template" title={headerTitle} />
                <main>
                    <div class="container-fluid">
                        {/* <DropdownSection onClick={this.handleOnClick} /> */}
                        <DropdownSection />
                        <CardSection number={{
                            completed,
                            progress,
                            published,
                            started,
                            total,
                            unpublished,
                            workflows
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
    completed: Config.number().value(0),
    footerTitle: Config.string().value('© 2017 Liferay Inc. All Rights Reserved'),
    headerTitle: Config.string().value('My Company Site > Workflow'),
    progress: Config.number().value(0),
    published: Config.number().value(0),
    started: Config.number().value(0),
    total: Config.number().value(0),
    unpublished: Config.number().value(0),
    workflowDTOs: Config.array().value([]),
    workflows: Config.number().value(0),
    date: Config.string().setter('setterDate_')
}

class DropdownSection extends JSXComponent {
    render() {
        return (
            <div class="row margin-bottom margin-top">
                <div class="col-sm-12 text-right">

                    <Dropdown 
                        label="All Status" 
                        style="primary margin-right" 
                        list={['item 1', 'item 2', 'item 3']} />
                    
                    <Dropdown 
                        // events={{click: this.props.onClick}}
                        label="last 30 days" 
                        style="primary" 
                        list={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']} />

                </div>
            </div>
        );
    }
}

class CardSection extends JSXComponent {

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
                                number={number.workflows} 
                            />
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <CardA 
                                title="Published"
                                icon="share"
                                number={number.published} 
                            />
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <CardA 
                                title="Unpublished"
                                icon="share"
                                number={number.unpublished} 
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
                                number={number.total} 
                            />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <CardA 
                                title="Started"
                                icon="share"
                                number={number.started} 
                            />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <CardA 
                                title="In Progress"
                                icon="share"
                                number={number.progress} 
                            />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <CardA 
                                title="Completed"
                                icon="share"
                                number={number.completed} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CardSection.PROPS = {
    number: Config.shapeOf({
        workflows: Config.number().value(0),
        published: Config.number().value(0),
        unpublished: Config.number().value(0),
        total: Config.number().value(0),
        started: Config.number().value(0),
        progress: Config.number().value(0),
        completed: Config.number().value(0)
    })
}

class TableSection extends JSXComponent {

    setterStatus_(status) {
        return status ? 'active' : 'inactive'; 
    }

    renderTableBody() {

        const {items} = this.props;

        return [].map.call(items, (item, index) => {
            return (
                <tr>
                    <td class="text-left">{item.title}</td>
                    <td class="text-center">{item.status}</td>
                    <td class="text-right">{item.total}</td>
                    <td class="text-right">{item.started}</td>
                    <td class="text-right">{item.progress}</td>
                    <td class="text-right">{item.completed}</td>
                    <td class="text-right">
                        <a href={`/workflow/process?id=${item.id}`}
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

TableSection.PROPS = {
    items: Config.shapeOf({
        status: Config.string().setter('setterStatus_').value('inactive'),
        total: Config.number().value(0),
        started: Config.number().value(0),
        progress: Config.number().value(0),
        completed: Config.number().value(0),
    })
}

export { Dashboard };
