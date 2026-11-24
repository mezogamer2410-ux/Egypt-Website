const versionToggle = document.getElementById("content-version-toggle");
const title = document.querySelector(".titleh1");
const content = document.querySelector(".tourism-interface");
const homeLink = document.querySelector('a[href="../index.html"]');

// Add destinations with { name, location, category }; add image only when ready.
const contentVersions = {
  english: {
    pageTitle: "Tourism | Masr Digital Heritage",
    title: "Tourism",
    home: "Back to Home",
    eyebrow: "Explore Egypt",
    filters: ["All", "History", "City", "Nature", "Adventure"],
    destinations: [
      {
        name: "Giza Pyramids",
        location: "Giza",
        category: "History",
        image: "../thedigitalartist-pyramids-2371501.jpg",
      },
      { name: "The Sphinx", location: "Giza", category: "History", image: "../sphinx.jpg" },
      { name: "Luxor and Karnak", location: "Luxor", category: "History", image: "../luxor.jpg" },
      { name: "Abu Simbel", location: "Aswan", category: "History", image: "../abusimbel.jpg" },
      { name: "The Red Sea", location: "Eastern Egypt", category: "Nature", image: "../redsea.jpg" },
      { name: "Nile Cruises", location: "The Nile", category: "Adventure", image: "../Nile cruise.jpg" },
      { name: "Siwa Oasis", location: "Western Desert", category: "Nature", image: "../siwa.jpg" },
      { name: "The White Desert", location: "Farafra", category: "Adventure", image: "../whitedesert.jpg" },
    ],
  },
  arabic: {
    pageTitle: "السياحة | تراث مصر الرقمي",
    title: "السياحة",
    home: "العودة إلى الرئيسية",
    eyebrow: "اكتشف مصر",
    filters: ["الكل", "تاريخ", "مدينة", "طبيعة", "مغامرة"],
    destinations: [
      {
        name: "أهرامات الجيزة",
        location: "الجيزة",
        category: "تاريخ",
        image: "../thedigitalartist-pyramids-2371501.jpg",
      },
      { name: "أبو الهول", location: "الجيزة", category: "تاريخ", image: "../sphinx.jpg" },
      { name: "الأقصر والكرنك", location: "الأقصر", category: "تاريخ", image: "../luxor.jpg" },
      { name: "أبو سمبل", location: "أسوان", category: "تاريخ", image: "../abusimbel.jpg" },
      { name: "البحر الأحمر", location: "شرق مصر", category: "طبيعة", image: "../redsea.jpg" },
      { name: "رحلات نيلية", location: "نهر النيل", category: "مغامرة", image: "../Nile cruise.jpg" },
      { name: "واحة سيوة", location: "الصحراء الغربية", category: "طبيعة", image: "../siwa.jpg" },
      { name: "الصحراء البيضاء", location: "الفرافرة", category: "مغامرة", image: "../whitedesert.jpg" },
    ],
  },
};

function renderTourismInterface(version) {
  const data = contentVersions[version];
  const allLabel = data.filters[0];

  const eyebrow = document.createElement("p");
  eyebrow.className = "tourism-eyebrow";
  eyebrow.textContent = data.eyebrow;

  const filters = document.createElement("div");
  filters.className = "tourism-filters";

  const grid = document.createElement("div");
  grid.className = "tourism-grid";

  function renderCards(selectedCategory) {
    grid.replaceChildren(
      ...data.destinations
        .filter(({ category }) => selectedCategory === allLabel || category === selectedCategory)
        .map((destination) => {
          const card = document.createElement("article");
          card.className = "tourism-card";

          if (destination.image) {
            const image = document.createElement("img");
            image.src = destination.image;
            image.alt = destination.name;
            card.append(image);
          } else {
            card.classList.add("tourism-card--text-only");
          }

          const overlay = document.createElement("div");
          overlay.className = "tourism-card-content";
          const category = document.createElement("span");
          category.className = "tourism-category";
          category.textContent = destination.category;
          const name = document.createElement("h2");
          name.textContent = destination.name;
          const location = document.createElement("p");
          location.textContent = destination.location;
          overlay.append(category, name, location);
          card.append(overlay);
          return card;
        }),
    );
  }

  for (const filter of data.filters) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tourism-filter";
    button.textContent = filter;
    if (filter === allLabel) button.classList.add("active");
    button.addEventListener("click", () => {
      filters.querySelectorAll(".tourism-filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderCards(filter);
    });
    filters.append(button);
  }

  content.replaceChildren(...(data.eyebrow ? [eyebrow] : []), filters, grid);
  renderCards(allLabel);
}

function showTourismContent(version) {
  const contentVersion = contentVersions[version];
  if (!contentVersion) {
    throw new Error(`Unknown Tourism content version: ${version}`);
  }

  document.documentElement.lang = version === "arabic" ? "ar" : "en";
  document.documentElement.dir = version === "arabic" ? "rtl" : "ltr";
  document.title = contentVersion.pageTitle;
  title.textContent = contentVersion.title;
  homeLink.textContent = contentVersion.home;
  versionToggle.textContent = version === "arabic" ? "English" : "العربية";
  versionToggle.setAttribute(
    "aria-label",
    version === "arabic" ? "Switch to English" : "Switch to Arabic",
  );
  renderTourismInterface(version);
}

document.addEventListener("site-language-change", ({ detail }) => {
  showTourismContent(detail.language);
});
showTourismContent(document.documentElement.lang === "ar" ? "arabic" : "english");
