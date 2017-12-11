import JSXComponent from 'metal-jsx';
import {CardText, CardIcon} from './../components';

import './../Cards.scss';
import './CardE.scss';

class CardE extends JSXComponent {
    cardPercent(percent) {
        if (!percent) {
            return;
        }

        return (
            <CardText 
                className={`${this.state.classDefault}__description`}
                text={`${percent}%`} 
            />
        );
    }

    renderItems() {
        let {items} = this.props;
        
        return [].map.call(items, (item, index) => {
            return (
                <div class={`${this.state.classDefault}__item`}>
                    <div>
                        <span class={item.icon ? 'margin-right' : ''}>
                            <CardIcon 
                                className={`${this.state.classDefault}__icon`} 
                                size="xl" 
                                icon={item.icon} 
                            />
                        </span>
                        <CardText 
                            className={`${this.state.classDefault}__number`}
                            size="xl" 
                            weight="300" 
                            text={item.number} 
                        />
                    </div>
                    <div>
                        <span class={item.title ? 'margin-right-half' : ''}>
                            <CardText 
                                className={`${this.state.classDefault}__title`}
                                weight="700" 
                                text={item.title} 
                            />
                        </span>
                        {this.cardPercent(item.percent)}
                    </div>
                </div>
            );
        }); 
    }

    render() {
        return (
            <div class={`${this.state.classDefault} ${this.state.classSpecific}`}>
                {this.renderItems()}
            </div>
        );
    }
}

export default CardE;

CardE.STATE = {
    classDefault: {
        value: 'card-dashboard'
    },
	classSpecific: {
		value: 'card-dashboard--e'
	}
}