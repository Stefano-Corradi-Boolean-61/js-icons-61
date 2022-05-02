const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

/*****************
    FUNCTIONS
 ****************/

const getRandomNumbers = (min, max) => Math.floor(Math.random() * (max - min +1) + min);

const hexaGenerator = () => {
    let hexaString = '';
    const chars = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0];
    for(let i = 0; i < 6; i++){
        hexaString += chars[getRandomNumbers(0,chars.length - 1)]
    }

    return '#'+hexaString;
}

const printIcon = (icon) => {
    // 5. ricevo l'icona, la destrutturo e genro l'html da stampare
    const {name, prefix, family, color} = icon;
    return `<div class="box">
                <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                <p>${name}</p>
            </div>`;

}

const printIcons = (iconsToPrint) => {
    // 2. ricevo le icone da stampare...

    // 10. genero diamicamente un oggetto con i type: colore random
    const newColors = {};
    option.forEach(option => {
        newColors[option] = hexaGenerator();
    })

    console.log(newColors);

    // resetto il container
    container.innerHTML = '';

    // 3. ciclo le icone da stampare
    iconsToPrint.forEach(icon => {

        // 11. in base alla corrispondeza fra la proprietà dell'oggetto e il type sostituisco il colore
        for(let key in newColors){
            if(icon.type === key){
                icon.color = newColors[key]
            }
        }
        
        // 4. passo ogni singola icona alla funzione che cìgenra l'HTML
        // che concateno a quello presente
        container.innerHTML += printIcon(icon);
    })
}

const changeSelect = (event) => {
    // 7. con la arrow functio per avere il value della select devo leggere il type dell'evento
    console.log(event.target.value);

    // 8. filtro l'array genrale in base al value
    // oppure se il value è 'all'
    let iconsFiltered = icons.filter( icon => {
        return icon.type === event.target.value || event.target.value === 'all';
    })

    printIcons(iconsFiltered);

}


/*****************
    RENDER PAGE
 ****************/

const container = document.querySelector('.container');
const select = document.querySelector('.form-select');
//6. scateno l'evento al cambio della select
select.addEventListener('change', changeSelect);

const option = [];
// 9. creo un array con i type per generare dinamicamnete le options
icons.forEach(icon => {
    if(!option.includes(icon.type)){
        option.push(icon.type);
        select.innerHTML += `<option value="${icon.type}">${icon.type}</option>`;
    }
})

// QUI INIZIA  TUTTO!
// 1. passo a printIcons tutte le icone perché di default le devo stampare tutte 
printIcons(icons);