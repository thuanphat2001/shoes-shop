// CHANGE PIICTURE

const bigImg = document.querySelector('.detail-img')
const smallImg = document.querySelectorAll('.detail-small-img')

smallImg.forEach((imgItem)=>{
    // console.log(imgItem);
    imgItem.addEventListener('click',function(){        
        bigImg.src=imgItem.src
    })
})

// -----------------------------------------------------------------------------
//                  BUY PRODUCT
const result = document.querySelector('#number-quality')
var resultNum= result.value
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const buyBtn=document.querySelector('.order')

btn1.addEventListener('click',function(){
    if(!isNaN(resultNum) && result.value>1){
        result.value --
    }
    console.log(result.value)
    return false;
})

result.onchange = function() {
    if(this.value==0){
        this.value = 1
    }
}
result.onkeypress=function(){
    if ( isNaN(this.value + String.fromCharCode(event.keyCode) )){
        return false;
    }
}
btn2.addEventListener('click',function(){
    if(!isNaN(resultNum)){
        result.value++
    }
    return false;
})

function check(){
    for(key in localStorage)
        if(key == "account")
            return 1
    alert("Đăng nhập để mua sản phẩm")
    return 0
}



// -----------------------------------------------------------------------------------
//                        ADD PRODUCT 
const nodeProduct = document.querySelector('.chi-tiet-sp')
const idProduct = nodeProduct.id
const infor =document.querySelector('.infor')

const img = nodeProduct.querySelector('.detail-img').src
const nameSpham = document.querySelector('.infor-title').innerText
const price = infor.querySelector('.price-product').innerText
const inputItem = infor.querySelector('.price-number-quality')  
   
  
function duavaogiohang(idProduct,img,nameSpham,price,soluong){
    // lấy toàn bộ item
    var danhsachItemGioHang = layDanhSachGioHang();

    // thêm item vào giỏ hàng
    var coTonTaiTrongGioHang = false;
    danhsachItemGioHang.forEach( itemGioHangHienTai=>{
        // Nếu tồn tại tăng số lượng
        if(itemGioHangHienTai.idProduct== idProduct){                        
            itemGioHangHienTai.soluong = Number(itemGioHangHienTai.soluong) + Number(soluong) ;
            coTonTaiTrongGioHang = true;
        }
    })
    // Nếu k có,tạo đối tượng mới và thêm vào ds item
    if(coTonTaiTrongGioHang==false){
        var itemGioHang = taoDoiTuongGioHang(idProduct,img,nameSpham,price,soluong);
        danhsachItemGioHang.push(itemGioHang);
    }

    // lưu trữ lại vào local storage
    luuDsItemGioHangVaoStorage(danhsachItemGioHang)
}

// ---------------------------------------------------------------------------------
const wrapper = document.querySelector('.wrapper');

const modal = document.querySelector('.modal-container')

function hideModal(img,name){
    modal.innerHTML=`<div class="modal">
                <span class="modal-close" onclick= closeModal()><i class="fas fa-times"></i></span>
                <div class="modal-content">
                    <img src="${img}" alt="" class="modal-img">
                    <div class="modal-infor">
                        <span class="modal-name">${name}</span>
                        <span class="modal-title" ><i class="fas fa-check"></i>Đã được thêm vào giỏi hàng</span>
                    </div>
                </div>
                <a href="/giohang.html" class="modal-link">Giỏ hàng</a>
            </div>`
    modal.style.display = 'block'    
}
function closeModal(){

    modal.style.display = 'none'
}
window.addEventListener('click',function(e){
    if(e.target==modal ){
        modal.style.display = 'none'
    }
})