function reverse_num(n){
    return n.split("").reverse().join("");//split chuyển chuỗi thành mảng-> đảo ngược->trả về dãy chữ
}
function symmetrical_num(n){
    // flag = 1 => số đối xứng
    // flag = 0 => không phải số đối xứng

    let flag =0;
    if (reverse_num(n) === n) flag = 1;
    return flag;
}

let n= prompt(" Nhập chuỗi bạn muốn kiểm tra ");

let check = symmetrical_num(n);

if( check === 1 ) document.write(n + " Là chuỗi đối xứng");
else document.write(n + " Không phải là chuỗi đối xứng");