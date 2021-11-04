
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...numbers){
    let primeNumbers = []
    let nonPrimeNumbers = []

    //!Big O Notation değerinin artmaması için iç içe döngü kullanılmaktan kaçınıldı
    //? 
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] < 2){
            nonPrimeNumbers.push(numbers[i])
        }else if(numbers[i] == 2 || numbers[i] == 3){
            primeNumbers.push(numbers[i])
        }else{
            let number = numbers[i] 
            for(let x = 2; x <= Math.sqrt(number); x++){
                if(number % x == 0){
                    nonPrimeNumbers.push(number)
                    break;
                }else if(number % x != 0 && Math.floor(Math.sqrt(number)) == x){
                    primeNumbers.push(number)
                }
            }
        }
        
    }
    console.log(`Asal Sayılar:\n${ primeNumbers }`)
    console.log(`\n\n\nAsal Olmayan Sayılar:\n${nonPrimeNumbers}`)
}

// findPrime(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46)

function findPrimeTo1000(callback){
    let nums = []
    for(let i = 0; i<1000; i++){
        nums.push(i)
    }

    callback(...nums)
}
findPrimeTo1000(findPrime)