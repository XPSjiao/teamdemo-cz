<template>
  <form id="form" method="post">
  <input type="button" value="登录" id="btnOK" onclick="validate()"/>
</form>
</template>

<script src="https://ssl.captcha.qq.com/TCaptcha.js"></script>
<script>

  function validate() {
    const validateCode =  new TencentCaptcha("2055313458",function (res) {
      if(res.ret === 0) {
        alert("验证正确")
      } else {
        alert("验证出错")
      }
    })
    validateCode.show()
  }
</script>


