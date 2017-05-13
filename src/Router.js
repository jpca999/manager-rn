import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" />
      </Scene>

      <Scene key="main">
          <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Properties"
          />

      <Scene
      onRight={() => console.log(' on Right clicked!!!')}
      rightTitle="insideCreate"
      key="employeeCreate"
      component={EmployeeCreate}
      title="Create Property"
      />
      <Scene
      onRight={() => console.log(' on Right clicked!!!')}
      rightTitle="right Tap"
      key="employeeEdit"
      component={EmployeeEdit}
      title="Edit Property"
      />
  </Scene>

    </Router>
  );
};
export default RouterComponent;






















//
