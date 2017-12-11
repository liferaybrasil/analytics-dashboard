import JSXComponent from 'metal-jsx';
import {CardText, CardIcon} from './../components';

import './../Cards.scss';
import './CardC.scss';

class CardC extends JSXComponent {
    render() {
        return (
            <div class={`${this.state.classDefault} ${this.state.classSpecific}`}>
                <span class={this.props.icon ? 'margin-right-half' : ''}>
                    <CardIcon 
                        className={`${this.state.classDefault}__icon`}
                        icon={this.props.icon} 
                    />
                </span>
                <span class={this.props.title ? 'margin-right-half' : ''}>
                    <CardText 
                        className={`${this.state.classDefault}__title`}
                        weight="700" 
                        text={this.props.title} 
                    />
                </span>
                <span class={this.props.description ? 'margin-right-half' : ''}>
                    <CardText 
                        className={`${this.state.classDefault}__description`}
                        text={this.props.description} 
                    />
                </span>
            </div>
        );
    }
}

export default CardC;

CardC.STATE = {
    classDefault: {
        value: 'card-dashboard'
    },
	classSpecific: {
		value: 'card-dashboard--c'
	}
}