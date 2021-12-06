// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
      case 'DELETE_EXPENCES':
        return {
          ...state,
          expences: state.expences.filter(expence => expence.id !== action.payload)
        }
      case 'ADD_EXPENCES':
        const expences = Array.isArray(action.payload) ? [...action.payload, ...state.expences] : [action.payload, ...state.expences]
        return {
          ...state,
          expences
        }
      case 'UPDATE_EXPENCES':
        const updatedExpence = action.payload
        const _expensesState = [...state.expences]
        const index = state.expences.findIndex(x => x.id === updatedExpence.id)
        if(index > -1){
          _expensesState[index] = updatedExpence
        }
        return {
          ...state,
          expences: _expensesState
        }
      default:
        return state;
    }
  }