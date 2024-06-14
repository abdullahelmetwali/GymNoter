export const fetchData = async (url,options) => {
    const response = await fetch(url, options);
    const data = await response.json();
        return data
}

export const exOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '30aa3b5376msh97edc94a789cf73p19c72djsnf3ec3e65c079',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
}