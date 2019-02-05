function insert(num){
    document.form.textview.value = document.form.textview.value+num
  }
  
  function equal(){
    var num = document.form.textview.value;
    
    if(num)
    document.form.textview.value = eval(num)
    
  }
  
  function clean(){
    document.form.textview.value ="";
  }
  
  function back(){
    
    var cli = document.form.textview.value;
    document.form.textview.value = cli.substring(0,cli.length-1);
  }
  