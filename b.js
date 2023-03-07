

    fetch("app.json")
    .then(response => response.json())
    .then(data => sh(data))

    function sh(data)
    {
        
        if(document.title = "F")
        {
            x = 0
        }
        else
        {
            x = 1
        }
 

        c = data.app[x].jfile;
        fetch(c)
       .then(response => response.json())
       .then(data => sho(data))

       function sho(data)
       {
                
        const a = document.getElementById('name')
        a.innerHTML = data.Anime[0].name
       }
        
    }
