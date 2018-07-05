var arrayLoiChuc = ["Chúc Huyền ngày càng xinh đẹp, dễ thương, luôn là hoa khôi trong lòng ai đó",
                     "Sẽ luôn vui vẻ, hạnh phúc và yêu đời",
                     "Tuổi mới thành công trên con đường mình chọn, học giỏi hơn nữa",
                     "Sẽ nhận được nhiều điều tốt đẹp, mọi việc đều như mong muốn nhé",
                     "Và quan trọng là: Tuổi mới đừng quên thằng bạn này :v",
                     "Hết lời chúc rồi, không biết chúc gì nữa. Hy vọng đây là món quà nho nhỏ dành tặng m trong ngày sinh nhật"];
var i = 0;
function loiChucNext() {
    document.getElementById("foryou").innerHTML = arrayLoiChuc[i];
    i++;
    if(i === 6) {
        i = 0;
    }
}