import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Typography, Colors } from '../../styles';
import AuthContext from '../../context/auth-context';
import routes from '../../config/routes';

const Register = ({navigation}) => {
    const {authContext} = React.useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const __register = () => {
        if (name.length == 0 && email.length == 0 && password.length == 0) {
            Alert.alert(
                'Désolé !',
                'Merci de vérifier vos informations.',
            );
        }
        else {
            authContext.signIn(email);
            navigation.navigate(routes.HomeStack);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    resizeMode='contain'
                    style={{ width: '80%' }}
                    source={require('../../assets/images/logo-dark.png')} />
            </View>

            {/* Body */}
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>
                    <Text>Cennectez-vous à </Text>
                    <Text style={{color: Colors.PRIMARY}}>Téléfy</Text>
                    <Text> !</Text>
                </Text>

                <View style={styles.inputContainer}>
                    <Icon name="person" color={Colors.GRAY_DARK} size={25} />
                    <TextInput
                        value={name}
                        keyboardType="name-phone-pad"
                        secureTextEntry={false}
                        style={styles.input}
                        placeholder="Nom.."
                        placeholderTextColor={Colors.GRAY_DARK} 
                        onChangeText={(text) => setName(text)} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="email" color={Colors.GRAY_DARK} size={25} />
                    <TextInput
                        value={email}
                        keyboardType="email-address"
                        secureTextEntry={false}
                        style={styles.input}
                        placeholder="Email.."
                        placeholderTextColor={Colors.GRAY_DARK} 
                        onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="vpn-key" color={Colors.GRAY_DARK} size={25} />
                    <TextInput
                        value={password}
                        keyboardType="default"
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder="Mot de passe.."
                        placeholderTextColor={Colors.GRAY_DARK} 
                        onChangeText={(text) => setPassword(text)} />
                </View>
                <TouchableOpacity 
                    style={styles.btnContainer}
                    onPress={() => __register()}>
                        <Text style={styles.btnText}>S'inscrire</Text>
                </TouchableOpacity>

                <Text style={styles.subTitle}>Vous avez un compte?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(routes.Login)}>
                    <Text style={[styles.subTitle, {marginTop: 5, color: Colors.PRIMARY}]}>Connectez-vous</Text>
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
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // Body
    bodyContainer: {
        flex: 2,
        padding: 20,
        paddingTop: 0
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.GRAY_MEDIUM,
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: '100',
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
    btnContainer: {
        padding: 10,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY
    },
    btnText: {
        fontSize: 20,
        color: Colors.WHITE,
        fontFamily: Typography.FONT_FAMILY_BOLD
    },
    subTitle: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
});

export default Register;