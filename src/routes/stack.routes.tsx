import React from "react";
import colors from "../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/Welcome";
import { Confirmation } from "../screens/Confirmation";
import { UserIdentification } from "../screens/UserIdentification";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <StackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <StackRoutes.Screen name="Welcome" component={Welcome} />
      <StackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <StackRoutes.Screen name="Confirmation" component={Confirmation} />
    </StackRoutes.Navigator>
  );
};

export default AppRoutes;
