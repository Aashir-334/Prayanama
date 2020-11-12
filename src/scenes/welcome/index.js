import React, { Component } from 'react';
import { Platform, View, StatusBar, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../styles/SliderEntry.style';
import SliderEntry from '../../components/slider/SliderEntry';
import { Container } from "../../components/layout/index";
import style , { colors } from '../../styles/index';
import { ENTRIES1 } from '../../statics/entries';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

export default class WelcomeScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={true}
              parallax={true}
              screenNumber={index}
              parallaxProps={parallaxProps}
            />
        );
    }

    main () {
        const { slider1ActiveSlide } = this.state;

        return (
            <View>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={1}
                  inactiveSlideShift={0}
                  containerCustomStyle={style.Slider.slider}
                  autoplay={false}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <View>
                    <Pagination
                        dotsLength={ENTRIES1.length}
                        activeDotIndex={slider1ActiveSlide}
                        //containerStyle={styles.paginationContainer}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        dotStyle={style.Pagination.paginationDot}
                        inactiveDotColor={colors.dark}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={this._slider1Ref}
                        tappableDots={!!this._slider1Ref}
                    />
                </View>
            </View>
        );
    }
    
    get gradient () {
        return (
            <LinearGradient
              colors={[colors.primaryColor, colors.secondaryColor]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={style.Gradient.gradient}
            />
        );
    }

    render () {
        const mainView = this.main();
        return (
            <Container>
                <StatusBar
                    hidden={true}
                />
                { mainView }
            </Container>
        );
    }
}
