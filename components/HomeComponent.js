import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <Text>
                    Aloha! Welcome to The Hawaii Bros' Official Oah'u Vacation Planner.                    
                </Text>
                <Text>
                    Do you want to maximize the fun factor on your next visit to this majestical island? Well, bruh, you've come to the right place!
                </Text>
                <Text>
                    Other sites bombard you with so many things to do that'll it make your head spin. We want you to just chill, relax, and have no worries. So we've picked the absolute top three things from each of the most popular categories. Trust us, one of us lives here.                    
                </Text>
                <Text>
                    Go ahead and surf the links above or click on the pic below for our #1s if you only have like one weekend or something for your visit.                    
                </Text>
            </View>
        );
    }
}

export default Home;