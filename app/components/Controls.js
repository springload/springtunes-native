import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Slider } from 'react-native-elements'
import { Footer, FooterTab, Button, Icon, Text, Left, Body } from 'native-base';
import { debounce } from '../utils';

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
    <View>
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
        <Footer style={buttonSpringload}>
            <Slider
                style={{ flex: 1, alignSelf: 'stretch', margin: 10, alignItems: 'baseline' }}
                minimumValue={0} maximumValue={100}
                value={volume}
                trackStyle={{
                    height: 4,
                    borderRadius: 2,
                }}
                thumbStyle={{
                    width: 15,
                    height: 15,
                    backgroundColor: 'white',
                    borderColor: '#30a935',
                    borderWidth: 2,
                    top: 22
                }}
                minimumTrackTintColor='#30a935'
                onValueChange={value => debounce(volumeChange(value), 150)}
            />
        </Footer>
    </View>
);

Controls.propTypes = propTypes;

export default Controls;

const buttonSpringload = {
    backgroundColor: '#7DC265',
};
