import JSXComponent from 'metal-jsx';
import {Icon} from './../../components';

import './Header.scss';

class Header extends JSXComponent {
    render() {
        return (
            <header class="header">
                <div class="container-fluid">
                    <h2 class="header__title">
                        <span class="header__icon">
                            <Icon symbol={this.props.icon} />
                        </span>
                        {this.props.title}
                    </h2>
                </div>
            </header>
        );
    }
}

export default Header;