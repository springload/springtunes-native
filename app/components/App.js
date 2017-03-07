import React, { Component, PropTypes } from 'react';
import LastUpdated from '../components/LastUpdated';
import IntelligentCurrentSong from '../containers/IntelligentCurrentSong';
import IntelligentControls from '../containers/IntelligentControls';
import Logo from '../components/Logo';
import {
    View,
    Text
} from 'react-native';
import { Container, Header, Title, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

const propTypes = {
    lastUpdated: PropTypes.number.isRequired,
    fetchSongIfNeeded: PropTypes.func.isRequired,
};

class App extends Component {
    componentDidMount() {
        this.props.fetchSongIfNeeded();
    }

    render() {
        const { lastUpdated } = this.props;
        
        return (
            <Container>
                <Header>
                    <Body>
                        <Logo />
                    </Body>
                </Header>

                <Content>
                    <IntelligentCurrentSong />
                    {/*<View className="last-updated">
                        <View className="u-text-uppercase">
                            <Text>Now Playing</Text>    
                        </View>
                        <LastUpdated lastUpdated={lastUpdated} />
                    </View>*/}
                </Content>

                <IntelligentControls />
            </Container>
        );
    }
}

App.propTypes = propTypes;

export default App;