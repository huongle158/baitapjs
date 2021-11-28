function layBien(a) {
    return bien = parseFloat(document.getElementById(a).value);
}

function checkPrime(so1) {
    let count = 0;
    let kq = "";
    if (so1 < 2) {
        kq = "Đây không phải là số nguyên tố";
    } else {
        for (let i = 2; i < so1 - 1; i++) {
            if (so1 % i === 0) {
                ++count;
            }
        }
        if (count === 0) {
            kq = "Đây là số nguyên tố"
        } else {
            kq = "Đây không phải số nguyên tố"
        }
    }
    return kq;

}

function print(n) {
    let print = "";
    for (i = 1; i <= n; i++) {
        print += i + " ";
    }
    return print;
}


//----------------Bài0
document.getElementById('run1').onclick = function () {
    let so1 = layBien('so1');
    document.getElementById('trakq1').innerHTML = checkPrime(so1);
}
//----------------Bài1
document.getElementById('run2').onclick = function () {
    let so2 = layBien('so2');
    document.getElementById('trakq2').innerHTML = print(so2);

}
//----------------Bài2

document.getElementById('runsole').onclick = function () {
    let sole = layBien('sole');
    let kq = ""
    for (let i = 1; i <= sole; i++) {
        if (i % 2 !== 0) {
            kq += i + " ";
        }
    }
    document.getElementById('trakqsole').textContent = kq;
}
//-----bai 3
document.getElementById('runsochan').onclick = function () {
    let sochan = layBien('sochan');
    let kq = ""
    for (let i = 1; i <= sochan; i++) {
        if (i % 2 === 0) {
            kq += i + " ";
        }
    }
    document.getElementById('trakqsochan').textContent = kq;
}
//-----bai 4
document.getElementById('runsont').addEventListener('click', function () {

    let sont = layBien('sont');
    let kq = "2 ";
    let count = 0;

    for (let i = 3; i <= sont; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 0) {
            kq += i + " ";
            continue;

        }
        count = 0;
    }

    document.getElementById('trakqsont').textContent = kq;












})
//-----Bai5
document.getElementById('run5').addEventListener('click', function () {

    let so5 = layBien('so5');
    let count = 0;
    for (let i = 1; i <= so5; i++) {
        count += i;
    }

    document.getElementById('trakq5').textContent = count;
})
//----Bai6
document.getElementById('run6').addEventListener('click', function () {

    let so6 = layBien('so6');
    let count = 0;
    for (let i = 1; i <= so6; i++) {
        count += Math.pow(i, 2);
    }

    document.getElementById('trakq6').textContent = count;
})
//----Bai8
function checkLe() {
    let so8 = layBien('so8');
    let kq = "NO";
    if (so8 <= 0) {
        return "NO";
    }

    while (so8 > 0) {
        let t = so8 % 10;
        if (t % 2 == 0) {
            kq = "NO"
            return kq;
        } else {
            kq = "YES";
        }
        so8 = Math.floor(so8 / 10);

    }

    return kq;
}
document.getElementById('run8').onclick = function () {
    document.getElementById('trakq8').textContent = checkLe();
}
//----Bai10
document.getElementById('run10').addEventListener('click', function () {
    let kq = "";
    // let so10 = layBien('so10');
    //BAng cuu chuong tu 2 den 9
    for (let i = 2; i <= 9; i++) {
        //in tu 1-10
        for (let j = 1; j <= 10; j++) {
            kq += `${i} x ${j} = ${i*j} | `
        }
        kq += "<br/>"

    }


    document.getElementById('trakq10').innerHTML = kq;
})
//Bai9 Kiem tra số đối xứng
document.getElementById('run9').addEventListener('click', function () {
    let kq = "";
    let so9 = layBien('so9');
    let orginal = so9;
    let soDao = 0;
    while (so9 > 0) {
        let t = so9 % 10;
        soDao = soDao * 10 + t
        so9 = Math.floor(so9 / 10)
    }
    if (soDao === orginal) {
        kq="Đây là số đối xứng"
    }
    else {
        kq = "Đây không phải là số đối xứng"
    }

    document.getElementById('trakq9').textContent = kq;
})

