export function getData(fn, amount) {
  let data, url, timer;
  if (amount === "small") {
    url =
      "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
    timer = 3000;
  } else {
    url =
      "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
    timer = 8000;
  }
  fetch(url)
    .then(data => data.json())
    .then(fetchedData => (data = fetchedData));
  setTimeout(() => {
    return fn(data);
  }, timer);
}
