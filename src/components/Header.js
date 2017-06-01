// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#95D6A0',
        //justifyContent: 'flex-end or flex-start && space-between && space-around' vertical axis
        justifyContent: 'center',
        //alignItems: 'flex-end or flex-start' horizontal axis
        alignItems: 'center',
        height: 60,
        padding: 15,
        elevation: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the Component available to other parts of the App
export default Header;
