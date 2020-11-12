import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions
} from 'react-native';
import style from '../../../styles/index';
import Icon from 'react-native-vector-icons/AntDesign';
import { strings } from '../../../Locatization';
import TabIcon from 'react-native-vector-icons/FontAwesome';  
const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {last_exer} from '../../../actions/userHistory';
import Language from './Language';
import { store } from '../../../store';

class LastExerciseScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: store.getState().language.lastExercice,
    tabBarIcon:({tintColor})=>(  
      <TabIcon name="history" color={tintColor} size={height * .03}/>  
  )
  };
  componentDidMount() {
    this.props.last_exer();
  }
  render() {
    let {subExercise, exerciseMinutes, exerciseSeconds} = '';
    this.props.history
      ? ({subExercise, exerciseMinutes, exerciseSeconds} = this.props.history)
      : null;
    return (
      <View style={style.Layout.safeArea}>
        <StatusBar hidden={true} />
        <View
          style={[
            style.Layout.container,
            {
              padding: 16,
            },
          ]}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
              }}>
              {strings.exerciseBegins}
            </Text>
            {this.props.history && (
              <View>
                <Text>Last Exercise: {subExercise.subExerciseName}</Text>
                <Text>Minutes: {exerciseMinutes}</Text>
                <Text>Seconds: {exerciseSeconds}</Text>
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          />
        </View>
        {/* <Language /> */}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  history: state.userHistory.history,
});
export default connect(
  mapStateToProps,
  {last_exer},
)(LastExerciseScreen);
