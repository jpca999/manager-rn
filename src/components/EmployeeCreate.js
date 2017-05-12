import React, { Component } from 'react';
import { Text } from 'react-native';
import { Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';

import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

  onButtonPress(){
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }


  render(){
    return(
      <Card>

      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={ text => this.props.employeeUpdate( { prop: 'name', value: text })}
        />
      </CardSection>

      <CardSection>
      <Input
        label="Phone no"
        placeholder="999-999-9999"
        value={this.props.phone}
        onChangeText={ text => this.props.employeeUpdate( { prop: 'phone', value: text })}
      />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }} >
        <Text style={styles.pickerTextStyle}>
          Shift
        </Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.props.shift}
          onValueChange={day => this.props.employeeUpdate({ props: 'shift', value: day }) }
        >
        <Picker.Item label="Sunday" value="Sunday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
      </CardSection>

      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Create
        </Button>
      </CardSection>

      </Card>
    );
  }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect( mapStateToProps, { employeeUpdate, employeeCreate }) (EmployeeCreate);
