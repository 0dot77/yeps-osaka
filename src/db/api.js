export function fetchWishes() {
  return fetch(`https://yeps-osaka-40b37-default-rtdb.firebaseio.com/.json`).then((res) => res.json());
}
