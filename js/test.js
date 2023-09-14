

//fetch(urlString,data);

const apiKey = "";

const resource = "cars";

const requestUrl = `/api/${apiKey}/${resource}`;

const body = {

  //name: "test",
  //color: "green"


}



const data = {

  //  method: GET,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },


  body: JSON.stringify(body)

}


fetch(requestUrl, data).then(d => {

  d.json().then(data => {



  })

}).catch(err => console.log(err));