const baseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/130680917';

export const getUrl = (path) => {
  return baseUrl + path;
}

export const get = (url) => {
  return cachedFetch(url)
    .then(res => res.json())
}

export const request = (method, url, body = {}) => {
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
  return request('POST', url, body)
}

export const put = (url, body) => {
  return request('PUT', url, body)
}

export const destroy = (url, body) => {
  return request('DELETE', url)
}

const cachedFetch = (url) => {
  let cacheKey = url
  let cached = sessionStorage.getItem(cacheKey)
  if (cached !== null) {
    let response = new Response(new Blob([cached]))
    return Promise.resolve(response)
  }
  return fetch(url).then(response => {
    if (response.status === 200) {
      let ct = response.headers.get('Content-Type')
      if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
        response.clone().text().then(content => {
          sessionStorage.setItem(cacheKey, content)
        })
      }
    }
    return response
  })
}