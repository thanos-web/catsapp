const dbName = "thanos-web"

class Api {
  constructor(apiName) {
    this.url = `https://cats.petiteweb.dev/api/single/${apiName}`
  }

  getAllCats() {
    return fetch(`${this.url}/show`)
  }
  
  getCatById(id){
    return fetch(`${this.url}/show/${id}`)
  }

  addNewCat(data){
    return fetch(`${this.url}/add`,{
     method: "POST", 
     headers: {
      "Content-type": "application/json"
     },
     body: JSON.stringify(data)
    })
  }

  deleteCatById(id) {
    return fetch(`${this.url}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
       }
      })
}

updateCatById(id, data) {
  return fetch(`${this.url}/update/${id}`, {
    method: "PUT",
    headers:  {
      "Content-type": "application/json"
     },
    body: JSON.stringify(data),
  })
}
}

const api = new Api(dbName);