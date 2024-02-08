const section = document.getElementById('set');

const add = function(nama,harga,waktu,duit,level) {

    let container = document.createElement('div');
    container.classList.add('container');

    let title = document.createElement('h1');
    let cti = document.createTextNode(nama);

    let para = document.createElement('pre');
    let text = document.createTextNode(`
    Level : ${level}
    Harga : ${harga} 
    Money : ${duit} 
    Time : ${waktu} 
    Money/Min : ${(duit/waktu).toPrecision(3)} 
    Money/Cash : ${(harga / (duit/waktu)).toPrecision(4)} 
    `);

    title.appendChild(cti);
    para.appendChild(text);
    container.appendChild(title);
    container.appendChild(para);
    section.appendChild(container);

}

add('Warehouse 803',150,1.5,4,1);
add('Warehouse 621',450,7.5,18,1);
add('Cost Cafe',150,1.25,7,1);

add('Star Cafe',300,7.5,25,2);
add('710 Mart',750,2,6,2);
add('712 Mart',7500,11.25,60,2);

add('East  House',2250,11.25,88,3);
add('West  House',1800,1.5,13,4);
add('Super Store',10000,4.5,40,5);

add('Grocery Store',2250,6.25,30,6);
add('Warehouse 105',2250,1.75,10,7);
add('Warehouse 107',12500,7.5,75,8);

add('Fast-Food Place',3000,11.25,60,9);
add('Fast-Food Joint',3300,5,30,10);
add('Gift Shop',15000,1.5,20,11);

add('Gift Emporium',4200,1.5,15,12);
add('Gas Station 101',4500,8.75,125,13);
add('Gas Station 302',17500,1,30,14);

add('Worth Laundromart',5700,6.25,50,15);
// add('Gas Station 302 *3',22500,1,45,14);
add('Level 16',5250,1.25,10,16);
add('Level 17',20000,15,250,17);

add('Level 18',1,1.25,10,18);
add('Level 19',1,8.25,150,19);
add('Level 20',25000,2,75,20);

add('Level 21',1,10,125,21);
add('Level 22',1,0.75,30,22);
add('Level 23',30000,8.75,500,23);

add('Level 24',1,5.25,175,24);
add('Level 25',1,2,45,25);
add('Level 26',37500,0.75,25,26);

add('Level 27',1,1.5,25,27);
add('Level 28',1,13.75,225,28);
add('Level 29',45000,6.25,225,29);

add('Level 30',1,2,35,30);
add('Level 31',1,1.25,55,31);
add('Level 32',50000,11.25,1000,32);

add('Level 33',1,10,175,33);
add('Level 34',1,5.5,275,34);
add('Level 35',55000,9,875,35);

add('Level 36',1,1.75,88,36);
add('Level 37',1,3,125,37);
add('Level 38',62500,1.5,100,38);

add('Level 39',1,6.25,275,39);
add('Level 40',1,9.5,425,40);
add('Level 41',70000,1,100,41);

add('Level 42',1,4.5,275,42);
add('Level 43',1,15,1000,43);
add('Level 44',75000,2.5,375,44);

add('Level 47',75000,8.75,500,47);
add('Level 50',75000,4,500,50);
add('Level 53',75000,15,2250,53);
add('Level 56',75000,15,5000,56);
