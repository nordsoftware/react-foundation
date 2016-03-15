import React, { PropTypes } from 'react';
import { Breakpoints, ButtonGroupColors, ButtonGroupSizes } from '../enums';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

/**
 * Button group component.
 * http://foundation.zurb.com/sites/docs/button-group.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ButtonGroup = props => {
  const className = createClassName(
    props.className || 'button-group',
    props.color,
    props.size,
    {
      'expanded': props.isExpanded,
      'stacked-for-small': props.stackFor === Breakpoints.SMALL,
      'stacked-for-medium': props.stackFor === Breakpoints.MEDIUM,
      'stacked-for-large': props.stackFor === Breakpoints.LARGE,
      'stacked': props.isStacked
    },
    generalClassNames(props)
  );

  return (
    <div {...removeProps(props, ['color'])} className={className}/>
  );
};

ButtonGroup.propTypes = {
  ...GeneralPropTypes,
  color: PropTypes.oneOf(objectValues(ButtonGroupColors)),
  size: PropTypes.oneOf(objectValues(ButtonGroupSizes)),
  stackFor: PropTypes.oneOf(objectValues(Breakpoints)),
  isExpanded: PropTypes.bool,
  isStacked: PropTypes.bool
};
