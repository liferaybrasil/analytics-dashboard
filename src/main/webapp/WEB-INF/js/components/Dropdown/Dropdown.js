import JSXComponent from 'metal-jsx';
import {EventHandler} from 'metal-events';
import dom from 'metal-dom';
import {Button, Icon} from './../../components';

import './Dropdown.scss';

class Dropdown extends JSXComponent {

    created() {
		this.eventHandler_ = new EventHandler();

		this.eventHandler_.add(
			dom.on(document, 'click', this.handleClickOutside.bind(this))
		);
    }
    
    disposed() {
		this.eventHandler_.removeAllListeners();
    }
    
    detached() {
		this.eventHandler_.removeAllListeners();
    }
    
    handleClickOutside(event) {
		if (this.element.contains(event.target)) {
			return;
        }
        
		this.setState({
            isOpen: false
        })
	}

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    onClickOutside(event) {
        console.log(Dropdown.state.element);

        if (this.contains(event.target)) {
            return;
        } else {
            this.setState({
                isOpen: false
            })
        }
    }

    renderListItems() {
        if (!this.props.list) {
            return;
        }

        return [].map.call(this.props.list, (item, index) => {
            return (
                <li>
                    <a href="#">{item}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <div class="dropdown-dashboard" onClick={this.handleClick}>
                <Button 
                    label={this.props.label} 
                    style={`${this.props.style} dropdown-dashboard__btn`} 
                    type="button" 
                    iconSymbol="caret-bottom"
                    iconAlign="right"
                />

                <ul class={`${this.state.isOpen ? 'dropdown-dashboard__list-group--isOpen' : 'dropdown-dashboard__list-group--hide'} dropdown-dashboard__list-group`}>
                    {this.renderListItems()}
                </ul>
            </div>
        );
    }
}

Dropdown.STATE = {
    isOpen: {
        value: false
    }
}

export default Dropdown;