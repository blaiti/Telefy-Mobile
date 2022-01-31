import React, {useState} from 'react';
import {
    StyleSheet, 
    View, 
    FlatList, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackHeader from '../../components/Headers/BackHeader';
import { Typography, Colors } from '../../styles';
import { messages } from '../../assets/data';

const Discussion = ({navigation, route}) => {
    const {program} = route.params;

    const [disc, setDisc] = useState(messages);
    const [message, setMessage] = useState('');

    const _sendMessage = () => {
        setDisc([{
            id: disc.length + 1,
            sender: true,
            message: message,
        }, ...disc]);
        setMessage('');
    }

    return(
        <View style={styles.container}>
            <BackHeader title={program.name} />

            {/*Body Container */}
            <View style={styles.bodyContainer}>
                <FlatList 
                    inverted
                    data={disc}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return(
                            <View style={item.sender ? styles.senderContainer : styles.receiverContainer}>
                                <Text style={[styles.messageText, item.sender ? {color: Colors.WHITE} : {color: Colors.BLACK}]}>{item.message}</Text>
                            </View>
                        )
                    }} />
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
                <TextInput 
                    value={message}
                    returnKeyType='send'
                    style={styles.inputContainer}
                    placeholder="Ecrire un message .."
                    onSubmitEditing={() => _sendMessage()}
                    onChangeText={texte => setMessage(texte)} />

                <TouchableOpacity 
                    style={{marginLeft: 10}}
                    onPress={() => _sendMessage()}>
                        <Icon name="send" color={Colors.PRIMARY} size={30} />
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
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors.WHITE
    },
    senderContainer: {
        width: '80%',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: Colors.PRIMARY
    },
    receiverContainer: {
        width: '80%',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'flex-start',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: Colors.GRAY_LIGHT
    },
    messageText: {
        fontSize: 16,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
    // Footer
    footerContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: Colors.GRAY_LIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flex: 1,
        padding: 0,
        marginLeft: 5,
        fontSize: 17,
        justifyContent: 'flex-start',
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
});

export default Discussion;