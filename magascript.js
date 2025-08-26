document.getElementById("regisztralgomb").addEventListener("click", function() {

    const felhasznalok = {
        vezeteknev: document.getElementById("vezeteknev").value,
        keresztnev: document.getElementById("keresztesnev").value,
        email: document.getElementById("email").value,
        jelszo: document.getElementById("jelszo").value,
        szuldat: document.getElementById("szuldat").value,
        elfogad: document.getElementById("elfogad").value,
        nem: document.querySelector('input[name="nem"]:checked').value,
    };

    if(!felhasznalok.vezeteknev || !felhasznalok.keresztnev || !felhasznalok.email || !felhasznalok.jelszo || !felhasznalok.szuldat || !felhasznalok.elfogad || !felhasznalok.nem) {
        alert("Kérem töltse ki az összes mezőt és fogadja el a feltételeket!");
        return;
    };
    localStorage.setItem(felhasznalok.email, JSON.stringify(felhasznalok));
    alert("Sikeres regisztráció!");
    window.location.href = "Maga.html";
});


document.getElementById("Bejelentgomb").addEventListener("click", function(){
    const email = document.getElementById("Bejelentemail").value;
    const jelszo = document.getElementById("jelsz").value;
    const felhasznalokadat = localStorage.getItem(email);
    if (!felhasznalokadat) {
        alert("Nincs ilyen Email regisztrálva!");
        return;
    }

    const felhasznalo = JSON.parse(felhasznalokadat);

    if (felhasznalo.jelszo === jelszo) {
        alert("Sikeres bejelentkezés!");
        window.location.href = "fooldal.html";
    } else {
        alert("Hibás jelszó!");
        return;
    }
});
