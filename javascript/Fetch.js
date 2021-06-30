// Fetch

// Solicitação da API a função Fetch retorna uma promise
fetch('https://api.github.com/users/r-santtos')
.then((response) => {
  return response.json();
})
.then(jsonBody => {
  console.log(jsonBody);
});

// Resumindo
fetch('https://api.github.com/users/r-santtos')
.then((response) => { response.json() })
.then(jsonBody => { console.log(jsonBody)
});

// Criar registros
const data = {
  id: 156165
}

fetch('https://api.github.com/users/r-santtos', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
