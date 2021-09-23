function urlQuery(url) {
    let [indexOfSlashes, devidingQuery] = [[], []];
    Array.from(url).forEach((element, index) => {
        if (element === "/") {
            indexOfSlashes.push(index);
        }
    });
    indexOfSlashes.forEach((element, index) => {
    devidingQuery.push(url.slice(indexOfSlashes[index] + 1, indexOfSlashes[index + 1]));
    });
    while (devidingQuery[devidingQuery.length - 1] === "") {
        devidingQuery.pop();
    }
    return (devidingQuery);
}
