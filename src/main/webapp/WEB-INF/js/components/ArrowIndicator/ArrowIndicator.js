import JSXComponent from 'metal-jsx';
import {Icon} from './../../components';

import './ArrowIndicator.scss';

class ArrowIndicator extends JSXComponent {
    render() {
        return (
            <div class={`arrow-indicator arrow-indicator--${this.props.align} arrow-indicator--angle-${this.props.side}`}>
                <span class="arrow-indicator__icon">
                    <Icon symbol={`angle-${this.props.align}`} />
                </span>
            </div>
        );
    }
}

export default ArrowIndicator;