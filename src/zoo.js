const API_BASE = 'http://localhost:3000/';

export default class Zoo {
    constructor() {

    }


getAnimals() {

    fetch(API_BASE + 'zvirata')
    .then(response => response.json())
    .then(data => {
        this.showAnimals(data);
    })
}

showAnimals(data){

    let html = '';

    let zvireElement = document.querySelector('#zvirata');
   
    // data-id je atribut, kam si muzu ukladat nejake zaznamy a pak ho ziskam tak, ze prvek.dataset.atribut
    
    data.forEach(zvire => {
        console.log(zvire.nazev);
        html +=`
            <div class="zvire" data-id="${zvire.id}">
            <div class="zvire__foto">
            <img src="images/${zvire.foto}" alt="${zvire.nazev}">
            </div>
                <div class="zvire__popis">
                <div class="zvire__nazev">${zvire.nazev}</div>
                <div class="zvire__latinsky">${zvire.nazevLatinsky}</div>
            </div>
        </div>`
   
    });

    
    // v této chvíli mám v html zapsané i ty prvky jednotlivych zvirat
    zvireElement.innerHTML = html;

    //vsechny ty pridany zvirata maji "nad"tridu zvire a sem se mi uloži node list a chova se to cca jako pole
    let tlacitka = document.querySelectorAll('.zvire');

    tlacitka.forEach(tlacitka => {
        tlacitka.addEventListener('click', (e) => {
            this.animalClick(e.target);
        });
    });
}




animalClick(element){
    // v tom e jsou vselijake vlastnosti, co nam preda prohlizec, treba souradnice kliku, na co jsem klikl
    //console.log(element);
    //console.log('zvire klik');

    // v tom dataset ale musím kliknout přímo na ten element, nestačí jeho potomek
    //let id = e.target.dataset.id;

    let prvek = element.closest('.zvire');
    let id = prvek.dataset.id;
    console.log(id);

    this.getAnimal(id);

}


getAnimal(id) {
    fetch(API_BASE + 'zvirata/' + id)
    .then(response => response.json())
    .then(data => {
        this.showAnimal(data);
    })

}

showAnimal(data){
    console.log(data);
    //tady pisu

    document.querySelector('.detail__foto').src = 'images/' + data.foto;
    document.querySelector('.detail__foto').alt = data.nazev;
    document.querySelector('#nazev').textContent = data.nazev;
    document.querySelector('#latinsky').textContent = data.nazevLatinsky;
    document.querySelector('#popis').textContent = data.popis;
    document.querySelector('#domovina').textContent = data.domovina;
    document.querySelector('#biotop').textContent = data.biotop;
    document.querySelector('#potrava').textContent = data.potrava;
    document.querySelector('#velikost').textContent = data.velikost;

    //this.getZoo(1);

    //data.zoo.forEach(zoo => {
    //    this.getZoo(zoo);
    //})
    
    /*
    let pole = [];
    data.zoo.forEach(zooNumber => {
        pole.push(fetch(API_BASE + 'zoo/' + zooNumber ));

    });


    Promise.all(pole)
    .then(responses => {
        let poleJson = [];

        responses.forEach(response => {
            poleJson.push(response.json());
        })


        Promise.all(poleJson)
            .then(zoos => {
                console.table(zoos);

            })
    })

    */ 


    /*

    toto jeste ale asi neni dopsane - chybi mi nejspis fce getZoo

    let pole = [];
    data.zoo.forEach(zooNumber => {
        //toto vrati promise
        pole.push(this.getZoo(zooNumber))
    });

    Promise.all(pole)
        .then(datas => {
            console.log(datas)
        })

        */
   
}

/*

getZoo(id) {
    fetch(API_BASE + 'zoo/' + id)
    .then(response => response.json())
    .then(data => {
        
        this.showZoo(data);
    })

}*/

async getZoo(id) {
    let response = await fetch (API_BASE + 'zoo/' + id);
    let json = await (response.json);
    //dopsat
}


showZoo(data) {
    console.log(data.jmeno);

    
}






}


//''
//`