import "./testimonial.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tommy Shelby",
      title: "Buyer",
      img: "https://www.mdzol.com/u/fotografias/m/2020/10/17/f1280x720-970263_1101938_4535.jpg",
      icon: "assets/twitter.png",
      desc: "Great professionals. They'll help you to find your dream home. ",
    },
    {
      id: 2,
      name: "Arya Stark",
      title: "Buyer",
      img: "https://static2.abc.es/media/play/2019/05/13/aryados-kTjG--620x349@abc.jpg",
      icon: "assets/youtube.png",
      desc: "I really recommend them. They are the best realtors in the area. They are great professionals. ",
      featured: true,
    },
    {
      id: 3,
      name: "Tony Soprano",
      title: "Seller",
      img: "https://frasesdelavida.com/wp-content/uploads/2020/03/tony-soprano-frases.jpg",
      icon: "assets/linkedin.png",
      desc: "They sell my house at the highest possible price. Great team!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="container">
        {data.map((d, index) => (
          <div
            key={index}
            className={d.featured ? "card-test featured" : "card-test"}
          >
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h4>{d.name}</h4>
              <h5>{d.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
