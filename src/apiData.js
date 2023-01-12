const api = {
  key: "8e01601781c2308a4b673cdc9626c7fd",
  base: "https://api.openweathermap.org/data/2.5/",
}

export function searchPressed(query) {
  return fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  .then(res => res.json());
}
