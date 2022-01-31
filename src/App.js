import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar
} from 'react-native';
import RootNavigator from './navigations';
import AuthProvider from './context/auth-provider';
import { Colors } from './styles';

const App = () => {
    return (
        <AuthProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor={Colors.BLACK} />
                <RootNavigator />
            </SafeAreaView>
        </AuthProvider>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
