import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
const ManageDealDay = () => {
  const [hotDealProduct, setProduct] = useState([]);
  const [value, setValue] = useState('');
  console.log(value);
  useEffect(() => {
    fetch(`http://localhost:5000/hotDealProduct`)
      .then((documents) => documents.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);

  const id = hotDealProduct?.map((product) => {
    return product._id;
  });

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <section>
      {hotDealProduct.length > 0 && (
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

      {hotDealProduct.length <= 0 && <div>Option is loading</div>}
    </section>
  );
};

export default ManageDealDay;
