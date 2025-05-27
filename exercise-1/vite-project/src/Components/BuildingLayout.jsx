export default function BuildingLayout({
  imageAdress,
  cardTitle,
  cardDescription,
  buttonUrl,
  buttonLabel,
}) {
  return (
    <>
      <div className="card m-5">
        <img className="card-img-top" src={imageAdress} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardDescription}</p>
          <a href={buttonUrl} className="btn btn-primary">
            {buttonLabel}
          </a>
        </div>
      </div>
    </>
  );
}
