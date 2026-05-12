//Variables
let woodButton = document.getElementById("WoodButton");
let stoneButton = document.getElementById("StoneButton");
let charcoalButton = document.getElementById("CharcoalButton");
let ironButton = document.getElementById("IronButton");

let statsBlock = document.getElementById("Stats");
let currentWood = 0;
let currentStone = 0;
let currentCharcoal = 0;
let currentIron = 0;

function clickWood() {
  if (currentWood >= 0) {
    currentWood += 1;
  } else {
    currentWood = 0;
  }

  setStats();
}

function clickStone() {
  //Costs wood because you are making a pickaxe to get the stone
  if (currentWood >= 3) {
    currentWood -= 3;
    currentStone += 1;
  }
  setStats();
}

function clickCharcoal() {
  //Costs wood because charcoal is made of wood, costs stone because you are using a furnace to cook the wook
  if (currentWood >= 1 && currentStone >= 4) {
    currentWood -= 1;
    currentStone -= 4;
    currentCharcoal += 1;
  }
  setStats();
}

function clickIron() {
  //Costs stone for the furnace and charcoal for the fuel
  if (currentCharcoal >= 2 && currentStone >= 4) {
    currentStone -= 4;
    currentCharcoal -= 2;
    currentIron += 1;
  }
  setStats();
}

woodButton.addEventListener("click", clickWood);
stoneButton.addEventListener("click", clickStone);
charcoalButton.addEventListener("click", clickCharcoal);
ironButton.addEventListener("click", clickIron);

function setStats() {
  statsBlock.innerHTML = `<p>Wood: ${currentWood} <br>Stone: ${currentStone} <br>Charcoal: ${currentCharcoal} <br>Iron: ${currentIron} </p> `;
}

function update()
{
    if (currentWood >= 3)
    {
        stoneButton.style.backgroundColor = "rgb(107, 228, 107)";
    }
    else
    {
        stoneButton.style.backgroundColor = "rgb(233, 99, 75)";
    }

    if (currentWood >= 1 && currentStone >= 4)
    {
        charcoalButton.style.backgroundColor = "rgb(107, 228, 107)";
    }
    else
    {
        charcoalButton.style.backgroundColor = "rgb(233, 99, 75)";
    }

    if (currentCharcoal >= 2 && currentStone >= 4)
    {
        ironButton.style.backgroundColor = "rgb(107, 228, 107)";
    }
    else
    {
        ironButton.style.backgroundColor = "rgb(233, 99, 75)";
    }
}

setStats();

document.addEventListener("click", update);

