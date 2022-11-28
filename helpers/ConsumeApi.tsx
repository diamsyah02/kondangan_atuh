export const auth = async (url: string, body: any) => {
  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(body)
  })
  return res.json()
}

export const getData = async (url: string) => {
  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'GET',
  })
  return res.json()
}

export const postData = async (url: string, body: any) => {
  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(body)
  })
  return res.json()
}

export const deleteData = async (url: string) => {
  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'DELETE',
  })
  return res.json()
}