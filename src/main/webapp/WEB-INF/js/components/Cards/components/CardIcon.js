import JSXComponent from 'metal-jsx';
import {Icon} from '../../../components';

class CardIcon extends JSXComponent {
    size() {
        let hasSize = false;

        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            if (this.props.size === size) {
                hasSize = true;
            }
        }); 

        return hasSize ? 
            `${this.state.className}--size-${this.props.size}` : 
            `${this.state.className}--size-${this.state.sizeDefault}`;
    }

    render() {
        if (!this.props.icon) {
            return;
        }

        return (
            <div class={`${this.state.className} ${this.size()}`}>
                <Icon symbol={this.props.icon} />
            </div>
        );
    }
}

CardIcon.STATE = {
    className: {
        value: 'card-dashboard__icon'
    },
    sizeDefault: {
        value: 'sm'
    }
}

export default CardIcon;