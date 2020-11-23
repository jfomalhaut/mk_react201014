import React, { useEffect, useState } from "react";
import Axios from "axios";

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;
const VIEW = 10;

const Juso = () => {
  const [keyword, setKeyword] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [total, setTotal] = useState(0);
  const [jusoList, setJuso] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const params = (arr) => {
    const data = [];
    for (let key in arr) {
      data.push(`${key}=${arr[key]}`);
    }
    return data.join("&");
  };

  const getJuso = (ev) => {
    ev.preventDefault();
    setKeyword2(keyword);
  };

  const search = () => {
    const _payload = {
      confmKey: JUSO_API,
      currentPage,
      countPerPage: VIEW,
      keyword: keyword2,
      resultType: "json",
    };

    const payload = params(_payload);
    console.log(payload);
    Axios.get(`${JUSO_URL}?${payload}`)
      .then((res) => {
        const {
          data: {
            results: {
              common: { totalCount },
              juso,
            },
          },
        } = res;
        setJuso(juso);
        setTotal(totalCount);
        // console.log(juso);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const backPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(()=> {
    if(keyword2 !== "") {
      search();
    }
  },[currentPage]);
  
  useEffect(()=> {
    if(keyword2 !== "") {
      if (currentPage === 1) {
        search();
      } else {
        setCurrentPage(1);
      }
    }
  },[keyword2]);

  return (
    <form onSubmit={getJuso}>
      <input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
      <button>검색</button>
      <h1>총 {total}개의 검색결과</h1>
      <h1>currentPage{currentPage}</h1>
      <ul>
        {jusoList.map((item) => (
          <li>{item.roadAddrPart1}</li>
        ))}
      </ul>
      <button onClick={backPage}>이전</button>
      {
        currentPage < total/VIEW && (
          <button onClick={nextPage}>다음</button>
        )
      }
    </form>
  );
};

export default Juso;
