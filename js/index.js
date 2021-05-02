function RunFuncs() {
    let Flavor = "";
    let Syrup = "";
    let Soft_Topping = "";
    let Hard_Topping = "";
    let Extra = "";

    function InfoChange() {
        let info = document.getElementById('sundae_info');
        info.innerHTML = "<p>" + "You chose a sundae with a " + Flavor + " base.";
        info.innerHTML += "<br>" + Syrup + "<br>" + "<br>";
        info.innerHTML += "<br>" + Soft_Topping;
        info.innerHTML += "<br>" + Hard_Topping;
        info.innerHTML += "<br>" + Extra;
        info.innerHTML += "</p>";
    }

    function Flavors() {
        let vanilla = document.getElementById('vanilla');
        if (vanilla.checked == true) {
            Flavor = "vanilla";
        }
        let chocolate = document.getElementById('chocolate');
        if (chocolate.checked == true) {
            Flavor = "chocolate";
        }
        let strawberry = document.getElementById('strawberry');
        if (strawberry.checked == true) {
            Flavor = "strawberry";
        }
        let mint = document.getElementById('mint');
        if (mint.checked == true) {
            Flavor = "mint";
        }
        let mango = document.getElementById('mango');
        if (mango.checked == true) {
            Flavor = "mango";
        }
        let cotton_candy = document.getElementById('cotton-candy');
        if (cotton_candy.checked == true) {
            Flavor = "cotton-candy";
        }
    }

    function Syrups() {
        let caramel_syrup = document.getElementById('caramel-syrup');
        let chocolate_syrup = document.getElementById('chocolate-syrup');
        let strawberry_syrup = document.getElementById('strawberry-syrup');

        if (caramel_syrup.checked == true && chocolate_syrup.checked == false && strawberry_syrup.checked == false) {
            Syrup = "You added caramel-syrup.";
        }
        else if (caramel_syrup.checked == false && chocolate_syrup.checked == true && strawberry_syrup.checked == false) {
            Syrup = "You added chocolate-syrup.";
        }
        else if (caramel_syrup.checked == false && chocolate_syrup.checked == false && strawberry_syrup.checked == true) {
            Syrup = "You added strawberry-syrup.";
        }
        else if (caramel_syrup.checked == true && chocolate_syrup.checked == true && strawberry_syrup.checked == false) {
            Syrup = "You added caramel-syrup & chocolate-syrup.";
        }
        else if (caramel_syrup.checked == true && chocolate_syrup.checked == false && strawberry_syrup.checked == true) {
            Syrup = "You added caramel-syrup & strawberry-syrup.";
        }
        else if (caramel_syrup.checked == false && chocolate_syrup.checked == true && strawberry_syrup.checked == true) {
            Syrup = "You added chocolate-syrup & strawberry-syrup.";
        }
        else if (caramel_syrup.checked == true && chocolate_syrup.checked == true && strawberry_syrup.checked == true) {
            Syrup = "You added caramel-syrup, chocolate-syrup, and strawberry-syrup.";
        }
    }

    function Soft_Toppings() {
        let getBananas = "";
        let getBlueberries = "";
        let getBrownie_bites = "";
        let getCookie_dough = "";
        let getStrawberries = "";
        let getGummy_bears = "";

        let bananas = document.getElementById('bananas');
        if (bananas.checked == true) {
            getBananas = "<li>" + "Bananas" + "</li>";
        }
        let blueberries = document.getElementById('blueberries');
        if (blueberries.checked == true) {
            getBlueberries = "<li>" + "Blueberries" + "</li>";
        }
        let brownie_bites = document.getElementById('brownie-bites');
        if (brownie_bites.checked == true) {
            getBrownie_bites = "<li>" + "Brownie-bites" + "</li>";
        }
        let cookie_dough = document.getElementById('cookie-dough');
        if (cookie_dough.checked == true) {
            getCookie_dough = "<li>" + "Cookie-dough" + "</li>";
        }
        let strawberries = document.getElementById('strawberries');
        if (strawberries.checked == true) {
            getStrawberries = "<li>" + "Strawberries" + "</li>";
        }
        let gummy_bears = document.getElementById('gummy-bears');
        if (gummy_bears.checked == true) {
            getGummy_bears = "<li>" + "Gummy-bears" + "</li>";
        }
        if (getBananas == "" && getBlueberries == "" && getBrownie_bites == "" && getCookie_dough == "" && getStrawberries == "" && getGummy_bears == "") { }
        else {
            Soft_Topping = "You added the following soft-toppings: " + "<ul>" + getBananas + getBlueberries +
                getBrownie_bites + getCookie_dough + getStrawberries + getGummy_bears + "</ul>";
        }
    }

    function Hard_Toppings() {
        let getMint_chips = "";
        let getChocolate_chips = "";
        let getCoconut_shavings = "";
        let getmANDm = "";
        let getOreo_pieces = "";
        let getPeanuts = "";

        let mint_chips = document.getElementById('mint-chips');
        if (mint_chips.checked == true) {
            getMint_chips = "<li>" + "Mint-chips" + "</li>";
        }
        let chocolate_chips = document.getElementById('chocolate-chips');
        if (chocolate_chips.checked == true) {
            getChocolate_chips = "<li>" + "Chocolate-chips" + "</li>";
        }
        let coconut_shavings = document.getElementById('coconut-shavings');
        if (coconut_shavings.checked == true) {
            getCoconut_shavings = "<li>" + "Coconut-shavings" + "</li>";
        }
        let mANDm = document.getElementById('mANDm');
        if (mANDm.checked == true) {
            getmANDm = "<li>" + "M&M's" + "</li>";
        }
        let oreo_pieces = document.getElementById('oreo-pieces');
        if (oreo_pieces.checked == true) {
            getOreo_pieces = "<li>" + "Oreo-pieces" + "</li>";
        }
        let peanuts = document.getElementById('peanuts');
        if (peanuts.checked == true) {
            getPeanuts = "<li>" + "Peanuts" + "</li>";
        }
        if (getMint_chips == "" && getChocolate_chips == "" && getCoconut_shavings == "" && getmANDm == "" && getOreo_pieces == "" && getPeanuts == "") { }
        else {
            Hard_Topping = "You added the following hard-toppings: " + "<ul>" + getMint_chips + getChocolate_chips +
                getCoconut_shavings + getmANDm + getOreo_pieces + getPeanuts + "</ul>";
        }
    }

    function Extras() {
        let pirouline = document.getElementById('pirouline');
        let whipped_cream = document.getElementById('whipped-cream');
        let waffle_cone = document.getElementById('waffle-cone');

        if (pirouline.checked == true && whipped_cream.checked == false && waffle_cone.checked == false) {
            Extra = "You added some pirouline.";
        }
        else if (pirouline.checked == false && whipped_cream.checked == true && waffle_cone.checked == false) {
            Extra = "You added whipped-cream.";
        }
        else if (pirouline.checked == false && whipped_cream.checked == false && waffle_cone.checked == true) {
            Extra = "You added a waffle-cone.";
        }
        else if (pirouline.checked == true && whipped_cream.checked == true && waffle_cone.checked == false) {
            Extra = "You added some pirouline & whipped-cream.";
        }
        else if (pirouline.checked == true && whipped_cream.checked == false && waffle_cone.checked == true) {
            Extra = "You added some pirouline & a waffle-cone.";
        }
        else if (pirouline.checked == false && whipped_cream.checked == true && waffle_cone.checked == true) {
            Extra = "You added whipped-cream & a waffle-cone.";
        }
        else if (pirouline.checked == true && whipped_cream.checked == true && waffle_cone.checked == true) {
            Extra = "You added some pirouline, whipped-cream, and a waffle-cone.";
        }
    }

    Flavors();
    Syrups();
    Soft_Toppings();
    Hard_Toppings();
    Extras();
    InfoChange();
}