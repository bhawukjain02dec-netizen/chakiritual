// Array of anime characters
const characters = [
  {
    name: "Naruto Uzumaki",
    anime: "Naruto",
    description: "A ninja who dreams of becoming Hokage.",
    image: "images/naruto.jpg"
  },
  {
    name: "Sasuke Uchiha",
    anime: "Naruto",
    description: "Naruto's rival, driven by vengeance and redemption.",
    image: "images/sasuke.jpg"
  },
  {
    name: "Monkey D. Luffy",
    anime: "One Piece",
    description: "Captain of the Straw Hat Pirates, searching for One Piece.",
    image: "images/onepiece.jpg"
  },
  {
    name: "Roronoa Zoro",
    anime: "One Piece",
    description: "Master swordsman and loyal member of the Straw Hats.",
    image: "images/zoro.jpg"
  },
  {
    name: "Ichigo Kurosaki",
    anime: "Bleach",
    description: "A substitute Shinigami who protects both worlds.",
    image: "images/bleach.jpg"
  },
  {
    name: "Rukia Kuchiki",
    anime: "Bleach",
    description: "Shinigami who gave Ichigo his powers.",
    image: "images/rukia.jpg"
  },
  {
    name: "Tanjiro Kamado",
    anime: "Demon Slayer",
    description: "A kind boy who fights demons to save his sister.",
    image: "images/demon-slayer.jpg"
  },
  {
    name: "Nezuko Kamado",
    anime: "Demon Slayer",
    description: "Tanjiro's sister, turned into a demon but still caring.",
    image: "images/nezuko.jpg"
  },
  {
    name: "Eren Yeager",
    anime: "Attack on Titan",
    description: "Determined to free humanity from Titans.",
    image: "images/eren.jpg"
  },
  {
    name: "Mikasa Ackerman",
    anime: "Attack on Titan",
    description: "Eren's protector and one of humanity's strongest soldiers.",
    image: "images/mikasa.jpg"
  },
  {
    name: "Izuku Midoriya",
    anime: "My Hero Academia",
    description: "Aspiring hero who inherited One For All.",
    image: "images/deku.jpg"
  },
  {
    name: "Shoto Todoroki",
    anime: "My Hero Academia",
    description: "Hero student with fire and ice powers.",
    image: "images/todoroki.jpg"
  }
];

// Generate HTML automatically
const list = document.getElementById("characterList");
function displayCharacters(data) {
  list.innerHTML = "";
  data.forEach(char => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p><strong>${char.anime}</strong></p>
      <p>${char.description}</p>
    `;
    list.appendChild(card);
  });
}
displayCharacters(characters);

// Search functionality
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function() {
  const query = searchBar.value.toLowerCase();
  const filtered = characters.filter(char =>
    char.name.toLowerCase().includes(query) ||
    char.anime.toLowerCase().includes(query)
  );
  displayCharacters(filtered);
});