/* =====================================================
   SAMKANELI - COMUNICACIÓN
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MENÚ MÓVIL
    ================================================= */

    const mobileButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    const menuData = [

        {
            title: "INICIO",
            url: "index.html",
            items: [
                ["Portada", "index.html"],
                ["Accesos rápidos", "index.html?s=accesos"]
            ]
        },

        {
            title: "EMPRESA",
            url: "empresa.html",
            items: [
                ["Datos de la empresa", "empresa.html?s=datos"],
                ["Descripción", "empresa.html?s=descripcion"],
                ["Misión y Visión", "empresa.html?s=mision"],
                ["Valores corporativos", "empresa.html?s=valores"]
            ]
        },

        {
            title: "PÚBLICO OBJETIVO",
            url: "publico-objetivo.html",
            items: [
                ["Segmento objetivo", "publico-objetivo.html?s=segmento"],
                ["Edad", "publico-objetivo.html?s=edad"],
                ["Ubicación", "publico-objetivo.html?s=ubicacion"],
                ["Necesidades y características", "publico-objetivo.html?s=necesidades"]
            ]
        },

        {
            title: "IDENTIDAD CORPORATIVA",
            url: "identidad-corporativa.html",
            items: [
                ["¿Qué es la imagen corporativa?", "identidad-corporativa.html?s=que-es"],
                ["Elementos de identidad", "identidad-corporativa.html?s=elementos"],
                ["Tipos de identidad", "identidad-corporativa.html?s=tipos"],
                ["Identidad cultural", "identidad-corporativa.html?s=cultural"],
                ["Identidad verbal", "identidad-corporativa.html?s=verbal"],
                ["Identidad corporativa SAMKANELI", "identidad-corporativa.html?s=corporativa"]
            ]
        },

        {
            title: "IDENTIDAD VISUAL",
            url: "identidad-visual.html",
            items: [
                ["Logotipo", "identidad-visual.html?s=logotipo"],
                ["Colores corporativos", "identidad-visual.html?s=colores"],
                ["Tipografía", "identidad-visual.html?s=tipografia"],
                ["Elementos gráficos", "identidad-visual.html?s=graficos"],
                ["Uniformes", "identidad-visual.html?s=uniformes"],
                ["Empaques", "identidad-visual.html?s=empaques"],
                ["Letreros", "identidad-visual.html?s=letreros"],
                ["Decoración", "identidad-visual.html?s=decoracion"]
            ]
        },

        {
            title: "IMAGEN INSTITUCIONAL",
            url: "imagen-institucional.html",
            items: [
                ["Percepción del cliente", "imagen-institucional.html?s=percepcion"],
                ["Fortalezas", "imagen-institucional.html?s=fortalezas"],
                ["Aspectos por mejorar", "imagen-institucional.html?s=mejoras"],
                ["Dimensiones de la imagen", "imagen-institucional.html?s=dimensiones"],
                ["Componentes de la imagen", "imagen-institucional.html?s=componentes"]
            ]
        },

        {
            title: "APLICACIONES",
            url: "aplicaciones.html",
            items: [
                ["Tarjetas", "aplicaciones.html?s=tarjetas"],
                ["Vasos y empaques", "aplicaciones.html?s=vasos"],
                ["Uniformes", "aplicaciones.html?s=uniformes"],
                ["Afiches", "aplicaciones.html?s=afiches"],
                ["Redes sociales", "aplicaciones.html?s=redes"],
                ["Sitio web", "aplicaciones.html?s=web"],
                ["Letreros", "aplicaciones.html?s=letreros"],
                ["Stickers", "aplicaciones.html?s=stickers"],
                ["Cajas", "aplicaciones.html?s=cajas"]
            ]
        },

        {
            title: "COMUNICACIÓN",
            url: "comunicacion.html",
            active: true,
            items: [
                ["Lenguaje corporativo", "comunicacion.html?s=lenguaje"],
                ["Canales de comunicación", "comunicacion.html?s=canales"],
                ["Mensaje principal", "comunicacion.html?s=mensaje"],
                ["Eslogan", "comunicacion.html?s=eslogan"]
            ]
        },

        {
            title: "MANUAL DE IDENTIDAD",
            url: "manual-identidad.html",
            items: [
                ["01 · Identidad visual", "manual-identidad.html?s=1"],
                ["02 · Identidad verbal", "manual-identidad.html?s=2"],
                ["03 · Colores", "manual-identidad.html?s=3"],
                ["04 · Tipografía", "manual-identidad.html?s=4"],
                ["05 · Logotipo", "manual-identidad.html?s=5"],
                ["06 · Aplicaciones", "manual-identidad.html?s=6"]
            ]
        },

        {
            title: "PROPUESTAS",
            url: "propuestas.html",
            items: [
                ["01 · Estandarización de la marca", "propuestas.html?s=01"],
                ["02 · Material publicitario", "propuestas.html?s=02"],
                ["03 · Colores y tipografías", "propuestas.html?s=03"],
                ["04 · Redes sociales", "propuestas.html?s=04"]
            ]
        }

    ];


    /* =================================================
       CREAR MENÚ MÓVIL
    ================================================= */

    function createMobileMenu() {

        if (!mobileMenu) return;

        mobileMenu.innerHTML = "";

        menuData.forEach(function (menu) {

            const wrapper =
                document.createElement("div");

            const mainLink =
                document.createElement("a");

            mainLink.href = menu.url;
            mainLink.textContent = menu.title;

            if (menu.active) {

                mainLink.style.color =
                    "#E96A9E";

                mainLink.style.background =
                    "#FFD5E8";
            }

            wrapper.appendChild(mainLink);


            if (menu.items) {

                const submenu =
                    document.createElement("div");

                submenu.className =
                    "mobile-submenu";


                menu.items.forEach(function (item) {

                    const link =
                        document.createElement("a");

                    link.href = item[1];

                    link.textContent = item[0];

                    submenu.appendChild(link);

                });

                wrapper.appendChild(submenu);
            }

            mobileMenu.appendChild(wrapper);

        });

    }

    createMobileMenu();


    /* =================================================
       BOTÓN MENÚ
    ================================================= */

    if (mobileButton && mobileMenu) {

        mobileButton.addEventListener(
            "click",
            function () {

                const open =
                    mobileMenu.classList.toggle("open");

                mobileButton.setAttribute(
                    "aria-expanded",
                    open ? "true" : "false"
                );

                mobileButton.textContent =
                    open ? "✕" : "☰";

            }
        );

    }


    /* =================================================
       ANIMACIONES
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });


    /* =================================================
       BOTÓN VOLVER ARRIBA
    ================================================= */

    const backTop =
        document.getElementById("backTop");


    function updateBackTop() {

        if (!backTop) return;

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop
    );

    updateBackTop();


    if (backTop) {

        backTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =================================================
       ?s= SECCIONES
    ================================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const section =
        params.get("s");


    const breadcrumb =
        document.getElementById(
            "breadcrumbCurrent"
        );


    const sections = {

        lenguaje: {
            id: "lenguaje",
            name: "Lenguaje corporativo"
        },

        canales: {
            id: "canales",
            name: "Canales de comunicación"
        },

        mensaje: {
            id: "mensaje",
            name: "Mensaje principal"
        },

        eslogan: {
            id: "eslogan",
            name: "Eslogan"
        }

    };


    if (section && sections[section]) {

        if (breadcrumb) {

            breadcrumb.textContent =
                sections[section].name;

        }


        setTimeout(function () {

            const target =
                document.getElementById(
                    sections[section].id
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 300);

    }


    /* =================================================
       CERRAR MENÚ MÓVIL
    ================================================= */

    if (mobileMenu) {

        mobileMenu.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.tagName === "A"
                ) {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    if (mobileButton) {

                        mobileButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        mobileButton.textContent =
                            "☰";

                    }

                }

            }
        );

    }

});