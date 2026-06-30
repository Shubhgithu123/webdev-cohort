
async function github(){
    const responce = await fetch("https://api.github.com/users");
    const data = await responce.json();
    console.log(data)
    //fragment
    const fragment = document.createDocumentFragment();
    const parent = document.querySelector(".parent")
    for(let user of data){
        const card = document.createElement("div");
        card.classList.add("card")
        const img = document.createElement("img");
        const p = document.createElement("p");
        const a = document.createElement("a");
        a.classList.add("profile")
        a.style.fontSize = `10px`

        img.src = user.avatar_url;
        p.textContent = `username : ${user.login}`
        a.textContent = " View Profile -> "
        a.href = `${user.html_url}`
        a.target = "_blank"
        a.rel = "noopener noreferrer";

        card.append(img,p,a)

        fragment.append(card)
    }

    parent.append(fragment)
}

github()