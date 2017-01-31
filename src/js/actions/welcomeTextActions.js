export function fetchWelcomeText() {
  return {
    type: "FETCH_WELCOME_TEXT_FULFILLED",
    payload: {
      welcomeText: "Hello World!"
    }
  }
}