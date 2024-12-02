let heros = [["ironman", "spiderman", "thor"], ["batman", "superman", "wonderwoman"], ["hulk", "blackpanther", "captainamerica"]];

for (let i = 0; i < heros.length; i++) {
    console.log(`List #${i}`)
    for (let j = 0; j < heros[i].length; j++) {
        console.log(heros[i][j]);
    }
}