import React, {Component} from 'react';
import {
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  Picker,
  TouchableOpacity,
  addons,
  Dimensions,
  Image,
  StatusBar,
  Keyboard,
} from 'react-native';
import {Item, Input, Thumbnail, Text} from 'native-base';
// import { SelectDefault } from '../common/inputs/Select';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import SignUp from 'react-native-vector-icons/FontAwesome';
// import SelectMultiple from 'react-native-select-multiple';
import SignUp from 'react-native-vector-icons/FontAwesome';
import Back from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-gesture-handler';
import styles from './style';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import {selectLanguage} from '../../actions/language';
import {strings} from '../../Locatization';
import SpinnerLoader from '../../components/spinnerLoader';
import {store} from '../../store';
import {languages} from '../../language/language';

const {width, height} = Dimensions.get('window');

class SliderFormToWorkOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      isModalVisible: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      if (store.getState()?.auth.isAuthenticated) {
        this.setState({
          isLoading: false,
          isModalVisible: false,
        });
        this.props.navigation.navigate('Paranyama');
      } else {
        this.setState({
          isLoading: false,
          isModalVisible: false,
        });
      }
    });
  }

  onlogin = () => {
    // store.dispatch(selectLanguage(languages.en));
    this.setState({isLoading: true});
    Keyboard.dismiss(0);
    this.setState({isModalVisible: this.state.isModalVisible}, () => {
      const {email, password} = this.state;
      this.props.login({email, password});
    });
  };
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      email: '',
      password: '',
    });
  };

  offAndNavigate = () => {
    this.toggleModal();
    // this.props.navigation.navigate('Signup');
    // setTimeout(() => {
    // },300)
  };

  renderLoader() {
    let {isLoading} = this.state;
    return <SpinnerLoader isLoading={isLoading} />;
  }
  render() {
    // if (this.props.isAuthenticated.isAuthenticated) {
    //   // this.props.navigation.navigate('Paranyama');
    // console.log('selectstore.getState().Language', store.getState()?.language);
    //   this.state.isModalVisible = false;
    // }
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          backgroundColor="#3B3244"
          // barStyle="default"
          // hidden={true}
          // showHideTransition={'fade'}
        />
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../image/LoginMain.jpg')}
            style={styles.imageBackGround}
          />
        </View>
        {/* <Text style={{color:'white'}}></Text> */}
        <View style={styles.bottonContainer}>
          <View>
            <TouchableOpacity onPress={this.toggleModal}activeOpacity={0.7}>
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                  {store.getState().language.login}
                </Text>
                <SignUp
                  name={'user-circle'}
                  size={width * 0.05}
                  color={'white'}
                  style={{position: 'absolute', right: width * 0.05}}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.orText}>{strings.or}</Text>
            <TouchableOpacity 
              activeOpacity={0.7}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                  {store.getState().language.signUp}
                </Text>
                <SignUp
                  name={'user-circle'}
                  size={width * 0.05}
                  color={'white'}
                  style={{position: 'absolute', right: width * 0.05}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          // onBackdropPress={() => this.toggleModal()}
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          isVisible={this.state.isModalVisible}
          style={styles.mainModalStyle}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../../image/loginModal.jpg')}
              style={styles.modalBackImage}
            />
            <View
              style={{
                height: height * 0.5,
                width: width * 0.9,
                alignItems: 'center',
              }}>
              <View>
                <View style={styles.textInputView}>
                  <TextInput
                    placeholder={strings.email}
                    keyboardType="email-address"
                    style={styles.textInput}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                  />
                </View>
                <View style={styles.textInputView}>
                  <TextInput
                    placeholder={strings.password}
                    secureTextEntry={true}
                    style={styles.textInput}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                  />
                </View>
                <TouchableOpacity onPress={this.onlogin} activeOpacity={0.7}>
                  <View style={styles.modalLoginBottonContainer}>
                    <SignUp
                      name={'user-circle'}
                      size={width * 0.04}
                      color={'white'}
                      style={{position: 'absolute', left: width * 0.03}}
                    />
                    <Text style={styles.modalBottonText}>
                      {store.getState().language.login}
                    </Text>
                  </View>
                </TouchableOpacity>

                <View>
                  <Text style={styles.orTextModal}>{strings.en}</Text>
                </View>
                <TouchableOpacity
                 activeOpacity={0.7}
                  onPress={() => {
                    this.setState({
                      isModalVisible: !this.state.isModalVisible,
                    });
                  }}>
                  <View style={styles.modalSignupBottonContainer}>
                    <Back
                      name={'navigate-before'}
                      size={width * 0.05}
                      color={'white'}
                      style={{position: 'absolute', left: width * 0.02}}
                    />
                    <Text style={styles.modalBottonText}>
                      {store.getState().language.back}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {this.renderLoader()}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth,
});
export default connect(
  mapStateToProps,
  {login},
)(SliderFormToWorkOn);
