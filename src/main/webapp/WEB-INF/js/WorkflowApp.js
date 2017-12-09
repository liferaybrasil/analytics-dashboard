import JSXComponent from 'metal-jsx';
import {Header, Card, Button, Footer, Dropdown} from './components';

import '../css/main.scss';

class Dashboard extends JSXComponent {
	render() {
		return (
            <div id="wrapper">
                <Header icon="page-template" title="My Company Site > Workflow" />
                <main>
                    <div class="container-fluid">
                        <DropdownSection />
                        <CardSection />
                        <TableSection />
                    </div>
                </main>
                <Footer title="© 2017 Liferay Inc. All Rights Reserved" />
            </div>
		);
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
    render() {
        return (
            <div class="row">
                <div class="col-md-5 col-sm-12">
                    <div class="row row__no-margin">
                        <div class="col-md-4 col-sm-12">
                            <Card title="Workflows" icon="share" number="9" />
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <Card title="Published" icon="play" number="7" />
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <Card title="Unpublished" icon="live" number="2" percent="6" days="30" />
                        </div>
                    </div>
                        
                </div>
                <div class="col-md-7 col-sm-12">
                    <div class="row row__no-margin">
                        <div class="col-md-3 col-sm-12">
                            <Card title="Process" icon="organizations" number="185" />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <Card title="Started" icon="check-circle" number="116" />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <Card title="In Progress" icon="reload" number="66" />
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <Card title="Completed" icon="times" number="3" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class TableSection extends JSXComponent {
    renderTableBody() {
        let {items} = this.state;

        return [].map.call(items, (item, index) => {
            return (
                <tr>
                    <td class="text-left">{item.workflow}</td>
                    <td class="text-center">{item.status}</td>
                    <td class="text-right">{item.process}</td>
                    <td class="text-right">{item.started}</td>
                    <td class="text-right">{item.inProgress}</td>
                    <td class="text-right">{item.completed}</td>
                    <td class="text-right">
                        <Button label="view report" style="secondary" />
                    </td>
                </tr>
            );
        });
    }

    render() {
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

TableSection.STATE = {
    items: {
        value: [
            {
                workflow: 'New Hirings - ENG',
                status: 'Active',
                process: 30,
                started: 20,
                inProgress: 8,
                completed: 2
            },
            {
                workflow: 'New Hirings - ENG',
                status: 'Active',
                process: 30,
                started: 20,
                inProgress: 8,
                completed: 2
            },
            {
                workflow: 'New Hirings - ENG',
                status: 'Active',
                process: 30,
                started: 20,
                inProgress: 8,
                completed: 2
            },
            {
                workflow: 'New Hirings - ENG',
                status: 'Active',
                process: 30,
                started: 20,
                inProgress: 8,
                completed: 2
            },
            {
                workflow: 'New Hirings - ENG',
                status: 'Active',
                process: 30,
                started: 20,
                inProgress: 8,
                completed: 2
            }
        ]
    }
}




export { Dashboard };
