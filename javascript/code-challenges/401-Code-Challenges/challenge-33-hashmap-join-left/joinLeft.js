function leftJoin(leftMap, rightMap) {
  const result = [];
  for (const leftKey of leftMap.keys()) {
    const leftValue = leftMap.get(leftKey);
    const rightValue = rightMap.get(leftKey) || null;
    result.push([leftKey, leftValue, rightValue]);
  }
  return result;
}

module.exports = leftJoin;
