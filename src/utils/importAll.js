export default function importAll(r) {
  const cache = {};
  r.keys().forEach(key => {
    cache[key] = r(key);
  });
  return cache;
}
