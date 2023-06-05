console.log("WHİLE DÖNGÜSÜ");

let i= 1
while(i<=10){
    console.log(i) 
    i++
}
console.log("bye");

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let not =prompt("lütfen 0-100 arasında bir not giriniz")
// if(not<0 ||  not>100){
//     console.log("not 0'dan küçük veya 100'den büyük olamaz");
// }




// !----------- WHİLE İLE ÖRNEK----------
let not =prompt("lütfen 0-100 arasında bir not giriniz")
while(not<0 ||  not>100){
    console.log("not 0'dan küçük veya 100'den büyük olamaz");
    not =prompt("lütfen 0-100 arasında bir not giriniz")
}
console.log("notunuz ",not);




// ! ------DO-WHİLE İLE ÖRNEK---------




