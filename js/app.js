let my_city = {
    name: `Calgary`,
    population: 1500000,
    is_capital: false,
    communities: [
        {
            name: `Beltline`,
            population: 50000
        },
        {
            name: `Downtown`,
            population: 50000
        },
        {
            name: `Mahogany`,
            population: 50000
        },
        {
            name: `Mackenzie Townie`,
            population: 50000
        },
        {
            name: `Chapahal`,
            population: 50000
        }
]
}

if (my_city[`is_capital`] === true) {
    console.log(`Name: ${my_city[`name`]}. Population: ${my_city[`population`]}`)
} else {
    console.log(`Not import enough.`)
}

my_city[`communities`].push(`Beltline`);
my_city[`communities`].push(`Mahogany`);
my_city[`communities`].push(`Mackenzie Townie`);
my_city[`communities`].push(`Chapahal`);
my_city[`communities`].push(`Downtown`);

let counter = 0;
while(counter < my_city[`communities`].length) {
    if(my_city[`communities`][counter][`population`] > 100)
    console.log(my_city[`communities`][counter][`name`]);
    counter++;
}