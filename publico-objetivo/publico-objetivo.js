/* =====================================================
   SAMKANELI — PÚBLICO OBJETIVO
   Conversión de las interacciones del proyecto original
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


  /* =====================================================
     ICONOS
     Basados en Icons.tsx del ZIP
  ====================================================== */

  const icons = {

    home: `
      <svg viewBox="0 0 24 24">
        <path d="m4 10.5 8-6.5 8 6.5V19a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 19v-8.5Z"/>
        <path d="M9.5 20.5v-6h5v6"/>
      </svg>
    `,

    users: `
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3.5"/>
        <path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5"/>
        <path d="M16 5a3.5 3.5 0 0 1 0 6.5M17.5 14.7c2 .7 3.2 2.4 3.5 5.3"/>
      </svg>
    `,

    child: `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="9" r="5"/>
        <path d="M10 8.5v1M14 8.5v1M9.5 12c1.5 1.2 3.5 1.2 5 0"/>
        <path d="M12 14v4M8.5 21l3.5-3 3.5 3"/>
      </svg>
    `,

    user: `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4.5 20.5c.7-4 4-6.2 7.5-6.2s6.8 2.2 7.5 6.2"/>
      </svg>
    `,

    family: `
      <svg viewBox="0 0 24 24">
        <circle cx="8" cy="7.5" r="3"/>
        <circle cx="16.5" cy="9" r="2.5"/>
        <path d="M3.5 19c.4-3.2 2.3-5 4.5-5s4.1 1.8 4.5 5"/>
        <path d="M14 19c.3-2.6 1.6-4.2 3.5-4.2s3.2 1.6 3.5 4.2"/>
      </svg>
    `,

    clock: `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5"/>
        <path d="M12 7v5l3.2 2"/>
      </svg>
    `,

    pin: `
      <svg viewBox="0 0 24 24">
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"/>
        <circle cx="12" cy="10" r="2.6"/>
      </svg>
    `,

    map: `
      <svg viewBox="0 0 24 24">
        <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/>
        <path d="M9 4v14M15 6v14"/>
      </svg>
    `,

    leaf: `
      <svg viewBox="0 0 24 24">
        <path d="M12 21C7.5 16.5 5.5 10.5 12 3.5c6.5 7 4.5 13 0 17.5Z"/>
        <path d="M12 21V9.5"/>
      </svg>
    `,

    heart: `
      <svg viewBox="0 0 24 24">
        <path d="M12 20.5s-7.5-4.7-9-9.3C1.9 7.6 4.2 4.5 7.4 4.5c2 0 3.6 1.1 4.6 2.7 1-1.6 2.6-2.7 4.6-2.7 3.2 0 5.5 3.1 4.4 6.7-1.5 4.6-9 9.3-9 9.3Z"/>
      </svg>
    `,

    check: `
      <svg viewBox="0 0 24 24">
        <path d="m5 12.5 4.5 4.5L19 7.5"/>
      </svg>
    `,

    roll: `
      <svg viewBox="0 0 24 24">
        <path d="M12 21a9 9 0 1 1 9-9"/>
        <path d="M12 17.5a5.5 5.5 0 1 1 5.5-5.5"/>
        <path d="M12 14a2 2 0 1 1 2-2"/>
      </svg>
    `,

    star: `
      <svg viewBox="0 0 24 24">
        <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.9L12 3.5Z"/>
      </svg>
    `,

    sparkle: `
      <svg viewBox="0 0 24 24">
        <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3Z"/>
      </svg>
    `,

    arrowL: `
      <svg viewBox="0 0 24 24">
        <path d="M20 12H4m6-6-6 6 6 6"/>
      </svg>
    `,

    arrowR: `
      <svg viewBox="0 0 24 24">
        <path d="M4 12h16m-6-6 6 6-6 6"/>
      </svg>
    `,

    facebook: `
      <svg viewBox="0 0 24 24">
        <path d="M13.5 21v-7h2.6l.5-3.2h-3.1V8.7c0-.9.4-1.5 1.6-1.5h1.7V4.3c-.7-.1-1.6-.2-2.5-.2-2.6 0-4.3 1.5-4.3 4.3v2.4H7.5V14h2.5v7h3.5Z"/>
      </svg>
    `,

    instagram: `
      <svg viewBox="0 0 24 24">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.2" cy="6.8" r="1.1"/>
      </svg>
    `,

    tiktok: `
      <svg viewBox="0 0 24 24">
        <path d="M14.5 4v10.7a3.8 3.8 0 1 1-3.3-3.8"/>
        <path d="M14.5 5.5c.6 2.3 2.3 3.7 4.8 3.9"/>
      </svg>
    `,

    whatsapp: `
      <svg viewBox="0 0 24 24">
        <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z"/>
        <path d="M9 8.8c0 4 2.2 6.2 6.2 6.2.5 0 .9-.4 1-1l.1-.8-2.2-1.1-1 .9a5 5 0 0 1-2.1-2.1l.9-1-1.1-2.2-.8.1c-.6.1-1 .5-1 1Z"/>
      </svg>
    `
  };


  document
    .querySelectorAll(".icon[data-icon]")
    .forEach(element => {

      const name =
        element.dataset.icon;

      if (name && icons[name]) {
        element.innerHTML =
          icons[name];
      }

    });



  /* =====================================================
     REVEAL
     Equivalente al componente Reveal.tsx
  ====================================================== */

  const revealElements =
    document.querySelectorAll("[data-reveal]");


  const revealObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }


          const delay =
            entry.target.dataset.delay;


          if (delay) {

            entry.target.style.transitionDelay =
              `${delay}ms`;

          }


          entry.target.classList.add(
            "is-in"
          );


          revealObserver.unobserve(
            entry.target
          );

        });

      },

      {
        threshold:
          0.12,

        rootMargin:
          "0px 0px -36px 0px"
      }

    );


  revealElements.forEach(element => {

    revealObserver.observe(
      element
    );

  });



  /* =====================================================
     PARÁMETRO ?s=
     Equivalente a useSectionParam()
  ====================================================== */

  const subLabels = {

    segmento:
      "SEGMENTO OBJETIVO",

    edad:
      "EDAD",

    ubicacion:
      "UBICACIÓN",

    necesidades:
      "NECESIDADES Y CARACTERÍSTICAS"

  };


  const params =
    new URLSearchParams(
      window.location.search
    );


  const requested =
    params.get("s");


  const breadcrumb =
    document.getElementById(
      "breadcrumb-sub"
    );


  if (
    requested &&
    document.getElementById(requested)
  ) {

    if (breadcrumb && subLabels[requested]) {

      breadcrumb.textContent =
        subLabels[requested];

    }


    setTimeout(() => {

      document
        .getElementById(requested)
        .scrollIntoView({

          behavior:
            "smooth",

          block:
            "start"

        });

    }, 120);

  }



  /* =====================================================
     ACTUALIZAR BREADCRUMB AL NAVEGAR
  ====================================================== */

  const observedSections = [

    "segmento",
    "edad",
    "ubicacion",
    "necesidades"

  ];


  const sectionObserver =
    new IntersectionObserver(

      entries => {

        const visible =
          entries
            .filter(
              entry =>
                entry.isIntersecting
            )
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
          breadcrumb &&
          subLabels[id]
        ) {

          breadcrumb.textContent =
            subLabels[id];

        }

      },

      {
        threshold:
          [0.25, 0.5, 0.75],

        rootMargin:
          "-15% 0px -55% 0px"
      }

    );


  observedSections.forEach(id => {

    const section =
      document.getElementById(id);

    if (section) {

      sectionObserver.observe(
        section
      );

    }

  });



  /* =====================================================
     VOLVER ARRIBA
     Equivalente a BackToTop()
  ====================================================== */

  const backTop =
    document.getElementById(
      "backTop"
    );


  function checkBackTop() {

    if (
      window.scrollY > 500
    ) {

      backTop.classList.add(
        "show"
      );

    } else {

      backTop.classList.remove(
        "show"
      );

    }

  }


  window.addEventListener(
    "scroll",
    checkBackTop,
    {
      passive: true
    }
  );


  checkBackTop();


  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior:
          "smooth"

      });

    }
  );



  /* =====================================================
     ENLACES INTERNOS CON #SECCIÓN
  ====================================================== */

  document
    .querySelectorAll(
      'a[href*="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const href =
            link.getAttribute(
              "href"
            );


          if (
            !href ||
            href === "#" ||
            !href.includes("#")
          ) {

            return;

          }


          const hash =
            href.split("#")[1];


          const target =
            document.getElementById(
              hash
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({

            behavior:
              "smooth",

            block:
              "start"

          });


          if (
            breadcrumb &&
            subLabels[hash]
          ) {

            breadcrumb.textContent =
              subLabels[hash];

          }

        }
      );

    });



  /* =====================================================
     EFECTO DE CARGA DE PÁGINA
  ====================================================== */

  document
    .getElementById("pagina")
    .classList.add("page-loaded");

});