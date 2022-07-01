export const sortingToGenerationFunc = async (pokemons, type) => {
    const isSorting = [];
    for (let i = 0; i < pokemons.length; i++) {
        const power = await fetch(pokemons[i].url);
        const powerJson = await power.json()
        switch (type) {
            case 'power':
                isSorting.push({ power: powerJson.stats[1].base_stat, ...pokemons[i] })
                break;
            case 'weight':
                isSorting.push({ power: powerJson.weight, ...pokemons[i] })
                break;
            case 'hp':
                isSorting.push({ power: powerJson.stats[0].base_stat, ...pokemons[i] })
                break;
            default:
                isSorting.push({ power: powerJson.stats[1].base_stat, ...pokemons[i] })

        }

    }
    const sorted = isSorting.sort((a, b) => b.power > a.power ? 1 : -1);
    for (let i = 0; i < sorted.length; i++) {
        delete sorted[i].power
    }
    return sorted




    // const isSorting = [];
    // for (let i = 0; i < pokemons.length; i++) {
    //     fetch(pokemons[i].url)
    //         .then(response => response.json())
    //         .then(powerJson => {
    //             switch (type) {
    //                 case 'power':
    //                     isSorting.push({ power: powerJson.stats[1].base_stat, ...pokemons[i] })
    //                     break;
    //                 case 'weight':
    //                     isSorting.push({ power: powerJson.weight, ...pokemons[i] })
    //                     break;
    //                 case 'hp':
    //                     isSorting.push({ power: powerJson.stats[0].base_stat, ...pokemons[i] })
    //                     break;
    //                 default:
    //                     isSorting.push({ power: powerJson.stats[1].base_stat, ...pokemons[i] })

    //             }
    //             // const sorted = isSorting.sort((a, b) => b.power > a.power ? 1 : -1);
    //             // for (let i = 0; i < sorted.length; i++) {
    //             //     delete sorted[i].power

    //             // }
    //             // return sorted

    //         })

    // }
    // console.log(isSorting)

    // return sorted;

}