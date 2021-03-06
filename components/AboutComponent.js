//by Zach
//WIP I still need to add responsive icons and need to add the onPress with links going to our seperate pages
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

//This component is to be like our React footer component plus I thought it would be nice to add about us, the developers and a bit about the project too.

// Mark's Bio (feel free to edit as you see fit, image uploaded here and in JSON server): Mark was born in Boston, and has lived in Seattle and Los Angeles. He currently resides near Mexico City with his fiance. He enjoys his motorcycle, reading, and striving to never eat the same meal twice. In his past lives he was a chef, a bartender, and a construction project engineer. He is now working towards a career in web development. linkedin.com/in/mark-jeffery

class About extends Component {

    static navigationOptions = {
        title: 'About Us & This App',
        tabBarVisible: false,
        headerStyle :{
            backgroundColor: '#07607B',
            height: 90,
            paddingTop: 45
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.title} >
                    Links To The Bros!
                </Text>
                <View style={styles.iconDiv}>
                <Avatar
                        source={require('../assets/images/mark.jpg')}
                        rounded
                        size="large"
                        onPress={() => this.props.navigation.navigate('Mark')} 
                    />
                    <Text style={styles.name}>Mark</Text>
                </View>
                <View style={styles.iconDiv}>
                <Avatar
                        source={require('../assets/images/fredo.jpeg')}
                        title="FA"
                        rounded
                        size="large"
                        onPress={() => this.props.navigation.navigate('Fredo')} 
                    />
                    <Text style={styles.name}>Fredo</Text>
                </View>
                <View style={styles.iconDiv}>
                <Avatar
                        source={require('../assets/images/zach.jpg')}
                        title="ZF"
                        rounded
                        size="large"
                        onPress={() => this.props.navigation.navigate('Zach')} 
                    />
                    <Text style={styles.name}>Zach</Text>
                </View>
                <View style={styles.iconDiv}>
                    <Icon
                        name="github"
                        type="font-awesome"
                        color="#24292F"
                        onPress={() => { Linking.openURL('https://github.com/mj-wd/oahu-project-react-native')}}
                        reverse
                    />
                    <Text style={styles.name}>Github</Text>
                </View>
                <View style={styles.bot}>
                    <Icon
                        name="instagram"
                        type="font-awesome"
                        color="#8134AF"
                        onPress={() => { Linking.openURL('')}}
                        reverse
                    />
                    <Icon
                        name="facebook"
                        type="font-awesome"
                        color="#3B5998"
                        onPress={() => { Linking.openURL('https://www.facebook.com/Hawaii/')}}
                        reverse
                    />
                    <Icon
                        name="twitter"
                        type="font-awesome"
                        color="#08a0e9"
                        onPress={() => { Linking.openURL('https://twitter.com/gohawaii?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')}}
                        reverse
                    />
                    <Icon
                        name="youtube"
                        type="font-awesome"
                        color="#E62117"
                        onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCUzuwLc274MFs5SXEbwDrsQ')}}
                        reverse
                    />
                    <Icon
                        name="phone"
                        type="font-awesome"
                        color="#24292F"
                        reverse
                    />
                    <View style={styles.copy}>
                        <Icon
                            name="copyright"
                            type="font-awesome"
                            color="black"
                            size={20}
                            style={styles.icon1}
                        />
                        <Text style={styles.text1}>
                            gohawaii.com
                        </Text>
                    </View>
                    <View style={styles.copy}>
                        <Icon
                            name="copyright"
                            type="font-awesome"
                            color="black"
                            style={styles.icon2}
                        />
                        <Text style={styles.text2}>
                            All words contained in quotes and all photos have been borrowed from other websites. All work by others has been properly cited with links. Give them props.
                        </Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#4EACB8',

    },

    title: {
        marginTop: 10,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },
    iconDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    bot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap"

    },
    icon1: {
        marginLeft: 10
    },
    icon2: {
        marginLeft: 10
    },
    copy: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    text1: {
        flexShrink: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 13,
        marginLeft: 5

    },
    text2: {
        flexShrink: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 13,
        marginLeft: 0

    },
    name: {
        fontWeight: "bold",
        fontSize: 22,
    }

});

export default About;