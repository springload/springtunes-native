import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

const Logo = () => (
    <View style={styles.centering}>
        <Image source={require('../assets/img/springtunes.png')} style={[styles.logo]} resizeMode="center" />
    </View>
);

const styles = StyleSheet.create({ 
    centering: { 
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 50,
    },
});

export default Logo;
