fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    createCard(data);
  })
  .catch(function (err) {
    console.log(err);
  });

//create element

const mainContainer = document.getElementById("filter");

//appending

function createCard(data) {
  for (var i = 0; i < data.length; i++) {
    //create elements
    const profile = document.createElement("div");
    const content = document.createElement("div");
    const logo = document.createElement("img");
    const textContent = document.createElement("div");
    const texTop = document.createElement("div");
    const company = document.createElement("p");
    const textCenter = document.createElement("div");
    const position = document.createElement("h3");
    const textBottom = document.createElement("div");
    const postedAt = document.createElement("p");
    const contract = document.createElement("p");
    const location = document.createElement("p");

    //set
    logo.src = data[i].logo;
    company.innerHTML = data[i].company;
    position.innerHTML = data[i].position;
    postedAt.innerHTML = data[i].postedAt;
    contract.innerHTML = data[i].contract;
    location.innerHTML = data[i].location;

    //append
    mainContainer.appendChild(profile);
    profile.appendChild(content);
    content.appendChild(logo);
    content.appendChild(textContent);
    textContent.appendChild(texTop);
    texTop.appendChild(company);
    textContent.appendChild(textCenter);
    textCenter.appendChild(position);
    textContent.appendChild(textBottom);
    textBottom.appendChild(postedAt);
    textBottom.appendChild(contract);
    textBottom.appendChild(location);

    //new and featured
    if (data[i].new === "true") {
      const newBtn = document.createElement("button");
      newBtn.innerHtml = "new!";
      texTop.appendChild(newBtn);
    }

    //adding classes
    mainContainer.classList.add("container");
    profile.classList.add("profile");
    content.classList.add("content");
    logo.classList.add("logo");
  }
}
