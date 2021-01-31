export default (state, action) => {
  switch(action.type) {
    //GlobalState에 정의해놓음.
    //action.type이 DELETE_TRANSACTION 인걸 찾음
    //id 받아온값은 삭제하려는거니까 그id와 일치하지 않는 것들 전부 리턴
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions:state.transactions.filter(transactions => transactions.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
    return {
      ...state,
      transactions:[action.payload, ...state.transactions]
    }
    default:
      return state;
  }
}



//How we specify the application state changes in response to certain actions to our store to our context 