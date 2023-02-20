
const APIKEY="85a0070c80ef4504a47193d7f0e8cd8f"

const api={
    fetchbitcoin:`q=bitcoin&apiKey=${APIKEY}`,
    fetchtesla:`q=tesla&from=2023-01-14&sortBy=publishedAt&apiKey=${APIKEY}`,
    fetchapple:`q=apple&from=2023-02-13&to=2023-02-13&sortBy=popularity&apiKey=${APIKEY}`,
    fetchbitcoin:`domains=techcrunch.com,thenextweb.com&apiKey=${APIKEY}`,
    fetchwallstreet:`domains=wsj.com&apiKey=${APIKEY}`,
    fetchusa:`country=us&apiKey=${APIKEY}`
}

export default api