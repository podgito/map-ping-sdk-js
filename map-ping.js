

//https://code.tutsplus.com/tutorials/build-your-first-javascript-library--net-26796
window.mping = (function () {
  function MPing(els) { //Prototype constructor

  }

  var mping = {
    send: function (key) {
      var data = JSON.stringify({
        "value": 10
      });

      var xhr = new XMLHttpRequest();
      // xhr.withCredentials = true; //Is this needed

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open("POST", "http://localhost:53473/WebClient/" + key);
      xhr.setRequestHeader("content-type", "application/json");

      xhr.send(data);
    }
  };

  return mping;
}());