import React from 'react';
import {
    ActivityIndicator
} from 'react-native';

const Processing = () => (
    <ActivityIndicator animating={true} style={{alignSelf: 'center', height: 80}} color="#cccccc" size="large" />
);

export default Processing;
