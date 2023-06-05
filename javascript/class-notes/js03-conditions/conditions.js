        // * ===============================================
        // *                  KARAR YAPILARI
        // * ===============================================

        console.log("****** CONDITIONS *******")

        // const calismaSuresi = prompt("Calisma Süresi:")
        // let maas = prompt("maasinizi giriniz:")



        //? 2 koşullu
        // if (calismaSuresi >= 10){
        //     maas = maas * 1.1
        //      console.log("Zamli Maasiniz:",maas)     //55.0000001 yuvarlama hatası
        //     console.log(`Zamli Maasiniz: ${maas}`);
        //     } else{
        //         console.log("uzgunuz zam yok",maas)
        //     }
        //     console.log("güle güle");

        // //? 2 koşullu
        // if (calismaSuresi >= 10){
        // maas =Math.trunc(maas * 1.1)     //Math.trunc  tam ifade verir.55000
        // // console.log("Zamli Maasiniz:",maas)
        // console.log(`Zamli Maasiniz: ${maas}`);
        // } else{
        //     console.log("uzgunuz zam yok",maas)
        // }
        // console.log("güle güle");


        // //? tek koşullu
        // if (calismaSuresi >= 10){
        // maas =Math.round(maas * 1.1)     //Math.round  tam ifade verir.55000
        // // console.log("Zamli Maasiniz:",maas)
        // console.log(`Zamli Maasiniz: ${maas}`);
        // } 
        // console.log("güle güle");

       
       
       
       
        //? çok koşullu

        // const grade = prompt("please enter your grade")
        // let result = ""
        // if (grade < 40){
        //     result = "FF"
        // } else if(grade<=50){
        //     result ="DD"
        // } else if(grade <=65){
        //     result ="CC"
        // } else if(grade <=89){
        //     result ="BB"
        // } else {
        //     result="AA"
        // }
        // console.log(`your score:${result}`)



        // const grade = prompt("please enter your grade")
        //// let result = "" 
        //    let result =null  /*bu şekilde de yapsak olur,üstteki şekilde de yapsak olur */
        // if (grade < 0){
        //     console.log("grade can not be small than zero")
        // }
        //  else if (grade < 40){
        //     result = "FF"
        // } else if(grade<=50){
        //     result ="DD"
        // } else if(grade <=65){
        //     result ="CC"
        // } else if(grade <=89){
        //     result ="BB"
        // } else if (grade <=100){
        //     result="AA"
        // } else {
        //     console.log("grade can not be bigger than 100")
        // }            
        


        
        // if(result !=null) {

        //  console.log(`your score:${result}`)
        //    }

        
        // // kısa yol
        //    if(result){
        //     console.log(`your score:${result}`)
        //    }


        // //? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
        // //? yazdiriniz.

        // const n1 = +prompt("num1:")   //prompt önündeki + number'laştırıyor....
        // const n2 = +prompt("num2:")
        // const n3 = +prompt("num3:")

        
        // //* 1.YONTEM
        // //? nested if
        //  if (n1 > n2) {
        //  if (n1 > n3) {
        //  console.log("Biggest:", n1)
        //   }
        //  }

         // //? kosullarin logical operatorler yardimiyla birleştirilmesi
        // if (n1 >= n2 && n1 >= n3) {
        //   console.log("Biggest:", n1)
        // } else if (n2 >= n1 && n2 >= n3) {
        //   console.log("Biggest:", n2)
        // } else if (n3 >= n1 && n3 >= n2) {
        //   console.log("Biggest:", n3)
        // }


        // // //* 2.YONTEM
        // let biggest = n1

        // if (n2 >= biggest) {
        //   biggest = n2
        // }
        // if (n3 >= biggest) {
        //   biggest = n3
        // }
        // console.log(`${biggest} is biggest`)



        //**************** TERNARY *******************
        // const grade1 = prompt("Please enter your grade:")

        
        //  grade1 >=50 ? console.log("succed") : console.log("failed");  // not 50 den büyük veya eşit mı
        //  grade1 >=50 ? console.log("succed") : console.log("failed");


        // const score =grade1 >=50 ? ("passed") :("failed")
        // console.log(score);













        
        // const hız =90;
        // const mesaj = hız >=120 ? "hızlı" : "yavaş";
        // console.log(mesaj);                         //yavaş


        // const hız =150;
        // const mesaj = hız >=120 ? "hızlı" : "yavaş";
        // console.log(mesaj);           //hızlı


         


        // //? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanilmak zorundadir.
        //  const score1 = grade1 >= 50 ? "SUCCEED" : ""     //    : sonra boşluk bırakılmaz
        // console.log(score1)



        // //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, 2 durum var ise
        // //? Ternary kullanmak daha mantiklidir

        // const speed = 110 
        //   speed > 120 
        //   ? console.log("speedy") 
        //   : speed >=90 
        //   ? console.log("normal") 
        //   : console.log("low speed")

        // //? ayni örneğin if-else ile yapilmasi
        //  if (speed > 120) {
        //   console.log("Speedy")
        // } else if (speed >= 90) {
        //   console.log("Normal")
        // } else {
        //   console.log("Low Speed")
        // }

        //**************** SHORT-CIRCUIT *******************

        const age = 15

        let description = ""
        
        
        
        //? if-else ile yapma
        // if (age >= 18) {
        //   description = "Adult"
        // }

        //? Ternary ile yapma
        // description = age >= 18 ? "Adult" : ""

        
        
        
        
        
        //? Short-Circuit (Tek bir durum var ise short-circuit yontemi daha kisa oluyor)
        // age 18'e eşit veya daha büyükse (true ise) description'a Adult aktar aksi takdirde hiç bir şey yapma
        age >= 18 && (description = "Adult")

        //  age 18'e eşit veya daha büyük değilse (false ise ) description'a Adult aktar aksi takdirde hiç bir şey yapma
        // age < 18 || (description = "Adult") 

        console.log(description)


//**************** SWITCH-CASE *******************







