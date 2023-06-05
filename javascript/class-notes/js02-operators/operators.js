console.log("cosola bağlandık")

//! Atama Operatörü, Aritmetiksel Operatörler,Artırma ve Azaltma Operatörü, Karşılaştırma Operatörleri ve Logical(Mantıksal) Operatörler
var deneme = 5
varDeneme = 6

let myVar =5

const myVar1 = 6

//+ Aritmetiksel Operatörler

// +,-,*,/,%



//! + operatörü

const num1 =10 
const num2 = 69
const toplam = num1 + num2   // num1 ve num2 operand , + operator olarak adlandırılıyor.
console.log(toplam);




const msg1 ="hello"
const msg2 = "world"
const mesaj = msg1 +msg2
console.log(mesaj);             //helloworld



const firstName = "Mehmet"
const lastName = "Alabıçak"

console.log(firstName , lastName);      //Mehmet Alabıçak

const name = firstName + " " + lastName
  
console.log(name);           //Mehmet Alabıçak



const motherName = "Necla"
const fatherName = "Hulki"
console.log(motherName, fatherName);  //Necla Hulki





const num3 = "6";
const num4 = "7"

console.log(num3 +num4);          //67
console.log(num3 + 7);            //67
console.log(6 + 7);               //13
console.log(6 + num4);            //67  + operatorunde string değişken üstün gelir ve dönmüşümü stringe yapar
console.log(7 + num3);            //76  + operatorunde string değişken üstün gelir ve dönmüşümü stringe yapar

console.log(typeof (7 + num3));   //string







        //! Template Literals (Es6 ile gelen bir özellik)

        //  `merhaba`  `${değişken} ${değişken2}`

        // const name2 = `${firstName} ${lastName}`
        // console.log(name2); 
        // `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.



        //! - operatoru

        const x = 55;
        const y = 44;

        console.log(x-y);            //11

        const myNum = "10"

        console.log(x-myNum);        //45

        const yourNum = "one"

        console.log(x-yourNum);     //Nan   (// //? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder.)


        //! * operatoru
 
        let carp1=7;
        let carp2=9;
        console.log(carp1*carp2);    //63
        console.log(7*9);           //63

            console.log("a" * "b");     //NaN
        console.log("a" *3);        //NaN


        console.log("5" * "9");     //45    karakterler numeric ise number gibi davranıp işlemi gerçekleştiriyor
        console.log(typeof("5" * "9"));    //number


        //!  / operatoru
        const bol1 = 81;
        const bol2 = 9;

        console.log(bol1 / bol2);               //9
        console.log(bol1 / "9");                //9
        console.log("81" / "9");                //9
        console.log(bol1 / "dokuz");            //NaN
        console.log(bol2 / 0);                  //infinity
        console.log(-81 / 0);                   // - infinity

        // //? JavaScript ile sonsuzluk-sınır değerini ifade etmek için Infinity veya -Infinity anahtar kelimesi kullanılır. Bir sayının 0'a bölünmesi Infinity veya –Infinity değeri döndürür.

        console.log(0 / 5);                     // 0
        console.log(0 / -5);                     // -0

        console.log(57 / 9);                    // 6,3333333







        //! % (Mod Alma) operatörü (Bölmedeki kalan sayıyı bulur)

        const mod1 = 57;
        const mod2 = 9;

        console.log(mod1 % mod2);               // 3    (bölme operaoru gibi davranıyor ama bize kalan değeri veriyor)

        console.log(22 % 7);                    // 1



        const benimSayim = 967;

        // const birlerBas = benimSayim / 100;
        const birlerBas = benimSayim % 10; // 7
         console.log(birlerBas);
        //  const onlarBas = benimSayim % 100;
        const onlarBas = (benimSayim % 100) / 10; // 6.7
        console.log(onlarBas);
        const yüzlerBas = benimSayim / 100; // 9.67
        console.log(yüzlerBas);


        // //?Bazi hazır fonksiyonlar

        //  Math.floor();  //* her zaman en yakin alt tam sayiya yuvarlar
        //  Math.ceil();  //* her zaman en yakin ust tam sayiya yuvarlar
        //  Math.trunc(); //* sayinin tam kismini alir.
        //  Math.round(); //* en yakin tam sayiya yuvarlar.
        //  Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.
        //  toFixed(basamakSayısı): // . dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı             içine       verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.

        // console.log( `YüzlerBas: ${Math.trunc(yüzlerBas)}, 
        // OnlarBas: ${Math.trunc( onlarBas)}, birlerbas : ${birlerBas}`)  // YüzlerBas: 9, OnlarBas: 6, birlerbas : 7


        //     const hazirSayi = 56.788888;

        // console.log(`hazirSayi of Circle: ${hazirSayi.toFixed(3)} `); // 56.789
        // console.log(`hazirSayi of Circle: ${Math.floor(hazirSayi)} `); // 56
        // console.log(`hazirSayi of Circle: ${Math.ceil(hazirSayi)} `);   //57
        // console.log(`hazirSayi of Circle: ${Math.trunc(hazirSayi)} `);  // 56
        //  console.log(`hazirSayi of Circle: ${Math.round(hazirSayi)} `);  //57

        // const randomNum = Math.random();
        //  console.log(randomNum);

        // const randomNum2 = Math.random() * 10;
        // console.log(randomNum2);
        // console.log(Math.round(Math.random() * 10));



        //! **(üs alma operatoru)

        const üs1 = 5;
        const üs2 = 3;
        console.log(üs1 ** üs2);      // 8



        // Dairenin alanı, pi çarpı yarıçapın karesidir (A = π r²).

        const pi = 3.14
        const yariCap = 9

        const alan = pi * yariCap ** 2      // 3.14 * 81 
        console.log(alan)                   //254,34




        //! 🔥🔥🔥              Artırma ve Eksiltme Operatörleri


        //? ++ ve -- operatörleri 1 artırır veya 1 eksiltir

        //sonrası artırma ve eksiltme

        
        let number1 = 6;
       // let numberNew = number1 // 6
       // number1= number1 +1// 7
        let number1New = number1++; // önce atadı sonrasında number1 değişkenini 1 artırdı
        
        console.log(number1New); // 6
        console.log(number1); // 7
        
        let newSayi = ++number1; // önce artır sonra ata
        console.log(newSayi); //8
        console.log(--newSayi); // 7
        console.log(newSayi--); // 7



        // //! 🔥🔥🔥              Atama Operatörleri


        //!     +=ekle ve sonucu ata

        let nums1 = 14;
        let nums2 = 17;
        // nums2=nums2 + nums1; 
        nums2+= nums1;   
        //? yukarıdaki gibi uzun uzun yazmak yerine += operatörünü kullanarak işlemimi kısaltmış oldum. Aynı şekilde diğer operatörler içinde geçerli.

        console.log(nums2); //31


        let num14 = 6
        let num15 = 3

        // //! -= Çıkar ve Sonucu Ata
        num14 = num14 - num15;
        num14 -= num15;
        console.log(num14); // 3

        // //! *= Çarp ve Sonucu Ata
        num14 = num14 * num15;
        num14 *= num15
        console.log(num14) //18
        
        
        //! /= Böl ve Sonucu Ata
         num14 = num14 / num15;
        num14 /= num15;
        console.log(num14);


        // //! /= Bölümden Kalanı Bul ve Ata
        num14 = num14 % num15;
        num14 %= num15;
        console.log(num14);



        // //! **= Üs Al ve Sonucu Ata
        num14 = num14 ** num15;
        num14 **= num15;
        console.log(num14);



        // //! 🔥🔥🔥              Karşılaştırma Operatörleri

        //?    == (eşit mi)    ===(eşit ve türleri aynı mı)
        
        
        const num16 = 27
        console.log(num16==27);      // true
        console.log(num16=="27");   //true
        // //? == (eşitlik operatörü), iki değeri karşılaştırırken tip dönüşümü yapar. Eğer karşılaştırılan değerler farklı tiplerde ise, JavaScript otomatik olarak bu değerleri aynı tipe dönüştürerek karşılaştırma yapar. Bu işlem sırasında, değerler eşitlenebilir bir forma getirilir ve ardından karşılaştırılır.


        console.log(num16===27);        //true
        console.log(num16==="27");      // false
        //? === operatörü otomatik tip dönüşümü yapmadığından dolayı, farklı tiplerdeki değerleri eşit olarak kabul etmez.tip ve değer aynı mı diye sorgular.

        
        
        // const user1 =prompt("lütfen bir sayı giriniz");
        // const user2 =prompt("lütfen bir sayı giriniz");

        // console.log(user1);
        // console.log(user2);




        console.log(true == 1); //true
        console.log(null == undefined);   // true
        // true boolean değeri 1 sayısı ile eşit kabul edilir, null ve undefined ise birbirine eşit kabul edilir.
        console.log(true === 1); // false
        console.log(null === undefined); // false



        //?   != (eşit değil mi)        !== (değerleri ve türleri eşit değil mi)

        console.log(15 !="15");    // false    çünkü değerleri birbirine eşit
        console.log(15 !=="15");    // true    çünkü typler eşit değil.



        //?    > , < (Büyük mü?, Küçük mü?)

        console.log(15 > 5);            //true
        console.log(15 < 5);            //false

        console.log("15" > 5);          //true
       
        console.log("a" > "b"); // false.String ifadelerde ASCII'ye gore kiyaslama yapilir.
        console.log("a".charCodeAt()); // 97
        console.log("b".charCodeAt()); // 98
        //. .charCodeAt() metodu string karakterin ASCII karşılığını verir.
        console.log("a" > "A");// true



        //? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

        console.log(15 >= 15);  //true
        console.log(15 <= 15);  //true
        console.log(15 >= 19);  //false
        console.log("29" >= 19);  //true



        //! 🔥🔥🔥              Mantıksal Operatörler


        //? && and(ve)


        console.log(true && true); //true
        console.log(" "  && true);  //true
        console.log(5 && "merhaba");    // "merhaba"   5 true ifade,dönmeye devam ediyor..."merhaba " truty ifade...son gördüğü true ya da truty ifadeyi dönüyor

        console.log(0 && "dünya");  // 0 ilk gördüğü false ya da falsy değeri görüyor,diğerine hiç bakmıyor

        console.log(5 && 0);    // 0
        console.log(true && false); // false




        //!    || (or)


        console.log(true || false);     //true
        console.log(5 || 15);           // 5
        console.log(5 || 0);            // 5
        console.log("" || "merhaba");   // "merhaba"
        console.log("" || 0);           // 0

        // || operatoru true ve truthy değer arar. ilk gördüğü true veya truthy döner.Bulamazsa son gördüğü false veya falsy değeri döner.




        // ! not
        console.log(!true) // false
        console.log(!false) // true
        console.log(!0) // true
        console.log(!5) // false


        
        // falsy
        console.log(Boolean(false)) // false
        console.log(Boolean(0)) // false
        console.log(Boolean(-0)) // false
        console.log(Boolean(0n)) // false
        console.log(Boolean("")) // false (boş string)
        console.log(Boolean(null)) // false
        console.log(Boolean(undefined)) // false
        console.log(Boolean(NaN)) // false

        // truthy
        console.log(Boolean(true)) // true
        console.log(Boolean({})) // true (boş object)
        console.log(Boolean([])) // true (boş array)
        console.log(Boolean(5)) // true
        console.log(Boolean("0")) // true (dolu string)
        console.log(Boolean("false")) // true (dolu string)
        console.log(Boolean(Infinity)) // true
        console.log(Boolean(new Date())) // true (tarih methodları)
        console.log(Boolean(function () {})) // true (boş fonksiyon)
        console.log(Boolean(function () {console.log("Hello World!")})) // true (boş fonksiyon)


        // //! İşlem Önceliği sıralaması
        // 1. ! (not)
        // 2. && (and)
        // 3. || (or)
        const karşilaştırma = ("merhaba" && "dünya") || false || (28 && 67 && !0)
        console.log(karşilaştırma) // dünya



        // //* kullanıcıdan vize ve final notunu prompt olarak alın. sabit bir canEgrisi(ortalama) belirleyiniz.
// //!Kullanıcının vize ve final ortalaması canEgrisine eşit veya büyükse Kullanıcıya "Geçtiniz" mesajı dönünüz. Eşit veya büyük değilse "Kaldınız" şeklinde mesaj dönününüz.
// //! Not: prompt tan gelen veriler string olarak geliyor o nedenle dönüştürme işlemi yapıyoruz.
// let vize = Number(prompt("Lütfen vize notunuzu giriniz ?"))
// let final = Number(prompt("Lütfen final notunuzu giriniz ?"))
// let canEgrisi = 65
// let sonuc =
//   (Math.round((vize + final) / 2) >= canEgrisi && "Geçtiniz!") || "Kaldınız!"
// console.log(sonuc)

// * =============================================
// *            TIP DONUSUMLERI
// * =============================================

// let sayi = prompt("Bir sayi giriniz:") //? 100       //promptan girilen her değer string dir
// console.log(typeof sayi)
// let sayi2 = 10
// sayi = sayi + sayi2 //? concatination   //100+10 =110   string+string veri topladık
// console.log(sayi)



// let sayi = prompt("Bir sayi giriniz:") //? 100
// console.log(typeof sayi)
// let sayi2 = 10
// sayi = sayi + sayi2 //? concatination      
// console.log(++sayi)                 //100+10 ve 1 arttır dedik ama sonuç 111 değil 10011 olur çünkü number hale getiriyor



// let sayi = Number (prompt("Bir sayi giriniz:")) //? 100
// console.log(typeof sayi)                       // type de artık string değil number oldu
// let sayi2 = 10
// sayi = sayi + sayi2 //? concatination      
// console.log(++sayi)                         //bu sefer 111 cıktı,çünkü Number fonksiyounu kullandık ve bu Number değer cıkardı sonucu


console.log(Number("123"));                  //? 123 string girip Number olarak çıkıyor
// console.log(Number("123")) //? 123
// console.log(Number("12.3")) //? 12.3
// console.log(Number("0")) //? 0
// console.log(Number(" ")) //? 0               //string içinde space -boşluk bırakınca da yine sonuç 0
// console.log(Number("")) //? 0                //string içinde space -boşluk bırakmayınca da yine sonuç 0
// console.log(Number(null)) //? 0              //string içinde null yazınca da  yine sonuç 0
// console.log(Number(undefined)) //? NaN       

// const myNumber = "threezeroone" 
// console.log(myNumber) //? NaN     string rakam formatında yazılmadığı için sonucu NaN cıkar.
// let myNumber2 = Number(myNumber)
// console.log(myNumber2) //? NaN
// console.log(typeof myNumber2) //? number

// const dolar = "1000.3"
// const tl = "2000.2"

// const totalMoney = Number(dolar) + +tl
// console.log(totalMoney)

// //* ALternatif olarak parseInt() ve parseFloat() da kullanilabilir.
// const dolarInt = parseInt(dolar) //? tamsayiya cevirir
// console.log(dolarInt)
// const tlFloat = parseFloat(tl) //? virgüllü sayiya çevirir
// console.log(tlFloat)

// console.log(parseFloat(null)) //? NaN
// console.log(parseFloat("")) //? NaN
// console.log(parseFloat(undefined)) //? NaN

// //? String
// const myNumber3 = 2000.5
// console.log(String(myNumber3))