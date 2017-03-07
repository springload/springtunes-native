import React, { PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableOpacity,
} from 'react-native';
import Processing from '../components/Processing';
import OpenUrl from '../components/common/OpenUrl';
import { Card, CardItem, Left, Body, Title, Icon, Separator } from 'native-base';

const propTypes = {
    isFetching: PropTypes.bool.isRequired,
    currentSong: PropTypes.object.isRequired,
    hasError: PropTypes.bool,
    error: PropTypes.string,
};

const CurrentSong = ({ currentSong, isFetching, hasError, error }) => (
    <Card>
        <CardItem header bordered>
            <Icon name="headset" style={colorSpringload} />
            <Title>Now playing</Title>
        </CardItem>
        {!isFetching &&
            <View>
                
                <CardItem>
                    <Icon name='musical-note' style={colorSpringload} />
                    <OpenUrl 
                        urlLabel={currentSong.title}
                        url={currentSong.link_track}
                    />
                </CardItem>
                <CardItem>
                    <Icon name='person' style={colorSpringload} />
                    <OpenUrl 
                        urlLabel={currentSong.artist}
                        url={currentSong.link_artist}
                    />
                </CardItem>
                <CardItem>
                    <Icon name='albums' style={colorSpringload} />
                    <OpenUrl 
                        urlLabel={currentSong.album}
                        url={currentSong.link_album}
                    />
                </CardItem>
            </View>
        }
        {isFetching &&
            <CardItem>
                <Body>
                    <Processing />
                </Body>
            </CardItem>
        }
        {!isFetching && hasError &&
        <CardItem>
            <View>
                <Text>
                    Error occurred.<br />
                    Details are: "{error}"
                </Text>
            </View>
        </CardItem>
        }
    </Card>
);

CurrentSong.propTypes = propTypes;

export default CurrentSong;

const colorSpringload = {
    color: '#7DC265',
};