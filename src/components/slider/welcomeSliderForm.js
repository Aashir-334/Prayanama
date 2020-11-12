import React, { Component } from 'react';
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
} from 'react-native';
import { Item, Input, Thumbnail, Text } from 'native-base';
import Arrows from 'react-native-vector-icons/Entypo';
import { SelectDefault } from '../common/inputs/Select';
import RNPickerSelect from 'react-native-picker-select';
import {
  WheelPicker,
  TimePicker,
  DatePicker,
} from 'react-native-wheel-picker-android';
import { withNavigation } from "react-navigation";
// const wheelPickerData = ['0','1', '2', '3', '4', '5', '6'];
export class SliderFormMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
      ],
      Height: [
        '134.62',
        '137.16',
        '139.7',
        '142.24',
        '144.78',
        '144.78',
        '149.86',
        '152.4',
        '154.94',
        '157.48',
        '160.02',
        '162.56',
        '165.1',
        '167.64',
        '170.18',
        '172.72',
        '175.26',
        '177.8',
        '180.34',
        '182.88',
        '185.42',
        '187.96',
        '190.5',
        '193.04',
        '195.58',
        '198.12',
        '200.66',
        '203.2',
        '205.74',
        '208.28',
        ' 210.82',
        '213.36',
      ],
      selectedAge: 18,
      selectedWieght: 40,
      selectedHieght: 15,
      navigateToScreen1: false,
      inputTextName: '',
      inputTextGender: '',
    };
  }
  componentDidMount() {
    // this._age();
  }

  // _age = () => {
  //     for (var i = 1; i <= 100; i++) {
  //         if (i === 0) {
  //             console.log(i + " FizzBuzz");
  //         }
  //         // this.setState({people:[i]})
  //         console.log(i + " FizzBuzz");

  //     }
  // }
  onItemAge = (selectedAge) => {
    this.setState({ selectedAge });
  };
  onItemWeight = (selectedWieght) => {
    this.setState({ selectedWieght });
  };
  onItemHHeight = (selectedHieght) => {
    this.setState({ selectedHieght });
  };

  onPress = () => {
    this.setState({ selectedItem: selectedItem });
  };
  buttonChanger = () => {
    if (this.state.inputTextName == '') {
      alert('Enter Name')
    }
    else if (this.state.inputTextGender == '') {
      alert('Select Gender')
    }
    else {
      this.setState({ navigateToScreen1: true })
    }
  };
  render() {
    console.log(this.state.inputTextGender);
    return (
      <View>
        {!this.state.navigateToScreen1 ? (
          <View>
            <Item
              style={{
                backgroundColor: '#fff',
                marginBottom: 8,
                borderRadius: 24,
                paddingHorizontal: 16,
              }}>
              <Input

                placeholder="Name"
                onChangeText={inputTextName => this.setState({ inputTextName })}


              />
            </Item>
            {/* <Item
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input placeholder="Age" />
                </Item> */}

            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 28,
                marginBottom: 8,
                // alignSelf:'center',
                alignItems: 'center',
                // justifyContent: 'space-between',
                height: 50,
                // paddingTop:15,
                // flexWrap:'wrap',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginLeft: 20,
                }}>
                Age
              </Text>
              <WheelPicker
                selectedItem={this.state.selectedAge}
                data={this.state.age}
                onItemSelected={this.onItemAge}
                style={{
                  width: 50,
                  height: 100,
                  position: 'relative',
                  bottom: 7,
                  marginLeft: 130,
                }}
                // curtainColor={"transparent"}
                itemTextColor={'#00000000'}
              />
              <Arrows name={'select-arrows'} size={15} />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 28,
                marginBottom: 8,
                paddingLeft: 10,
              }}>
              <RNPickerSelect
                placeholder={{
                  label: 'Gender',
                  color: 'black',
                }}
                onValueChange={inputTextGender => this.setState({ inputTextGender })}
                items={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                ]}
                style={pickerSelectStyles}
              />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 28,
                marginBottom: 8,
                // alignSelf:'center',
                alignItems: 'center',
                // justifyContent: 'space-between',
                height: 50,
                // paddingTop:15,
                // flexWrap:'wrap',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginLeft: 20,
                }}>
                Weight
              </Text>

              <WheelPicker
                selectedItem={this.state.selectedWieght}
                data={this.state.age}
                onItemSelected={this.onItemHHeight}
                style={{
                  width: 50,
                  height: 100,
                  position: 'relative',
                  bottom: 7,
                  marginLeft: 95,
                  marginRight: 2,
                }}
                // curtainColor={"transparent"}
                itemTextColor={'#00000000'}
              />
              <Text>lb</Text>
              <Arrows name={'select-arrows'} size={15} />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 28,
                marginBottom: 8,
                // alignSelf:'center',
                alignItems: 'center',
                // justifyContent: 'space-between',
                height: 50,
                // paddingTop:15,
                // flexWrap:'wrap',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginLeft: 20,
                }}>
                Height
              </Text>

              <WheelPicker
                selectedItem={this.state.selectedHieght}
                data={this.state.Height}
                onItemSelected={this.onItemHHeight}
                style={{
                  width: 50,
                  height: 100,
                  position: 'relative',
                  bottom: 7,
                  marginLeft: 84,
                  marginRight: 4,
                }}
                // curtainColor={"transparent"}
                itemTextColor={'#00000000'}
              />
              <Text>cm</Text>
              <Arrows name={'select-arrows'} size={15} />
            </View>
            <TouchableOpacity
              // onPress={() => this.buttonChanger()
              // }
              activeOpacity={0.7}
              onPress={() => this.setState({ navigateToScreen1: true })}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: '#165BAA',
                  padding: 16,
                  alignItems: 'center',
                  borderRadius: 32,
                  width: 200,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
            <SliderFormBehaviour />
          )}
      </View>
    );
  }
}

const PersonalityDATA = [
  {
    Id: 1,
    title: 'The Sage',
  },
  {
    Id: 2,
    title: 'The Brave',
  },
  {
    Id: 3,
    title: 'The Hero',
  },
  {
    Id: 4,
    title: 'The Killer',
  },
  {
    Id: 5,
    title: 'The Innocent',
  },
  {
    Id: 6,
    title: 'The Idiot',
  },
  {
    Id: 7,
    title: 'The Artist',
  },
  {
    Id: 8,
    title: 'The Rockstar',
  },
  {
    Id: 9,
    title: 'The Saviour',
  },
  {
    Id: 10,
    title: 'The Wicked',
  },
];

export class SliderFormBehaviour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateToScreen2: false,

    };
  }
  render() {
    return (

      <View>
        {!this.state.navigateToScreen2 ? (
          <View>

            <SelectDefault data={PersonalityDATA} />
            <TouchableOpacity
             activeOpacity={0.7}
              onPress={() => this.setState({ navigateToScreen2: true })}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: '#165BAA',
                  padding: 16,
                  alignItems: 'center',
                  borderRadius: 32,
                  width: 200,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
            <SliderFormToWorkOn />
          )}
      </View>
    );
  }
}
export class SliderFormToWorkOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateToScreen3: false,

    };
  }
  render() {
    const workOnData = [
      {
        Id: 1,
        title: 'Mind',
      },
      {
        Id: 2,
        title: 'Body',
      },
      {
        Id: 3,
        title: 'Emotions',
      },
      {
        Id: 4,
        title: 'Ethic Body',
      },
    ];
    return (

      <View>

        {!this.state.navigateToScreen3 ? (
          <View>
            <SelectDefault data={workOnData} />
            <TouchableOpacity
             activeOpacity={0.7}
              onPress={() => this.setState({ navigateToScreen3: true })}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: '#165BAA',
                  padding: 16,
                  alignItems: 'center',
                  borderRadius: 32,
                  width: 200,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </View>) : (
            <SliderFormSubmit />
          )}
      </View>
    );
  }
}

export class SliderFormSubmit extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => { this.props.onclick() }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#165BAA',
            padding: 16,
            alignItems: 'center',
            borderRadius: 32,
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Continue
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  headlessAndroidContainer: {
    flex: 1,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'white',
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    // backgroundColor:'white',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
