const OddEvenResult = ({count}) => {
    // 부모쪽에서 count값인 number를 props로 전달하면 OddEvenResult.js 에서 console로 찍음.
    console.log("count : ", count);
    return <h3>{count %2 === 0 ? "짝수임" : "홀수임"}</h3>
}

export default OddEvenResult;