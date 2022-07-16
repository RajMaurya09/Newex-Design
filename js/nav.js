function navBar(imgUrl,brand){
    return  `<div class="nav">
    <div class="brand">
        <a href="product.html">
            <img  src=${imgUrl}  />
        </a>
        <a href="product.html">
            <h3>
                ${brand}
            </h3>
        </a>
    </div>
    <div class="menu-items">
        <a href="#">About</a>
        <a href="#">Cart</a>
        <a href="signin.html">SignIn</a>
    </div>
</div>`;
}
const imgURL="https://media.designcafe.com/wp-content/uploads/2021/06/17171828/living-room-chandelier-ideas.jpg";
const navHolder=document.createElement('div');
      navHolder.innerHTML=navBar(imgURL,"Newex Design");

      document.body.appendChild(navHolder);


