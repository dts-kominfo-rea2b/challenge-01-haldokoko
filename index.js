// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//education
function education(name,city,graduate){
    this.name = name,
    this.city = city,
    this.graduate = graduate
};

const edumonica1 = new education('SD 01','Jakarta',2016);
const edumonica2 = new education('SMP 02','Jakarta',2019);
const edumonica3 = new education('SMA 03', 'Tangerang');
const edumonica = [];
edumonica.push(edumonica1);
edumonica.push(edumonica2);
edumonica.push(edumonica3);

const eduwendy1 = new education('SD 02','Jakarta',2010);
const eduwendy2 = new education('SMP 03','Jakarta',2013);
const eduwendy3 = new education('SMA 01','Surabaya',2016);
const eduwendy4 = new education('Universitas Maju','Tangerang');
const eduwendy = [];
eduwendy.push(eduwendy1);
eduwendy.push(eduwendy2);
eduwendy.push(eduwendy3);
eduwendy.push(eduwendy4);


const firstUser = {
    name:'Monica',
    gender:'female',
    age : 17,
    email: 'monica@dingdong.com',
    favoriteColor: ['Yellow','Pink','White','Purple'],
    isHavePet: true,
    education: edumonica,
    favoriteRestaurant: ['Bento','Sushi','Pancake','Eggy','Tempura','Padang','Tteok']
};
const secondUser = {
    name:'Wendy',
    gender:'Male',
    age:23,
    email: 'wendy@dingdong.com',
    favoriteColor: ['Blue','Black','Grey'],
    isHavePet: false,
    education: eduwendy,
    favoriteRestaurant: ['Tempura','Bento','Sushi','Pancake','Padang','Katsu','Geprek','Eggy']
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};