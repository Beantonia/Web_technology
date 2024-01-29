document.getElementById('button5').addEventListener('click', function() {
    
    var myForm = document.querySelector('form[id="data_form"]');
    var myButton = document.getElementById('button5');
    let alert_div = document.getElementById('alert_div');
    let ok = document.getElementById('button7');

    alert_div.style.display= 'none';
    ok.style.display='none';   
    myForm.style.display = (myForm.style.display === 'none' || myForm.style.display === '') ? 'block' : 'none';

    var targetPosition = 460;

    var exit = document.getElementById("exit_button");

    if(!exit)
    {
        var exit = document.createElement("button");
        exit.id = "exit_button";
        exit.class = "menu-button";
        exit.textContent = "Mégsem";
        document.body.appendChild(exit);
        exit.style.backgroundColor = "rgb(241, 141, 88)";
        exit.style.position = "absolute";
        exit.style.top = "570px";
        exit.style.left = "1147px";
        exit.style.fontSize = "16px";
        exit.style.width = "110px";
        exit.style.height = "30px";
        exit.style.textAlign = "center";
        exit.style.padding = "0";
        exit.style.zIndex = "800";
        exit.style.display = " ";    
    }
    else
    {
        exit.style.top = "570px";
        exit.style.display = (exit.style.display === "none" || exit.style.display === " ") ? "" : "none";
    }

   

    exit.addEventListener("click", function() {
    myForm.style.display = "none";
    exit.style.display = "none";
    alert_div.style.display = "none";
    ok.style.display = "none";
});
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
    });
});

document.getElementById('button7').addEventListener('click', function() {
    let alert_div = document.getElementById('alert_div');
    let ok = document.getElementById("button7");
    let exit = document.getElementById("exit_button");
    alert_div.style.display= 'none';  
    ok.style.display='none';
    exit.style.top = "570px";
});


function validateForm() {

    let alert_div = document.getElementById('alert_div');
    let name = document.getElementById("name").value;
    let intro = document.getElementById("introduction").value;
    let birthdate = document.getElementById("birthdate").value;
    let color = document.getElementById("color").value;
    let bp = document.getElementById("budapest").checked;
    let gyor = document.getElementById("gyor").checked;
    let miskolc = document.getElementById("miskolc").checked;
    let szeged = document.getElementById("szeged").checked;
    let debrecen = document.getElementById("debrecen").checked;
    let pecs = document.getElementById("pecs").checked;
    let ok = document.getElementById("button7");
    let exit = document.getElementById("exit_button");

    exit.style.top = "600px";
    
    let date = new Date(birthdate);
    let today = new Date();

    var myForm = document.querySelector('form[id="data_form"]');

    alert_div.style.display= 'flex';   

    if(!name)
    {                   
        alert_div.innerHTML = "Kérem, adja meg a nevét!";
        ok.style.display='initial';
        return false;
    }
    else if(!intro)
    {
        alert_div.innerHTML = "Kérem, írjon egy rövid bemutatkozást!";
        ok.style.display='initial';
        return false;

    }
    else if(!birthdate)
    {
        alert_div.innerHTML = "Kérem, adja meg a születési dátumát!";
        ok.style.display='initial';
        return false;

    }
    else if (date >= today) 
    {
        alert_div.innerHTML = "Kérem, érvényes születési dátumot adjon meg!";
        ok.style.display='initial';
        return false;
    }
    else if(!bp && !miskolc && !pecs && !szeged && !debrecen && !gyor)
    {
        alert_div.innerHTML = "Kérem, válassza ki a képzési központját!";
        ok.style.display='initial';
        return false;

    }
    else if(color === '#ffffff')
    {
        alert_div.innerHTML = "Kérem válassza ki, hogy milyen színű poharat szeretne!";
        ok.style.display='initial';
        return false;

    }
    else
    {   
        myForm.style.display='none';
        ok.style.display='none';
        alert_div.style.display= 'none';   
        exit.style.display='none';
        alert("Sikeres jelentkezés!");
     
        return true;
    } 
    
}
