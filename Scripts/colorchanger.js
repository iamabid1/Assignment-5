const colors = [
    "#B0B0B0", "#D1D3D4", "#A4A9AE", "#B0BCC8", "#D0D3D4", 
    "#D6D6D6", "#A9B2C0", "#D1D1D1", "#D3D3D3", "#BCC3CF"
  ];
  let current = 0;
  const img = document.getElementById("colorChanger");
  img.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[current];
    current = (current + 1) % colors.length;
  });
  