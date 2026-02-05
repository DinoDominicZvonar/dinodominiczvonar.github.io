function disableAllElements(){
    var tabs = document.getElementsByClassName("tab");

    for (var i = tabs.length - 1; i >= 0; i--)
    {
        if (!tabs[i].classList.contains("disabled"))
        {
            tabs[i].classList.add("disabled");
        }
    };

    var contents = document.getElementsByClassName("tabcontent");

    for (var i = contents.length - 1; i >= 0; i--)
    {
        contents[i].classList.add("hidden");
    };
}

function AboutClick(el) 
{
    disableAllElements();
    el.classList.remove("disabled");

    var elements = document.getElementsByClassName("aboutme");

    for (var i = elements.length - 1; i >= 0; i--)
    {
        elements[i].classList.remove("hidden");
    };
}

function GamesClick(el) 
{
    disableAllElements();
    el.classList.remove("disabled");

    var elements = document.getElementsByClassName("games");

    for (var i = elements.length - 1; i >= 0; i--)
    {
        elements[i].classList.remove("hidden");
    };
}

function BlogClick(el) 
{
    disableAllElements();
    el.classList.remove("disabled");

    var elements = document.getElementsByClassName("blog");

    for (var i = elements.length - 1; i >= 0; i--)
    {
        elements[i].classList.remove("hidden");
    };
}