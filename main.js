import './style.css';

const app = document.querySelector("#app");

const getData = async () => {
  try {
    const response = await fetch("https://cataas.com/cat?json=true");
    console.log(response);

    if (response.status === 404) {
      console.log("Hoppla! Ein Fehler ist aufgetreten", response.statusText);
      return; // Exit the function early
    }

    const data = await response.json();
    console.log(data);

    const baseurl = "https://cataas.com";
    const url = data.url;

    app.innerHTML = `
      <div>
        <h1>Hallo Katze</h1>
        <img src="${baseurl}${url}" />
      </div>
    `;
  } catch (error) {
    console.log(error);
  }
};

getData(); 




