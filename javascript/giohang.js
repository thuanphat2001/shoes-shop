var keyLocalStorageItemGioHang = 'danhsachItemGioHang'


//                              TẠO ITEM GIỎ HÀNG
function taoDoiTuongGioHang(idProduct, img, nameSpham, price, soluong){
    var itemGioHang= new Object()
    itemGioHang.idProduct = idProduct
    itemGioHang.img = img
    itemGioHang.nameSpham = nameSpham
    itemGioHang.price=price
    itemGioHang.soluong=soluong

     return itemGioHang
}

// --------------------------------------------------------------------------------------------
//                  LẤY RA DS ITEM GIỎ HÀNG TỪ LOCAL STORAGE
function layDanhSachGioHang(){
    var danhSachItemGioHang = new Array();
    
    // lấy chuõi json
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang)

    // chuyển từ json sang ds item
    if(jsonDanhSachItemGioHang != null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang)    
    return danhSachItemGioHang
}

// --------------------------------------------------------------------------------------------
//                  LƯU TRỮ DANH SÁCH ITEM
function luuDsItemGioHangVaoStorage(danhSachItemGioHang){
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang)

    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang)
}

// --------------------------------------------------------------------------------------------
//                  LẤY ITEM TỪ LOCAL STORAGE
function laydanhSachSanPhamTuLocalStorage(){
    var jsonDanhSachSanPham = localStorage.getItem('danhsachItemGioHang')
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham)
    return danhSachSanPham
}

function laySanPham(idProduct){
    var sanPham = new Object()

    var danhSachSanPham = laydanhSachSanPhamTuLocalStorage()
    danhSachSanPham.forEach(sanPhamHienTai => {
        if(sanPhamHienTai.idProduct == idProduct){
            sanPham = sanPhamHienTai
        }
    })
    sanPham = taoDoiTuongGioHang(sanPham.idProduct, sanPham.img, sanPham.nameSpham, sanPham.price, sanPham.soluong)
    
    return sanPham
}

// ------------------------------------------------------------------------------------------------------

