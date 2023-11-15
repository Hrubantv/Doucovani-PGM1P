const obrazek_1 = "https://th.bing.com/th/id/OIP.iK6_SfykVWJdwvM9LXeGpAAAAA?pid=ImgDet&rs=1"; //vytváříme constantu pro všechny funkce, kde jsou přímo uložené obrázky
const obrazek_2 = "https://4.bp.blogspot.com/-C74LsM4MM7s/V6obBZJ5txI/AAAAAAAAASs/CR56i7MEVXIvbETGnahrK9DK-oJSjRulACLcB/s1600/Marge-simpson1.png";
const obrazek_3 = "https://upload.wikimedia.org/wikipedia/fi/thumb/0/01/Bart_Simpson_2009.svg/1200px-Bart_Simpson_2009.svg.png";

function Obrazek_1() //do proměnné img ukládáme hodnotu z HTML IMG a porovnáváme hodnoty
{
    let img = document.getElementById("Img");

    if(img.src == obrazek_1)
    {
        alert("Homer je už zobrazen!");
    }
    else
    {
        img.src=obrazek_1;
    }
}

function Obrazek_2()
{
    let img = document.getElementById("Img");

    if(img.src == obrazek_2)
    {
        alert("Marge je už zobrazena!");
    }
    else
    {
        img.src=obrazek_2;
    }
}

function Obrazek_3()
{
    let img = document.getElementById("Img");

    if(img.src == obrazek_3)
    {
        alert("Bart je už zobrazen!");
    }
    else
    {
        img.src=obrazek_3;
    }
}

function Zmena() //do porměnné hodnoty uložíme hodnotu inputu a následně porovnáváme zadaný text s přednastaveným a následně voláme funkce výše
{
    let hodnota = document.getElementById("input");

    if(hodnota.value == "Homer")
    {
        Obrazek_1();
    }
    else if(hodnota.value == "Marge")
    {
        Obrazek_2();
    }
    else if(hodnota.value == "Bart")
    {
        Obrazek_3();
    }
    else
    {
        alert("Váš text nebyl správný!");
    }
}

