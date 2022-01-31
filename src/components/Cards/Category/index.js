import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Typography, Colors } from '../../../styles';

const Category = (props) => {
    return(
        <View style={[styles.container, props.index == 0 ? {marginLeft: 20} : null]}>
            <View style={[styles.iconContainer, props.active == props.index ? {backgroundColor: Colors.BLACK} : null ]}>
                <Icon name={props.category.icon} color={props.active != props.index ? Colors.GRAY : Colors.WHITE} size={30} />
            </View>
            <Text style={[styles.title, props.active == props.index ? {color: Colors.BLACK} : null]}>{props.category.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        alignItems: 'center'
    },
    iconContainer: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.BLACK,
        backgroundColor: Colors.WHITE,
    },
    title: {
        marginTop: 5,
        fontSize: 15,
        color: Colors.GRAY,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    }
});

export default Category;