import React, { PropTypes } from 'react';
import { View, Text } from 'react-native'

const propTypes = {
    lastUpdated: PropTypes.number.isRequired,
};

const LastUpdated = ({ lastUpdated }) => (
    <View className="last-updated__time">
        <Text>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}
        </Text>
    </View>
);

LastUpdated.propTypes = propTypes;

export default LastUpdated;
