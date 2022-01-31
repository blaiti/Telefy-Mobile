import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Category from '../../components/Cards/Category';
import Channel from '../../components/Cards/Channel';
import Program from '../../components/Cards/Program';

import routes from '../../config/routes';
import { Typography, Colors } from '../../styles';
import AuthContext from '../../context/auth-context';
import { categories, channels, programs } from '../../assets/data';

const Home = ({navigation}) => {
    const {state, authContext} = React.useContext(AuthContext);
    
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedChannel, setSelectedChannel] = useState(0);

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerTitle}>
                        <Text>Bonjour </Text>
                        <Text style={{color: Colors.PRIMARY}}>Téléfier</Text>
                        <Text>,</Text>
                    </Text>
                    <Text style={styles.headerSubTitle}>Content de vous revoir !</Text>
                </View>
                {state.userToken == null ?
                    <TouchableOpacity 
                        style={styles.headerIcon}
                        onPress={() => navigation.navigate(routes.AuthStack)}>
                            <Icon name="person-outline" color={Colors.WHITE} size={25} />
                    </TouchableOpacity>
                :
                    <TouchableOpacity 
                        style={styles.headerIcon}
                        onPress={() => authContext.signOut()}>
                            <Icon name="logout" color={Colors.WHITE} size={25} />
                    </TouchableOpacity>
                }
            </View>

            {/* Body */}
            <View style={styles.bodyContainer}>
                {/* Categories */}
                <View>
                    <View style={styles.blockContainer}>
                        <Text style={styles.blockTitle}>Catégories</Text>
                        <Text style={styles.blockSubTitle}>Voir plus</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        {categories.map((category, index) => (
                            <TouchableOpacity 
                                key={index} 
                                activeOpacity={1}
                                onPress={() => setSelectedCategory(index)}>
                                    <Category category={category} index={index} active={selectedCategory} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Channels */}
                <View>
                    <View style={styles.blockContainer}>
                        <Text style={styles.blockTitle}>Chaînes</Text>
                        <Text style={styles.blockSubTitle}>Voir plus</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        {channels.map((channel, index) => (
                            <TouchableOpacity 
                                key={index} 
                                activeOpacity={1}
                                onPress={() => setSelectedChannel(index)}>
                                    <Channel channel={channel} index={index} active={selectedChannel} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Programs */}
                <View>
                    <View style={styles.blockContainer}>
                        <Text style={styles.blockTitle}>Programmes</Text>
                        <Text style={styles.blockSubTitle}>Voir plus</Text>
                    </View>
                    <View style={{paddingLeft: 20, paddingRight: 20}} >
                        {programs.map((program, index) => (
                            <TouchableOpacity 
                                key={index} 
                                activeOpacity={1}
                                onPress={() => navigation.navigate(routes.TVProgram, {program: program})}>
                                    <Program program={program} index={index} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    // Header
    headerContainer: {
        padding: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 20,
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_BOLD
    },
    headerSubTitle: {
        fontSize: 15,
        color: Colors.GRAY,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
    headerIcon: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY
    },
    // Body
    bodyContainer: {
        flex: 1,
    },
    blockContainer: {
        padding: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    blockTitle: {
        fontSize: 25,
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_BOLD
    },
    blockSubTitle: {
        fontSize: 15,
        color: Colors.GRAY,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
});

export default Home;