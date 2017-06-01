import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        // ASYNC HTTP Request to get albums from the API.
        // eslint-disable-next-line

        fetch('http://www.json-generator.com/api/json/get/bVToCQNrCa?indent=2')
            .then(response => response.json())
            .then(data => this.setState({ albums: data }));
    }

    // Render all the albums that was fetched from the API.
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    // Render the component
    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

// Make compomnent available to other parts of the application
export default AlbumList;
