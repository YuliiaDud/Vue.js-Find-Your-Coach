export default {
    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU06FXU9llfSdX8SiI3M9b-9yLNwZgvu8', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            let message;
            for (const key in responseData) {
                message = responseData[key].message
            }
            const error = new Error(message || 'Failed to authenticate.');
            throw error;
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU06FXU9llfSdX8SiI3M9b-9yLNwZgvu8', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            let message;
            for (const key in responseData) {
                message = responseData[key].message
            }
            const error = new Error(message || 'Failed to authenticate.');
            throw error;
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    logout(context){
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null,
        })
    }
};