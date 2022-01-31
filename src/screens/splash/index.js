import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { Typography, Colors } from '../../styles';
import AuthContext from '../../context/auth-context';

const Splash = () => {
    const { authContext } = React.useContext(AuthContext);

    const __skip = () => {
        authContext.firstEnter();
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    resizeMode='contain'
                    style={styles.logo}
                    source={ require('../../assets/images/logo.png' )} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Téléfy est une plateforme de communauté des émissions télé. Téléfy vous permet de discuter et critiquer une émission instantannément avec d'autres spectateurs.</Text>
                <TouchableOpacity 
                    onPress={() => __skip()}
                    style={[styles.btnContainer, {borderColor: Colors.BLACK}]}>
                        <Text style={[styles.btnText, {color: Colors.BLACK}]}>Passer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnContainer, {backgroundColor: Colors.PRIMARY, borderColor: Colors.PRIMARY}]}>
                    <Text style={[styles.btnText, {color: Colors.WHITE}]}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLACK
    },
    logo: {
        width: '80%'
    },
    textContainer: {
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Colors.WHITE
    },
    text: {
        marginBottom: 5,
        fontSize: 15,
        color: Colors.GRAY,
        textAlign: 'justify',
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
    btnContainer: {
        padding: 10,
        marginTop: 10,
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

export default Splash;