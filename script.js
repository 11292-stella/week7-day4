const loadimages = document.getElementById("loadImages")

loadimages.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=mountains", {
    headers: {
      Authorization: "wSmcKyWe1b3qNtmCLejrePP5ITTYAgIaCNfaHhr1JK3T3Gp9z3fz1FQq",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Errore nella richiesta API")
      }
    })
    .then((data) => {
      console.log("dati", data)
      varieImmagini(data)
    })
    .catch((error) => {
      console.log("errore", error)
    })
})

const imageContainer = document.getElementById("imageContainer")

const varieImmagini = function (data) {
  const cards = Array.from(document.getElementsByClassName("col-md-4"))
  cards.forEach((card, i) => {
    const img = card.querySelector("img")
    if (img && data.photos[i]) {
      img.src = data.photos[i].src.medium
    }
  })
}

const loadSecondaryImages = document.getElementById("loadSecondaryImages")

loadSecondaryImages.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=kittens", {
    headers: {
      Authorization: "wSmcKyWe1b3qNtmCLejrePP5ITTYAgIaCNfaHhr1JK3T3Gp9z3fz1FQq",
    },
  })
    .then((responsive) => {
      if (responsive.ok) {
        return responsive.json()
      } else {
        throw new Error("errore nell'API")
      }
    })
    .then((data) => {
      imageContainer.innerHTML = ""
      varieImmagini(data)
    })
    .catch((error) => {
      console.log("errore", error)
    })
})
