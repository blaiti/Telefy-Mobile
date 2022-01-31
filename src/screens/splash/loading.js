import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { Typography, Colors } from '../../styles';

const Loading = () => {
    return(
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.logo}
                source={ require('../../assets/images/logo.png' )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLACK
    },
    logo: {
        width: '80%'
    },
});

export default Loading;