const siteData = {
  quickFacts: [
    {
      icon: "🍽️",
      title: "Fresh meals",
      text: "Prepared through MeMe's Twisted Potato and More LLC."
    },
    {
      icon: "🚗",
      title: "Direct outreach",
      text: "Meals are personally delivered throughout the community."
    },
    {
      icon: "🤝",
      title: "Local partnerships",
      text: "Working alongside organizations that care about our neighbors."
    }
  ],

  programs: [
    {
      title: "Meal preparation",
      text: "Fresh meals are prepared through MeMe's Twisted Potato and More LLC with care and quality."
    },
    {
      title: "Meal packaging",
      text: "Meals are safely packaged and organized for efficient transportation and distribution."
    },
    {
      title: "Mobile distribution",
      text: "Meals are taken directly into Little Rock and North Little Rock through respectful outreach."
    },
    {
      title: "Community partnerships",
      text: "We collaborate with local organizations to respond to community needs and extend our reach."
    }
  ],

  founders: [
    {
      initials: "MC",
      role: "Founder & Chef MeMe",
      name: "Meredith Coleman",
      paragraphs: [
        "Meredith Coleman, known as Chef MeMe, has a passion for preparing fresh, satisfying meals and using food to care for others.",
        "Through MeMe's Twisted Potato and More LLC, she helps prepare the meals that power Let's BEET the Hunger's outreach. Her dedication to feeding people with compassion and dignity is at the heart of the mission."
      ]
    },
    {
      initials: "CH",
      role: "Founder",
      name: "Chris Harding",
      paragraphs: [
        "Chris Harding is a disabled United States Marine Corps veteran and co-founder of Let's BEET the Hunger.",
        "Inspired by a desire to give back and strengthen the community, he helps lead direct outreach and personally helps deliver meals throughout Little Rock and North Little Rock."
      ]
    }
  ],

  partnerships: [
    {
      kicker: "Community cooking collaboration",
      name: "Be Mighty Little Rock",
      paragraphs: [
        "Let's BEET the Hunger partnered with Be Mighty Little Rock for a cooking segment that highlighted food, community, and practical ways to help neighbors facing hunger."
      ],
      linkText: "View Instagram collaboration",
      link: "#",
      note: "Replace this temporary link with the Instagram Reel URL.",
      mediaType: "placeholder",
      mediaTitle: "Instagram Reel",
      mediaText: "Paste your existing Instagram embed code here."
    },
    {
      kicker: "Emergency shelter meal support",
      name: "The Van",
      paragraphs: [
        "During emergency shelter operations, MeMe's Twisted Potato and More LLC prepared vegan soup to support The Van's work serving people experiencing homelessness.",
        "This collaboration reflects the direct, compassionate response that Let's BEET the Hunger was created to provide."
      ],
      linkText: "View The Van's post",
      link: "#",
      note: "Replace this temporary link with the Facebook post URL.",
      mediaType: "image",
      image: "images/the-van-partnership.jpeg",
      alt: "Let's BEET the Hunger and The Van community partnership"
    }
  ],

  locations: [
    {
      icon: "📍",
      title: "Little Rock",
      text: "Direct meal outreach and community partnerships"
    },
    {
      icon: "📍",
      title: "North Little Rock",
      text: "Direct meal outreach and community partnerships"
    }
  ],

  volunteerOptions: [
    "Meal preparation",
    "Food packaging",
    "Meal distribution",
    "Supply collection",
    "Fundraising and event support",
    "Photography and social media",
    "General volunteering"
  ],

  supportItems: [
    {
      icon: "🥕",
      title: "Ingredients",
      text: "Fresh food used to prepare complete meals."
    },
    {
      icon: "🥡",
      title: "Packaging",
      text: "Containers, utensils, napkins, and serving supplies."
    },
    {
      icon: "⛽",
      title: "Transportation",
      text: "Fuel and outreach costs for direct meal distribution."
    }
  ]
};

function html(strings, ...values) {
  return strings.reduce(
    (result, string, index) => result + string + (values[index] ?? ""),
    ""
  );
}

function renderList(selector, items, template) {
  const container = document.querySelector(selector);

  if (!container) {
    return;
  }

  container.innerHTML = items.map(template).join("");
}

renderList("#quick-facts", siteData.quickFacts, (item) => html`
  <article class="quick-fact">
    <span class="quick-fact__icon" aria-hidden="true">${item.icon}</span>
    <div>
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    </div>
  </article>
`);

renderList("#program-list", siteData.programs, (item, index) => html`
  <article class="feature-card reveal">
    <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`);

renderList("#founder-list", siteData.founders, (founder) => html`
  <article class="founder-card reveal">
    <div class="founder-card__initials" aria-hidden="true">${founder.initials}</div>
    <div>
      <p class="founder-card__role">${founder.role}</p>
      <h3>${founder.name}</h3>
      ${founder.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
  </article>
`);

renderList("#partnership-list", siteData.partnerships, (partner) => {
  const media = partner.mediaType === "image"
    ? `<div class="partnership-card__media"><img src="${partner.image}" alt="${partner.alt}"></div>`
    : html`
        <div class="partnership-card__media">
          <div class="partnership-card__placeholder">
            <strong>${partner.mediaTitle}</strong>
            <span>${partner.mediaText}</span>
          </div>
        </div>
      `;

  return html`
    <article class="partnership-card reveal">
      <div class="partnership-card__content">
        <p class="partner-kicker">${partner.kicker}</p>
        <h3>${partner.name}</h3>
        ${partner.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <a class="button button--secondary" href="${partner.link}" target="_blank" rel="noopener noreferrer">
          ${partner.linkText}
        </a>
        <p class="small-note">${partner.note}</p>
      </div>
      ${media}
    </article>
  `;
});

renderList("#location-list", siteData.locations, (location) => html`
  <div class="location-item">
    <span aria-hidden="true">${location.icon}</span>
    <p><strong>${location.title}</strong><br>${location.text}</p>
  </div>
`);

renderList("#volunteer-options", siteData.volunteerOptions, (option) => `<li>${option}</li>`);

renderList("#volunteer-checkboxes", siteData.volunteerOptions, (option) => html`
  <label>
    <input type="checkbox" name="interests" value="${option}">
    ${option}
  </label>
`);

renderList("#support-list", siteData.supportItems, (item) => html`
  <article class="support-item">
    <span aria-hidden="true">${item.icon}</span>
    <div>
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </div>
  </article>
`);

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function setMenu(open) {
  if (!menuButton || !menu) {
    return;
  }

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    setMenu(false);
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

function validateForm(form) {
  const requiredFields = [...form.querySelectorAll("[required]")];

  requiredFields.forEach((field) => {
    field.setAttribute("aria-invalid", String(!field.checkValidity()));
  });

  return requiredFields.every((field) => field.checkValidity());
}

function setFormStatus(form, message, type) {
  const status = form.querySelector(".form-status");
  status.textContent = message;
  status.className = `form-status ${type}`;
}

document.querySelectorAll(".form-card").forEach((form) => {
  form.addEventListener("input", (event) => {
    const field = event.target;

    if (field.matches("input, select, textarea")) {
      field.setAttribute("aria-invalid", String(!field.checkValidity()));
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm(form)) {
      setFormStatus(form, "Please complete all required fields.", "error");
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    if (
      form.id === "volunteer-form" &&
      !form.querySelector('input[name="interests"]:checked')
    ) {
      setFormStatus(form, "Please select at least one volunteer interest.", "error");
      return;
    }

    setFormStatus(
      form,
      "Thank you. Your form is complete, but it still needs to be connected to an email or form service.",
      "success"
    );

    form.reset();
    form.querySelectorAll("[aria-invalid]").forEach((field) => {
      field.removeAttribute("aria-invalid");
    });
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
