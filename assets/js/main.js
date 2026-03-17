const currentPage = window.location.pathname.split("/").pop() || "index.html";
const calendlyLink = "https://calendly.com/goalchicapital/portfolio-review-meeting-with-mr-vikas-sharma?back=1&month=2026-03";
const riskProfilerLink = "https://goalchicapital.github.io/risk-profiler/";
const blogLink = "https://www.thelogicaladvisor.com/blog/";

const servicePages = new Set([
  "goal-based-planning.html",
  "wealth-management.html",
  "multi-asset-allocation.html",
  "portfolio-review.html"
]);

const specialistPages = new Set([
  "retirement-planning.html",
  "nri-financial-planning.html",
  "will-planning.html",
  "family-trusts.html"
]);

const servicesMenu = [
  {
    title: "Core Advisory",
    links: [
      {
        href: "goal-based-planning.html",
        title: "Goal-Based Planning",
        copy: "Translate life goals into a structured financial plan covering protection, liquidity, investments, and review discipline."
      },
      {
        href: "wealth-management.html",
        title: "Wealth Management",
        copy: "Connect financial planning with portfolio structure, governance, and long-term stewardship."
      }
    ]
  },
  {
    title: "Investment Architecture",
    links: [
      {
        href: "multi-asset-allocation.html",
        title: "Multi-Asset Allocation",
        copy: "See how growth, stability, liquidity, and resilience are organised across the family balance sheet."
      },
      {
        href: "portfolio-review.html",
        title: "Portfolio Review",
        copy: "Book a founder-led second opinion on portfolio fit, overlap, liquidity, and goal alignment."
      }
    ]
  },
  {
    title: "Continuity Planning",
    links: [
      {
        href: "will-planning.html",
        title: "Will Planning",
        copy: "Organise intent, succession clarity, and family continuity before legal execution begins."
      },
      {
        href: "family-trusts.html",
        title: "Family Trusts",
        copy: "Explore when governance, beneficiary complexity, or stewardship may require a trust framework."
      }
    ]
  },
  {
    title: "Resources",
    links: [
      {
        href: "insights.html",
        title: "Insights Hub",
        copy: "Explore financial-planning, investing, retirement, and continuity content shaped by Goalchi's philosophy."
      },
      {
        href: riskProfilerLink,
        title: "Risk Profile Score",
        copy: "Use the independent profiler to understand suitability before a planning or portfolio discussion.",
        external: true
      }
    ]
  }
];

const specialistMenu = [
  {
    title: "Life Milestones",
    links: [
      {
        href: "retirement-planning.html",
        title: "Retirement Planning",
        copy: "Plan for future income security, spending confidence, inflation, and later-life flexibility."
      },
      {
        href: "goal-based-planning.html",
        title: "Planning Pyramid",
        copy: "See how needs, wants, and desires shape capital allocation and decision-making."
      }
    ]
  },
  {
    title: "Global Families",
    links: [
      {
        href: "nri-financial-planning.html",
        title: "NRI Financial Planning",
        copy: "Coordinate India-linked wealth, global lives, and cross-border family responsibilities."
      },
      {
        href: "will-planning.html",
        title: "Succession & Continuity",
        copy: "Bring wills, trust conversations, and family continuity into the wider financial plan."
      }
    ]
  },
  {
    title: "Decision Support",
    links: [
      {
        href: "portfolio-review.html",
        title: "Book Portfolio Review",
        copy: "Start with a focused second opinion if you want clarity on the current portfolio before wider planning."
      },
      {
        href: "wealth-management.html",
        title: "Wealth Strategy",
        copy: "Understand how planning decisions flow into portfolio architecture, review governance, and stewardship."
      }
    ]
  },
  {
    title: "Read & Explore",
    links: [
      {
        href: blogLink,
        title: "The Logical Advisor Blog",
        copy: "Read articles on planning, retirement, wealth behaviour, continuity, and purposeful financial decision-making.",
        external: true
      },
      {
        href: "about.html",
        title: "About Goalchi",
        copy: "Understand the Goals + Achievement philosophy behind the practice and its client-first approach."
      }
    ]
  }
];

const footerSections = [
  {
    title: "Core Platform",
    links: [
      { href: "goal-based-planning.html", label: "Goal-Based Planning" },
      { href: "wealth-management.html", label: "Wealth Management" },
      { href: "multi-asset-allocation.html", label: "Multi-Asset Allocation" },
      { href: "portfolio-review.html", label: "Portfolio Review" }
    ]
  },
  {
    title: "Specialist Planning",
    links: [
      { href: "retirement-planning.html", label: "Retirement Planning" },
      { href: "nri-financial-planning.html", label: "NRI Financial Planning" },
      { href: "will-planning.html", label: "Will Planning" },
      { href: "family-trusts.html", label: "Family Trusts" }
    ]
  },
  {
    title: "Insights & Contact",
    links: [
      { href: "insights.html", label: "Insights Hub" },
      { href: "about.html", label: "About Goalchi" },
      { href: blogLink, label: "The Logical Advisor Blog", external: true },
      { href: riskProfilerLink, label: "Risk Profile Score", external: true },
      { href: "mailto:hello@goalchicapital.com", label: "hello@goalchicapital.com" },
      { href: "tel:+911141234567", label: "+91 11 4123 4567" }
    ],
    note: "India | NRI | Global Families"
  }
];

function linkMarkup(link) {
  const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
  const currentClass = !link.external && currentPage === link.href ? " is-current" : "";

  return `
    <a class="mega-link${currentClass}" href="${link.href}"${attrs}>
      <span class="mega-link-title">${link.title}</span>
      <span class="mega-link-copy">${link.copy}</span>
    </a>
  `;
}

function columnMarkup(column) {
  return `
    <div class="mega-col">
      <span class="mega-col-title">${column.title}</span>
      ${column.links.map(linkMarkup).join("")}
    </div>
  `;
}

function renderMega(label, sections, isActive) {
  return `
    <div class="nav-mega${isActive ? " is-active" : ""}">
      <button class="mega-trigger${isActive ? " active" : ""}" type="button" aria-haspopup="true">${label}</button>
      <div class="mega-panel" role="group" aria-label="${label}">
        ${sections.map(columnMarkup).join("")}
      </div>
    </div>
  `;
}

function renderMobileSection(title, links) {
  return `
    <span class="mobile-menu-heading">${title}</span>
    ${links
      .map((link) => {
        const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
        return `<a href="${link.href}"${attrs}>${link.label || link.title}</a>`;
      })
      .join("")}
  `;
}

function renderHeader() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  nav.innerHTML = `
    <div class="container nav-inner">
      <a class="brandmark" href="index.html" aria-label="Goalchi Capital home">
        <img class="brandmark-logo" src="assets/logos/goalchi-logo-primary.png" alt="Goalchi Capital" />
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a class="nav-home${currentPage === "index.html" ? " active" : ""}" href="index.html">Home</a>
        ${renderMega("Services", servicesMenu, servicePages.has(currentPage))}
        ${renderMega("Planning Specialties", specialistMenu, specialistPages.has(currentPage))}
        <a class="nav-direct${currentPage === "insights.html" ? " active" : ""}" href="insights.html">Insights</a>
        <a class="nav-direct${currentPage === "about.html" ? " active" : ""}" href="about.html">About Us</a>
      </nav>

      <div class="nav-actions">
        <a href="${calendlyLink}" class="btn btn-primary nav-cta" target="_blank" rel="noreferrer">Book Portfolio Review</a>

        <details class="mobile-menu" data-mobile-menu>
          <summary>Menu</summary>
          <div class="mobile-menu-panel">
            <a href="index.html">Home</a>
            ${renderMobileSection("Advisory Services", [
              { href: "goal-based-planning.html", label: "Goal-Based Planning" },
              { href: "wealth-management.html", label: "Wealth Management" },
              { href: "multi-asset-allocation.html", label: "Multi-Asset Allocation" },
              { href: "portfolio-review.html", label: "Portfolio Review" }
            ])}
            ${renderMobileSection("Planning Specialties", [
              { href: "retirement-planning.html", label: "Retirement Planning" },
              { href: "nri-financial-planning.html", label: "NRI Financial Planning" },
              { href: "will-planning.html", label: "Will Planning" },
              { href: "family-trusts.html", label: "Family Trusts" }
            ])}
            ${renderMobileSection("Resources", [
              { href: "insights.html", label: "Insights Hub" },
              { href: "about.html", label: "About Us" },
              { href: blogLink, label: "The Logical Advisor Blog", external: true },
              { href: riskProfilerLink, label: "Risk Profile Score", external: true }
            ])}
            <a href="${calendlyLink}" class="btn btn-primary mobile-menu-cta" target="_blank" rel="noreferrer">Book Portfolio Review</a>
          </div>
        </details>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("footer.footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <a class="brandmark footer-brand" href="index.html" aria-label="Goalchi Capital home">
          <img src="assets/logos/goalchi-logo-primary.png" alt="Goalchi Capital" />
        </a>
        <p class="footer-summary">
          Goalchi Capital helps clients move from scattered financial decisions to a structured wealth-management relationship centered on life goals, portfolio clarity, retirement confidence, and family continuity.
        </p>
      </div>

      ${footerSections
        .map((section) => {
          return `
            <div class="footer-col">
              <h4>${section.title}</h4>
              ${section.links
                .map((link) => {
                  const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
                  return `<a href="${link.href}"${attrs}>${link.label}</a>`;
                })
                .join("")}
              ${section.note ? `<p>${section.note}</p>` : ""}
            </div>
          `;
        })
        .join("")}
    </div>

    <div class="container copyright">&copy; 2026 Goalchi Capital Services LLP. All rights reserved.</div>
  `;
}

function toggleNav() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 18);
}

function bindMobileMenu() {
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (!mobileMenu) return;

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.removeAttribute("open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.hasAttribute("open")) return;
    if (mobileMenu.contains(event.target)) return;
    mobileMenu.removeAttribute("open");
  });
}

function initShell() {
  renderHeader();
  renderFooter();
  bindMobileMenu();
  toggleNav();
  window.addEventListener("scroll", toggleNav, { passive: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initShell);
} else {
  initShell();
}
