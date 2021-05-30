import React from 'react';
import styles from './HotProduct.module.css';
import { useForm } from 'react-hook-form';
const HotProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const image = data.files[0];
    const formData = new FormData();
    formData.append('ProductName', data.ItemName);
    formData.append('Price', data.Price);
    formData.append('OldPrice', data.OldPrice);
    formData.append('files', image);
    formData.append('Tags', data.Tags);
    formData.append('Category', data.Category);
    formData.append('Brands', data.Brands);
    formData.append('Colors', data.Colors);
    formData.append('Size', data.Size);
    formData.append('Description', data.Description);

    fetch(`http://localhost:5000/HotProduct`, {
      method: 'POST',
      body: formData,
    }).then((result) => {
      if (result.status === 200) {
        alert('Product Upload Successfully');
        const formReset = document.getElementById('form');
        formReset.reset();
      } else {
        alert('Product Not Upload');
      }
    });

    console.log(data);
  };
  return (
    <section className={styles.section}>
      <h3 className='text-center py-4'>Hot Product</h3>
      <form onSubmit={handleSubmit(onSubmit)} id='form' className={styles.form}>
        <input {...register('ItemName')} placeholder=' Enter Item Name' />
        <input
          type='number'
          {...register('Price', { required: true })}
          placeholder=' Offer Price'
        />
        <input
          type='file'
          {...register('files', { required: true })}
          placeholder=' Old Price'
        />
        <input
          type='number'
          {...register('OldPrice', { required: true })}
          placeholder=' Old Price'
        />

        <select className={styles.select} {...register('Tags')}>
          <option value='Furniture'>Furniture</option>
        </select>
        <label for='Category'>
          Choose Category:
          <small>(For Multiple selection ,Hold ctrl and click)</small>
        </label>
        <select
          name='Category'
          className={styles.select}
          {...register('Category', { required: true })}
          multiple
        >
          <option value='Office'>Office</option>
          <option value='Home'>Home</option>
          <option value='Marriage Program'>Marriage Program</option>
          <option value='Studio'>Studio</option>
          <option value='Other'>Other</option>
        </select>
        <select
          className={styles.select}
          {...register('Brands', { required: true })}
          multiple
        >
          <option>Select Brands</option>
          <option value='Airi'>Airi</option>
          <option value='Brand'>Brand</option>
          <option value='Draven'>Draven</option>
          <option value='Skudmart'>Skudmart</option>
          <option value='Yena'>Yena</option>
        </select>
        <select
          className={styles.select}
          {...register('Colors', { required: true })}
          multiple
        >
          <option>Select Available Colors</option>
          <option value='Blue'>Blue</option>
          <option value='Gray'>Gray</option>
          <option value='Pink'>Pink</option>
        </select>
        <select
          className={styles.select}
          {...register('Size', { required: true })}
          multiple
        >
          <option>Select Available Size</option>
          <option value='L'>L</option>
          <option value='M'>M</option>
          <option value='S'>S</option>
          <option value='XL'>XL</option>
          <option value='XXL'>XXL</option>
        </select>
        <textarea
          className={styles.select}
          {...register('Description', { required: true })}
          placeholder='Description'
        ></textarea>
        <input type='submit' />
      </form>
    </section>
  );
};

export default HotProduct;
