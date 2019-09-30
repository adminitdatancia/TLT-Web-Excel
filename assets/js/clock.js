window.onload = function() {
    function hexClock() {
      var time = new Date();
      var hours = (time.getHours()).toString()
      var minutes = time.getMinutes().toString()
      var seconds = time.getSeconds().toString()
      if (hours.length < 2) {
        hours = '0' + hours;
      }

      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }

      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }

      document.getElementById('hour').textContent = hours;
        document.getElementById('minute').textContent = minutes;
        document.getElementById('second').textContent = seconds;

    }


    setInterval(hexClock, 1000);
}