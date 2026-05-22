 /* ----------------------------------------------------------------
           Données des 12 développeurs — 3 colonnes × 4 lignes
           Chaque développeur met à jour son propre objet ici.
        ---------------------------------------------------------------- */
      
        import imgBenoitMondjo from "../../images/about-profil/Glen-benoit.jpg" 
        import ronyGael from "../../images/about-profil/rony-gael.jpg"
        import gedeonDong from "../../images/about-profil/GEDEON.png"
        import astuce from "../../images/about-profil/numérisé_20260520-0933.jpg"
        import yurik from "../../images/about-profil/PAUL.png"
        import wen from "../../images/about-profil/wen-jaonel.jpg"
        import levy from "../../images/about-profil/LEVY.png"
        import jeanJunior from "../../images/about-profil/JJ.png"
        import ulrich from "../../images/about-profil/ULRICH.png"
        import vanelie from  "../../images/about-profil/PP.png"

        const developers = [

            /* ── Ligne 1 ── */
            {
                initials:    "NEJ",
                name:        "KOMBILA NZIENGUI Enock Japhet",
                role:        "Développeur web et web mobile",
                desc: "Experte en responsive design et accessibilité. J'adore transformer des maquettes Figma en code",
                tags:        ["HTML", "CSS", "Vue.js"],
                avatarClass: "av-1",
                backClass:   "back-1",
                link: "https://nejdev241.github.io/portfolio/",
                photo: "src/assets/images/about-profil/profile.png" 

            },

            {
                initials: "GB",
                name: "MONDJO MONDJO Glaine Benoit",
                role: "Développeur web et web mobile",
                desc: "Passionné par les interfaces interactives et l'animation web. Spécialisé dans la création d'expériences utilisateur fluide avec React.",
                tags: ["HTML", "CSS", "JS", "React"],
                avatarClass: "av-2",
                backClass:   "back-2",
                link: "https://benoitmondjo.github.io/integration_portfolio/", 
                photo: imgBenoitMondjo
            },

          
  
            {
                initials: "RG",
                name: "Rony Gael",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://robiang.github.io/portfolio_rony/",
                photo: ronyGael
            },

             {
                initials: "GN",
                name: "Gédéon Ndong",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://furickndong.github.io/portfolio",
                photo: gedeonDong
            },


            {
                initials: "AFT",
                name: "Astuce Freeman TENGO",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://freemanastuce20-star.github.io/portfolio/",
                photo: astuce
            },



            {
                initials: "NPY",
                name: "NDONDY PAUL YURICK ",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://paulyurick.github.io/Mon-portfolio/",
                photo: yurik
            },

               {
                initials: "MEWJ",
                name: "MAKANAGA ETCHOU Wen Joanel",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://wen360-lab.github.io/portfolio/#",
                photo: wen
            },


            {
                initials: "MTFL",
                name: "Franclin Levy MOUBILOBA TSIAKONGA",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://moubilobalevy-netizen.github.io/mon-portfolio/",
                photo: levy
            },




            {
                initials: "DMJJ",
                name: "Jean Junior DIRAMBA MAMBOUNDOU",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://jj-dev625.github.io/Mon-portfolio/ ",
                photo: jeanJunior
            },

             

            {
                initials: "AUR",
                name: "Asseekome Ulrich Romaric",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://asseekomeulrichromaric-lang.github.io/Portfolio/",
                photo: ulrich
            },

              {
                  initials: "AMV",
                name: "Vanelie ABANG MINKO",
                role: "Développeur web et web mobile",
                desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
                tags: ["HTML", "CSS", "Node.js"],
                link: "https://akatsuki-png.github.io/MonPortfolio2.0/",
                photo: vanelie
            },
                
        ];

        /* ----------------------------------------------------------------
           Construction d'une carte
        ---------------------------------------------------------------- */
        function buildCard(dev) {
            const tagsHTML = dev.tags
                .map(tag => `<span class="card-tag">${tag}</span>`)
                .join('');

            return `
                <div class="card-stack">
                    <div class="card-back ${dev.backClass}"></div>
                    <div class="card-front">
                        <div class="card-avatar ${dev.avatarClass}">
                            <img src="${dev.photo}" alt="">
                        </div>
                        <p class="card-name">${dev.name}</p>
                        <p class="card-role">${dev.role}</p>
                        <p class="card-desc">${dev.desc}</p>
                        <div class="card-tags">${tagsHTML}</div>
                        <a href="${dev.link}" target="_blank" class="card-btn">Voir le portfolio →</a>
                    </div>
                </div>
            `;
        }

        /* Injection des 12 cartes dans la grille */
        document.getElementById('cards-grid').innerHTML =
            developers.map(buildCard).join('');