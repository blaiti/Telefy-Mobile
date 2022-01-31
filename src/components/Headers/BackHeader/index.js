import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Typography, Colors } from '../../../styles';

const BackHeader = (props) => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" color={Colors.BLACK} size={25} />
            </TouchableOpacity>

            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>

            {props.left == null ?
                <TouchableOpacity
                    activeOpacity={1}>
                        <Icon name="error-outline" color={Colors.WHITE} size={25} />
                </TouchableOpacity>
            : 
                <TouchableOpacity
                    activeOpacity={1}>
                        <Icon name="error-outline" color={Colors.BLACK} size={25} />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_LIGHT
    },
    title: {
        fontSize: 20,
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_BOLD,
    },
});

export default BackHeader;