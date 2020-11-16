import React, { useState } from "react";
import Axios from "axios";

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;

const Juso = () => {
  const [keyword, setKeyword] = useState("");
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
    search();
  };

  const search = () => {
    const _payload = {
      confmKey: JUSO_API,
      currentPage,
      countPerPage: 10,
      keyword,
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
    const newState = 1;
    console.log(newState);
    setCurrentPage(newState+1);
    search();
  };

  const backPage = () => {
    setCurrentPage(currentPage - 1);
    console.log(currentPage);
    search();
  };

  return (
    <form onSubmit={getJuso}>
      <input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
      <button>검색</button>
      <h1>총 {total}개의 검색결과</h1>
      <ul>
        {jusoList.map((item) => (
          <li>{item.roadAddrPart1}</li>
        ))}
      </ul>
      <button onClick={backPage}>이전</button>
      <button onClick={nextPage}>다음</button>
    </form>
  );
};

export default Juso;
