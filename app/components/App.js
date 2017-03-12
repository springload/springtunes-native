import React, { Component, PropTypes } from 'react';
import LastUpdated from '../components/LastUpdated';
import IntelligentCurrentSong from '../containers/IntelligentCurrentSong';
import IntelligentControls from '../containers/IntelligentControls';
import Logo from '../components/Logo';
import { Slider } from 'react-native-elements';
import {
    View,
    Text
} from 'react-native';
import { Container, Header, Title, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

const propTypes = {
    fetchSongIfNeeded: PropTypes.func.isRequired,
    lastUpdated: PropTypes.number,
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
                    <Card>
                        <CardItem>
                            <LastUpdated lastUpdated={lastUpdated} />
                        </CardItem>
                    </Card>
                </Content>
                
                <IntelligentControls />
            </Container>
        );
    }
}

App.propTypes = propTypes;

export default App;