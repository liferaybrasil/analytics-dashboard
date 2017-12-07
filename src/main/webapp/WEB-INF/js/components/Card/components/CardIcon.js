import JSXComponent from 'metal-jsx';
import '../Card.scss';

class CardIcon extends JSXComponent {
    render() {
        return (
            <div class={`${this.props.className}__icon`}>{this.props.icon}</div>
        );
    }
}

export default CardIcon;