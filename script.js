const url = "https://jsonplaceholder.typicode.com/posts/1";

const url = "https://jsonplaceholder.typicode.com/posts/1";

const output = document.getElementById("output");
const btn = document.getElementById("btn");

async function fetchData(callback) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    callback(data);
  } catch (err) {
    console.error(err);
    output.textContent = err.message;
  }
}

function showTitle(data) {
  output.textContent = data.title;
}

btn.addEventListener("click", () => fetchData(showTitle));