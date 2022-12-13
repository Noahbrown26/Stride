// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c94d298a97msh9c2fd2b188f4fdap1339cejsnefc4d3f61073',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
  
  // make a search to Excercise DB
  export const searchGoogleBooks = () => {
    return fetch('https://exercisedb.p.rapidapi.com/exercises', options);
  };
  