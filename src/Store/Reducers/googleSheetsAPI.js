const initial_state = {
  apiReady: false,
}

const googleSheetsAPI = (state=initial_state, action) => {
  switch (action.type) {
    case 'SHEETS_API_READY':
      return {
        ...state,
        apiReady: true
      }

    default:
      return state
  }
}

export default googleSheetsAPI