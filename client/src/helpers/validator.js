export const notes = {
    title: ((title, setErrors) => title.length > 70 ? setErrors((oldState) => [...oldState, 'Title must be up to 70 characters']) : null),
    quantity: (quantity, setErrors) => {
      if ((Number(quantity) < 1) || (Number(quantity) > 10)) {
        setErrors((oldState) => [...oldState, 'Quantity must be number from 1 to 10!']);
      }
    },
    image: ((image, setErrors) => image.match(/^https*:\/\/.+/g) ? null : setErrors((oldState) => [...oldState, 'Enter valid url!'])),
    price: ((price, setErrors) => !(Number(price)) ? null : setErrors((oldState) => [...oldState, 'Price must be number!']))
  
  }