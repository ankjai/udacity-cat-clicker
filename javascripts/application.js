var counter = 0;

$('#catImg').click(function(event) {
    /* Act on the event */
    counter++;
    console.log('img clicked');
    $('#clickCounter').text(counter);
});
