import JSXComponent from 'metal-jsx';
import {CardText, CardIcon} from './../components';

import './../Cards.scss';
import './CardD.scss';

class CardD extends JSXComponent {
    render() {
        return (
            <div class={`${this.state.classDefault} ${this.state.classSpecific}`}>
                <div>
                    <span class={this.props.icon ? 'margin-right' : ''}>
                        <CardIcon 
                            className={`${this.state.classDefault}__icon`} 
                            size="xl" 
                            icon={this.props.icon}
                        />
                    </span>
                    <CardText 
                        className={`${this.state.classDefault}__number`} 
                        size="xl" 
                        weight="300" 
                        text={this.props.number}
                    />
                </div>
                <div>
                    <span class={this.props.title ? 'margin-right-half' : ''}>
                        <CardText 
                            className={`${this.state.classDefault}__title`} 
                            weight="700" 
                            text={this.props.title} 
                        />
                    </span>
                    <CardText 
                        className={`${this.state.classDefault}__description`} 
                        text={`${this.props.percent}%`} 
                    />
                </div>
            </div>
        );
    }
}

export default CardD;

CardD.STATE = {
    classDefault: {
        value: 'card-dashboard'
    },
	classSpecific: {
		value: 'card-dashboard--d'
	}
}