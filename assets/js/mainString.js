function layBien(a) {
    return bien = document.getElementById(a).value;
}
function demSpace(chuoiNhap) {
    let chuoi = layBien(chuoiNhap).trimEnd();
    let count = 0;
    for (let i = 0; i <= chuoi.length; i++){
        let sub = chuoi.substr(i, 1)
        if(sub ===" ") {
        count++;
        }
    }
    return count;
}
function formatStr(chuoiNhap) {
    let chuoi = ((layBien(chuoiNhap)).trim()).replace(/\r?\n/g, "")
    let end= chuoi.replace(/\s/g,"")
    return end;
}

// ===Cau 11
document.getElementById('run11').addEventListener("click", function () {
    document.getElementById('trakq11').textContent=demSpace('so11')
})
// ===Cau 12
document.getElementById('run12').addEventListener("click", function () {
    document.getElementById('trakq12').textContent = formatStr('so12')
})
document.getElementById('so12').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById('so12').value += " \r\n "
        console.log("Bạn đã nhập Enter")
    }
});

// ===Cau 13
document.getElementById('run13').onclick = function () {
    let chuoi = layBien('so13').trim();
    let xuat=""
    for (let i = 1;i<=chuoi.length;i++) {
        xuat+= chuoi.substr(-i,1)
    }
    document.getElementById('trakq13').textContent = xuat;
}
// ===Cau 14
document.getElementById('run14').onclick = function () {
    let chuoi = layBien('chuoi14-full').trim();
    let sub = layBien('chuoi14').trim();
    let xuat = "Vị trí chuỗi s2 xuất hiện trong chuỗi s1 là vị trí thứ "
    // for (let i = 1; i <= chuoi.length; i++) {
    //     xuat += chuoi.substr(-i, 1)
    // }
    let pos = chuoi.indexOf(sub);
    document.getElementById('trakq14').textContent = xuat+pos;
}
// ===Cau 17
document.getElementById('run17').onclick = function () {
    let kqMin = 0;
    let kqMax = 0;
    let so1 = parseFloat(layBien('so17-1'))
    let so2 = parseFloat(layBien('so17-2'))
    let so3 = parseFloat(layBien('so17-3'))
    kqMin = Math.min(so1, so2, so3);
    kqMax = Math.max(so1, so2, so3);
    document.getElementById('trakq17').innerHTML = "Giá trị Min của 3 số  bằng "+kqMin+"<br/> Giá trị Max bằng "+kqMax;
}
// ===Cau 17
function tinhTongdq(num) {
    if (num < 0) {
        return 0;
    }
    return num + tinhTongdq(num-1)
}

document.getElementById('run19').onclick = function () {
    let num = parseFloat(layBien('so19'))
    document.getElementById('trakq19').textContent= tinhTongdq(num)
}
