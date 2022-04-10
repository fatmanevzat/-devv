function GetInLine() {

    let limit = document.getElementById("txtLimit").value;
    let txtBakiyes = document.getElementById("txtBakiye").value;
    let bakiyeler = txtBakiyes.split(',');
    
    var cikanlar = [];
    var siradakiler = [];
    
    for (let i = 0; i < bakiyeler.length; i++) {
    siradakiler.push([i, i + 1, bakiyeler[i]])
    }
    
    cikanlar = islem(limit, siradakiler, cikanlar, siradakiler.length);
    
    let spanSonuc = document.getElementById("spanSonuc");
    spanSonuc.innerText = cikanlar
    }
    
    function islem(limit, siradakiler, cikanlar, toplamKisiSayisi) {
    
    let siradakiler = [];
    
    for (let i = 0; i < siradakiler.length; i++) {
    
    let siradakiKisi = siradakiler[i];
    let siraNumarasi = siradakiKisi[1]
    let bakiyesi = siradakiKisi[2]
    bakiyesi -= limit;
    
    if (bakiyesi <= 0) //exit
    {
    cikanlar.push(siraNumarasi)
    }
    else
    siradakiler.push([i, siraNumarasi, bakiyesi])
    }
    
    if (cikanlar.length < toplamKisiSayisi)
    return islem(limit, siradakiler, cikanlar, toplamKisiSayisi)
    
    return cikanlar;
    }
    