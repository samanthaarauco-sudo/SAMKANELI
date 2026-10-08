document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     REVEAL AL HACER SCROLL
  ===================================================== */

  const revealElements =
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
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });



  /* =====================================================
     TARJETAS DE VALORES
     
     En PC:
     - hover gira la tarjeta.

     En celular:
     - tocar gira la tarjeta.
  ===================================================== */

  const flipCards =
    document.querySelectorAll(".flip-card");


  flipCards.forEach(card => {

    card.addEventListener("click", () => {

      /*
       * En dispositivos táctiles se controla
       * mediante la clase is-flipped.
       */

      if (
        window.matchMedia("(hover: none)").matches
      ) {

        flipCards.forEach(other => {

          if (other !== card) {
            other.classList.remove("is-flipped");
          }

        });

        card.classList.toggle("is-flipped");

      }

    });


    card.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        flipCards.forEach(other => {

          if (other !== card) {
            other.classList.remove("is-flipped");
          }

        });

        card.classList.toggle("is-flipped");

      }

    });

  });



  /* =====================================================
     SECCIÓN DESDE ?s=
     
     Ejemplos:

     empresa.html?s=datos
     empresa.html?s=descripcion
     empresa.html?s=mision
     empresa.html?s=valores
  ===================================================== */

  const params =
    new URLSearchParams(window.location.search);

  const section =
    params.get("s");


  const sectionLabels = {

    datos:
      "DATOS DE LA EMPRESA",

    descripcion:
      "DESCRIPCIÓN",

    mision:
      "MISIÓN Y VISIÓN",

    valores:
      "VALORES CORPORATIVOS"

  };


  const breadcrumbSection =
    document.getElementById(
      "breadcrumb-section"
    );


  if (
    section &&
    sectionLabels[section]
  ) {

    breadcrumbSection.textContent =
      sectionLabels[section];

    setTimeout(() => {

      const target =
        document.getElementById(section);

      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }, 200);

  }



  /* =====================================================
     CAMBIO DE SECCIÓN AL HACER CLICK EN ENLACES
  ===================================================== */

  document
    .querySelectorAll(
      'a[href*="?s="]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const url =
            new URL(
              link.href,
              window.location.href
            );

          const targetSection =
            url.searchParams.get("s");

          if (!targetSection) {
            return;
          }

          const target =
            document.getElementById(
              targetSection
            );

          if (!target) {
            return;
          }

          /*
           * Si el enlace pertenece a esta misma página,
           * hacemos scroll sin recargar.
           */

          if (
            url.pathname ===
            window.location.pathname
          ) {

            event.preventDefault();

            window.history.replaceState(
              {},
              "",
              `?s=${targetSection}`
            );

            if (
              sectionLabels[targetSection]
            ) {

              breadcrumbSection.textContent =
                sectionLabels[targetSection];

            }

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    });



  /* =====================================================
     BOTÓN VOLVER ARRIBA
  ===================================================== */

  const backTop =
    document.getElementById("backTop");


  function updateBackTop() {

    if (window.scrollY > 500) {

      backTop.classList.add("show");

    } else {

      backTop.classList.remove("show");

    }

  }


  window.addEventListener(
    "scroll",
    updateBackTop,
    { passive: true }
  );


  updateBackTop();


  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );



  /* =====================================================
     ACTUALIZAR BREADCRUMB SEGÚN SECCIÓN VISIBLE
  ===================================================== */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const sectionObserver =
    new IntersectionObserver(
      entries => {

        const visible =
          entries
            .filter(entry => entry.isIntersecting)
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            )[0];


        if (!visible) {
          return;
        }


        const id =
          visible.target.id;


        if (
          sectionLabels[id]
        ) {

          breadcrumbSection.textContent =
            sectionLabels[id];

        }

      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin:
          "-15% 0px -55% 0px"
      }
    );


  sections.forEach(section => {
    sectionObserver.observe(section);
  });



  /* =====================================================
     CERRAR FLIP AL SALIR DEL ÁREA
  ===================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        flipCards.forEach(card => {
          card.classList.remove("is-flipped");
        });

      }

    }
  );

});