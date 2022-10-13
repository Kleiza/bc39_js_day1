/**
 * Bài tập 1: Tính lương nhân viên
 * 
 *  Đầu vào:
 *      Lương 1 ngày = salaryDaily = 100.000
 *      Số ngày làm = workDay
 *          
 *  Xử lý:
 *      Tổng lương = salaryTotal = salaryDaily * workDay
 * 
 *  Đầu ra:
 *      In kết quả salaryTotal lên màn hình
 * 
 */
    var salaryDaily = 100000;
    var workDay = 30;
    var salaryTotal = salaryDaily * workDay;
    var rs1 = "Tổng lương nhân viên là: " + salaryTotal + "VND";
    console.log(rs1);


/**
 * Bài tập 2: Tính giá trị trung bình
 * 
 *  Đầu vào:
 *      Nhập 5 số thực num1, num2, num3, num4, num5
 * 
 *  Xử lý:
 *      Tính tổng 5 số = numTotal = num1 + num2 + num3 + num4 + num5
 *      Tính trung bình = numAverage = numTotal / 5
 * 
 *  Đầu ra:
 *      In kết quả numAverage lên màn hình
 *      
 */

    var num1 = 5;
    var num2 = 4;
    var num3 = 7;
    var num4 = 8;
    var num5 = 10;
    var numTotal = num1 + num2 + num3 + num4 + num5;
    var numAverage = numTotal/5;
    var rs2 = "Giá trị trung bình của 5 số là: " + numAverage;
    console.log(rs2);



/**
 * Bài tập 3: Quy đổi tiền
 * 
 *  Đầu vào:
 *      Giá trị quy đổi hiện tại 1USD = 23.500VND -> gán biến exchangeRate = 23500;
 *      Nhập số tiền đô cần quy đổi -> gán biến usdTotal;
 *  
 *  Xử lý:
 *      Số tiền VND sau quy đổi -> gán biến vndTotal; 
 *      Tính tiền VND: vndTotal = usdTotal * exchangeRate;
 * 
 *  Đầu ra:
 *      In kết quả vndTotal lên màn hình
 */

    var exchangeRate = 23500;
    var usdTotal = 300;
    var vndTotal = exchangeRate * usdTotal;
    var rs3 = "Tổng số tiền VND sau khi quy đổi là: " + vndTotal + "VND";
    console.log(rs3);



/**
 * Bài tập 4: Tính diện tích, chu vi hình chữ nhật
 * 
 *  Đầu vào:
 *     Giá trị chiều dài: hcnDai
 *     Giá trị chiều rộng: hcnRong
 * 
 *  Xử lý:
 *      Diện tích hcn: hcnS = hcnDai * hcnRong
 *      Chu vi hcn: hcnV = (hcnDai + hcnRong)*2
 * 
 *  Đầu ra:
 *      In kết quả hcnS và hcnV lên màn hình
 */

    var hcnDai = 10;
    var hcnRong = 5;

    var hcnS = hcnDai * hcnRong;
    var rs4 = "Diện tích hcn là: " + hcnS;
    
    var hcnV = (hcnDai + hcnRong)*2;
    var rs5 = "Chu vy hcn là: " + hcnV;

    console.log(rs4);
    console.log(rs5);


/**
 * Bài tập 5: Tính tổng 2 ký số
 * 
 *  Đầu vào:
 *      Ký số nhập vào: number
 *
 *  Xử lý:
 *      Tính số hàng đơn vị: number chia 10 lấy phần dư -> numberDV = number % 10
 *      Tính số hàng chục: number chia 10 lấy phần nguyên -> numberCh = number / 10
 *      Tổng 2 ký số numberTotal = numberDV + numberCh;
 * 
 *  Đầu ra:
 *      In kết quả numberTotal lên màn hình
 */

    var number = 43;

    var numberDV = number%10;
    console.log(numberDV);
    var numberCh = Math.floor(number/10);
    
    console.log(numberCh);

    var numberTotal = numberDV + numberCh;
    var rs6 = "Tổng 2 ký số của " + number + " là: " + numberTotal;
    console.log(rs6);

