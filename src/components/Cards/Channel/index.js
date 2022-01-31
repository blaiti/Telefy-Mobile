import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Typography, Colors } from '../../../styles';

const Channel = (props) => {
    return(
        <View style={[styles.container, props.index == 0 ? {marginLeft: 20} : null,props.active == props.index ? {backgroundColor: Colors.BLACK} : null]}>
            <Text style={[styles.title, props.active == props.index ? {color: Colors.WHITE} : null]}>{props.channel.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 3,
        marginRight: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BLACK
    },
    title: {
        fontSize: 18,
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    }
});

export default Channel;