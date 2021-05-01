function RunFuncs() {
    let Flavor = "";
    let Syrup = "";
    let Soft_Topping = "";
    let Hard_Topping = "";
    let Extra = "";

    function InfoChange() {
        let info = document.getElementById('sundae_info');
        info.innerHTML = "<p>" + "You choose a sundae with a "+ Flavor + " base.";
        info.innerHTML += " " + Syrup;
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
        else if (caramel_syrup.checked == true && chocolate_syrup.checked == true && strawberry_syrup.checked == false)
        {
            Syrup = "You added caramel-syrup & chocolate-syrup.";
        }
        else if (caramel_syrup.checked == true && chocolate_syrup.checked == false && strawberry_syrup.checked == true)
        {
            Syrup = "You added caramel-syrup & strawberry-syrup.";
        }
        else if (caramel_syrup.checked == false && chocolate_syrup.checked == true && strawberry_syrup.checked == true)
        {
            Syrup = "You added chocolate-syrup & strawberry-syrup.";
        }
        else if (caramel_syrup.checked == true && chocolate_syrup.checked == true && strawberry_syrup.checked == true)
        {
            Syrup = "You added caramel-syrup, chocolate-syrup, and strawberry-syrup.";
        }
    }

    function Soft_Toppings() {
        let bananas = document.getElementById('bananas');
        if (bananas.checked == true) {
            alert('yeehaw');
        }
        let blueberries = document.getElementById('blueberries');
        if (blueberries.checked == true) {
            alert('yeehaw');
        }
        let brownie_bites = document.getElementById('brownie-bites');
        if (brownie_bites.checked == true) {
            alert('yeehaw');
        }
        let cookie_dough = document.getElementById('cookie-dough');
        if (cookie_dough.checked == true) {
            alert('yeehaw');
        }
        let strawberries = document.getElementById('strawberries');
        if (strawberries.checked == true) {
            alert('yeehaw');
        }
        let gummy_bears = document.getElementById('gummy-bears');
        if (gummy_bears.checked == true) {
            alert('yeehaw');
        }
    }

    function Hard_Toppings() {
        let mint_chips = document.getElementById('mint-chips');
        if (mint_chips.checked == true) {
            alert('yeehaw');
        }
        let chocolate_chips = document.getElementById('chocolate-chips');
        if (chocolate_chips.checked == true) {
            alert('yeehaw');
        }
        let coconut_shavings = document.getElementById('coconut-shavings');
        if (coconut_shavings.checked == true) {
            alert('yeehaw');
        }
        let mANDm = document.getElementById('mANDm');
        if (mANDm.checked == true) {
            alert('yeehaw');
        }
        let oreo_pieces = document.getElementById('oreo-pieces');
        if (oreo_pieces.checked == true) {
            alert('yeehaw');
        }
        let peanuts = document.getElementById('peanuts');
        if (peanuts.checked == true) {
            alert('yeehaw');
        }
    }

    function Extras() {
        let pirouline = document.getElementById('pirouline');
        if (pirouline.checked == true) {
            alert('yeehaw');
        }
        let whipped_cream = document.getElementById('whipped-cream');
        if (whipped_cream.checked == true) {
            alert('yeehaw');
        }
        let waffle_cone = document.getElementById('waffle-cone');
        if (waffle_cone.checked == true) {
            alert('yeehaw');
        }
    }
    Flavors();
    Syrups();
    Soft_Toppings();
    Hard_Toppings();
    Extras();
    InfoChange();
}