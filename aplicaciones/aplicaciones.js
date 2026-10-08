document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     MENÚ MÓVIL
  ===================================================== */

  const mobileButton = document.getElementById("mobileMenuButton");
  const mobileNav = document.getElementById("mobileMenu");

  const closeMobile = () => {

    if (!mobileNav) return;

    mobileNav.classList.remove("open");
    mobileNav.innerHTML = "";

    if (mobileButton) {
      mobileButton.textContent = "☰";
    }

  };


  if (mobileButton && mobileNav) {

    mobileButton.addEventListener("click", () => {

      if (mobileNav.classList.contains("open")) {

        closeMobile();
        return;

      }

      mobileNav.innerHTML = `

        <div class="mobile-menu-inner">

          <a href="../index.html">
            INICIO
          </a>

          <a href="../empresa/empresa.html">
            EMPRESA
          </a>

          <a href="../publico-objetivo/publico-objetivo.html">
            PÚBLICO OBJETIVO
          </a>

          <a href="../identidad-corporativa/identidad-corporativa.html">
            IDENTIDAD CORPORATIVA
          </a>

          <a href="../identidad-visual/identidad-visual.html">
            IDENTIDAD VISUAL
          </a>

          <a href="../imagen-institucional/imagen-institucional.html">
            IMAGEN INSTITUCIONAL
          </a>

          <a
            class="mobile-current"
            href="aplicaciones.html"
          >
            APLICACIONES
          </a>

          <div class="mobile-submenu">

            <a href="#tarjetas">
              Tarjetas
            </a>

            <a href="#vasos">
              Vasos y empaques
            </a>

            <a href="#uniformes">
              Uniformes
            </a>

            <a href="#afiches">
              Afiches
            </a>

            <a href="#redes">
              Redes sociales
            </a>

            <a href="#web">
              Sitio web
            </a>

            <a href="#letreros">
              Letreros
            </a>

            <a href="#stickers">
              Stickers
            </a>

            <a href="#cajas">
              Cajas
            </a>

          </div>

          <a href="../comunicacion/comunicacion.html">
            COMUNICACIÓN
          </a>

          <a href="../manual-identidad.html">
            MANUAL DE IDENTIDAD
          </a>

          <a href="../propuestas/propuestas.html">
            PROPUESTAS
          </a>

        </div>

      `;

      mobileNav.classList.add("open");
      mobileButton.textContent = "×";


      mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

          if (
            link.getAttribute("href")?.startsWith("#")
          ) {
            return;
          }

          closeMobile();

        });

      });

    });

  }


  /* =====================================================
     FILTROS
  ===================================================== */

  const filters =
    document.querySelectorAll(".filter");

  const cards =
    Array.from(
      document.querySelectorAll(".app-card")
    );


  filters.forEach(filter => {

    filter.addEventListener("click", () => {

      const selected =
        filter.dataset.filter || "TODAS";


      filters.forEach(button => {
        button.classList.remove("active");
      });


      filter.classList.add("active");


      cards.forEach((card, index) => {

        const category =
          card.dataset.category || "";

        const show =
          selected === "TODAS" ||
          category === selected;


        card.classList.toggle(
          "hidden",
          !show
        );


        if (show) {

          card.style.animationDelay =
            `${index * 60}ms`;

        }

      });


      const breadcrumb =
        document.getElementById(
          "breadcrumbCurrent"
        );


      if (breadcrumb) {

        breadcrumb.textContent =
          selected === "TODAS"
            ? "Todas"
            : selected;

      }

    });

  });


  /* =====================================================
     LIGHTBOX
  ===================================================== */

  const lightbox =
    document.getElementById("lightbox");

  const lightboxClose =
    document.getElementById("lightboxClose");

  const lightboxImage =
    document.getElementById("lightboxImage");

  const lightboxTitle =
    document.getElementById("lightboxTitle");

  const lightboxDescription =
    document.getElementById(
      "lightboxDescription"
    );

  const lightboxCategory =
    document.getElementById(
      "lightboxCategory"
    );

  const lightboxCounter =
    document.getElementById("counter");


  const previousButton =
    document.getElementById("previous") ||
    document.getElementById(
      "previousApplication"
    );


  const nextButton =
    document.getElementById("next") ||
    document.getElementById(
      "nextApplication"
    );


  let visibleCards = cards.slice();

  let currentIndex = 0;


  function updateVisibleCards() {

    visibleCards =
      cards.filter(
        card =>
          !card.classList.contains("hidden")
      );

  }


  function renderLightboxMedia(
    card,
    title
  ) {

    if (!lightboxImage) return;


    lightboxImage.innerHTML = "";


    /* SITIO WEB */

    if (card.dataset.web === "true") {

      const mock =
        card.querySelector(".web-mock");


      if (mock) {

        const clone =
          mock.cloneNode(true);

        clone.style.transform =
          "scale(1)";

        lightboxImage.appendChild(
          clone
        );

      }

      return;

    }


    /* IMÁGENES */

    const image =
      card.dataset.image ||
      card
        .querySelector("img")
        ?.getAttribute("src") ||
      "";


    if (!image) return;


    const img =
      document.createElement("img");


    img.src = image;
    img.alt = title;


    lightboxImage.appendChild(img);

  }


  function openLightbox(index) {

    updateVisibleCards();


    if (
      !lightbox ||
      !visibleCards.length
    ) {
      return;
    }


    currentIndex =
      Math.max(
        0,
        Math.min(
          index,
          visibleCards.length - 1
        )
      );


    const card =
      visibleCards[currentIndex];


    const title =
      card.dataset.title ||
      card
        .querySelector(".app-info h3")
        ?.textContent
        .trim() ||
      "";


    const category =
      card.dataset.category || "";


    const description =
      card
        .querySelector(".app-info p")
        ?.textContent
        .trim() ||
      "";


    renderLightboxMedia(
      card,
      title
    );


    if (lightboxTitle) {
      lightboxTitle.textContent =
        title;
    }


    if (lightboxDescription) {
      lightboxDescription.textContent =
        description;
    }


    if (lightboxCategory) {
      lightboxCategory.textContent =
        category;
    }


    if (lightboxCounter) {

      lightboxCounter.textContent =
        `${currentIndex + 1} / ${visibleCards.length}`;

    }


    lightbox.classList.add("open");

    lightbox.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  }


  function closeLightbox() {

    if (!lightbox) return;


    lightbox.classList.remove(
      "open"
    );


    lightbox.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.style.overflow =
      "";


    if (lightboxImage) {
      lightboxImage.innerHTML =
        "";
    }

  }


  function previousApplication() {

    updateVisibleCards();


    if (!visibleCards.length) {
      return;
    }


    currentIndex =
      (
        currentIndex -
        1 +
        visibleCards.length
      ) %
      visibleCards.length;


    openLightbox(
      currentIndex
    );

  }


  function nextApplication() {

    updateVisibleCards();


    if (!visibleCards.length) {
      return;
    }


    currentIndex =
      (
        currentIndex +
        1
      ) %
      visibleCards.length;


    openLightbox(
      currentIndex
    );

  }


  cards.forEach(card => {

    card.addEventListener(
      "click",
      () => {

        updateVisibleCards();

        openLightbox(
          visibleCards.indexOf(card)
        );

      }
    );

  });


  if (lightboxClose) {

    lightboxClose.addEventListener(
      "click",
      closeLightbox
    );

  }


  if (lightbox) {

    lightbox.addEventListener(
      "click",
      event => {

        if (
          event.target === lightbox
        ) {

          closeLightbox();

        }

      }
    );

  }


  if (previousButton) {

    previousButton.addEventListener(
      "click",
      previousApplication
    );

  }


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      nextApplication
    );

  }


  document.addEventListener(
    "keydown",
    event => {

      if (
        !lightbox?.classList.contains(
          "open"
        )
      ) {
        return;
      }


      if (event.key === "Escape") {
        closeLightbox();
      }


      if (event.key === "ArrowLeft") {
        previousApplication();
      }


      if (event.key === "ArrowRight") {
        nextApplication();
      }

    }
  );


  /* =====================================================
     ANCLAS
  ===================================================== */

  document
    .querySelectorAll(
      "a[href^='#']"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) return;


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });


          history.replaceState(
            null,
            "",
            targetId
          );


          closeMobile();

        }
      );

    });


  if (window.location.hash) {

    const target =
      document.querySelector(
        window.location.hash
      );


    if (target) {

      setTimeout(
        () => {

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        },
        250
      );

    }

  }


  /* =====================================================
     BOTÓN ARRIBA
  ===================================================== */

  const backTop =
    document.getElementById(
      "backTop"
    );


  if (backTop) {

    window.addEventListener(
      "scroll",
      () => {

        backTop.classList.toggle(
          "show",
          window.scrollY > 500
        );

      }
    );


    backTop.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }

});