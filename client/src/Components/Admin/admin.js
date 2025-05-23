import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Product.css';

export const Product = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    tags: "",
    categoryName: "",
    price: "",
    SKU: "",
    description: "",
    brand: "",
    specs: "",
    sort: "",
    sale: "",
    stock: "",
    salePercent: "",
    deal: {
      isDeal: false,
      discountPercent: "",
      dealName: "",
      couponCode: "",
      isActive: false,
      expiry: ""
    }
  });

  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://hari-1-cbck.onrender.com/api/get-all');
        setProducts(res.data.Products);
      } catch (error) {
        console.log('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name.startsWith("deal.")) {
      const dealField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        deal: {
          ...prev.deal,
          [dealField]: type === "checkbox" ? checked : value
        }
      }));
    } else if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("tags", JSON.stringify(formData.tags.split(',').map(tag => tag.trim())));
    formDataToSend.append("categoryName", formData.categoryName);
    formDataToSend.append("price", parseFloat(formData.price));
    formDataToSend.append("SKU", formData.SKU);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("brand", formData.brand);
    formDataToSend.append("specs", formData.specs);
    formDataToSend.append("sort", formData.sort);
    formDataToSend.append("sale", formData.sale);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("salePercent", formData.salePercent);

    // Deal fields - converted to strings
    formDataToSend.append("deal[isDeal]", String(formData.deal.isDeal));
    formDataToSend.append("deal[discountPercent]", formData.deal.discountPercent);
    formDataToSend.append("deal[couponCode]", formData.deal.couponCode);
    formDataToSend.append("deal[isActive]", String(formData.deal.isActive));
    formDataToSend.append("deal[expiry]", formData.deal.expiry);
    formDataToSend.append("deal[dealName]", formData.deal.dealName)

    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      if (!isEditing) {
        const response = await axios.post('https://hari-1-cbck.onrender.com/api/add-product', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data', // Ensuring the correct content type for file uploads
          }
        });
        setMessage('Product added successfully');
        setProducts(prev => [...prev, response.data.product]);
      } else {
        const confirmation = window.confirm("Are you sure you want to update this product?");
        if (!confirmation) return;

        const response = await axios.put(`https://hari-1-cbck.onrender.com/api/update-product/${editId}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data', // Ensuring the correct content type for file uploads
          }
        });
        setMessage('Product updated successfully');
        setProducts(prev => prev.map(p => (p._id === editId ? response.data.product : p)));
      }

      // Reset form
      setFormData({
        title: "",
        image: null,
        tags: "",
        categoryName: "",
        price: "",
        SKU: "",
        description: "",
        brand: "",
        specs: "",
        sort: "",
        sale: "",
        stock: "",
        salePercent: "",
        deal: {
          isDeal: false,
          discountPercent: "",
          couponCode: "",
          isActive: false,
          expiry: "",
          dealName: ""
        }
      });

      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      console.log("Error", error.message);
      setMessage(isEditing ? 'Failed to update product' : 'Failed to add product');
    }
  };

  const handleDelete = async (productId) => {
    const confirmation = window.confirm('Are you sure you want to delete this product?');
    if (!confirmation) return;

    try {
      await axios.delete(`https://hari-1-cbck.onrender.com/api/delete-product/${productId}`);
      setMessage('Product deleted');
      setProducts((prev) => prev.filter((d) => d._id !== productId));
    } catch (error) {
      console.error("Error deleting product", error);
      setMessage('Failed to delete product');
    }
  };

  const handleEdit = (prod) => {
    setFormData({
      title: prod.title,
      image: null,
      tags: prod.tags ? prod.tags.join(', ') : '',
      categoryName: prod.category?.name || '',
      price: prod.price,
      SKU: prod.SKU,
      description: prod.description || '',
      brand: prod.brand || '',
      specs: prod.specs || '',
      sort: prod.sort || '',
      sale: prod.sale || '',
      stock: prod.stock || '',
      salePercent: prod.salePercent || '',
      deal: {
        isDeal: prod.deal?.isDeal || false,
        discountPercent: prod.deal?.discountPercent || '',
        couponCode: prod.deal?.couponCode || '',
        dealName: prod.deal?.dealName || '',
        isActive: prod.deal?.isActive || false,
        expiry: prod.deal?.expiry ? new Date(prod.deal.expiry).toISOString().slice(0, 16) : ''
      }
    });
    setIsEditing(true);
    setEditId(prod._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="product-page">
      <h1>{isEditing ? "Edit Product" : "Add New Product"}</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} />
          <input name="categoryName" placeholder="Category" value={formData.categoryName} onChange={handleChange} required />
          <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
          <input name="SKU" placeholder="SKU" value={formData.SKU} onChange={handleChange} required />
          <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} />
          <input name="specs" placeholder="Specs" value={formData.specs} onChange={handleChange} />
          <input name="sort" placeholder="Sort" value={formData.sort} onChange={handleChange} />
          <input name="sale" placeholder="Sale (true/false)" value={formData.sale} onChange={handleChange} />
          <input name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} />
          <input name="salePercent" placeholder="Sale Percent" value={formData.salePercent} onChange={handleChange} />
          <input type="file" name="image" onChange={handleChange} required={!isEditing} />

          <h3>Deal Information</h3>
          <label>
            <input type="checkbox" name="deal.isDeal" checked={formData.deal.isDeal} onChange={handleChange} />
            Is Deal?
          </label>
          <input type="text" name="deal.dealName" placeholder='Deal Name' value={formData.deal.dealName} onChange={handleChange}/>
          <input name="deal.discountPercent" type="number" placeholder="Discount Percent" value={formData.deal.discountPercent} onChange={handleChange} />
          <input name="deal.couponCode" placeholder="Coupon Code" value={formData.deal.couponCode} onChange={handleChange} />
          <label>
            <input type="checkbox" name="deal.isActive" checked={formData.deal.isActive} onChange={handleChange} />
            Is Active?
          </label>
          <input name="deal.expiry" type="datetime-local" value={formData.deal.expiry} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-button">
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>

      {message && <div className="message">{message}</div>}

      <div className="product-list-section">
        <h2>All Products</h2>
        <ul className="product-list">
          {products.map((item, indx) => (
            <li key={indx} className="product-card">
              <Link to={`/product/${item._id}`}>
                <img src={item.imageUrl} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
              <p>${item.price}</p>
              <p className='category'>{item.category?.name}</p>
              {item.tags && item.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
              <div className="card-actions">
                <button onClick={() => handleEdit(item)} className="edit-btn">Update</button>
                <button onClick={() => handleDelete(item._id)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
