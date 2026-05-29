(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    const closeNavigation = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavigation();
        dismissStudyNotice();
      }
    });
  }

  const noticeStorageKey = "sligroLocalStudyNoticeDismissed";

  const createStudyNotice = () => {
    if (localStorage.getItem(noticeStorageKey) === "true") {
      return;
    }

    const notice = document.createElement("aside");
    notice.className = "study-notice";
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-label", "Melding studieproject");
    notice.innerHTML = `
      <div class="study-notice__inner">
        <p class="study-notice__text"><strong>Studieproject Avans:</strong> deze website is ontwikkeld als studieproject voor Avans. Hoewel het concept is gemaakt binnen een leercontext met Sligro als leerbedrijf, is deze website niet gemaakt in opdracht van Sligro en betreft dit geen officiële Sligro-publicatie.</p>
        <div class="study-notice__actions">
          <button class="study-notice__button" type="button">Akkoord</button>
          <button class="study-notice__close" type="button" aria-label="Melding sluiten">×</button>
        </div>
      </div>
    `;

    document.body.prepend(notice);
    document.body.classList.add("has-study-notice");

    notice.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", dismissStudyNotice);
    });
  };

  function dismissStudyNotice() {
    const notice = document.querySelector(".study-notice");
    if (!notice) {
      return;
    }

    localStorage.setItem(noticeStorageKey, "true");
    notice.setAttribute("hidden", "");
    document.body.classList.remove("has-study-notice");
  }

  createStudyNotice();
})();
