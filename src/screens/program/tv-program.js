import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import BackHeader from '../../components/Headers/BackHeader';

import routes from '../../config/routes';
import AuthContext from '../../context/auth-context';
import { Typography, Colors } from '../../styles';

const TVProgram = ({navigation, route}) => {
    const {program} = route.params;
    const {state} = React.useContext(AuthContext);

    const __goDiscussion = () => {
        if (state.userToken == null) {
            Alert.alert(
                'Vous n\'êtes pas connecté !',
                'Vous devez vous connecter pour participer aux discussions.',
                [
                    {
                        text: 'Annuler',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'Se connecter',
                        onPress: () => navigation.navigate(routes.AuthStack)
                    }
                ]
            );
        }
        else {
            navigation.navigate(routes.Discussion, {program: program})
        }
    }
    
    return(
        <View style={styles.container}>
            <BackHeader title={program.categoryName} />
            
            <View style={styles.bodyContainer}>
                <Image
                    resizeMode='cover'
                    style={styles.logo}
                    source={{ uri: program.picture }} />

                <Text style={styles.subTitle}>{program.datetime}</Text>
                <Text style={styles.title}>{program.name}</Text>
                <Text style={styles.desctiption}>{program.description}</Text>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity 
                    style={[styles.btnContainer, {borderColor: Colors.BLACK}]}>
                        <Text style={[styles.btnText, {color: Colors.BLACK}]}>Etre notifié</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => __goDiscussion()}
                    style={[styles.btnContainer, {backgroundColor: Colors.PRIMARY, borderColor: Colors.PRIMARY}]}>
                        <Text style={[styles.btnText, {color: Colors.WHITE}]}>Discuter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    // Body
    bodyContainer: {
        flex: 1,
        padding: 20
    },
    logo: {
        height: 200,
        borderRadius: 10
    },
    subTitle: {
        marginTop: 20,
        fontSize: 15,
        color: Colors.GRAY,
        fontFamily: Typography.FONT_FAMILY_BOLD,
    },
    title: {
        fontSize: 25,
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_BOLD,
    },
    desctiption: {
        marginTop: 15,
        fontSize: 15,
        textAlign: 'justify',
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
    // Footer
    footerContainer: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    btnContainer: {
        padding: 10,
        marginTop: 5,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 20,
        color: Colors.GRAY,
        fontFamily: Typography.FONT_FAMILY_BOLD
    }
});

export default TVProgram;