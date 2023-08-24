import {createRef} from 'react';
import {
  StackActions,
  ParamListBase,
  NavigationContainerRef,
} from '@react-navigation/native';

export const nav = createRef<NavigationContainerRef<ParamListBase>>();

/**
 * Navigate to a route in current navigation tree.
 *
 * @param name — Name of the route to navigate to.
 * @param params — Params object for the route.
 *
 */
export const navigate = <ParamList extends {}>(
  name: string,
  params?: ParamList,
) => {
  nav.current?.navigate(name, params);
};

/**
 * A hook to navigate and push to a route in current navigation tree.
 *
 * @param name — Name of the route to navigate to.
 * @param params — Params object for the route.
 *
 */
export const useCurrentNavigation = () => {
  const push = <ParamList extends {}>(name: string, params?: ParamList) => {
    nav.current?.dispatch(StackActions.push(name, params));
  };

  return {navigate, push};
};
