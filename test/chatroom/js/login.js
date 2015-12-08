/**
 * Created by zhaoge on 2015/12/8.
 */
$(function(){
    $(document).ajaxStart(function(){
            $("#loginMessage").html("正在验证");
        }
    );
    $(document).ajaxStop(function(){
            $("#loginMessage").html("发送完毕");
        }
    );
    $("#sub").click(
        function() {
            if ($("#username").val() != '' && $("#password").val() != ''){
            $.ajax({
                    url: "php/index.php",
                    type:"POST",
                    data:{
                        username:$("#username").val(),
                        password:$("#passwod").val()
                    },
                    success:function(data){
                        if(data==1) {
                       setInterval(function () {
                           location.href = "./chat.html";
                       },1000) ;
                        }else{
                            $("#loginMessage").html("账号密码验证未通过");
                        }
                    }
                }
            )
           }else{
                $("#loginMessage").html("账号密码不能为空")
            }

            return false ;
        }
    );

})
