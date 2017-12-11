import JSXComponent from 'metal-jsx';

class CardText extends JSXComponent {
    size() {
        let hasSize = false;

        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            if (this.props.size === size) {
                hasSize = true;
            }
        }); 

        return hasSize ? 
            `${this.state.classDefault}--size-${this.props.size}` : 
            `${this.state.classDefault}--size-${this.state.sizeDefault}`;
    }

    weight() {
        let hasWeight = false;

        ['100', '200', '300', '400', '500', '600', '700', '800', '900'].forEach(weight => {
            if (this.props.weight === weight) {
                hasWeight = true;
            }
        }); 

        return hasWeight ? 
            `${this.state.classDefault}--weight-${this.props.weight}` : 
            `${this.state.classDefault}--weight-${this.state.weightDefault}`;
    }

    getClassName() {
        return this.props.className ? this.props.className : '';
    }

    render() {
        if (!this.props.text) {
            return;
        }

        return (
            <span class={`${this.getClassName()} ${this.state.classDefault} ${this.weight()} ${this.size()}`}>
                {this.props.text}
            </span>
        );
    }
}

CardText.STATE = {
    classDefault: {
        value: 'card-dashboard__text'
    },
    sizeDefault: {
        value: 'md'
    },
    weightDefault: {
        value: '400'
    }
}

export default CardText;