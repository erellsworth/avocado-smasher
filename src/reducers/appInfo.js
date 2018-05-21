function appInfo(state = {start_year:'1940', end_year: '2018'}, action){

	var method = {
		set_year: function(){
			console.log('set_year', action);

			var newState = {};
			newState[action.key] = action.year;

			return Object.assign(state, newState);	
		}
	}

	if(method.hasOwnProperty(action.type)){
		return method[action.type]();
	}

	return state;
}

export default appInfo;