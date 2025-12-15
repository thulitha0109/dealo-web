
const items = [
  { img: "/images/ilu.png", text: "ilutechnologies" },
  { img: "/images/msn.png", text: "Motor Sports Network" },
  { img: "/images/bimbara.jpg", text: "Bimbara Flora" },
];

const CycloneScroll = () => {
  return (
    <div className="cyclone-container">
      <div className="cyclone-track">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="cyclone-item">
            <img src={item.img} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CycloneScroll;
