import JSXComponent from 'metal-jsx';
import '../Card.scss';

class CardTitle extends JSXComponent {
    render() {
        return (
            <div class={`${this.props.className}__title`}>{this.props.title}</div>
        );
    }
}

export default CardTitle;