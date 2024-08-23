
// Hàm để lưu dữ liệu vào local storage
function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
// Hàm để lấy dữ liệu từ local storage
function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
// Gọi API và chuyển dữ liệu thành file JSON
fetch('https://660e29016ddfa2943b35f37c.mockapi.io/CAFE/User')
    .then(response => response.json())
    .then(data => {
        saveDataToLocalStorage('cafeData', data);
        const dsitem1 = data.slice(0, 3);
        const dsitem2 = data.slice(3, 6);
        const dsitem3 = data.slice(6, 9);
        console.log(data)
        showdata1(dsitem1)
        showdata2(dsitem2)
        showdata3(dsitem3)

    })
    .catch(error => console.error('Đã xảy ra lỗi:', error));

function displayData() {
    const data = getDataFromLocalStorage('cafeData');
    if (data) {
        // Nếu có dữ liệu trong local storage, hiển thị nó trên trang web
        showdata1(data);
    } else {
        // Nếu không có dữ liệu trong local storage, gọi API để lấy dữ liệu mới
        fetch('https://660e29016ddfa2943b35f37c.mockapi.io/CAFE/User')
            .then(response => response.json())
            .then(newData => {
                // Lưu dữ liệu mới vào local storage
                saveDataToLocalStorage('cafeData', newData);

                // Hiển thị dữ liệu mới trên trang web
                showdata1(newData);
            })
            .catch(error => console.error('Đã xảy ra lỗi:', error));
    }
}
// Hàm hiển thị dữ liệu lên trang web
//Loaditem1
function showdata1(data) {
    let loaditem1 = document.getElementById('loaditem1');
    let kq = "";
    data.forEach(item => {
        kq += ` <div class="card_${item.id}">
      <div class="Rectangle-card"></div>
      <div class="img-card">
          <div class="img2">
          <img src="./Picture/rating_product.svg" alt="">
          </div>
          <div class="img1">
              <img src="${item.img}" alt="">
          </div>
          <div class="card-info d-flex">
              <div class="text-info-1-1"style=" white-space: nowrap;">
                  <p>${item.name}</p>
              </div>
              <div class="text-info-2-2">
                  <p>${item.price} K</p>
              </div>
          </div>
          <div class="three-button d-flex">
              <div class="button_1 d-flex">
              <button id="btn-all" onclick="addToCart(this)" data-id="${item.id}" data-img="${item.img}" data-name="${item.name}" data-price="${item.price}">
                      <img src="./Picture/Cart1.svg" alt="">
                  </button>
                  <span>bread with meat and<br>vegetables</span>
              </div>                 
          </div>
      </div>        
  </div>`
    });
    loaditem1.innerHTML = kq;
}
//Loaditem2
function showdata2(data) {
    let loaditem2 = document.getElementById('loaditem2');
    let kq = "";
    data.forEach(item => {
        kq += ` <div class="card_${item.id}">
      <div class="Rectangle-card"></div>
      <div class="img-card">
          <div class="img2">
          <img src="./Picture/rating_product.svg" alt="">
          </div>
          <div class="img1">
              <img src="${item.img}" alt="">
          </div>
          <div class="card-info d-flex">
              <div class="text-info-1-1" style=" white-space: nowrap;">
                  <p>${item.name}</p>
              </div>
              <div class="text-info-2-2">
                  <p>${item.price} K</p>
              </div>
          </div>
          <div class="three-button d-flex">
              <div class="button_1 d-flex">
              <button id="btn-all" onclick="addToCart(this)" data-id="${item.id}" data-img="${item.img}" data-name="${item.name}" data-price="${item.price}">
                      <img src="./Picture/Cart1.svg" alt="">
                  </button>
                  <span>bread with meat and<br>vegetables</span>
              </div>                 
          </div>
      </div>        
  </div>`
    });
    loaditem2.innerHTML = kq;
    console.log(loaditem2)
}
//Loaditem3
function showdata3(data) {
    let loaditem3 = document.getElementById('loaditem3');
    let kq = "";
    data.forEach(item => {
        kq += `<div class="card${item.id}">
        <div class="Rectangle-card"></div>
        <div class="img-card">
            <div class="img2">
                <img src="./Picture/rating_product.svg" alt>
            </div>
            <div class="img1">
                <img src="${item.img}"
                    alt>
            </div>
            <div class="card-info d-flex">
                <div class="text-info-1">
                    <p>${item.name}</p>
                </div>
                <div class="text-info-2">
                    <p><span>${item.price}</span> K</p>
                </div>
            </div>
            <div class="three-button d-flex">
                <div class="button-1">
                    <button><span>Hot</span></button>
                </div>
                <div class="button-2">
                    <button><span>Cold</span></button>
                </div>
                <div class="button-3">
                <button id="btn-all" onclick="addToCart(this)" data-id="${item.id}" data-img="${item.img}" data-name="${item.name}" data-price="${item.price}">
                <img src="./Picture/Cart1.svg" alt="">
                </button>
            </div>
            </div>
        </div>
    </div>`
    });
    loaditem3.innerHTML = kq;
    console.log(loaditem3)
}

//Dữ liệu giả định
const username = 'tranngochoang'
const password = 123456
// Lấy tham chiếu đến nút gửi
let btnSubmit = document.getElementById('btn-submit');
/// Thêm trình nghe sự kiện cho nút gửi
function loginRequest(event) {
     // Ngăn mặc định hành vi gửi biểu mẫu
    event.preventDefault();
    // Lấy giá trị của tên người dùng và mật khẩu từ các trường nhập liệu
    let usernameInput = document.getElementById('exampleInputEmail1');
    let passwordInput = document.getElementById('exampleInputPassword1');

    // Lấy giá trị từ các trường nhập liệu
    let username = usernameInput.value;
    let password = passwordInput.value;

    // Kiểm tra xem tên người dùng có phải là 'tranngochoang' và mật khẩu có phải là '123456' hay không
    if (username === 'tranngochoang' && password === '123456') {
        alert('Login successful!'); // Hiển thị cảnh báo cho đăng nhập thành công
    } else {
        alert('Incorrect username or password.');  // Hiển thị cảnh báo cho thông tin đăng nhập không chính xác
    }
}
btnSubmit.addEventListener('click', loginRequest);
function showcart(element) {
    var x = element.parentElement.nextElementSibling; // Lấy phần tử kế tiếp của cha của hình ảnh
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const itemId = button.getAttribute('data-id');
//Hàm thêm sản phẩm
function addToCart(button) {
    // Lấy thông tin sản phẩm từ các thuộc tính data-*
    const itemId = button.getAttribute('data-id');
    const itemName = button.getAttribute('data-name');
    const itemImg = button.getAttribute('data-img');
    const itemPrice = button.getAttribute('data-price');

    // Thêm sản phẩm vào giỏ hàng
    const item = {
        id: itemId,
        name: itemName,
        img: itemImg,
        price: itemPrice,
        quantity: 1 // Thêm thuộc tính quantity vào item
    };

    // Kiểm tra nếu giỏ hàng đã tồn tại trong localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];//napj vip ddere

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItemIndex = cart.findIndex(item => item.id === itemId);

    if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng của nó
        cart[existingItemIndex].quantity += 1;
        alert("Đã thêm vào giỏ hàng: " + itemName + ", $" + itemPrice);
    } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm nó vào
        cart.push(item);
        alert("Đã thêm vào giỏ hàng: " + itemName + ", $" + itemPrice);
    }

    // Lưu giỏ hàng đã cập nhật vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();


}
// Hàm cập nhật giao diện người dùng cho giỏ hàng
function updateCartUI() {
    // Lấy tham chiếu đến phần tử chứa các mục trong giỏ hàng
    const cartContainer = document.getElementById('cartItems');
    
    // Lấy dữ liệu giỏ hàng từ local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Kiểm tra nếu giỏ hàng rỗng
    if (cart.length === 0) {
        // Nếu giỏ hàng rỗng, hiển thị thông báo trống
        cartContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
    } else {
        // Nếu giỏ hàng không rỗng
        // Tạo HTML cho từng mục trong giỏ hàng
        const cartHTML = cart.map(item => {
            // Tính tổng tiền của mỗi mục trong giỏ hàng
            const itemTotal = item.price * item.quantity;

            // Trả về HTML cho mỗi mục trong giỏ hàng
            return `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>Price: K${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <div class="Selectabc">
                            <button class="decreaseQuantity" onclick="decreaseQuantity('${item.id}')">-</button>
                            <button class="increaseQuantity" onclick="increaseQuantity('${item.id}')">+</button>
                            <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
                        </div>
                    </div>
                    <p class="Total">Total: $${itemTotal.toFixed(2)}</p>
                </div>
            `;
        }).join('');

        // Hiển thị HTML của giỏ hàng lên trang web
        cartContainer.innerHTML = cartHTML;
    }

    // Cập nhật tổng số tiền trong giỏ hàng
    updateTotalAmount();
}

// Hàm cập nhật tổng số tiền trong giỏ hàng và hiển thị trên giao diện
function updateTotalAmount() {
    // Lấy phần tử chứa tổng số tiền sẽ được hiển thị
    const totalAmountContainer = document.getElementById('totalAmount');

    // Lấy dữ liệu giỏ hàng từ local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Tính tổng số tiền
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Cập nhật tổng số tiền trên giao diện
    totalAmountContainer.textContent = `$${totalAmount.toFixed(2)}`;
}

// Hàm xóa một mục khỏi giỏ hàng dựa trên itemId
function removeFromCart(itemId) {
    // Lấy dữ liệu giỏ hàng từ local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Tìm vị trí của mục có itemId đã cho trong giỏ hàng
    const itemIndex = cart.findIndex(item => item.id === itemId);

    // Kiểm tra xem mục có được tìm thấy trong giỏ hàng không
    if (itemIndex !== -1) {
        // Xóa mục khỏi mảng giỏ hàng
        cart.splice(itemIndex, 1);

        // Cập nhật dữ liệu giỏ hàng trong local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật giao diện giỏ hàng để phản ánh các thay đổi
        updateCartUI();
    }
}

// Hàm tăng số lượng sản phẩm trong giỏ hàng
function increaseQuantity(itemId) {
    // Lấy giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Tìm sản phẩm có id tương ứng trong giỏ hàng
    const item = cart.find(item => item.id === itemId);

    // Nếu sản phẩm được tìm thấy và số lượng chưa vượt quá giới hạn
    if (item && item.quantity < 10) {
        // Tăng số lượng sản phẩm lên 1 đơn vị
        item.quantity += 1;

        // Lưu giỏ hàng đã cập nhật vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật giao diện người dùng
        updateCartUI();
    }
}

// Hàm giảm số lượng sản phẩm trong giỏ hàng
function decreaseQuantity(itemId) {
    // Lấy giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Tìm sản phẩm có id tương ứng trong giỏ hàng
    const item = cart.find(item => item.id === itemId);

    // Nếu sản phẩm được tìm thấy và số lượng lớn hơn 1
    if (item && item.quantity > 1) {
        // Giảm số lượng sản phẩm đi 1 đơn vị
        item.quantity -= 1;

        // Lưu giỏ hàng đã cập nhật vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật giao diện người dùng
        updateCartUI();
    }
}
// Hàm tính tổng số tiền và thực hiện thanh toán
function calculateTotalAndCheckout() {
    // Lấy dữ liệu giỏ hàng từ local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Khởi tạo biến tổng số tiền
    let totalAmount = 0;
    
    // Chuỗi thông báo cho việc thanh toán
    let checkoutMessage = "Bạn đã thanh toán cho các sản phẩm sau:\n";

    // Kiểm tra nếu giỏ hàng rỗng
    if (cart.length === 0) {
        // Hiển thị cảnh báo nếu giỏ hàng rỗng và không có gì để thanh toán
        alert('Giỏ hàng của bạn đang trống. Không có gì để thanh toán.');
        return;
    }


    // Tính tổng tiền và tạo thông báo thanh toán
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        checkoutMessage += `${item.name}: $${itemTotal.toFixed(2)}\n`;
    });

    checkoutMessage += `\nTổng cộng: $${totalAmount.toFixed(2)}`;

    // Hiển thị thông báo
    alert(checkoutMessage);

    // Sau khi thanh toán, xóa giỏ hàng và cập nhật giao diện
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartUI();
}
function search() {
    // Lấy giá trị từ ô input search
    const searchTerm = document.getElementById('input-field').value.toLowerCase();

    // Lấy dữ liệu từ local storage
    const data = getDataFromLocalStorage('cafeData');

    // Kiểm tra nếu có dữ liệu
    if (data) {
        // Tìm kiếm trong dữ liệu
        const searchResults = data.filter(item => {
            // Chuyển đổi tên sản phẩm thành chữ thường và kiểm tra xem nó có chứa từ khóa tìm kiếm không
            return item.name.toLowerCase().includes(searchTerm);
        });

        // Hiển thị kết quả
        displaySearchResults(searchResults);

        // Hiển thị phần tử .search-results
        document.getElementById("searchResults").style.display = "block";

        // Hiển thị hoặc ẩn nút "Ẩn kết quả" tùy thuộc vào kết quả tìm kiếm
        const hideButton = document.getElementById('hideResultsButton');
        if (searchResults.length > 0) {
            hideButton.style.display = 'block'; // Hiển thị nút "Ẩn kết quả"
        } else {
            hideButton.style.display = 'none'; // Ẩn nút "Ẩn kết quả"
        }
    } else {
        // Nếu không có dữ liệu, thông báo cho người dùng
        alert('Không tìm thấy dữ liệu.');
    }
}


function displaySearchResults(results) {
    // Lấy container để hiển thị kết quả
    const searchResultsContainer = document.getElementById('searchResults');

    // Xóa kết quả trước đó (nếu có)
    searchResultsContainer.innerHTML = '';

    // Kiểm tra nếu có kết quả từ tìm kiếm
    if (results.length > 0) {
        // Tạo và hiển thị từng kết quả
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <p>${item.name}</p>
                    <p>Price: ${item.price} K</p>
                    <button id="btn-all" onclick="addToCart(this)" data-id="${item.id}" data-img="${item.img}" data-name="${item.name}" data-price="${item.price}">Add</button>
                `;
            searchResultsContainer.appendChild(resultItem);
        });
    } else {
        // Nếu không có kết quả, hiển thị thông báo
        searchResultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
// Hàm ẩn kết quả tìm kiếm
function hideSearchResults() {
    var searchResultsDiv = document.getElementById("searchResults");
    var hideResultsButton = document.getElementById("hideResultsButton");

    // Ẩn kết quả tìm kiếm
    searchResultsDiv.style.display = "none";
    // Ẩn nút "Ẩn kết quả"
    hideResultsButton.style.display = "none";
}
function scrollToClass(className) {
    const element = document.querySelector('.' + className);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Cuộn mượt
            block: 'start', // Cuộn tới phần đầu của phần tử
            inline: 'start' // Cuộn tới phần bắt đầu của phần tử
        });
    } else {
        console.error('Không tìm thấy phần tử có class: ' + className);
    }
}

// Sử dụng hàm để cuộn trang xuống class cụ thể
function scrollToSectionTitle2() {
    scrollToClass('section_title2');
}
function scrollToAboutUs() {
    scrollToClass('content_about');
}

