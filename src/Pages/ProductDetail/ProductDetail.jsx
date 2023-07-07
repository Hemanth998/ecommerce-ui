import { Link } from 'react-router-dom';
const ProductDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/listing">
            <button type="button" className="btn btn-light">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="/img/prodImageTwo.jpg"
            alt="product"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-6">
          <h1>Product Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptatem quos
            voluptatibus quod doloribus quas natus. Quisquam voluptatum,
            quibusdam, quia, quae voluptates voluptatem quos voluptatibus quod
            doloribus quas natus.
          </p>
          <p>
            Price : <strong>Rs. 1000</strong>
          </p>
          <p>
            Rating : <strong>4.5</strong>
          </p>
          <button type="button" className="btn btn-primary ms-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
