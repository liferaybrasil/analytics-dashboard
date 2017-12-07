import JSXComponent from 'metal-jsx';
import { Header, Card, Footer } from './components';

import '../css/main.scss';

class Dashboard extends JSXComponent {


	render() {
		return (
            <div id="wrapper">
                <Header title="My Company Site > Workflow"></Header>
                <main>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <Card title="Workflows" icon="my icon" number="9" />
                                <Card title="Published" icon="my icon" number="7" />
                                <Card title="Unpublished" icon="my icon" number="2" />
                            </div>
                            <div class="col-sm-6">column2</div>
                        </div>
                    </div>
                </main>
                <Footer title="© Copyright 2017"></Footer>
            </div>
		);
	}
}

export { Dashboard };
