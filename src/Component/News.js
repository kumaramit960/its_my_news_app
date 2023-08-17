import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalpage] = useState(0);

  const fetchNews = () => {
    props.setProgress(0);
    setLoading(true);

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey} &page=${currentPage}&pageSize=${props.pageSize}`
      )
      .then((res) => {
        props.setProgress(40);

        setNews([...news, ...res.data.articles]);

        setCurrentPage(currentPage + 1);

        props.setProgress(75);

        const totalPages = Math.ceil(res.data.totalResults / props.pageSize);
        setTotalpage(totalPages);

        props.setProgress(100);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const loadMoreNews = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !=
        document.documentElement.offsetHeight ||
      loading ||
      currentPage >= totalPage
    ) {
      return;
    }
    fetchNews();
  };

  useEffect(() => {
    window.addEventListener("scroll", loadMoreNews);
    return () => window.removeEventListener("scroll", loadMoreNews);
  }, [loading]);

  return (
    <div style={{ marginTop: "100px" }}>
      <InfiniteScroll
        dataLength={news.length}
        next={loadMoreNews}
        hasMore={true}
        loader={currentPage !== totalPage ? <Spinner /> : null}
      >
        <div className="container">
          <div className="row">
            {news.map((val, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <img
                      src={val.urlToImage}
                      className="card-img-top"
                      alt={val.urlToImage}
                    />
                    <div className="card-body bg-dark">
                      <h5 className="card-title text-light">{val.title} </h5>
                      <p className="card-text text-light">{val.description}</p>
                      <a
                        href={val.url}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

// News.defaultprops = {
//   country: "In",
//   pageSize: 15,
//   category: "general",
// };

// News.PropTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
