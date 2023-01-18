function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            var codeParam = sParameterName[1];
        }
    }

    fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {   "client_id": "f0b6b732e7117e532a2a",
            "client_secret": "84cd58be0d824e5069311a82f4bc8ca50be1ab58",
            "code": codeParam
        })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}​