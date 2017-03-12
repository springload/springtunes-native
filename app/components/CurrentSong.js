import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableOpacity,
} from 'react-native';
import { Slider } from 'react-native-elements';
import OpenUrl from '../components/common/OpenUrl';
import { Content, Button, Card, CardItem, Left, Body, Title, Icon, Separator, Spinner } from 'native-base';

const propTypes = {
    isFetching: PropTypes.bool.isRequired,
    currentSong: PropTypes.object.isRequired,
    hasError: PropTypes.bool,
    error: PropTypes.string,
};

class CurrentSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
        }
    }

    render() {
        const { currentSong, isFetching, hasError, error } = this.props;
        return (
            <View>
                <Card>
                    <CardItem header bordered>
                        <Icon name="headset" style={styleColorSpringload} />
                        <Title>Now playing</Title>
                    </CardItem>
                    {!isFetching &&
                        <View>                
                            <CardItem>
                                <Icon name='musical-note' style={styleColorSpringload} />
                                <OpenUrl 
                                    urlLabel={currentSong.title}
                                    url={currentSong.link_track}
                                />
                            </CardItem>
                            <CardItem>
                                <Icon name='person' style={styleColorSpringload} />
                                <OpenUrl 
                                    urlLabel={currentSong.artist}
                                    url={currentSong.link_artist}
                                />
                            </CardItem>
                            <CardItem>
                                <Icon name='albums' style={styleColorSpringload} />
                                <OpenUrl 
                                    urlLabel={currentSong.album}
                                    url={currentSong.link_album}
                                />
                            </CardItem>
                        </View>
                    }
                    {isFetching &&
                        <CardItem style={{'alignSelf': 'center'}}>
                            <Spinner color={springloadColor} />
                        </CardItem>       
                    }
                    {!isFetching && hasError &&
                        <CardItem>
                            <Text style={{color: 'red'}}>{`An error occurred. Please try again.\nError details: ${error}`}</Text>
                        </CardItem>       
                    }
                </Card>
            </View>
        );
    }
}

CurrentSong.propTypes = propTypes;

export default CurrentSong;

const springloadColor = '#7DC265'
const styleColorSpringload = {
    color: springloadColor,
};
