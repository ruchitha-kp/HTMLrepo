const catalog=[
    {id:1,name:'Product 1',price:20},
    {id:2,name:'Product 2',price:30},
    {id:3,name:'Product 3',price:25},
    ];
    function loadcatalog()
    {
    const catalogcontainer=document.getElementbyId('content');
    catalogcontainer.innerHTML='<h2>Catalog</h2>';
    catalog.foreach(product=>{
    const productcard=document.createelement('div');
    productCard.classlist.add('product-card');
    productCard.innerHTML=`
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick ="addToCart(${product.id})">Add to cart</button>
    `;
    catalogContainer.appendchild(productcard);
    });
    }
    function addToCart(productId) {
    console.log('Product ${productId} added to cart');
    }
    loadcatalog();
    
    