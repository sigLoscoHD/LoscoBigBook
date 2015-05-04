function controllo(){
    var password=$("#password").val();
    var npassword=$("#npassword").val();
    var data=$("#data").val();
 

 if(password != npassword)
  {
        alert("Le password inserite non sono uguali!");
        return false;
  }
  return true;
}
