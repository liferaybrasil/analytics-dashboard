import JSXComponent from 'metal-jsx';
import {Config} from 'metal-state';
import {fetch} from './utils';
import {Icon, Header, Dropdown, CardA, CardB, ArrowIndicator} from './components';

import '../css/main.scss';

const TIME_UPDATE = 6000;

class Dashboard extends JSXComponent {

    created() {
        const urlString = document.URL;
        const url = new URL(urlString);
        const id = url.searchParams.get('id');

        this.setState({ id: id });
    }

    attached() {
        this.callService();

        setInterval(() => {
            this.callService();
        }, TIME_UPDATE);
    }

    callService() {
        fetch('workflow', `process/${this.state.id}/2017-12-17`).then(json => { 
            console.log(json);

            this.setState({
                average: json.average,
                completed: json.completed,
                pageTitle: json.title,
                progress: json.progress,
                started: json.started,
                taskDTOs: json.taskDTOs,
                total: json.total
            });

        }).catch(function(error) { 
            console.log(error); 
        });
    }
    
    render() {

        const {
            state: {
                average,
                completed,
                headerTitle,
                pageTitle,
                progress,
                started,
                taskDTOs,
                total
            }
        } = this;

        console.log(taskDTOs);

		return (
            <div id="wrapper">
                <Header icon="page-template" title={headerTitle} />
                <main>
                    <div class="container-fluid margin-top">
                        <div class="row margin-bottom">
                            <div class="col-sm-6">
                                <h2 class="title">
                                    <Icon symbol="info-circle" /> 
                                    <span class="margin-left-half">{pageTitle}</span>
                                </h2>
                            </div>
                            {/* <div class="col-sm-6 text-right">
                                <DropdownSection />
                            </div> */}
                        </div>
                        <div class="row margin-bottom">
                            <div class="col-sm-7">
                                <StatusSection number={{
                                    total,
                                    started,
                                    progress,
                                    completed
                                }} />
                            </div>
                            <div class="col-sm-5">
                                <AverageSection days={{
                                    average
                                }} />
                            </div>
                        </div>
                        <div class="row margin-bottom">
                            <div class="col-sm-12">
                                <TableSection items={taskDTOs} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
		);
	}
}

Dashboard.STATE = {
    average: Config.number().value(0),
    completed: Config.number().value(0),
    headerTitle: Config.string().value('My Company Site > Workflow'),
    id: Config.string().value('0'),
    pageTitle: Config.string().value(''),
    progress: Config.number().value(0),
    started: Config.number().value(0),
    taskDTOs: Config.array().value([]),
    total: Config.number().value(0)
}

class StatusSection extends JSXComponent {
    render() {

        const {number} = this.props;

        return (
            <div>
                <h2 class="title no-margin-bottom">
                    Status's Overview
                </h2>
                <h3 class="subtitle">
                    See a quick view of workflow over the last 30 days.
                </h3>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-sm-12">
                                <CardA 
                                    title="Process" 
                                    icon="share"
                                    number={number.total}
                                    percent="0"
                                    days="0"
                                />
                                <ArrowIndicator align="right" side="right" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div class="row row__no-margin">
                            <div class="col-sm-4">
                                <CardA 
                                    title="Started" 
                                    icon="share"
                                    number={number.started} 
                                    percent="0"
                                    days="0"
                                />
                            </div>
                            <div class="col-sm-4">
                                <CardA 
                                    title="In Progress" 
                                    icon="share"
                                    number={number.progress} 
                                    percent="0"
                                    days="0"
                                />
                            </div>
                            <div class="col-sm-4">
                                <CardA 
                                    title="Completed" 
                                    icon="share"
                                    number={number.completed} 
                                    percent="0"
                                    days="0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

StatusSection.PROPS = {
    number: Config.shapeOf({
        total: Config.number().value(0),
        started: Config.number().value(0),
        progress: Config.number().value(0),
        completed: Config.number().value(0)
    })
}

class AverageSection extends JSXComponent {
    render() {

        const {days} = this.props;

        return (
            <div>
                <h2 class="title no-margin-bottom">
                    Average Duration
                </h2>
                <h3 class="subtitle">
                    Get an average of process and task to know jow long it takes.
                </h3>

                <CardB 
                    title="Average Process Duration"
                    days={days.average}
                />

                <CardB 
                    title="Average Task Duration"
                    days="2"
                />
            </div>
        );
    }
}

AverageSection.PROPS = {
    days: Config.shapeOf({
        average: Config.number().value(0)
    })
}

// class DropdownSection extends JSXComponent {
//     render() {
//         return (
//             <div class="row">
//                 <div class="col-sm-12 text-right">
//                     <Dropdown 
//                         onClick={this.props.onClick.bind(this)}
//                         label="last 30 days" 
//                         style="primary" 
//                         list={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']} />
//                 </div>
//             </div>
//         );
//     }
// }

class TableSection extends JSXComponent {

    renderTableBody() {

        const {items} = this.props;

        return [].map.call(items, (item, index) => {
            return (
                <tr>
                    <td class="text-left">{item.title}</td>
                    <td class="text-right">{item.total}</td>
                    <td class="text-right">{`${item.average} days`}</td>
                    <td class="text-right">{0}</td>
                </tr>
            );
        });
    }

    render() {

        if(this.props.items.length === 0) {
            return;
        }

        return (
            <div>
                <h2 class="title no-margin-bottom">Task Amount by Alocated Time</h2>
                <h3 class="subtitle">
                    Understand each task of the process an how its 
                    amount and time spent impact on it.
                </h3>

                <table class="table-dashboard table table-autofit table-list table-responsive-lg">
                    <thead>
                        <tr>
                            <th class="text-left">Task</th>
                            <th class="text-right">Quantity</th>
                            <th class="text-right">Average Time by Task</th>
                            <th class="text-right">Time Spent Task/Process</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderTableBody()}</tbody>
                </table>
            </div>
        );
    }
}

TableSection.PROPS = {
    items: Config.shapeOf({
        average: Config.string().value(0),
        id: Config.number().value(0),
        title: Config.string().value(0),
        total: Config.number().value(0)
    })
}

export { Dashboard };
