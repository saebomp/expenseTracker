import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//initial state
const initialState = {
  transactions: [
    {id:1, text:'Flower', amount:-20},
    {id:2, text:'Salary', amount:300},
    {id:3, text:'Book', amount:-10},
    {id:4, text:'Camera', amount:150},
  ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component 20:10
export const GlobalProvider = ({children}) => {
  //children 은 app.js 에서 <GlobalProvider> 이 태그 안에 들어간것들을 말함
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //AppReducer 내용이 useReducer에 pass되고 state에 access함 (initialState)
  //그리고 value를 provider 에 패스해줌
  //provider 는 <GlobalProvider> 이 태그 안에 들어간것들을 말함
  return (<GlobalContext.Provider value={{
    transactions:state.transactions
  }}>
    {children}
  </GlobalContext.Provider>);
}