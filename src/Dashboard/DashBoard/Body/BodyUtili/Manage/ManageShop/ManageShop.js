import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import styles from './ManageShop.module.css';
import { useForm } from 'react-hook-form';
const ManageShop = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [HotProduct, setProduct] = useState([]);
  const [SingleProduct, setSingleProduct] = useState('');
  const [SingleProduct1, setSingleProduct1] = useState(0);
  const [SingleProduct2, setSingleProduct2] = useState(0);
  const [ItemName, setProductName] = useState('');
  const [value, setValue] = useState('');
  useEffect(() => {
    fetch(`https://gooddealserver.herokuapp.com/ShopAllProducts`)
      .then((documents) => documents.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);
  console.log(HotProduct);
  //collect all the id
  const id = HotProduct?.map((product) => {
    return product._id;
  });
  //handle dropdown change
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  const selectedValue = HotProduct.filter((product) => product._id === value);
  //handle form
  const onSubmit = (data) => {
    fetch(`https://gooddealserver.herokuapp.com/UpdateShopProduct/` + value, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    }).then((result) => {
      data = {};
      if (result.status === 200) {
        alert('Product Update Successfully');
        window.location.reload();
      } else {
        alert('Product Can not Update');
      }
    });
  };
  const onTodoChange = (e) => {
    setSingleProduct(e);
  };
  const onTodoChange1 = (e) => {
    setSingleProduct1(e);
  };
  const onTodoChange2 = (e) => {
    setSingleProduct2(e);
  };
  const onTodoChange3 = (e) => {
    setProductName(e);
  };

  //delete a item
  const handleDelete = () => {
    console.log('DeleteHotDeal', value);
    fetch(`https://gooddealserver.herokuapp.com/DeleteShopProduct/` + value, {
      method: 'DELETE',
    }).then((result) => {
      if (result.status === 200) {
        alert('Product Deleted Successfully');
        window.location.reload();
      } else {
        alert('Product Can not Delete');
      }
    });
  };
  return (
    <section className={styles.section}>
      {HotProduct.length > 0 && (
        <DropdownButton
          className='text-center pt-5'
          alignRight
          title='Select Product to update'
          id='dropdown-menu-align-right'
          onSelect={handleSelect}
        >
          {id?.map((e) => {
            return <Dropdown.Item eventKey={e}>{e}</Dropdown.Item>;
          })}
        </DropdownButton>
      )}
      {HotProduct.length <= 0 && <div>Option is loading</div>}
      {value !== '' && (
        <Button variant='danger' onClick={handleDelete}>
          Remove
        </Button>
      )}

      <form onSubmit={handleSubmit(onSubmit)} id='form' className={styles.form}>
        <h4>Product Name: {selectedValue[0]?.ShopProduct.ProductName}</h4>

        <input
          {...register('itemName', { required: true })}
          onChange={(e) => onTodoChange3(e.target.value)}
          value={
            ItemName !== ''
              ? ItemName
              : selectedValue[0]?.ShopProduct.ProductName
          }
        />
        <label for='NewPrice'>Product New Price</label>
        <input
          type='number'
          name='NewPrice'
          {...register('Price', { required: true })}
          onChange={(e) => onTodoChange2(e.target.value)}
          value={
            SingleProduct2 === 0
              ? selectedValue[0]?.ShopProduct.Price
              : SingleProduct2
          }
        />
        <label for='OldPrice'>Product Old Price</label>
        <input
          type='number'
          name='oldPrice'
          {...register('OldPrice', { required: true })}
          onChange={(e) => onTodoChange1(e.target.value)}
          value={
            SingleProduct1 === 0
              ? selectedValue[0]?.ShopProduct.OldPrice
              : SingleProduct1
          }
        />
        <label for='description'>Product Description</label>
        <textarea
          className={styles.select}
          name='description'
          {...register('Description', { required: true })}
          onChange={(e) => onTodoChange(e.target.value)}
          value={
            SingleProduct !== ''
              ? SingleProduct
              : selectedValue[0]?.ShopProduct.Description
          }
        ></textarea>

        <input type='submit' value='Update' />
      </form>
    </section>
  );
};
export default ManageShop;
