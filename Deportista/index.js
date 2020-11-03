window.onload = function () {
    var backgroundImg = ["img/muhammad.jpg",
                        "img/muhammad1.jpg",
                         "img/muhammad2.jpg",
                         ]

    setInterval(changeImage, 5000);

    function changeImage() {
        var i = Math.floor((Math.random() * 3));

        document.body.style.backgroundImage = "url('" + backgroundImg[i] + "')";
    }
}