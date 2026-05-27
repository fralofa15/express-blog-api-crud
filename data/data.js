const posts = [
    {
        id: 1,
        title: "Ciambellone",
        content:
            "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come le crostate, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino.",
        image: "/imgs/posts/ciambellone.jpeg",
        tags: ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno"],
        slug: "ciambellone",
        published: true,
        prep_time: 20,
        created_at: "2024-01-15T09:00:00.000Z",
    },

    {
        id: 2,
        title: "Cracker alla barbabietola",
        content:
            "I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini.",
        image: "/imgs/posts/cracker_barbabietola.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        slug: "cracker-alla-barbabietola",
        published: true,
        prep_time: 40,
        created_at: "2024-02-03T10:30:00.000Z",
    },

    {
        id: 3,
        title: "Pasta barbabietola e gorgonzola",
        content:
            "La nostra ricetta della pasta barbabietola e gorgonzola vuole ricreare in questo primo piatto un abbinamento appetitoso.",
        image: "/imgs/posts/pasta_barbabietola.jpeg",
        tags: ["Primi piatti", "Ricette vegetariane"],
        slug: "pasta-barbabietola-e-gorgonzola",
        published: true,
        prep_time: 25,
        created_at: "2024-03-20T14:15:00.000Z",
    },

    {
        id: 4,
        title: "Pane fritto dolce",
        content:
            "Il pane fritto dolce è la versione più antica dell'odierno french toast.",
        image: "/imgs/posts/pane_fritto_dolce.jpeg",
        tags: ["Dolci", "Dolci veloci", "Ricette veloci", "Ricette vegetariane"],
        slug: "pane-fritto-dolce",
        published: false,
        prep_time: 15,
        created_at: "2024-04-08T08:45:00.000Z",
    },

    {
        id: 5,
        title: "Torta paesana",
        content:
            "La torta paesana è un dolce di origine lombarda e precisamente della Brianza.",
        image: "/imgs/posts/torta_paesana.jpeg",
        tags: [
            "Dolci",
            "Dolci al cioccolato",
            "Torte",
            "Ricette vegetariane",
            "Ricette al forno",
        ],
        slug: "torta-paesana",
        published: false,
        prep_time: 60,
        created_at: "2024-05-22T11:00:00.000Z",
    },
];

export default posts;