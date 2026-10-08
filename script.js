document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENÚS DESPLEGABLES
    ========================= */

    const buttons =
        document.querySelectorAll(".nav-button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const parent =
                button.closest(".nav-dropdown");

            document
                .querySelectorAll(".nav-dropdown")
                .forEach(function (item) {

                    if (item !== parent) {
                        item.classList.remove("open");
                    }

                });

            parent.classList.toggle("open");

        });

    });


    document.addEventListener("click", function () {

        document
            .querySelectorAll(".nav-dropdown")
            .forEach(function (item) {

                item.classList.remove("open");

            });

    });


    /* =========================
       ANIMACIONES
    ========================= */

    const elements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(function (element) {

        observer.observe(element);

    });


    /* =========================
       CERRAR MENÚ AL HACER CLICK
       EN UN ENLACE
    ========================= */

    document
        .querySelectorAll(".dropdown-menu a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(".nav-dropdown")
                        .forEach(function (item) {

                            item.classList.remove("open");

                        });

                }
            );

        });

        /* =================================
     ANIMACIONES AL HACER SCROLL
  ================================= */

  const revealItems =
    document.querySelectorAll(".reveal");

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealItems.forEach(item => {

    revealObserver.observe(item);

  });


  /* =================================
     MENÚ MÓVIL
  ================================= */

  const mobileToggle =
    document.getElementById("mobileToggle");

  const mainNav =
    document.getElementById("mainNav");


  if (mobileToggle) {

    mobileToggle.addEventListener(
      "click",
      () => {

        mainNav.classList.toggle("open");

        mobileToggle.textContent =
          mainNav.classList.contains("open")
            ? "✕"
            : "☰";

      }
    );

  }


  /* =================================
     DROPDOWNS EN CELULAR
  ================================= */

  document
    .querySelectorAll(".nav-dropdown")
    .forEach(dropdown => {

      const button =
        dropdown.querySelector(".nav-button");


      if (button) {

        button.addEventListener(
          "click",
          event => {

            if (window.innerWidth <= 980) {

              event.preventDefault();


              document
                .querySelectorAll(".nav-dropdown.open")
                .forEach(other => {

                  if (other !== dropdown) {

                    other.classList.remove("open");

                  }

                });


              dropdown.classList.toggle("open");

            }

          }
        );

      }

    });


  /* =================================
     CERRAR MENÚ DESPUÉS DE NAVEGAR
  ================================= */

  document
    .querySelectorAll(".main-nav a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          if (window.innerWidth <= 980) {

            mainNav.classList.remove("open");

            mobileToggle.textContent = "☰";

          }

        }
      );

    });


  /* =================================
     BOTÓN VOLVER ARRIBA
  ================================= */

  const backTop =
    document.getElementById("backTop");


  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 500) {

        backTop.classList.add("show");

      } else {

        backTop.classList.remove("show");

      }

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


  /* =================================
     EFECTO PARALLAX DEL HERO
  ================================= */

  const hero =
    document.querySelector(".hero");


  window.addEventListener(
    "scroll",
    () => {

      if (!hero) return;


      const y =
        Math.min(
          window.scrollY * 0.08,
          45
        );


      hero.style.backgroundPosition =
        `center ${50 + y / 10}%`;

    },
    {
      passive: true
    }
  );


  /* =================================
     ANIMACIÓN DE TARJETAS
  ================================= */

  const cards =
    document.querySelectorAll(".manual-card");


  cards.forEach(
    (card, index) => {

      card.style.transitionDelay =
        `${index * 45}ms`;

    }
  );


});