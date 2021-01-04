let pixels = []
        let color = 'black'
        console.log( document.styleSheets)
        function changeColor(to) {
            if (to == 'white') {
             
                document.getElementById("whiteColor").classList.remove('active');
                document.getElementById("blackColor").classList.remove('active');
                document.getElementById("greenColor").classList.remove('active');
                document.getElementById("redColor").classList.remove('active');
                document.getElementById("blueColor").classList.remove('active');
                document.getElementById("yellowColor").classList.remove('active');
                document.getElementById("whiteColor").classList.add('active');
            }
            if (to == 'black') {
                document.getElementById("whiteColor").classList.remove('active');
                document.getElementById("blackColor").classList.remove('active');
                document.getElementById("redColor").classList.remove('active');
                document.getElementById("greenColor").classList.remove('active');
                document.getElementById("blueColor").classList.remove('active');
                document.getElementById("yellowColor").classList.remove('active');
                document.getElementById("blackColor").classList.add('active');
            }
            if (to == 'blue') {
                document.getElementById("whiteColor").classList.remove('active');
                document.getElementById("redColor").classList.remove('active');
                document.getElementById("blackColor").classList.remove('active');
                document.getElementById("greenColor").classList.remove('active');
                document.getElementById("blueColor").classList.remove('active');
                document.getElementById("yellowColor").classList.remove('active');
                document.getElementById("blueColor").classList.add('active');
            }
            if (to == 'yellow') {
                document.getElementById("whiteColor").classList.remove('active');
                document.getElementById("blackColor").classList.remove('active');
                document.getElementById("greenColor").classList.remove('active');
                document.getElementById("redColor").classList.remove('active');
                document.getElementById("blueColor").classList.remove('active');
                document.getElementById("yellowColor").classList.remove('active');
                document.getElementById("yellowColor").classList.add('active');
            }
            if (to == 'green') {
                document.getElementById("whiteColor").classList.remove('active');
                document.getElementById("blackColor").classList.remove('active');
                document.getElementById("greenColor").classList.remove('active');
                document.getElementById("redColor").classList.remove('active');
                document.getElementById("blueColor").classList.remove('active');
                document.getElementById("yellowColor").classList.remove('active');
                document.getElementById("greenColor").classList.add('active');
            }
            if (to == 'red') {
                document.getElementById("whiteColor").classList.remove('active');
                document.getElementById("blackColor").classList.remove('active');
                document.getElementById("greenColor").classList.remove('active');
                document.getElementById("redColor").classList.remove('active');
                document.getElementById("blueColor").classList.remove('active');
                document.getElementById("yellowColor").classList.remove('active');
                document.getElementById("redColor").classList.add('active');
            }
            color = to
            document.styleSheets[0].cssRules[6].style.backgroundColor = to
        }

        function clickOnPixel(pixel) {
           pixels.push(pixel)
            pixel.style.backgroundColor = color
            
        }

        function fill() {
            document.styleSheets[0].cssRules[4].style.backgroundColor = color
            for (i in pixels) {
                pixels[i].style.backgroundColor = color
            }
            pixels = []
            
        }

        function offGrid() {
            document.styleSheets[0].cssRules[4].style.border = ""
           
            
        }

        function clean() {
            document.styleSheets[0].cssRules[4].style.backgroundColor = 'white'
            for (i in pixels) {
                pixels[i].style.backgroundColor = 'white'
            }
            pixels = []
            
        }

