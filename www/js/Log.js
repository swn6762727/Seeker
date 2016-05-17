/**
 * Created by songweinan on 5/13/16.
 */
function Logon_check(){
    var user_name = document.getElementsByName("username")[0].value;
    var user_pass = document.getElementsByName("password")[0].value;
    console.log(user_name);
    var url="http://138.128.198.110:3000/LOGON?"+"UserName="+user_name+"&Passwd="+user_pass;
    console.log(url);
    $.ajax(
        {
            url: url,
            type: "GET",
            dataType: 'JSON',
            success: function (msg) {
                console.log(msg.error);
                if(msg.error)
                {
                    alert("用户名或密码错误");
                }
                else
                {
                    alert("2333");
                    window.location.href="Main.html";
                }
            }
        }
    );


}

function  Register(){
    var user_name_Reg = document.getElementsByName("Username_Reg")[0].value;
    var user_pass_Reg = document.getElementsByName("Passwd_Reg")[0].value;
    var url="http://138.128.198.110:3000/REGISTER?"+"UserName="+user_name_Reg+"&Passwd="+user_pass_Reg;
    console.log(url);
    $.ajax(
        {
            url: url,
            type: "GET",
            dataType: 'JSON',
            success: function (msg) {
                console.log(msg);
                if(msg.error)
                {
                    alert("用户名已经被占用");
                }
                else
                {
                    alert("注册成功");
                    self.location="Main.html";
                }
            }
        }
    );

}