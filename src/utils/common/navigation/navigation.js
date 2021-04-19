import {Navigation} from 'react-native-navigation';

export const navPush = ({componentId, name, passProps, options}) => {
  if (!componentId && !name) {
    return;
  }
  Navigation.push(componentId, {
    component: {
      name,
      passProps,
      options,
    },
  });
};
