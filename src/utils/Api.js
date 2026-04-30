class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getAppInfo() {
    //call getUserInfo in this array
    return Promise.all([this.getInitialCards()]);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        // Request help with this.
        // Works like this but issues with this._baseUrl being an obj
        // instead of string and this._headers not heing a valid token
        authorization: "b367069a-93ba-4a00-bbb7-86779ef2ac2c",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // other methods for working with the API
  //create another method, getUserInfo (different baseUrl)
  editUserInfo({ name, about }) {
    console.log(this._baseUrl);
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "b367069a-93ba-4a00-bbb7-86779ef2ac2c",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(`Error: ${res.status}`);
    });
  }
}

export default Api;
