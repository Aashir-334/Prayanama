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
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Modal from 'react-native-modal';
import {strings} from '../../../Locatization';
import Back from 'react-native-vector-icons/MaterialIcons';
import {store} from '../../../store';
import CustomHeader from '../../../common/header';

const {width, height} = Dimensions.get('window');

export default class HealthManagement extends Component {
  static navigationOptions = {
    title: strings.healthManagment,
  };
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {

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
         <CustomHeader {...this.props} title={store.getState().language.healthManagment.split('\n')[0]+' '+store.getState().language.healthManagment.split('\n')[1]}/>
       
       <View style={{flexGrow:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.heading}>Coming Soon</Text>
        </View>  
        </LinearGradient>
        
      </View>
    );
  }
}
