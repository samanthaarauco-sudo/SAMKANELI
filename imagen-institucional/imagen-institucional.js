/* =====================================================
   SAMKANELI
   IMAGEN INSTITUCIONAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       ANIMACIONES AL HACER SCROLL
    ================================================= */

    const animatedElements = document.querySelectorAll(
        ".section, .strength-card, .improve-card, " +
        ".dimension-item, .component-card, " +
        ".perception-card, .quote-box"
    );


    animatedElements.forEach(element => {

        element.classList.add("reveal");

    });


    const observer = new IntersectionObserver(
        entries => {

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


    animatedElements.forEach(element => {

        observer.observe(element);

    });



    /* =================================================
       MENÚ DROPDOWN
    ================================================= */

    const dropdowns =
        document.querySelectorAll(".nav-dropdown");


    dropdowns.forEach(dropdown => {

        const button =
            dropdown.querySelector(".nav-button");


        if (!button) return;


        button.addEventListener("click", event => {

            event.stopPropagation();


            dropdowns.forEach(other => {

                if (other !== dropdown) {

                    other.classList.remove("open");

                }

            });


            dropdown.classList.toggle("open");

        });

    });


    document.addEventListener("click", () => {

        dropdowns.forEach(dropdown => {

            dropdown.classList.remove("open");

        });

    });



    /* =================================================
       ACORDEÓN DE DIMENSIONES
    ================================================= */

    const dimensionItems =
        document.querySelectorAll(".dimension-item");


    dimensionItems.forEach(item => {

        const header =
            item.querySelector(".dimension-header");


        header.addEventListener("click", () => {

            const wasOpen =
                item.classList.contains("open");


            dimensionItems.forEach(other => {

                other.classList.remove("open");


                const arrow =
                    other.querySelector(".arrow");


                if (arrow) {

                    arrow.textContent = "⌄";

                }

            });


            if (!wasOpen) {

                item.classList.add("open");


                const arrow =
                    item.querySelector(".arrow");


                if (arrow) {

                    arrow.textContent = "⌃";

                }

            }

        });

    });



    /* =================================================
       BOTONES DEL DIAGRAMA
    ================================================= */

    const dimensionButtons =
        document.querySelectorAll(".dimension-number");


    dimensionButtons.forEach(button => {

        button.addEventListener("click", () => {

            const number =
                button.dataset.dimension;


            dimensionButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            dimensionItems.forEach(item => {

                const panel =
                    item.dataset.dimensionPanel;


                if (panel === number) {

                    dimensionItems.forEach(other => {

                        other.classList.remove("open");

                        const arrow =
                            other.querySelector(".arrow");

                        if (arrow) {

                            arrow.textContent = "⌄";

                        }

                    });


                    item.classList.add("open");


                    const arrow =
                        item.querySelector(".arrow");


                    if (arrow) {

                        arrow.textContent = "⌃";

                    }

                }

            });

        });

    });



    /* =================================================
       ENLACES CON HASH
    ================================================= */

    function openHashSection() {

        const hash =
            window.location.hash;


        if (!hash) return;


        const target =
            document.querySelector(hash);


        if (!target) return;


        setTimeout(() => {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 250);

    }


    openHashSection();



    window.addEventListener("hashchange", () => {

        openHashSection();

    });



    /* =================================================
       BOTÓN VOLVER ARRIBA
    ================================================= */

    const backTop =
        document.getElementById("backTop");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });



    /* =================================================
       CERRAR MENÚ AL NAVEGAR
    ================================================= */

    const menuLinks =
        document.querySelectorAll(".dropdown-menu a");


    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            dropdowns.forEach(dropdown => {

                dropdown.classList.remove("open");

            });

        });

    });



    /* =================================================
       EFECTO SUAVE PARA LOS BOTONES DE PERCEPCIÓN
    ================================================= */

    const perceptionCards =
        document.querySelectorAll(".perception-card");


    perceptionCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 70}ms`;

    });



    /* =================================================
       EFECTO DE ENTRADA PARA LOS COMPONENTES
    ================================================= */

    const componentCards =
        document.querySelectorAll(".component-card");


    componentCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });


});