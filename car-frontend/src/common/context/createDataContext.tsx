import React, { useReducer } from 'react';

interface actionsProps {
  [index: string]: (e?: any) => any;
}

interface providerProps {
  children: React.ReactNode;
}

export default (reducer: any, actions: actionsProps, initialState: any) => {
  const Context = React.createContext<any>(null);

  const Provider = ({ children }: providerProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions = { addBlogPost : (dispatch) => { return () => {} }}
    const boundActions: actionsProps = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
