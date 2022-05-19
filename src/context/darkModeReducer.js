const DarkModeReducer = (state, action) => {
    switch(action.type){
        case "LIGHT":{
            return{
                darkMode:false
            }
        }
        case "PURPLE":{
            return{
                darkMode:false
            }
        }
        case "DARK":{
            return{
                darkMode:true
            }
        }
    }
}