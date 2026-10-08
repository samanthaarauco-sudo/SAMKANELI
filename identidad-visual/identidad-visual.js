/* =========================================================
   IDENTIDAD VISUAL - SAMKANELI
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ANIMACIONES AL HACER SCROLL
  ======================================================= */

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );


  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const element = entry.target;

        const delay =
          Number(element.dataset.delay || 0);

        setTimeout(() => {

          element.classList.add("show");

        }, delay);

        revealObserver.unobserve(element);
      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });


  /* =======================================================
     MENÚ MÓVIL
  ======================================================= */

  const mobileButton =
    document.getElementById("mobileMenuBtn");

  const mainMenu =
    document.getElementById("mainMenu");


  if (mobileButton && mainMenu) {

    mobileButton.addEventListener("click", () => {

      mainMenu.classList.toggle("open");

      mobileButton.textContent =
        mainMenu.classList.contains("open")
          ? "×"
          : "☰";

    });

  }


  /* =======================================================
     DROPDOWNS EN MÓVIL
  ======================================================= */

  const dropdowns =
    document.querySelectorAll(".nav-dropdown");


  dropdowns.forEach((dropdown) => {

    const button =
      dropdown.querySelector(".nav-button");


    if (!button) return;


    button.addEventListener("click", (event) => {

      if (window.innerWidth > 1000) return;

      event.preventDefault();

      dropdowns.forEach((item) => {

        if (item !== dropdown) {

          item.classList.remove("open");

        }

      });

      dropdown.classList.toggle("open");

    });

  });


  /* =======================================================
     CERRAR MENÚ AL HACER CLICK EN UN ENLACE
  ======================================================= */

  document.querySelectorAll(".main-nav a").forEach((link) => {

    link.addEventListener("click", () => {

      if (!mainMenu) return;

      mainMenu.classList.remove("open");

      if (mobileButton) {

        mobileButton.textContent = "☰";

      }

    });

  });


  /* =======================================================
     PALETA INTERACTIVA
  ======================================================= */

  const colorCards =
    document.querySelectorAll(".color-card");

  const detailColor =
    document.getElementById("detailColor");

  const detailName =
    document.getElementById("detailName");

  const detailDescription =
    document.getElementById("detailDescription");

  const detailHex =
    document.getElementById("detailHex");

  const detailRgb =
    document.getElementById("detailRgb");

  const detailCmyk =
    document.getElementById("detailCmyk");

  const usageValue =
    document.getElementById("usageValue");

  const usageBar =
    document.getElementById("usageBar");


  const paletteData = {

    rosa: {

      name: "Rosa Pastel",

      color: "#FAACD0",

      description:
        "Representa dulzura, alegría y cercanía.",

      hex: "#FAACD0",

      rgb:
        "RGB 250 · 172 · 208",

      cmyk:
        "CMYK 0 · 31 · 17 · 2",

      usage: 30

    },


    canela: {

      name: "Marrón Canela",

      color: "#7A4326",

      description:
        "Representa calidez, tradición y el producto artesanal.",

      hex: "#7A4326",

      rgb:
        "RGB 122 · 67 · 38",

      cmyk:
        "CMYK 0 · 45 · 69 · 52",

      usage: 25

    },


    crema: {

      name: "Crema",

      color: "#FFEED6",

      description:
        "Aporta suavidad, limpieza y equilibrio visual.",

      hex: "#FFEED6",

      rgb:
        "RGB 255 · 238 · 214",

      cmyk:
        "CMYK 0 · 7 · 16 · 0",

      usage: 30

    },


    verde: {

      name: "Verde Pastel",

      color: "#C0E3A1",

      description:
        "Representa la naturaleza y la conexión con la Selva Central.",

      hex: "#C0E3A1",

      rgb:
        "RGB 192 · 227 · 161",

      cmyk:
        "CMYK 15 · 0 · 29 · 11",

      usage: 15

    }

  };


  function updatePalette(colorKey) {

    const data = paletteData[colorKey];

    if (!data) return;


    colorCards.forEach((card) => {

      card.classList.remove("selected");

    });


    const activeCard =
      document.querySelector(
        `.color-card[data-color="${colorKey}"]`
      );


    if (activeCard) {

      activeCard.classList.add("selected");

    }


    if (detailColor) {

      detailColor.style.background =
        data.color;

      detailColor.animate(
        [
          {
            transform: "scale(.85)",
            opacity: ".4"
          },
          {
            transform: "scale(1)",
            opacity: "1"
          }
        ],
        {
          duration: 350,
          easing: "ease-out"
        }
      );

    }


    if (detailName)
      detailName.textContent = data.name;


    if (detailDescription)
      detailDescription.textContent =
        data.description;


    if (detailHex)
      detailHex.textContent =
        data.hex;


    if (detailRgb)
      detailRgb.textContent =
        data.rgb;


    if (detailCmyk)
      detailCmyk.textContent =
        data.cmyk;


    if (usageValue)
      usageValue.textContent =
        data.usage;


    if (usageBar)
      usageBar.style.width =
        `${data.usage}%`;

  }


  colorCards.forEach((card) => {

    card.addEventListener("click", () => {

      const color =
        card.dataset.color;

      updatePalette(color);

    });

  });


  /* =======================================================
     BOTÓN VOLVER ARRIBA
  ======================================================= */

  const backTop =
    document.getElementById("backTop");


  function checkScroll() {

    if (!backTop) return;

    if (window.scrollY > 500) {

      backTop.classList.add("visible");

    } else {

      backTop.classList.remove("visible");

    }

  }


  window.addEventListener(
    "scroll",
    checkScroll,
    {
      passive: true
    }
  );


  checkScroll();


  if (backTop) {

    backTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =======================================================
     ANIMACIÓN DE IMÁGENES
  ======================================================= */

  document
    .querySelectorAll(".application-image img")
    .forEach((image) => {

      image.addEventListener("mouseenter", () => {

        image.style.transform =
          "scale(1.025)";

        image.style.transition =
          "transform .5s ease";

      });


      image.addEventListener("mouseleave", () => {

        image.style.transform =
          "scale(1)";

      });

    });


  /* =======================================================
     ACTUALIZAR BREADCRUMB SEGÚN HASH
  ======================================================= */

  const breadcrumb =
    document.getElementById("breadcrumbCurrent");


  const labels = {

    logotipo: "LOGOTIPO",

    colores: "COLORES CORPORATIVOS",

    tipografia: "TIPOGRAFÍA",

    elementos: "ELEMENTOS GRÁFICOS",

    uniformes: "UNIFORMES",

    empaques: "EMPAQUES",

    letreros: "LETREROS",

    decoracion: "DECORACIÓN"

  };


  function updateBreadcrumb() {

    if (!breadcrumb) return;


    const hash =
      window.location.hash
        .replace("#", "")
        .toLowerCase();


    if (labels[hash]) {

      breadcrumb.textContent =
        labels[hash];

    } else {

      breadcrumb.textContent =
        "LOGOTIPO";

    }

  }


  updateBreadcrumb();


  window.addEventListener(
    "hashchange",
    updateBreadcrumb
  );


  /* =======================================================
     ENTRAR DIRECTAMENTE A UNA SECCIÓN
  ======================================================= */

  if (window.location.hash) {

    setTimeout(() => {

      const target =
        document.querySelector(
          window.location.hash
        );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }, 300);

  }


  /* =======================================================
     CAMBIAR HASH AL LLEGAR A CADA SECCIÓN
  ======================================================= */

  const sections =
    document.querySelectorAll(
      "section[id]"
    );


  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        const visible =
          entries
            .filter(
              entry =>
                entry.isIntersecting
            )
            .sort(
              (a,b) =>
                b.intersectionRatio -
                a.intersectionRatio
            )[0];


        if (!visible) return;


        const id =
          visible.target.id;


        if (labels[id]) {

          history.replaceState(
            null,
            "",
            `#${id}`
          );


          if (breadcrumb) {

            breadcrumb.textContent =
              labels[id];

          }

        }

      },
      {
        threshold: 0.35
      }
    );


  sections.forEach((section) => {

    sectionObserver.observe(section);

  });

});