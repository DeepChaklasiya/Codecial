export default function ProfileRightbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="mr-1">
      <div
        className="container-fluid"
        style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}
      >
        <div className="row mb-3">
          <div className="mb-1" style={{ width: "100%" }}>
            <div className="font-weight-bold">User Infromation</div>
          </div>
          <div>
            <ul className="list-group">
              <li>City : &nbsp; Surat</li>
              <li>From : &nbsp; Gujarat</li>
              <li>Relationship : &nbsp; Single</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="mb-2" style={{ width: "100%" }}>
            <div className="font-weight-bold">User Friends</div>
          </div>
          <div className="d-flex flex-wrap align-content-start">
            <div>
              <div></div>
            </div>
            <div className="card border-0 ml-2 mb-2" style={{ width: "100px" }}>
              <img src={`${PF}8.png`} alt="" className="card-img"></img>
              <div className="card-body text-center" style={{ padding: "0px" }}>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Jnow Snow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
