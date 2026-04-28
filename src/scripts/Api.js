class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "3619fd9d-808a-44b7-b3de-f2eba564a453",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;