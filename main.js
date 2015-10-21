$(document).ready(function(){
    var itemID =0;
    var quit = false; 
    if ($(".todo").val =='') {
        
    }
    function addToList(){
        var myText ="";
        myText = "<li>"+$("#infield").val()+"</li>" ; 
        $(".todo").append(myText);
        localStorage.setItem(itemID++,$('#infield').val());
        $("#infield").val(""); 
        
    } ;
    function handleClick(){
        $(this).toggleClass("checked");
    };
    
    $(".bubble").find("#button1").click(addToList);
              
    $(document).on("click","li",handleClick);
     //$(document).on("click",".todo li",handleClick);
         //alert("here i am");
     
     
})