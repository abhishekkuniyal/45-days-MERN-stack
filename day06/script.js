const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function randomquote() {
  try {
    
    const response = await fetch('https://thequoteshub.com/api/random');
    const data = await response.json();

    quote.innerText = data.text;;
    author.innerText = `— ${data.author}`;
  } catch (error) {
    console.error('Fetch failed:', error);
    quote.innerText = 'error aya hai.';
    author.innerText = `error hai`;
  }
}

btn.addEventListener('click', async () => {
  quote.innerText = 'Loading...';
  author.innerText = '';
  await randomquote();
});