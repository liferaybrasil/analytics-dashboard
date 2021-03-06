import JSXComponent from 'metal-jsx';
import {Icon} from './../../components';

import './Button.scss';

class Button extends JSXComponent {
    renderIcon() {
        if(!this.props.iconSymbol) {
            return;
        }
        
        return (
            <Icon symbol={this.props.iconSymbol} />
        );
    }

    render() {
        return (
            <button type="button" class={`btn btn-dashboard btn-${this.props.style}`}>
                <span class="margin-right-half">{this.renderIcon()}</span>
                {this.props.label}
            </button>
        );
    }
}

export default Button;