let staticPageEl = document.getElementById("staticPage");
let responsivePageEl = document.getElementById("responsivePage");
let dynamicPageEl = document.getElementById("dynamicPage");
let toggleMenuEl = document.getElementById("toggleMenu");

const projectsList = [
  {
    url: "https://musicpagedns.ccbp.tech/",
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
    title: "Music Page",
    description:
      "The music page enables the users to browse through the images of all-time favorite music albums.",
  },
  {
    url: "",
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    title: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
  },
  {
    url: "https://technologiesdns.ccbp.tech/",
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
    title: "Advanced Technologies",
    description:
      "A website that gives you a basic understanding of Advanced Technologies.",
  },
  {
    url: "",
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
    title: "VR Website",
    description:
      "VR Website enables users to explore AR and VR Products and Industry happenings.",
  },
  {
    url: "https://dhaneshfood.ccbp.tech/",
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    title: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
  },
  {
    url: "",
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",
    title: "Portfolio",
    description:
      "A portfolio is the best alternative for a resume to showcase your skills to the digital world.",
  },

  {
    url: "https://testtypeskill.ccbp.tech/",
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
    title: "Speed Typing Test",
    description:
      "Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.",
  },
  {
    url: "https://randomjokednd.ccbp.tech/",
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
    title: "Random Joke Page",
    description:
      "Random Joke Page is an API-based dynamic Web Application that generates a new joke.",
  },
  {
    url: "https://imagesizingdns.ccbp.tech/",
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
    title: "Sizing An Image",
    description:
      "This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.",
  },
];

createAppendStaticElements = (each) => {
  //Container list
  let listEl = document.createElement("li");
  listEl.classList.add("list-con");
  staticPageEl.appendChild(listEl);

  //Create Image
  let imgEl = document.createElement("img");
  imgEl.src = each.imageURL;
  imgEl.alt = each.title;
  imgEl.classList.add("list-img");
  listEl.appendChild(imgEl);

  //Create Inner About Container
  let aboutDiv = document.createElement("div");
  aboutDiv.classList.add("description-about-project");
  listEl.appendChild(aboutDiv);

  let headEl = document.createElement("h2");
  headEl.textContent = each.title;
  headEl.classList.add("head");
  aboutDiv.appendChild(headEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.textContent = each.description;
  descriptionEl.classList.add("para");
  aboutDiv.appendChild(descriptionEl);

  let anchorEl = document.createElement("a");
  anchorEl.href = each.url;
  anchorEl.classList.add("anch");
  anchorEl.textContent = "Read More...";
  anchorEl.target = "_blank";
  aboutDiv.appendChild(anchorEl);
};

createAppendResponsiveElements = (each) => {
  //Container list
  let listEl = document.createElement("li");
  listEl.classList.add("list-con");
  responsivePageEl.appendChild(listEl);

  //Create Image
  let imgEl = document.createElement("img");
  imgEl.src = each.imageURL;
  imgEl.alt = each.title;
  imgEl.classList.add("list-img");
  listEl.appendChild(imgEl);

  //Create Inner About Container
  let aboutDiv = document.createElement("div");
  aboutDiv.classList.add("description-about-project");
  listEl.appendChild(aboutDiv);

  let headEl = document.createElement("h2");
  headEl.textContent = each.title;
  headEl.classList.add("head");
  aboutDiv.appendChild(headEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.textContent = each.description;
  descriptionEl.classList.add("para");
  aboutDiv.appendChild(descriptionEl);

  let anchorEl = document.createElement("a");
  anchorEl.href = each.url;
  anchorEl.classList.add("anch");
  anchorEl.textContent = "Read More...";
  anchorEl.target = "_blank";
  aboutDiv.appendChild(anchorEl);
};

createAppendDynamicElements = (each) => {
  let listEl = document.createElement("li");
  listEl.classList.add("list-con");
  dynamicPageEl.appendChild(listEl);

  //Create Image
  let imgEl = document.createElement("img");
  imgEl.src = each.imageURL;
  imgEl.alt = each.title;
  imgEl.classList.add("list-img");
  listEl.appendChild(imgEl);

  //Create Inner About Container
  let aboutDiv = document.createElement("div");
  aboutDiv.classList.add("description-about-project");
  listEl.appendChild(aboutDiv);

  let headEl = document.createElement("h2");
  headEl.textContent = each.title;
  headEl.classList.add("head");
  aboutDiv.appendChild(headEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.textContent = each.description;
  descriptionEl.classList.add("para");
  aboutDiv.appendChild(descriptionEl);

  let anchorEl = document.createElement("a");
  anchorEl.href = each.url;
  anchorEl.classList.add("anch");
  anchorEl.textContent = "Read More...";
  anchorEl.target = "_blank";
  aboutDiv.appendChild(anchorEl);
};

for (let each of projectsList) {
  switch (each.category) {
    case "RESPONSIVE":
      createAppendResponsiveElements(each);
      break;
    case "DYNAMIC":
      createAppendDynamicElements(each);
      break;
    case "STATIC":
      createAppendStaticElements(each);
      break;
  }
}
toggleMenuEl.addEventListener("click", () => {
  toggleMenuEl.querySelector("i").classList.toggle("fa-bars");
  toggleMenuEl.querySelector("i").classList.toggle("fa-times");
  const menuBar = document.querySelector(".mobile-menu");
  menuBar.classList.toggle("active");
});
