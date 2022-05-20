const PurpleModeReducer = (state, action) =>{
    switch(action.type){
        case "LIGHT":{
            return{
                purpleMode:false
            }
        }
        case "DARK":{
            return{
                darkMode:false
            }
        }
        case "PURPLE":{
            return{
                purpleMode:true
            }
        }
        case "TOGGLE":{
            return{
                purpleMode: !state.purpleMode,
            }
        }
        default:
            return state;
    }
}

export default PurpleModeReducer;