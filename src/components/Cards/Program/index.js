import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import { Typography, Colors } from '../../../styles';

const Program = (props) => {
    return(
        <View style={styles.container}>
            <Image
                resizeMode='cover'
                style={styles.picture}
                source={{ uri: props.program.picture }} />
            
            <View style={styles.detailsContainer}>
                <Text style={styles.subTitle} numberOfLines={1}>{props.program.datetime}</Text>
                <Text style={styles.title} numberOfLines={1}>{props.program.name}</Text>
                <Text style={styles.desctiption}>{props.program.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    picture: {
        height: 90,
        width: 120,
        borderRadius: 10
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 5
    },
    subTitle: {
        fontSize: 15,
        color: Colors.GRAY,
        fontFamily: Typography.FONT_FAMILY_BOLD,
    },
    title: {
        fontSize: 18,
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_BOLD,
    },
    desctiption: {
        fontSize: 13,
        textAlign: 'justify',
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    }
});

export default Program;