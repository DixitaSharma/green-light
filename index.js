 var modelobject=document.getElementById("mymodel");
var btnobject=document.getElementsByClassName("myBtn")[0];
console.log(btnobject);
btnobject.addEventListener("click",function()
{

    debugger;
    modelobject.style.display='block';
    setTimeout(function(){
        window.location.reload();
     }, 5000);
});

var formobject=document.getElementsByClassName("myform");
var btnobject1=document.getElementsByClassName("myBtn1")[0];
console.log(btnobject1);
btnobject1.addEventListener("click",reverse);
    function reverse()
    {
        formobject.display='inline-block';
    }


    $("#myform").submit(function(event){
        event.preventDefault()
         var search=$("#search").val()
         // here search id is input id
         var url="https://api.unsplash.com/search/photos?query="+search+"canada&&client_id=Pz2XfCrWvFNpODOKb3CpiG1X3Or0LT5WRMsDfAGPKZE";
         $.ajax({
             method:'GET',
             url:url,
             success:function(data)
             {
                 console.log(data);
             }
         })
    })

    