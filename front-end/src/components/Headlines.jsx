import { useEffect, useState } from "react";

function Headlines() {
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/top-headlines")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status) {
          setResponseData(res.data);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      {responseData ?
        responseData.map((data, index) => {
          return (
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  {data.description} &nbsp;
                  <a href={data.url} target="_blank">View article</a>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary d-flex justify-content-between">
                    <span>Source: {data.source.name}</span>
                    <span>Author: {data.author}</span>
                  </small>
                </p>
              </div>
              <img src={data.urlToImage} className="card-img-bottom" alt={data.title} />
            </div>
          );
        }) : <h2>Loading...</h2>}
    </>
  );
}

export default Headlines;
