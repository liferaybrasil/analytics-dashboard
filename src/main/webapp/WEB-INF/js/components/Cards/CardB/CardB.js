import JSXComponent from 'metal-jsx';
import {CardText} from './../components';

import './../Cards.scss';
import './CardB.scss';

class CardB extends JSXComponent {
    render() {
        return (
            <div class={`${this.state.classDefault} ${this.state.classSpecific}`}>
                <CardText 
                    className={`${this.state.classDefault}__title`} 
                    weight="700" 
                    text={this.props.title}
                />
                <CardText 
                    className={`${this.state.classDefault}__title`} 
                    weight="700" 
                    text={`${this.props.days} days`}
                />
            </div>
        );
    }
}

export default CardB;

CardB.STATE = {
    classDefault: {
        value: 'card-dashboard'
    },
    classSpecific: {
		value: 'card-dashboard--b'
	}
}