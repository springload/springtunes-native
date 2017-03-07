// Not tested. Needs to be replaced by http://springload.github.io/react-svg-icon/

import React, { PropTypes } from 'react';
import {
    Image
} from 'react-native';

const propTypes = {
    name: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
};

const Icon = ({ name, iconType }) => {
    console.log(name);
    return (
    <Image source={require(`../assets/img/icons/${name}.svg`)} />
    )
};

Icon.propTypes = propTypes;

export default Icon;
