// Usando Async Await

async function fetchList(url) {
  const response = await fetch(url);
  console.log(response);
}

fetchList('https://api.github.com/users/r-santtos');