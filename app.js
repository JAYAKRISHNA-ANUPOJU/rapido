// Clear body
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#fff8e1";

// Header
const header = document.createElement("header");
header.style.background = "#ffd54f";
header.style.padding = "10px 20px";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

// Logo
const logo = document.createElement("h1");
logo.textContent = "🚲 Rapido";
logo.style.margin = "0";
header.appendChild(logo);

// Nav
const nav = document.createElement("nav");
["Home","Features","How it works","Pricing","Download","Contact"].forEach(txt=>{
  let a = document.createElement("a");
  a.textContent = txt;
  a.href = "#"+txt.toLowerCase().replace(/\\s/g,'');
  a.style.margin = "0 8px";
  a.style.textDecoration = "none";
  a.style.color = "#333";
  nav.appendChild(a);
});
header.appendChild(nav);
document.body.appendChild(header);

// Section Example
function createSection(title, text) {
  const section = document.createElement("section");
  section.style.padding = "20px";
  section.style.margin = "20px";
  section.style.background = "#fff";
  section.style.borderRadius = "10px";
  section.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";

  const h2 = document.createElement("h2");
  h2.textContent = title;
  h2.style.color = "#d17d00";
  section.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = text;
  section.appendChild(p);

  document.body.appendChild(section);
}

createSection("Welcome to Rapido", "Book fast, affordable rides with just a few taps!");
createSection("Why Choose Us?", "Quick pickups, verified captains, and great pricing.");

// Footer
const footer = document.createElement("footer");
footer.style.textAlign = "center";
footer.style.padding = "15px";
footer.style.background = "#ffe082";
footer.textContent = "© 2025 Rapido Demo — JS Only Version";
document.body.appendChild(footer);
