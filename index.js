document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  usernameInput.addEventListener("input", function () {
    const usernameValue = usernameInput.value.trim();
    const isValid = usernameRegex.test(usernameValue);

    if (isValid) {
    
      usernameInput.classList.remove("is-invalid");
      usernameInput.classList.add("is-valid");
    } else {
    
      usernameInput.classList.remove("is-valid");
      usernameInput.classList.add("is-invalid");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");

  passwordInput.addEventListener("input", function () {
    const passwordValue = passwordInput.value.trim();

 
    const specialCharacterRegex = /[^A-Za-z0-9@]/;
    const hasSpecialCharacter = specialCharacterRegex.test(passwordValue);

 
    const uppercaseRegex = /[A-Z]/;
    const hasUppercase = uppercaseRegex.test(passwordValue);

   
    const numberRegex = /[0-9]/;
    const hasNumber = numberRegex.test(passwordValue);

 
    if (!hasSpecialCharacter && hasUppercase && hasNumber) {
      passwordInput.classList.remove("is-invalid");
      passwordInput.classList.add("is-valid");
    } else {
      passwordInput.classList.remove("is-valid");
      passwordInput.classList.add("is-invalid");
    }
  });
});
