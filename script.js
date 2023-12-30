fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    document.querySelector(".container h4").textContent += data.slip.id;
    document.querySelector(".quote").textContent = `"${data.slip.advice}"`;
  });
