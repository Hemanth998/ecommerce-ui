import Card from '../../Components/Card/Card';
const Listing = () => {
  return (
    <div className="container">
      <h1>Listing</h1>
      <div className="row">
        <div className="col">Filter section</div>
      </div>
      <div className="row g-2">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Listing;
