  const baseUrl = 'http://localhost:3131';

  export const getUrl = (path) => {
    return baseUrl + path;
  }

  export const get = (url) => {
    return fetch(url)
      .then(res => res.json())
  }

  export const request = (url, body, method) => {
    return fetch(url, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  export const post = (url, body) => {
    return request(url, body, 'POST')
  }

  export const put = (url, body) => {
    return request(url, body, 'PUT')
  }
