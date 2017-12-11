import JSXComponent from 'metal-jsx';
import {CardText, CardIcon, CardNumber} from './../components';

import './../Cards.scss';
import './CardTime.scss';

class CardTime extends JSXComponent {
    render() {
        return (
            <div class={`${this.state.classDefault} ${this.state.classSpecific}`}>
                <div>
                    <span class="margin-right">
                        <CardIcon 
                            className={`${this.state.classDefault}__icon`} 
                            size="xl" 
                            icon="time"
                        />
                    </span>
                    <CardText 
                        className={`${this.state.classDefault}__time`} 
                        size="xl" 
                        weight="300" 
                        text={this.props.time} 
                    />
                </div>
                <div>
                    <span class="margin-right-half">
                        <CardIcon 
                            className={`${this.state.classDefault}__icon`} 
                            icon="warning" 
                        />
                    </span>
                    <CardText 
                        className={`${this.state.classDefault}__title`} 
                        weight="700" 
                        text={this.props.message} 
                    />
                </div>
            </div>
        );
    }
}

export default CardTime;

CardTime.STATE = {
    classDefault: {
        value: 'card-dashboard'
    },
	classSpecific: {
		value: 'card-dashboard--time'
	}
}