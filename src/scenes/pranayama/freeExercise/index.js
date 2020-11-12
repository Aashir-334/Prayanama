import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  ToastAndroid,
} from 'react-native';
import style from '../../../styles/index';
import Heart from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../../utils/fonts';
import Lock from 'react-native-vector-icons/Entypo';
import styles from './style';
import Modal from 'react-native-modal';
import {strings} from '../../../Locatization';
import Back from 'react-native-vector-icons/MaterialIcons';
import {Button, Overlay} from 'react-native-elements';
import Notification from 'react-native-vector-icons/MaterialIcons';
import {store} from '../../../store';
import {language} from '../../../language/language';

import SpinnerLoader from '../../../components/spinnerLoader';

import {getExercise} from '../../../actions/exercise';
import {getSongs} from '../../../actions/songs';

const {width, height} = Dimensions.get('window');

export default class FreeExercise extends Component {
  static navigationOptions = {
    title: strings.stateofMindWanted,
  };
  constructor() {
    super();
    this.state = {
      favoriteRelax: false,
      isLoading: false,
      favoriteGetFiery: false,
      favoriteBalance: false,
      favoriterResource: false,
      favoriteManagement: false,
      favoriteClearMind: false,
      favoriteDepression: false,
      favoriteClearMind2: false,
      favoriterBringAwear: false,
      visible: false,
      mockData: [],
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: store.getState().exercise.isLoading,
      mockData: store.getState().exercise.exercises,
    },()=>{
      // this.state.mockData.map(item=>{
      //  // console.warn(item)
      // })
    });

    this.unsubscribe = store.subscribe(() => {
      if (store.getState().exercise) {
        this.setState({
          isLoading: store.getState().exercise.isLoading,
          mockData: store.getState().exercise.exercises,
        });
      }
    });
  }

  navigationRelax() {
    let {selectedExercise} = this.state;

    this.relaxModal();
    setTimeout(() => {
      this.props.navigation.navigate('Exercise', selectedExercise);
    }, 100);
  }
  // navigationGetFiery = () => {
  //   this.modalGetFiery();
  //   setTimeout(() => {
  //     this.props.navigation.navigate('GetFiery');
  //   }, 100);
  // };
  // navigationAntiInflamatory = () => {
  //   this.antiInflamatoryModal();
  //   setTimeout(() => {
  //     this.props.navigation.navigate('AntiInfla');
  //   }, 100);
  // };
  // navigationStopProcras = () => {
  //   this.stopProcrasModal();
  //   setTimeout(() => {
  //     this.props.navigation.navigate('StopProcast');
  //   }, 100);
  // };
  // navigationBring = () => {
  //   this.bringModal();
  //   setTimeout(() => {
  //     this.props.navigation.navigate('BringAwaer');
  //   }, 100);
  // };

  renderLoader() {
    let {isLoading} = this.state;
    return <SpinnerLoader isLoading={isLoading} />;
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  relaxModal = () => {
    this.setState({relaxModal: !this.state.relaxModal});
  };
  modalGetFiery = () => {
    this.setState({modalGetFiery: !this.state.modalGetFiery});
  };
  antiInflamatoryModal = () => {
    this.setState({antiInflamatoryModal: !this.state.antiInflamatoryModal});
  };
  stopProcrasModal = () => {
    this.setState({stopProcrasModal: !this.state.stopProcrasModal});
  };
  bringModal = () => {
    this.setState({bringModal: !this.state.bringModal});
  };

  renderModal = () => {
    let {selectedExercise} = this.state;
    return (
      <Modal
        isVisible={this.state.relaxModal}
        style={styles.modalNoteMainContainer}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <LinearGradient
          colors={['#363636', '#75c3ff', '#363636']}
          style={styles.modalNoteLinear}>
          <View style={styles.modalNoteHeaderContainer}>
            <View style={styles.modalNoteHeader}>
              <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => this.relaxModal()}
                style={styles.headerBackBottonModal}>
                <Back
                  size={width * 0.08}
                  color="white"
                  name="keyboard-backspace"
                />
              </TouchableOpacity>
              <Text style={styles.selectNoteText}>
                {/* ddddd */}
                {store.getState().language.note}
              </Text>
            </View>
          </View>
          <View style={styles.noteModalBodyContainer}>
            <View style={styles.noteModalBodyInner}>
              <Text style={styles.noteText}>
                {selectedExercise?.note}
                {/* {store.getState().language.noteRelax} */}
              </Text>
            </View>
          </View>
          <View style={styles.modalNoteFooterContainer}>
            <View style={styles.modalNoteFooter}>
              <TouchableOpacity
                onPress={() => this.navigationRelax()}
                activeOpacity={0.7}
                style={styles.okNoteBotton}>
                <Text style={styles.okNoteText}>
                  {store.getState().language.next}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </Modal>
    );
  };

  render() {
    const {mockData} = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#007AFF', '#75c3ff', '#007AFF']}
          style={{
            flex: 1,
          }}>
          <Image
            source={require('../../../../image/pranyamaBack1.png')}
            style={styles.backgroundImage}
          />
          <View style={styles.headerContainer}>
            <View style={styles.headerInner}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                activeOpacity={0.7}
                style={styles.headerBackBotton}>
                <Back
                  size={width * 0.08}
                  color="white"
                  name="keyboard-backspace"
                />
              </TouchableOpacity>
              <Text style={styles.headerHeading}>
                {store.getState().language.exercise}
              </Text>
            </View>
          </View>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.scrollViewContainer}>
              {/* Card 1 */}

              {mockData.length!=0 &&
                mockData.map(v => {
                  
                  return (
                    <>
                      <TouchableOpacity
                        style={styles.cardContainer}
                        activeOpacity={0.7}
                        onPress={() => {
                          this.setState({selectedExercise: v}, () =>
                            this.relaxModal(),
                          );
                        }}>
                        <LinearGradient
                          colors={['#363636', '#75c3ff', '#363636']}
                          style={styles.cardInner}>
                          <Image
                            source={{
                              uri: `${
                                v.image
                              }`,
                            }}
                            blurRadius={1}
                            style={styles.cardImage}
                          />
                          <View style={styles.cardHeaderContainer} />
                          <View style={styles.cardBody}>
                            <View style={styles.bodyContainer}>
                              <Text style={styles.mainHeading}>{v.name}</Text>
                            </View>
                          </View>
                          <View style={styles.cardFooter}>
                            <View style={styles.footerContainer}>
                              <Text style={styles.footerText}>{v.title}</Text>
                            </View>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>

                      {/* Modal */}
                    </>
                  );
                })}
          </View>
          </ScrollView>
          <Modal
            animationIn="bounceIn"
            animationOut="bounceOut"
            isVisible={this.state.isModalVisible}
            style={{
              backgroundColor: 'white',
              maxHeight: height * 0.4,
              maxWidth: width * 1,
              top: height * 0.25,
              borderRadius: width * 0.01,
            }}>
            <LinearGradient
              colors={['#363636', '#75c3ff', '#363636']}
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: width * 0.01,
              }}>
              <View style={styles.modalHeaderContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.alertText}>
                    {strings.getMorePranayamasFor}
                  </Text>
                </View>
              </View>
              <View style={styles.modalFooterContainer}>
                <View style={styles.modalFooter}>
                  <TouchableOpacity
                    onPress={this.toggleModal}
                    style={styles.okBotton}>
                    <Text style={styles.okText}>{strings.ok}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </Modal>
        </LinearGradient>
        {this.renderLoader()}
        {this.renderModal()}
      </View>
    );
  }
}
