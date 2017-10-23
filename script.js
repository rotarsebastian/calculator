function validate(evt) {
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        }

        function validateRes(evt) {
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
            var regex = /[]|\./;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        }

        let add = document.querySelector("#add");
        let minusAB = document.querySelector("#minusAB");
        let minusBA = document.querySelector("#minusBA");
        let AxB = document.querySelector("#AxB");
        let divideAB = document.querySelector("#divideAB");
        let divideBA = document.querySelector("#divideBA");
        let clear = document.querySelector("#clear");

        add.addEventListener("click", doAdd)
        minusAB.addEventListener("click", doAB)
        minusBA.addEventListener("click", doBA)
        AxB.addEventListener("click", doAxB)
        divideAB.addEventListener("click", divAB)
        divideBA.addEventListener("click", divBA)
        clear.addEventListener("click", doClear)

        function doAdd() {
            var a = document.forms["calc"]["num1"].value;
            var b = document.forms["calc"]["num2"].value;
            var display = document.getElementById("res")
            var c = parseInt(a, 10) + parseInt(b, 10);
            if (document.forms["calc"]["num1"].value == "" || document.forms["calc"]["num2"].value == "")
                display.innerHTML = "Insert numbers";
            else document.forms["calc"]["num3"].value = c;

            return false;
        }

        function doAB() {
            var a = document.forms["calc"]["num1"].value;
            var b = document.forms["calc"]["num2"].value;
            var display = document.getElementById("res")
            var c = parseInt(a, 10) - parseInt(b, 10);
            if (document.forms["calc"]["num1"].value == "" || document.forms["calc"]["num2"].value == "")
                display.innerHTML = "Insert numbers";
            else document.forms["calc"]["num3"].value = c;

            return false;
        }

        function doBA() {
            var a = document.forms["calc"]["num1"].value;
            var b = document.forms["calc"]["num2"].value;
            var display = document.getElementById("res")
            var c = parseInt(b, 10) - parseInt(a, 10);
            if (document.forms["calc"]["num1"].value == "" || document.forms["calc"]["num2"].value == "")
                display.innerHTML = "Insert numbers";
            else document.forms["calc"]["num3"].value = c;

            return false;
        }

        function doAxB() {
            var a = document.forms["calc"]["num1"].value;
            var b = document.forms["calc"]["num2"].value;
            var display = document.getElementById("res")
            var c = parseInt(b, 10) * parseInt(a, 10);
            if (document.forms["calc"]["num1"].value == "" || document.forms["calc"]["num2"].value == "")
                display.innerHTML = "Insert numbers";
            else document.forms["calc"]["num3"].value = c;

            return false;
        }

        function divAB() {
            var a = document.forms["calc"]["num1"].value;
            var b = document.forms["calc"]["num2"].value;
            var display = document.getElementById("res")
            var c = parseInt(a, 10) / parseInt(b, 10);
            if (document.forms["calc"]["num1"].value == "" || document.forms["calc"]["num2"].value == "")
                display.innerHTML = "Insert numbers";
            else document.forms["calc"]["num3"].value = c;

            return false;
        }

        function divBA() {
            var a = document.forms["calc"]["num1"].value;
            var b = document.forms["calc"]["num2"].value;
            var display = document.getElementById("res")
            var c = parseInt(b, 10) / parseInt(a, 10);
            if (document.forms["calc"]["num1"].value == "" || document.forms["calc"]["num2"].value == "")
                display.innerHTML = "Insert numbers";
            else document.forms["calc"]["num3"].value = c;

            return false;
        }

        function doClear() {
            document.forms["calc"]["num1"].value = "";
            document.forms["calc"]["num2"].value = "";
            document.forms["calc"]["num3"].value = "";
        }
