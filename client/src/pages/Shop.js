import React, { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);

  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  function handleItemClick(item) {
    setItems([...items, item]);
  }

  function handleCheckout() {
    // Handle checkout logic here
    alert('Checkout complete!');
    setItems([]);
  }

  return (
    <React.Fragment>
        <div className="logo">
        <img src={ require('./images/logo.png') } alt="logo"/>
        <img src={ require('./images/header6.jpg') } alt="Logo"/>
        <img src={ require('./images/header7.jpeg') } alt="Logo"/>
        <img src={ require('./images/header8.jpeg') } alt="Logo"/>
        <img src={ require('./images/header9.jpeg') } alt="Logo"/>
        <img src={ require('./images/header10.jpeg') } alt="Logo"/>
        <img src={ require('./images/header13.jpg') } alt="Logo"/>
        <img src={ require('./images/header11.jpg') } alt="Logo"/>
      </div>
           <div className="upload-image">
            <label htmlFor="image-upload" className="upload-label">
                Upload Image
            </label>
            <input id="image-upload" type="file" onChange={handleImageUpload} />
            {image && <img src={image} alt="uploaded image" className="uploaded-image" />}
            </div>
        <div className="cart">
        <button className="checkout" onClick={handleCheckout}>Checkout</button>
        <h2 className="left-aligned">Cart</h2>
        <ul>
            {items.map((item, index) => (
            <li className="left-aligned" key={index}>{item.name}</li>
            ))}
        </ul>
            <button className="item" onClick={() => handleItemClick({ name: "Item 1", image: "item1.png" })}>Add to cart</button>
            <button>Try</button>
            <img src={ require('./images/1.PNG') } alt="Item 1" />
            <p>Item 1</p>
            <button className="item" onClick={() => handleItemClick({ name: "Item 2", image: "item2.png" })}>Add to cart</button>
            <button>Try</button>
            <img src={ require('./images/2.PNG') } alt="Item 2" />
            <p>Item 2</p>
            </div>
            <button className="item" onClick={() => handleItemClick({ name: "Item 3", image: "item3.png" })}>Add to cart</button>
            <button>Try</button>
            <img src={ require('./images/3.PNG') } alt="Item 3" />
            <p>Item 3</p>
            <br></br>
    </React.Fragment>
  );
}

export default Cart;
