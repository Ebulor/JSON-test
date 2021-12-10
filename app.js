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

//appending

function createCard(data) {
  for (let i = 0; i < data.length; i++) {
    const mainContainer = document.getElementById("filter");
    //create elements
    const profile = document.createElement("div");
    const content = document.createElement("div");
    const tags = document.createElement("div");
    const logo = document.createElement("img");
    const textContent = document.createElement("div");
    const textTop = document.createElement("div");
    const company = document.createElement("p");
    const textCenter = document.createElement("div");
    const position = document.createElement("h3");
    const textBottom = document.createElement("div");
    const postedAt = document.createElement("p");
    const contract = document.createElement("p");
    const location = document.createElement("p");
    const role = document.createElement("button");
    const level = document.createElement("button");

    //set
    logo.src = data[i].logo;
    company.innerHTML = data[i].company;
    position.innerHTML = data[i].position;
    postedAt.innerHTML = data[i].postedAt;
    contract.innerHTML = data[i].contract;
    location.innerHTML = data[i].location;
    role.innerHTML = data[i].role;
    level.innerHTML = data[i].level;

    //append
    mainContainer.appendChild(profile);
    profile.appendChild(content);
    profile.appendChild(tags);
    content.appendChild(logo);
    content.appendChild(textContent);
    textContent.appendChild(textTop);
    textTop.appendChild(company);
    textContent.appendChild(textCenter);
    textCenter.appendChild(position);
    textContent.appendChild(textBottom);
    textBottom.appendChild(postedAt);
    textBottom.appendChild(contract);
    textBottom.appendChild(location);
    tags.appendChild(role);
    tags.appendChild(level);

    //new and featured
    if (data[i].new === "true") {
      const newBtn = document.createElement("button");
      newBtn.innerText = "new!";
      textTop.appendChild(newBtn);
      console.log(newBtn);
    }

    //creating languages
    for (let j = 0; j < data[i].languages.length; j++) {
      const langTag = document.createElement("button");
      langTag.innerText = data[i].languages[j];
      tags.appendChild(langTag);
    }

    //creating tools
    for (let k = 0; k < data[i].tools.length; k++) {
      const toolsTag = document.createElement("button");
      toolsTag.innerText = data[i].tools[k];
      tags.appendChild(toolsTag);
    }

    //adding classes
    mainContainer.classList.add("container");
    profile.classList.add("profile");
    content.classList.add("content");
    logo.classList.add("logo");
  }
}
