import JSXComponent from 'metal-jsx';
import {BarChart} from 'metal-charts/lib/jsx/charts';
import {Config} from 'metal-state';
import Ajax from 'metal-ajax';

class App extends JSXComponent {
  attached() {
    Ajax.request(location.origin + '/api/workflow/processavg').then((xhr) => {
      let json = JSON.parse(xhr.response);
      let columns = [];

      json.forEach(function(value) {
        let throughput = Math.floor(value.totalDuration / value.total);

        columns.push({'id': value.name, 'data': [throughput]})
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
    return <BarChart colors={{}} ref="bar" columns={this.props.columns}/>
  }
}

App.PROPS = {
  columns: Config.any().value([
    {
      id: 'data1',
      data: [30]
    }, {
      id: 'data2',
      data: [70]
    }
  ])
}

export {App};
export default App;