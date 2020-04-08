// POST
async function postData(url = '', data = {}) {
    console.log("data", data);

    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
}

async function fetchData(accessToken, url = '') {

    // GET with token auth.
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });

    return await response.json();
}

export default {
    postData,
    fetchData
}