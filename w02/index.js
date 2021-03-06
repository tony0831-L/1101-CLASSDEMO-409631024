Vue.createApp({
    data() {
        return {
            data: [
                {
                    Name: "Bulbasaur",
                    img: "http://img4.wikia.nocookie.net/__cb20140328190757/pokemon/images/thumb/2/21/001Bulbasaur.png/200px-001Bulbasaur.png",
                    Type: "Grass/Poison",
                    Evolves: "Ivysaur",
                    href: "http://pokemon.wikia.com/wiki/Ivysaur"
                },
                {
                    Name: "Charmander",
                    img: "http://img4.wikia.nocookie.net/__cb20140724195345/pokemon/images/thumb/7/73/004Charmander.png/200px-004Charmander.png",
                    Type: "Fire",
                    Evolves: "Charmeleon",
                    href: "http://pokemon.wikia.com/wiki/Charmeleon"
                },
                {
                    Name: "Squirtle",
                    img: "http://img1.wikia.nocookie.net/__cb20140328191525/pokemon/images/thumb/3/39/007Squirtle.png/200px-007Squirtle.png",
                    Type: "Water",
                    Evolves: "Wartortle",
                    href: "http://pokemon.wikia.com/wiki/Wartortle"
                },
            ]
        }
    }
}).mount('#app')