import JSXComponent from 'metal-jsx';
import '../Card.scss';

class CardNumber extends JSXComponent {
    render() {
        return (
            <div class={`${this.props.className}__number`}>{this.props.number}</div>
        );
    }
}

export default CardNumber;