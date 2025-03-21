// Script -ul pentru magazin
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Produsul a fost adaugat in cos!");
        });
    });
});

const productObject1 = {
    name: "Europa League Ball",
    description:
      "The product, also referred to as the domestic product, is a small domestiproducted carnivorous mammal. It is the only domestiproducted species of the family Felidae.",
    imageSrc: "../images/uel-ball.png",
  };
  
  const products = [
    productObject1,
    {
      name: "Champions League Ball",
      description:
        "Quisque a sollicitudin metus. Vivamus non porta leo, nec pharetra tellus.",
      imageSrc: "../images/ucl-ball.png",
    },
    {
      name: "FIFA 2022 Cup",
      description:
        "Pellentesque tortor lacus, tristique nec posuere nec, interdum a eros.Pellentesque tortor lacus, tristique nec posuere nec, interdum a eros.",
      imageSrc: "../images/fifa22-cup.png",
    }
  ];
  
  console.log(products);
  
  function showproducts() {
    const productsContainer = document.getElementsByClassName("card")[0];
  
    for (let i = 0; i < products.length; i++) {
      const currentproduct = products[i];
  
      const productContainer = document.createElement("div");
      productContainer.classList.add("container");
  
      productContainer.innerHTML = `
      <img src="${currentproduct.imageSrc}" card" alt="${currentproduct.name}" />
            <p>${currentproduct.name}</p>
            <dialog>
              <div class="dialog-content">
                
                <h3>${currentproduct.name}</h3>
                <p>${currentproduct.description}</p>
              </div>
              <button class="close-dialog">X</button>
            </dialog>
      `;
  
      productContainer.addEventListener("click", function () {
        openproductDialog(productContainer);
      });
  
      productsContainer.appendChild(productContainer);
    }
  }
  
  showproducts();
  
  function openproductDialog(productElement) {
    const dialog = productElement.getElementsByTagName("dialog")[0];
    dialog.open = true;
  
    const closeBtn = dialog.getElementsByClassName("close-dialog")[0];
  
    closeBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      dialog.open = false;
    });
  }