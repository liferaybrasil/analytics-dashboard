import JSXComponent from 'metal-jsx';
import {
	BarChart
} from 'clay-charts/lib/jsx/charts';
import {
	Config
} from 'metal-state';
import Ajax from 'metal-ajax';

class WorkflowProcessAvg extends JSXComponent {
	attached() {
		Ajax.request(location.origin + '/api/workflow/processavg')
			.then((xhr) => {
				let json = JSON.parse(xhr.response);
				let columns = [];

				json.forEach(function (value) {
					let throughput = Math.floor(value.totalDuration / value.total);

					columns.push({
						'id': value.name,
						'data': [throughput]
					})
				});

				this.props.columns = columns;
			})
		setTimeout(() => {
			this.props.columns = this.props.columns;
		}, 10);
		setTimeout(() => {
			this.props.columns = this.props.columns;
		}, 100);
	}

	render() {
		return <BarChart colors = {
			{}
		}
		ref = "bar"
		columns = {
			this.props.columns
		}
		/>
	}
}

WorkflowProcessAvg.PROPS = {
	columns: Config.any()
		.value([{
			id: '',
			data: []
		}, ])
}

class WorkflowTaskAvg extends JSXComponent {
	attached() {
		Ajax.request(location.origin + '/api/workflow/taskavg')
			.then((xhr) => {
				let json = JSON.parse(xhr.response);
				let columns = [];

				json.forEach(function (value) {
					let throughput = Math.floor(value.totalDuration / value.total);

					columns.push({
						'id': value.name,
						'data': [throughput]
					})
				});

				this.props.columns = columns;
			})
		setTimeout(() => {
			this.props.columns = this.props.columns;
		}, 10);
		setTimeout(() => {
			this.props.columns = this.props.columns;
		}, 100);
	}

	render() {
		return <BarChart colors = {
			{}
		}
		ref = "bar"
		columns = {
			this.props.columns
		}
		/>
	}
}

WorkflowTaskAvg.PROPS = {
	columns: Config.any()
		.value([{
			id: '',
			data: []
		}, ])
}

export {
	WorkflowProcessAvg,
	WorkflowTaskAvg
};
export default WorkflowProcessAvg;