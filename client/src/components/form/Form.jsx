import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <div className="form">
      <form className="formWrap">
        <div className="title">
          <h6>CONTACT US</h6>
        </div>
        <label>Name</label>
        <input type="text" placeholder="name"></input>
        <label>Surname</label>
        <input type="text" placeholder="surname"></input>
        <label>Email</label>
        <input type="email" placeholder="example@example.com"></input>
        <label>Phone</label>
        <input type="tel" placeholder="+34952345456"></input>
        <span>Price range</span>
        <div className="checkbox">
          <input type="checkbox" id="price1" name="price1" value="price1" />
          <label for="price1"> - €1,000,000</label>
          <input type="checkbox" id="price2" name="price2" value="price2" />
          <label for="price2"> + €1,000,000</label>
          <input type="checkbox" id="price3" name="price3" value="price" />
          <label for="price3"> + €2,000,000</label>
        </div>
        <label>Tell us more</label>
        <textarea placeholder="Leave your comments here..."></textarea>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
