
// $(function() {
//     $.ajax({
//         type: 'GET',
//         url: 'http://api.icndb.com/jokes/random',
//         dataType: 'json',
//         success: function getJoke(data) {
//             document.getElementById("joke").innerHTML = data.value.joke;   
//         }
//     });
// });

function getJoke() {
    $.ajax({
        type: 'GET',
        url: 'http://api.icndb.com/jokes/random',
        dataType: 'json',
        success: function(data) {
            document.getElementById("joke").innerHTML = data.value.joke;   
        }
    });
};