import config from '../../config/main.config'

export function fetchWelcomeText() {
    return {
        type: "FETCH_WELCOME_TEXT"
    }
}

export function setWelcomeText(welcomeText) {
    return {
        type: "FETCH_WELCOME_TEXT_FULFILLED",
        payload: {
            welcomeText: welcomeText
        }
    }
}

export function welcomeTextRejected(error) {
    return {
        type: "FETCH_WELCOME_TEXT_REJECTED",
        payload: error
    }
}



export function fetchText() {
    return (dispatch) => {
        dispatch(fetchWelcomeText());
        return fetch(config.BASE_URL + 'posts/1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        dispatch(setWelcomeText(json.title));
                    });

                } else {
                    response.json().then(json => {
                        dispatch(welcomeTextRejected('Error on fetching'));
                        throw error;
                    });

                }
            })
            .catch(
                error => {
                    error.json().then(json => {
                        dispatch(welcomeTextRejected('Error on fetching'));
                        throw error;
                    });
                }
            );
    };
}