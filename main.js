$(document).ready(function(){
    var itemID =0;
    var quit = false; 
    var myToDo = document.getElementById('myList');
    
    
    function addToList(){
        var myText ="";
        myText = "<li>"+"*"+$("#infield").val()+"</li>" ; 
        $(".todo").append(myText);
        localStorage.setItem(itemID++,$('#infield').val());
        $("#infield").val(""); 
        
    } ;
    function handleClick(){
        $(this).toggleClass("checked");
    };
    
	function rmvElement(){
		$(this).children("ul").remove();
	}
	
    $(".bubble").find("#button1").click(addToList);
<<<<<<< HEAD
     
	$(document).on("dblclick", "li",rmvElement);
	
=======
    ;
     $(".bubble").keypress(function(evt){
           if (evt.which === 13) {
                addToList();
           };
     });
    
    //Clear Action Item field
    $(".bubble").find("#button2").click(function(){
         // $(".todo").empty();
         myToDo.innerHTML = " ";
        
    });
              
>>>>>>> origin/master
    $(document).on("click","li",handleClick);
	
     //$(document).on("click",".todo li",handleClick);
         //alert("here i am");
     
     
})