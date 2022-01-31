
import React from 'react';
import AuthContext from './auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    isLoading: true,
    first: null,
    userToken: null,
}

function reducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'RESTORE_TOKEN': 
            nextState = {
                ...state,
                isLoading: false,
                first: action.first,
                userToken: action.token,
            }
            return nextState;
        case 'FIRST': 
            nextState = {
                ...state,
                isLoading: false,
                userToken: null,
                first: action.first,
            }
            return nextState;
        case 'LOGIN': 
            nextState = {
                ...state,
                isLoading: false,
                first: action.first,
                userToken: action.token,
            }
            return nextState;
        case 'LOGOUT': 
            nextState = {
                ...state,
                first: null,
                userToken: null,
                isLoading: false,
            }
            return nextState;
        default: 
            return state;
    }
}

function AuthProvider ({children}) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        setTimeout(async() => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch(e) {
                console.log(e);
            }
            let fisrtToken;
            try {
                fisrtToken = await AsyncStorage.getItem('first');
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken, first: fisrtToken });
        }, 1000);
    }, []);

    const authContext = React.useMemo(() => ({
        firstEnter: async() => {
            try {
                await AsyncStorage.setItem('first', "first");
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'FIRST', first: 'first' });
        },
        signIn: async (userToken) => {        
            try {
                await AsyncStorage.setItem('userToken', userToken);
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'LOGIN', token: userToken, first: 'first' });
        },
        signOut: async() => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch(e) {
                console.log(e);
            }
            try {
                await AsyncStorage.removeItem('first');
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
    }), []);

    return (
        <AuthContext.Provider value={{authContext, state}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
