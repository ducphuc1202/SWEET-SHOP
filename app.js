var arrayLoiChuc = ["Chúc em ngày càng xinh đẹp, dễ thương, sớm thành hoa khôi",
                     "Sẽ luôn vui vẻ, hạnh phúc và yêu đời, và sẽ càng tốt, nếu người làm em hạnh phúc là anh",
                     "Tuổi mới thành công trên con đường mình chọn, học giỏi hơn nữa",
                     "Sẽ nhận được nhiều điều tốt đẹp, mọi việc đều như mong muốn nhé",
                     "Và nhớ là, bên cạnh em sẽ luôn có anh, thương em, yêu em và quan tâm em",
										 "Và chúc em - sẽ là bạn gái của anh một ngày nào đó",
                     "Hết lời chúc rồi, không biết chúc gì nữa. Hy vọng đây là món quà nho nhỏ dành tặng em trong ngày sinh nhật. Vì cũng không biết làm gì hơn. Mong là nó mang lại chút niềm vui nho nhỏ!!! Happy Birthday Em - Người con gái anh thương"];
var i = 0;
function loiChucNext() {
    document.getElementById("foryou").innerHTML = arrayLoiChuc[i];
    i++;
    if(i === 7) {
        i = 0;
    }
}
