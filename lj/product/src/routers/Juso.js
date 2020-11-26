import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;
const VIEW = 10;

const Juso = () => {
	const [keyword, setKeyword] = useState("");
	const [keyword2, setKeyword2] = useState("");
	const [jusoList, setJuso] = useState([]);
	const [total, setTotal] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const params = arr => {
		const data = [];
		for (let key in arr) {
			data.push(`${key}=${arr[key]}`);
		}
		return data.join('&');
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
			resultType: 'json'
		};

		const payload = params(_payload);
	
		Axios.get(`${JUSO_URL}?${payload}`).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setJuso(juso);
			setTotal(totalCount);
		}).catch(error => {
			console.log(error);
		});
	};

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	const prev = () => {
		setCurrentPage(currentPage - 1);
	};

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [currentPage]);

	// 검색 버튼을 누를 때
	// currentPage 를 1로 reset 시켜준다..
	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage === 1) {
				search();
			} else {
				setCurrentPage(1);
			}
		}
	}, [keyword2]);

	return (
		<div>
			<form onSubmit={getJuso}>
				<input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
				<button>검색</button>
				<h1>검색결과, 총 {total}건의 주소 결과가 있습니다.</h1>
				<h1>Current Page : {currentPage}</h1>
				<ul>
					{jusoList.map((item, index) => (
						<li key={`JUSO_LIST${index}`}>{item.roadAddrPart1}</li>
					))}
				</ul>
			</form>
			{currentPage !== 1 && (
				<button onClick={prev}>이전</button>
			)}
			{currentPage < total / VIEW && (
				<button onClick={next}>다음</button>
			)}
		</div>
	);
};

export default Juso;

