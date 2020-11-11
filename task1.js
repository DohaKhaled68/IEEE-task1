
           function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
         }
        i=0;
        var textID;
         document.getElementById("add").onclick = function() {
            var text1 = document.getElementById("addfr").value; 
             textID = 'skillItem'+i;
            var li = "<li id='"+textID+ "'>" + text1  +"<button onclick='reply_click(this.id)' class='remove' id='"+textID+"'>Remove</button>" + "</li>";
            i++;
            document.getElementById("list").innerHTML += li;
             document.getElementById("addfr").value = ""; 
                     
        }
        var element;
        function reply_click(clicked_id)
        {
            element= document.getElementById(clicked_id);
            element.remove();
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

    