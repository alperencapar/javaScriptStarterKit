//? 1
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...numbers){
    let primeNumbers = []
    let nonPrimeNumbers = []

    //!Big O Notation değerinin artmaması için iç içe döngü kullanılmaktan kaçınıldı
    //? fonksiyonun O değeri -> O(n * √n) (örn. n = 100 ise 100 * √100 -> 1000)
    //? karekök fonksiyonu kullanılmasaydı -> O(n^2) olacaktı.
    for(let i = 0; i<numbers.length; i++){
        //fonksiyon çağırısı yapılırken gönderilen sayılar içerisine döngüye giriyoruz(sayılara erişebilmek için)
        
        //gönderilen sayı 2'den küçük ise
        if(numbers[i] < 2){
            //asal sayı olmayanlar listesine ekle
            nonPrimeNumbers.push(numbers[i])
        }else if(numbers[i] == 2 || numbers[i] == 3){
            //sayı 2 ya da 3 ise asal sayılar listesine ekle
            primeNumbers.push(numbers[i])
        }else{
            //yukarıdaki şartlar sağlanmadıysa
            let number = numbers[i] //number[i] yerine number yazabiliriz. Bunu döngünün başında da yapabilirdik
            //döngü sayının kareköküne kadar çalışıyor. Çünkü gereksiz yere döngü çalıştırarak program verimliliğini düşürmek istemeyiz :)
            for(let x = 2; x <= Math.sqrt(number); x++){
                //sayı x ile tam bölünüyorsa
                if(number % x == 0){
                    //asal olmayan sayılar listesine ekle
                    nonPrimeNumbers.push(number)
                    break;
                }else if(number % x != 0 && Math.floor(Math.sqrt(number)) == x){
                    //sayının x ile bölümünden kalan 0 değil VE sayının karekökü x ile aynı değere sahip ise
                    //asal sayılar listesine ekle
                    primeNumbers.push(number)
                    //floor fonksiyonunu kullandık çünkü x integer yani tam sayı ama karekök virgüllü yani float değer olabilir.
                    //javascript type safe olmadığı için ve float değeri yerine sayısal olarak sadece number olduğu için kullanıldı
                }
            }
        }
        
    }

    //template literal kullanılarak string ve değişken birleştirme kolaylaştırıldı
    console.log(`Asal Sayılar:\n${ primeNumbers }`) 
    console.log(`\n\n\nAsal Olmayan Sayılar:\n${nonPrimeNumbers}`)
}

// findPrime(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46)

//? 4
// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız

function findPrimeTo1000(callback){
    let nums = []
    //0'dan 1000'e kadar array oluşturmak için for döngüsü açıldı
    for(let i = 0; i<1000; i++){
        nums.push(i)
        //elemanlar array'e eklendi
    }
    //callback değişkeni aslında değişebilir. findPrime veya asalSayiBul şeklinde değiştirilebilir.
    //callback değişkeni içerisine fonksiyon gönderdik ve bu sayede şu anki fonksiyonun içinde, istediğimiz yerde gönderdiğimiz fonksiyonu kullanabiliyoruz
    callback(...nums)   //fonksiyonun içerisine oluşturduğumuz array'i gönderdik.
}
// findPrimeTo1000(findPrime)  //fonksiyon çağrısı yaparken değişken olarak findPrime fonksiyonunu gönderdim


//! -----------------------


//? 2
//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız
//bölenleri bulma, bölenleri toplama ve arkadaş sayıları tespit etme olarak üç fonksiyona ayrıldı

//gönderilen array'deki sayıların bölenleri bulunuyor
function numberDivisor(number){
    let numberDivisors = []
    for(let i = 0; i < number; i++){
        if(number % i == 0){
            numberDivisors.push(i)
        }
    }

    return numberDivisors;
}

//bölenler toplanıyor
function numberSum(numbers){
    let total = numbers.reduce(((total, amount) =>{
        return total + amount
    }))
    return total
}

//sayıların arkadaş sayı olup olmadıkları belirleniyor
function isFriendlyNumber(...numbers){
    let hash = {}
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i]
        let numDivisons = numberDivisor(number) //bölenler bulunuyor
        let total = numberSum(numDivisons)      //bölenler toplanıyor
        hash[number] = total                    //hash objesine, number anahtarı ile toplam değişkeni atanıyor

        //çıkan sonuçtaki toplam değeri daha önceden bulunduysa:
        if(total in hash){
            //toplam ve şu an döngü içerisindeki sayıyı gönder
            return [hash[number],number]    //hash[number] -> hash değişkeninin içindeki değer, yani toplam değeri veriyor.
            //tek başına number -> numbers[i]
        }
    }

    
}

console.log(isFriendlyNumber(220,284,17296,18416))
// console.log(isFriendlyNumber(17296,18416))