(function () {
    const customerImg = document.querySelector("#customer-img");
    const customerName = document.querySelector("#customer-name");
    const customerText = document.querySelector("#customer-text");

    const btn = document.querySelectorAll(".btn");
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text);

        customers.push(customer);
    }

    createCustomer(0, 'Jhon', 'Incidunt sed quidem alias est necessitatibus, saepe dicta ipsam, suscipit placeat tempore sapiente ex eum quam enim repudiandae quas totam numquam natus dolorum nobis doloremque dolor')

    createCustomer(1, 'Josh', 'Laboriosam, architecto iste accusantium aperiam magnam quidem odit repellat obcaecati nobis sed. Velit excepturi, tempora iure, soluta, vitae quasi consectetur dolore in cum culpa officia cupiditate optio quas')

    createCustomer(2, 'See-yong', 'Repudiandae perspiciatis voluptate quae quam aliquid eaque tenetur voluptas cupiditate debitis suscipit, ullam consequuntur esse placeat voluptatibus nobis et possimus nemo. Reiciendis animi dolorem praesentium exercitationem')

    createCustomer(3, 'Rohan', 'Reiciendis animi dolorem praesentium exercitationem illum voluptatibus ab cupiditate quos cum similique ex laudantium accusamus porro maxime tenetur commodi quam excepturi quod provident, magnam totam unde accusantium quaerat? Laborum, aliquid cum ab vero laudantium eius')

    createCustomer(4, 'Rechal', 'Suscipit placeat tempore sapiente ex eum quam enim repudiandae quas totam numquam natus dolorum nobis doloremque dolor, quae id Ullam velit provident harum sed recusandae laboriosam tempora culpa')

    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImg.src = customers[index].img 
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text 
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){ 
                    index = 0;
                }
                
                customerImg.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text 
            }
        })
    })

})()