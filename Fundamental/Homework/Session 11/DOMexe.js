async function getquotesData () {
    const response = await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')
    const data = await response.json()
    return data

  }

  async function handleSubmit() {
    const container = document.getElementById('container').value;
    
    const data = await getquotesData();
    let random = Math.floor((Math.random() * 10) * data.length);
    container.innerHTML += `<p>quoteText: ${random.data.quoteText}</p>`
                         `<p>quoteAuthor: ${data.quoteAuthor}</p>`
}
  
  function main() {
    const button = document.getElementById('submit')
    button.addEventListener('click', handleSubmit)
  }
  
  main(); 