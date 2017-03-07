import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isModifyingMute: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
    refreshClick: PropTypes.func.isRequired,
    togglePauseClick: PropTypes.func.isRequired,
    backClick: PropTypes.func.isRequired,
    nextClick: PropTypes.func.isRequired,
    muteClick: PropTypes.func.isRequired,
    unmuteClick: PropTypes.func.isRequired,
    volumeChange: PropTypes.func.isRequired,
};

const Controls = ({
    isFetching,
    isModifyingMute,
    isMuted,
    isPlaying,
    volume,
    refreshClick,
    togglePauseClick,
    backClick,
    nextClick,
    muteClick,
    unmuteClick,
    volumeChange,
}) => (
    <Footer>
        <FooterTab>
            <Button success onPress={refreshClick} disabled={isFetching} full style={buttonSpringload}>
                <Icon name="refresh" style={{color: '#ffffff'}} />
                <Text style={{color: '#ffffff'}}>Refresh</Text>
            </Button>
            <Button success onPress={backClick} disabled={isFetching} full style={buttonSpringload}>
                <Icon name="skip-backward" style={{color: '#ffffff'}} />
                <Text style={{color: '#ffffff'}}>Back</Text>
            </Button>
            <Button success onPress={togglePauseClick} disabled={isFetching} full style={buttonSpringload}>
                {isPlaying &&
                    <View>
                        <Icon name="pause" style={{alignSelf: 'center', color: '#ffffff'}} />
                        <Text style={{color: '#ffffff'}}>Pause</Text>
                    </View>
                }
                {!isPlaying &&
                    <View>
                        <Icon name="play" style={{alignSelf: 'center', color: '#ffffff'}} />
                        <Text style={{color: '#ffffff'}}>Play</Text>
                    </View>
                }
            </Button>
            <Button success onPress={nextClick} disabled={isFetching} full style={buttonSpringload}>
                <Icon name="skip-forward" style={{color: '#ffffff'}} />
                <Text style={{color: '#ffffff'}} >Next</Text>
            </Button>
        </FooterTab>
    </Footer>
);

Controls.propTypes = propTypes;

export default Controls;

const buttonSpringload = {
    backgroundColor: '#7DC265',
};
