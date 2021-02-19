import React from 'react';
import PropTypes from 'prop-types'

class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

Greeting.propTypes = {
    name: PropTypes.string
}

MyComponent.propTypes = {
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    optionalNode: PropTypes.node,
    optionalElement: PropTypes.element,
    optionalElementType: PropTypes.elementType,
    optionalMessage: PropTypes.instanceOf(Message),

    OptionalEnum: PropTypes.oneOf(['News', 'Photos']),

    optionalUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message)
    ]),

    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),

    optionalObjectWithStrictShape: PropTypes.exact({
        name: PropTypes.string,
        quantity: PropTypes.number
    }),

    requiredFunc: PropTypes.func.isRequired,

    requireAny: PropTypes.any.isRequired,

    customProp: function (props, propName, componentName) {
        if (!/matchme/.text(props[propName])) {
            return new Error(
                'Invalid prop`' + propName + '` supplied to' + '`' + componentName + '`. Validation failed.'
            );
        }
    },


}