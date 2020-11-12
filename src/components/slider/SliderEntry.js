import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../../styles/SliderEntry.style';
import { SliderFormSubmit, SliderFormBehaviour, SliderFormMain, SliderFormToWorkOn } from "./welcomeSliderForm";
import { withNavigation } from "react-navigation";

class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };



    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={illustration}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    switchToHomeScreen(){
        this.props.navigation.navigate('Home');
      }

    render () {
        const { even, screenNumber, data: { overlayColor } } = this.props;
        
        const FormViews = () => {
            if (screenNumber === 0) {
                return <SliderFormMain />
            } else if (screenNumber === 1) {
                return <SliderFormBehaviour />
            }
            else if (screenNumber === 2) {
                return <SliderFormToWorkOn />
            }
            else if (screenNumber === 3) {
                return <SliderFormSubmit onclick={() => this.switchToHomeScreen() } />
            }
        }

        return (
            <View
              style={styles.slideInnerContainer}
              >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                </View>
                <View style={[styles.shadow, { backgroundColor: overlayColor }]} />
                <View style={[styles.textContainer]}>
                    <FormViews  />
                </View>
            </View>
        );
    }
}

export default withNavigation(SliderEntry);