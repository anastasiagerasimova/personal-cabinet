const initialState = {
    loading: true,
    error: null,
    appointments: []
}

const removeFromList = (appointments, id) => {
    const index = appointments.findIndex(appointment => appointment.id === id)
    return [...appointments.slice(0, index), ...appointments.slice(index + 1)]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_APPOINTMENTS_REQUEST':
            return {
                ...state,
                appointments: [],
                loading: true,
                error: null
            }
        case 'FETCH_APPOINTMENTS_FAILURL':
            return {
                ...state,
                appointments: [],
                loading: false,
                error: action.payload
            }
        case 'FETCH_APPOINTMENTS_SUCCESS': 
            return{
                ...state,
                appointments: action.payload,
                loading: false,
                error: null
        }
        case 'DELETE_APPOINTMENT': 
            return{
                ...state,
                appointments: removeFromList(state.appointments, action.payload),
            }
        default: 
            return state
    }

}

export default reducer