import JSXComponent from 'metal-jsx';
import {fetch} from './utils';

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
        }).catch(function(error) { 
            console.log(error); 
        });
    }
    
    render() {
		return (
            <div id="wrapper">
                Workflow Process App
            </div>
		);
	}
}

Dashboard.STATE = {
    id: {
        value: ''
    }
}

export { Dashboard };
