let nonVegMenu=[
    {name: "chicken dum biryani", Price: "240 / 300",desc:"in pure ghee", img: "chicken biryani.jpeg"},
    {name: "Mutton dum biryani", Price: "260 / 380",desc:"in pure ghee", img: "muttonbiryani.jpeg"},
    {name: "Spcl. Chicken Bhakari", Price: 270, desc:"Chicken rassa + Chicken Sukka + aalni soup + khima fry + (unlimited rassa + bhakari + indrayani rice)", img: "chicken thali.jpeg"},
    {name: "Spcl. Mutton bhakari", Price: 330,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl. crab Thali", Price: 400,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Chicken bhakari", Price: 200, desc:"Unlimited rassa, Bhakari, Rice", img: ""},
    {name: "Mutton bhakari", Price: 250,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Fish Thali", Price: 250,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "egg Thali", Price: 160,desc:"Unlimited rassa, Bhakari, Rice"}
]

let VegMenu=[
    {name: "masvadi thali", Price: 250, img:"Maswadi Rassa.jpg"},
    {name: "veg biryani", Price:"200 / 300", img:"Veg Biryani.jpg"},
    {name: "pithala bhakar", Price: 160, img:"Pithala Bhakari.jpg" },
    {name: "veg kurma", Price: 200, img:"Veg Kurma.jpg"},
    {name: "bhindi masala", Price: 160, img:"BHINDII MASALA.jpg"},
    {name: "mix veg", Price: 180, img:"Mix Veg.jpg"},
    {name: "paneer butter masala", Price: 200, img:"Paneer Butter Masala.jpg"},
    {name: "green peas masala", Price: 160, img:"GREEN PEAS MASALA.jpg"},
    {name: "veg kolhapuri", Price: 180, img:"Veg Kolhapuri.jpg"},
    {name: "mataki masala", Price: 170, img:"Mataki Masala.jpg"},
    {name: "baingan masala", Price: 160, img:"Baingan Masala.png"},
    {name: "soyabin masala", Price: 160, img:"Soya Masala.jpg"},
    {name: "dal fry", Price: 140, img:"Dal Fry.jpg"},
    {name: "akhha masoor", Price: 160, img:"Akkha Masoor.jpg"},
    {name: "methi masala", Price: 160, img:"methi masal.jpg"}
]
let starterMenu=[
    {name: "Roasted Papad", Price: 20, desc:"",  img: "Roast Papad.jpg"},
    {name: "Masala Papad", Price: 30,desc:"",  img: "Masala Papad.jpg"},
    {name: "Bombil Fry", Price: 180,desc:"",  img: "Bombil Fry.jpg"},
    {name: "Lollipop", Price: 200,desc:"",  img: "Chicken Lollipop.jpg"},
    {name: "Chicken sukka", Price: 260,desc:"",  img: "chicken sukka.jpg"},
    {name: "mutton sukka", Price: 280,desc:"",  img: "Mutton Sukka.jpg"},
    {name: "kothimir vadi", Price: 100,desc:"",  img: "Kothimbir Vadi.png"},
    {name: "masvadi fry", Price: 200,desc:"", img: "masvadi.jpeg"}
]



// non veg menu function
function loadNonVegMenu(nonVegMenu){
    body = document.getElementById('nonveg');
    data = '';
    
    for(let menu of nonVegMenu){
        data += `
        <!-- card start -->
        <div class="menu-card col-12 col-md-6 col-lg-3 text-center">
                    <div class="card-content bg-white">
                    <div class="img-box mb-2">
                    <img src="images/food/non-veg/${menu.img}" class="img-fluid" alt="">
                    </div>
                    <h2 class="fs-4 fw-bold text-capitalize ">${menu.name}</h2>
                    <small class="text-muted"> [${menu.desc}]</small>
                        
                    <div class="d-flex justify-content-between align-items-center px-3 py-2">
                    <div>
                    <span class="border border-dark p-1 me-3"><i class="fas fa-circle text-danger"></i></span>
                    <span class="text-success">&#8377;${menu.Price}</span>
                    </div>
                    
                    <a href="tel:8806328987" class="btn border rounded-0">order</a>
                            </div>
                            </div>
                </div>
                <!-- card end -->
                `
                console.log(data)
                body.innerHTML = data;
            }
}

loadNonVegMenu(nonVegMenu);
// veg menu function


function loadVegMenu(VegMenu){
    body = document.getElementById('veg');
    data = '';

    for(let menu of VegMenu){
        data += `
        <!-- card start -->
                <div class="menu-card col-12 col-md-6 col-lg-3 text-center">
                    <div class="card-content bg-white">
                    
                        <div class="img-box mb-2">
                        <img src="images/food/veg/${menu.img}" class="img-fluid" alt="">
                    </div>
                    <h2 class="fs-4 fw-bold text-capitalize">${menu.name}</h2>
                       
                        
                       <div class="d-flex justify-content-between align-items-center px-3 py-2">
                            <div>
                                <span class="border border-dark p-1 me-3"><i class="fas fa-circle text-success"></i></span>
                                <span class="text-success">&#8377;${menu.Price}</span>
                            </div>
                            <a href="tel:8806328987" class="btn border rounded-0">order</a>
                        </div>
                    </div>
                </div>
                <!-- card end -->
        `
        console.log(data)
        body.innerHTML = data;
    }
}

loadVegMenu(VegMenu)
// starter menu function


function loadStarterMenu(starterMenu){
    body = document.getElementById('starter');
    data = '';

    for(let menu of starterMenu){
        data += `
        <!-- card start -->
                <div class="menu-card col-12 col-md-6 col-lg-3 text-center">
                    <div class="card-content bg-white">
                    
                        <div class="img-box mb-2">
                        <img src="images/food/starter/${menu.img}" class="img-fluid" alt="">
                    </div>
                    <h2 class="fs-4 fw-bold text-capitalize ">${menu.name}</h2>
                       
                        
                       <div class="d-flex justify-content-between align-items-center px-3 py-2">
                            <div>
                                <span class="border border-dark p-1 me-3"><i class="fas fa-circle text-success"></i></span>
                                <span class="text-success">&#8377;${menu.Price}</span>
                            </div>
                            <a href="tel:8806328987" class="btn border rounded-0">order</a>

                           
                        </div>
                    </div>
                </div>
                <!-- card end -->
        `
        console.log(data)
        body.innerHTML = data;
    }
}

loadStarterMenu(starterMenu)