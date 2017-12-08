import JSXComponent from 'metal-jsx';
import '../Card.scss';

class CardInfo extends JSXComponent {
    render() {
        if (!this.props.percent || !this.props.days) {
            return;
        }

        return (
            <div class={`${this.props.className}__info`}>
                <span>{this.props.percent}</span> over the last <span>{this.props.days} days</span>
            </div>
        );
    }
}

export default CardInfo;