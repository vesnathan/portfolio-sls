/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useReducer } from 'react';

function reducer(state: any, action: any) {
  let { showContactDetails, contactPhone, contactEmail } = state;
  console.log(action.type);
  switch (action.type) {
    case 'updateContactEmail':
      contactEmail = action.payload;
      return { ...state, contactEmail };
    case 'updateContactPhone':
      contactPhone = action.payload;
      return { ...state, contactPhone };
    case 'updateContactShow':
      showContactDetails = action.payload;
      return { ...state, showContactDetails };
    default:
      return state;
  }
}

// @ts-ignore
export const AppStateContext = React.createContext();

export const useAppState = () => useContext(AppStateContext);

export function useAppContext() {
  return useContext(AppStateContext);
}

interface ThisDispatchType {
  data: Object;
  which: String;
}

const AppStateProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, {
    showContactDetails: false,
    contactPhone: '',
    contactEmail: '',
  });
  const updateAppState = (newDispatches: any) => {
    newDispatches.newDispatches.forEach((thisDispatch: ThisDispatchType) => {
      dispatch({ type: thisDispatch.which, payload: thisDispatch.data });
    });
  };
  return (
    <AppStateContext.Provider value={{ state, updateAppState }} {...props} />
  );
};

export default AppStateProvider;
