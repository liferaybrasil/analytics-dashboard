import JSXComponent from 'metal-jsx';
import {CardText, CardIcon, CardNumber, CardInfo} from './../components';

import './../Cards.scss';
import './CardA.scss';

class CardA extends JSXComponent {
    text() {
        if(!this.props.percent || !this.props.days) {
            return;
        }

        return (
            <CardText 
                className={`${this.state.classDefault}__description`}
                size="xs" 
                text={`${this.props.percent}% over the last ${this.props.days}`}
            />
        );
    }

    render() {
        return (
            <div class={`${this.state.classDefault} ${this.state.classSpecific}`}>
                <CardIcon
                    className={`${this.state.classDefault}__icon`}
                    icon={this.props.icon}
                />
                <CardText
                    className={`${this.state.classDefault}__number`}
                    size="xl"
                    weight="300"
                    text={this.props.number}
                />
                <CardText 
                    className={`${this.state.classDefault}__title`}
                    weight="700"
                    text={this.props.title}
                />
                {this.text()}
            </div>
        );
    }
}

export default CardA;

CardA.STATE = {
	classDefault: {
		value: 'card-dashboard'
    },
    classSpecific: {
		value: `card-dashboard--a`
	}
}