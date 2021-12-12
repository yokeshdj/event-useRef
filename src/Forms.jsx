import React from 'react';
export default function Forms() {
  const [formState, setFormState] = React.useState({
    name: '',
    gender: '',
    maritalStatus: false,
    image: null,
  });
  const imageRef = React.useRef(null);
  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    console.log(e.target.value);
    setFormState({ ...formState, [e.target.name]: val });
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    setFormState({ ...formState, image: file });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Hello StackBlitz!</h1>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formState.name}
      ></input>
      <br></br>
      <label>Gender</label>
      <select name="gender" onChange={handleChange} value={formState.gender}>
        <option value="">Select Option</option>
        <option value="M">M</option>
        <option value="F">F</option>
      </select>
      <br></br>
      <label>Marital Status</label>
      <input
        type="checkbox"
        name="maritalStatus"
        onChange={handleChange}
        checked={formState.maritalStatus}
      ></input>
      <br></br>
      <input type="file" onChange={handleFile} ref={imageRef}></input>
      <input type="submit"></input>
    </form>
  );
}
