

let waktuAwal=new Date().setHours(10,25,21)
let waktuAkhir=new Date().setHours(12,0,0)
var kecepatanAwal=6

function jarakTempuh(awal,akhir){
    let selisih_ms=akhir-awal
    let selisih_m=Math.round(selisih_ms/(1000*60))
    let kecepatan=kecepatanAwal
    let jarakT=0
    while(selisih_m>0){
        if(jarakT==0){
            jarakT+=kecepatan*11
            selisih_m-=11
        }else if(selisih_m>9){
            jarakT+=kecepatan*10
            selisih_m-=10
        }else{
            jarakT+=kecepatan*selisih_m
            selisih_m-=selisih_m //selisih_m =0
        }
        kecepatan++
    }
    return jarakT+ " meter"
}
console.log(jarakTempuh(waktuAwal,waktuAkhir))
