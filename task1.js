
           function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
         }
        i=0;
         document.getElementById("add").onclick = function() {
            var text1 = document.getElementById("addfr").value; 
            var li = "<li><span id='skillItem'>" + text1 + "</span> " +'<button id="remove">Remove</button>' + "</li>";
            i++;
            document.getElementById("list").innerHTML += li;
             document.getElementById("addfr").value = ""; // clear the value
        }
        var allskillItem = document.querySelectorAll(".skillItem");
   for (var index = 0; index <allskillItem.length; index++){
      allskillItem[index].addEventListener("click", function(){
         this.classList.toggle("active");
      });
      allskillItem[index].querySelector("button").addEventListener("click",
      function(){
         this.closest(".skillItem").remove();
      });
   }
      
       $(document).ready(function () {

            $('#color').click(function () {

                GetColor = document.getElementById('color').value;

                $('#form1').css(
                    {
                        "color": GetColor,
                    }
                )

            });
            $('#font').click(function () {
                GetSize = document.getElementById('font').value;
                $("body").css(
                {
                    "font-size": GetSize 
                }
                    )
        });

        });

    