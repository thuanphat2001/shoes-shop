const inputRecovery = document.querySelector(".emailRecovery");
const passwordRecovery = document.querySelector(".passwordRecovery");
const formRecovery = document.querySelector(".form-recoveryPassword");
const check = document.getElementById("password1")

formRecovery.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = inputRecovery.value;
  const passwordValue = passwordRecovery.value;

  const rootEmail = JSON.parse(localStorage.getItem("user1")).email;
  if(emailValue == '')
    return
  if (emailValue === rootEmail) {
    if(passwordValue != check.value)
      return
    if (passwordValue.length >= 6) {
      alert("Mail khôi phục mật khẩu đã được gửi đến email của bạn !")
      inputRecovery.value = ''
      passwordRecovery.value = ''
      check.value = ''
      return
    } else {
      return
    }
  } else {
    return alert("Không tìm thấy email");
  }
});
