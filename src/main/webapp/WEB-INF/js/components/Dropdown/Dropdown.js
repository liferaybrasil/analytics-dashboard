import JSXComponent from 'metal-jsx';
import {Button, Icon} from './../../components';

import './Dropdown.scss';

class Dropdown extends JSXComponent {

    onClick() {
        this.setState({
            show: !this.state.show
        })
    }

    renderListItems() {
        if (!this.props.list) {
            return;
        }

        return [].map.call(this.props.list, (item, index) => {
            return (
                <li>{item}</li>
            );
        });
    }

    render() {
        return (
            <div class="dropdown-dashboard" onClick={this.onClick.bind(this)}>
                <Button 
                    label={this.props.label} 
                    style={`${this.props.style} dropdown-dashboard__btn`} 
                    type="button" 
                    iconSymbol="caret-bottom"
                    iconAlign="right"
                />

                <ul class={`${this.state.show ? 'dropdown-dashboard__list-group--show' : 'dropdown-dashboard__list-group--hide'} dropdown-dashboard__list-group`}>
                    {this.renderListItems()}
                </ul>
            </div>
        );
    }
}

Dropdown.STATE = {
    show: {
        value: false
    }
}

export default Dropdown;