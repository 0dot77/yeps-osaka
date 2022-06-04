// 실시간으로 입력되는 쪽지 데이터 읽기

export async function fetchJsonData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}
