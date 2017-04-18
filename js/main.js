var end = new Date('06/03/2017 12:01 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        // var then = new Date('12/18/2015 12:01 AM');
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = '<span class="inner">' + days + '</span>' + ' days ';
        document.getElementById('countdown').innerHTML += '<span class="inner">' + hours + '</span>' + ' hrs ';
        document.getElementById('countdown').innerHTML += '<span class="inner">' + minutes + '</span>' + ' mins ';
        document.getElementById('countdown').innerHTML += '<span class="inner">' + seconds + '</span>' + ' secs';
    }

    timer = setInterval(showRemaining, 1000);