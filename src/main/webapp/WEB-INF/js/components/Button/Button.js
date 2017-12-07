import JSXComponent from 'metal-jsx';
import './Button.scss';

class Button extends JSXComponent {
    render() {
        return (
            <button type="button" class={`btn btn-dashboard btn-${this.props.style}`}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;