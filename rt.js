var start = new Date().getTime();
        function getRandomColor(){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function move() {
            var left = Math.random() * 300;
            var top = Math.random() * 300;
            var wh = (Math.random() * 200) + 50; // Adjusted size range for better playability

            var shape = document.getElementById("shape");

            shape.style.left = left + "px";
            shape.style.top = top + "px";
            shape.style.width = wh + "px";
            shape.style.height = wh + "px";
            shape.style.display = "block";

            document.getElementById("shape").style.backgroundColor = getRandomColor()

            start = new Date().getTime();
        }

        document.getElementById("shape").onclick = function () {
            document.getElementById("shape").style.display = "none";

            var end = new Date().getTime();
            var timetaken = (end - start) / 1000;

            alert("Reaction time: " + timetaken + " seconds");
            setTimeout(move, Math.random() * 2000); // Adds a delay before showing the next shape
        };

        move(); // Call move to start the game