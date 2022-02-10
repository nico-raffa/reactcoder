import "./ItemDetail.css";
export default function ItemDetail({ item }) {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={item.imgUrl}  />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{item.title}</h1>
          <h2>{item.mark}</h2>
          <p>{item.description}</p>
        </div>
        <div className="product-price-btn">
          $<span>{item.price}</span>
        </div>
      </div>
    </div>
  );
}
