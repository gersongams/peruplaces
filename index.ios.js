// index.android.js - place code in here for Android

// Import library to help create a component 
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component 
const App = () => { 
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Beautiful places in Peru'} />
            <AlbumList />
        </View>
    );
};

// Render it to the device
AppRegistry.registerComponent('peruplaces', () => App);
