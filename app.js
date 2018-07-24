var arrayLoiChuc = ["Chúc bạn Huệ ngày càng xinh đẹp, dễ thương, sớm thành hoa khôi",
                     "Sẽ luôn vui vẻ, hạnh phúc và yêu đời",
                     "Tuổi mới thành công trên con đường mình chọn, học giỏi hơn nữa",
                     "Sẽ nhận được nhiều điều tốt đẹp, mọi việc đều như mong muốn nhé",
                     "Và nhớ là, có chuyện gì buồn, cần chia sẻ thì..... Just talk to me :v",
                     "Hết lời chúc rồi, không biết chúc gì nữa. Hy vọng đây là món quà nho nhỏ dành tặng bạn Huệ trong ngày sinh nhật. Vì cũng không biết làm gì hơn. Mong là nó mang lại chút niềm vui nho nhỏ!!! Happy Birthday"];
var i = 0;
function loiChucNext() {
    document.getElementById("foryou").innerHTML = arrayLoiChuc[i];
    i++;
    if(i === 6) {
        i = 0;
    }
}
