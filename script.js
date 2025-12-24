// Properties Display

const items = [
  {
    photo: "/assets/images/property-imgs/Img1.png",
    title: "Division Road house",
    description: "506 Division Road Pembroke Pines, FL 33028",
    price: "$250000",
    bedrooms: 3,
    bathrooms: 2,
    area: "1200",
    garages: 3,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img2.png",
    title: "North Road house ",
    description: "19 North Road Piscataway, NJ 08854",
    price: "$222000",
    bedrooms: 2,
    bathrooms: 3,
    area: "1200",
    garages: 1,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img3.png",
    title: "Bloomfield house",
    description: "29 W. Pawnee St.Bloomfield, NJ 07003",
    price: "$250000",
    bedrooms: 4,
    bathrooms: 2,
    area: "850",
    garages: 2,
    badge: "For rent",
  },
  {
    photo: "/assets/images/property-imgs/Img2.png",
    title: "Rockville Ave villa",
    description: "8460 Rockville Ave. Greenville, NC 27834",
    price: "$180000",
    bedrooms: 5,
    bathrooms: 2,
    area: "320",
    garages: 2,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img4.png",
    title: "Scotch Plains villa",
    description: "820 Ohio Road Scotch Plains, NJ 07076",
    price: "$160000",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200",
    garages: 2,
    badge: "For rent",
  },
  {
    photo: "/assets/images/property-imgs/Img5.png",
    title: "Lees Creek house",
    description: "7916 Lees Creek St. Dayton, OH 45420",
    price: "$210000",
    bedrooms: 3,
    bathrooms: 1,
    area: "480",
    garages: 1,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img1.png",
    title: "Aver house",
    description: "1234 Ave. Piscataway, NJ 08854",
    price: "$180000",
    bedrooms: 3,
    bathrooms: 2,
    area: "1200",
    garages: 3,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img2.png",
    title: "North road house",
    description: "19 North road Piscataway, NJ 08854",
    price: "$220000",
    bedrooms: 2,
    bathrooms: 3,
    area: "1200",
    garages: 1,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img3.png",
    title: "Bloomfield house ",
    description: "29 W. Pawnee St. Piscataway, NJ 08854",
    price: "$250000",
    bedrooms: 4,
    bathrooms: 2,
    area: "850",
    garages: 2,
    badge: "For rent",
  },
  {
    photo: "/assets/images/property-imgs/Img2.png",
    title: "Rockville Ave villa",
    description: "8460 Rockville Ave. Piscataway, NJ 08854",
    price: "$180000",
    bedrooms: 5,
    bathrooms: 2,
    area: "320",
    garages: 2,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img4.png",
    title: "Scotch Plains villa",
    description: "820 Ohio road Piscataway, NJ 08854",
    price: "$160000",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200",
    garages: 2,
    badge: "For rent",
  },
  {
    photo: "/assets/images/property-imgs/Img5.png",
    title: "Lees Creek house",
    description: "7916 Lees Creek St. Piscataway, NJ 08854",
    price: "$210000",
    bedrooms: 3,
    bathrooms: 1,
    area: "480",
    garages: 1,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img1.png",
    title: "Northside Drive house",
    description: "104 Northside Drive Piscataway, NJ 08854",
    price: "$190000",
    bedrooms: 3,
    bathrooms: 2,
    area: "550",
    garages: 1,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img3.png",
    title: "Riverside Drive house",
    description: "1353 Riverside Drive Piscataway, NJ 08854",
    price: "$220000",
    bedrooms: 3,
    bathrooms: 3,
    area: "700",
    garages: 2,
    badge: "For rent",
  },
  {
    photo: "/assets/images/property-imgs/Img1.png",
    title: "Bloomfield Ave house",
    description: "29 W. Bloomfield Ave. Piscataway, NJ 08854",
    price: "$280000",
    bedrooms: 4,
    bathrooms: 2,
    area: "850",
    garages: 2,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img2.png",
    title: "Rock Creek Drive house",
    description: "8460 Rock Creek Drive Piscataway, NJ 08854",
    price: "$240000",
    bedrooms: 4,
    bathrooms: 3,
    area: "800",
    garages: 2,
    badge: "For rent",
  },
  {
    photo: "/assets/images/property-imgs/Img5.png",
    title: "Scotch Plains Ave house",
    description: "820 Scotch Plains Ave. Piscataway, NJ 08854",
    price: "$200000",
    bedrooms: 3,
    bathrooms: 2,
    area: "600",
    garages: 1,
    badge: "For sale",
  },
  {
    photo: "/assets/images/property-imgs/Img4.png",
    title: "New Durham Road house",
    description: "1234 New Durham road Piscataway, NJ 08854",
    price: "$260000",
    bedrooms: 4,
    bathrooms: 3,
    area: "1200",
    garages: 2,
    badge: "For sale",
  },
];

const gridContainers = document.querySelectorAll(".gridContainer");

gridContainers.forEach((gridContainer) => {
  let limit = gridContainer.getAttribute("data-limit");

  for (let i = 0; i < limit; i++) {
    let item = items[i];

    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.addEventListener("click", () => {
      window.location.href = "/property-details";
    });

    let html = `
          <div class="grid-item-image">
              <img src="${item.photo}" alt="${item.title}">
      `;

    if (item.badge) {
      const badgeText = item.badge || "";
      const badgeLower = badgeText.toLowerCase();
      const badgeClass = badgeLower.includes("rent")
        ? "badge-rent"
        : badgeLower.includes("sale")
        ? "badge-sale"
        : "badge-default";
      html += `<div class="grid-item-badge ${badgeClass}">${item.badge}</div>`;
    }

    html += `
          </div>
          <div class="grid-item-content">
              <div class="grid-item-title">${item.title}</div>
              <div class="grid-item-description">${item.description}</div>
      `;

    if (item.price) {
      html += `<div class="grid-item-price">${item.price}</div>`;
    }

    if (item.bedrooms) {
      html += `
              <div class="grid-item-details">
                  <div class="detail"><span class="icon">🏠</span> ${item.bedrooms} Bedrooms</div>
                  <div class="detail"><span class="icon">🚿</span> ${item.bathrooms} Bathrooms</div>
                  <div class="detail"><span class="icon">📐</span> ${item.area} m²</div>
                  <div class="detail"><span class="icon">🚗</span> ${item.garages} Garages</div>
              </div>
          `;
    }

    html += `
          </div>
      `;

    gridItem.innerHTML = html;
    gridContainer.appendChild(gridItem);
  }
});
