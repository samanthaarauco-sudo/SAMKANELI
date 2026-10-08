document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     DATOS DE LAS SECCIONES
  ===================================================== */

  const sections = {
    "que-es": "¿QUÉ ES LA IMAGEN CORPORATIVA?",
    "elementos": "ELEMENTOS DE IDENTIDAD",
    "tipos": "TIPOS DE IDENTIDAD",
    "cultural": "IDENTIDAD CULTURAL",
    "verbal": "IDENTIDAD VERBAL",
    "corporativa": "IDENTIDAD CORPORATIVA"
  };


  /* =====================================================
     TABS
  ===================================================== */

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  const breadcrumbCurrent =
    document.getElementById("breadcrumbCurrent");


  function activateTab(id, updateUrl = true) {

    if (!sections[id]) {
      id = "que-es";
    }


    /* botones */

    tabs.forEach(tab => {

      const active =
        tab.dataset.tab === id;

      tab.classList.toggle("active", active);

    });


    /* contenido */

    contents.forEach(content => {

      const active =
        content.id === id;

      content.classList.toggle("active", active);

    });


    /* breadcrumb */

    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent =
        sections[id];
    }


    /* URL */

    if (updateUrl) {

      const url =
        new URL(window.location.href);

      if (id === "que-es") {

        url.searchParams.delete("s");

      } else {

        url.searchParams.set("s", id);

      }

      window.history.replaceState({}, "", url);

    }


    /* subir al contenido */

    const content =
      document.getElementById(id);

    if (content) {

      const top =
        content.getBoundingClientRect().top +
        window.scrollY -
        115;

      window.scrollTo({
        top,
        behavior: "smooth"
      });

    }


    /* volver a activar reveal */

    setTimeout(() => {
      observeReveals();
    }, 80);
  }


  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      activateTab(
        tab.dataset.tab,
        true
      );

    });

  });


  /* =====================================================
     LEER ?s= DESDE LA URL
  ===================================================== */

  const params =
    new URLSearchParams(window.location.search);

  const initialSection =
    params.get("s") || "que-es";


  setTimeout(() => {

    if (sections[initialSection]) {

      tabs.forEach(tab => {

        tab.classList.toggle(
          "active",
          tab.dataset.tab === initialSection
        );

      });

      contents.forEach(content => {

        content.classList.toggle(
          "active",
          content.id === initialSection
        );

      });

      if (breadcrumbCurrent) {

        breadcrumbCurrent.textContent =
          sections[initialSection];

      }

      if (initialSection !== "que-es") {

        setTimeout(() => {

          const el =
            document.getElementById(initialSection);

          if (el) {

            window.scrollTo({
              top:
                el.getBoundingClientRect().top +
                window.scrollY -
                115,
              behavior: "smooth"
            });

          }

        }, 300);

      }

    }

  }, 50);


  /* =====================================================
     MENÚ MÓVIL
  ===================================================== */

  const mobileBtn =
    document.getElementById("mobileMenuBtn");

  const mainMenu =
    document.getElementById("mainMenu");

  const mobileIcon =
    document.getElementById("mobileMenuIcon");


  if (mobileBtn && mainMenu) {

    mobileBtn.addEventListener("click", () => {

      mainMenu.classList.toggle("open");

      const opened =
        mainMenu.classList.contains("open");


      mobileIcon.innerHTML =
        opened
          ? '<use href="#icon-x"></use>'
          : '<use href="#icon-menu"></use>';

    });

  }


  /* =====================================================
     ANIMACIÓN REVEAL AL HACER SCROLL
  ===================================================== */

  let revealObserver;


  function observeReveals() {

    if (revealObserver) {
      revealObserver.disconnect();
    }


    const elements =
      document.querySelectorAll(
        ".tab-content.active .reveal"
      );


    revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: .12
        }
      );


    elements.forEach((element, index) => {

      element.style.transitionDelay =
        `${index * 70}ms`;

      revealObserver.observe(element);

    });

  }


  observeReveals();


  /* =====================================================
     BOTÓN VOLVER ARRIBA
  ===================================================== */

  const backTop =
    document.getElementById("backTop");


  window.addEventListener(
    "scroll",
    () => {

      if (!backTop) return;

      if (window.scrollY > 500) {

        backTop.classList.add("show");

      } else {

        backTop.classList.remove("show");

      }

    },
    {
      passive: true
    }
  );


  if (backTop) {

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


  /* =====================================================
     SOMBRA DEL HEADER
  ===================================================== */

  const header =
    document.querySelector(".top-header");


  window.addEventListener(
    "scroll",
    () => {

      if (!header) return;

      if (window.scrollY > 10) {

        header.style.boxShadow =
          "0 8px 30px rgba(122,67,38,.12)";

      } else {

        header.style.boxShadow =
          "0 1px 0 rgba(122,67,38,.08)";

      }

    },
    {
      passive: true
    }
  );


  /* =====================================================
     CERRAR MENÚ MÓVIL AL HACER CLICK
  ===================================================== */

  const menuLinks =
    document.querySelectorAll(
      ".main-menu a"
    );


  menuLinks.forEach(link => {

    link.addEventListener("click", () => {

      if (
        window.innerWidth <= 1000 &&
        mainMenu
      ) {

        mainMenu.classList.remove("open");

        if (mobileIcon) {

          mobileIcon.innerHTML =
            '<use href="#icon-menu"></use>';

        }

      }

    });

  });


  /* =====================================================
     TECLADO PARA TABS
  ===================================================== */

  tabs.forEach((tab, index) => {

    tab.addEventListener(
      "keydown",
      event => {

        if (
          event.key !== "ArrowRight" &&
          event.key !== "ArrowLeft"
        ) {
          return;
        }


        event.preventDefault();


        let nextIndex;


        if (event.key === "ArrowRight") {

          nextIndex =
            (index + 1) % tabs.length;

        } else {

          nextIndex =
            (index - 1 + tabs.length) %
            tabs.length;

        }


        tabs[nextIndex].focus();

        activateTab(
          tabs[nextIndex].dataset.tab
        );

      }
    );

  });


});