import React, {Component} from 'react';
import DropdownAlert from 'react-native-dropdownalert';

class ErrorHandle extends Component {
  componentDidMount() {
    this.dropDownAlertRef.alertWithType('error', 'Error', this.props.error);
  }
  render() {
    return <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />;
  }
}

export default ErrorHandle;
