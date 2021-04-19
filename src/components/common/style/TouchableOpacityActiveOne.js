import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

function TouchableOpacityActiveOne({
  style,
  onPress,
  children,
  disabled,
  ...props
}) {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      activeOpacity={1}
      disabled={disabled}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}

TouchableOpacityActiveOne.defaultProps = {
  onPress: () => {},
  children: null,
  disabled: false,
  style: {},
};

TouchableOpacityActiveOne.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default TouchableOpacityActiveOne;
