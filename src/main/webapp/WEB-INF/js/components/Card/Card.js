import JSXComponent from 'metal-jsx';
import {CardTitle, CardIcon, CardNumber, CardInfo} from './components';

class Card extends JSXComponent {
    render() {
        return (
            <div class={this.props.className}>
                <CardIcon className={this.props.className} icon={this.props.icon} />
                <CardNumber className={this.props.className} number={this.props.number} />
                <CardTitle className={this.props.className} title={this.props.title} />
                <CardInfo className={this.props.className} percent={`${this.props.percent}%`} days={this.props.days} />
            </div>
        );
    }
}

export default Card;

Card.PROPS = {
	className: {
		value: 'card-dashboard'
	}
}