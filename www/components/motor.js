var vl;
localStorage.setItem("nmUsuario","Template_NM");

if (localStorage.getItem("valorTotal"))
{vl = parseFloat(localStorage.getItem("valorTotal"));}
else
{vl = 0.0;}

function teste(teste2)
{
if (document.getElementById(teste2).getAttribute("ocupado"))
{
    alert("Ocupado");
}
else if (localStorage.getItem("nmUsuario") != "" && localStorage.getItem("nmUsuario") != " ")
{
    var ocupa = document.createAttribute("ocupado");
    ocupa.value = "true";
    localStorage.setItem(teste2, localStorage.getItem("nmUsuario"));

    vl = vl + parseFloat(document.getElementById(teste2).getAttribute("preco"));
    //document.getElementById("gasto").textContent = "Valor gasto: "+vl+"\$";
    localStorage.setItem("valorTotal", vl);

    document.getElementById(teste2).setAttributeNode(ocupa);
    alert(teste2+" / Valor gasto: "+vl+"\$");
}
else
{
    alert("Por favor coloque um nome");
}
}

function ocupar()
{
    //document.getElementById("gasto").textContent = "Valor gasto: 0$"
    for (var i=0 ;i < localStorage.length; i++)
    {
    if (localStorage.key(i) != "valorTotal" && localStorage.key(i) != "nmUsuario")
    {
    var ocupa = document.createAttribute("ocupado");
    ocupa.value = "true";
    document.getElementById(localStorage.key(i)).setAttributeNode(ocupa);
    }
    }
}


function clr()
{
    for (var i=0;i < localStorage.length; i++)
    {
    if (localStorage.key(i) != "valorTotal" && localStorage.key(i) != "nmUsuario")
    {
     document.getElementById(localStorage.key(i)).removeAttribute("ocupado");
    }
    }
    localStorage.clear();
    vl = 0.0;
    //document.getElementById("gasto").textContent = "Valor gasto: 0\$";
}