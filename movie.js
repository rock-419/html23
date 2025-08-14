let movies;
      const bodyMovieContainer = document.querySelector(".bodyMovieContainer");
      function getMovies() {
        fetch(`https://ghibliapi.vercel.app/films`)
          .then((res) => {
            if (!res.ok) throw new Error("Invalid API");
            return res.json();
          })
          .then((data) => {
            movies = data;
            movies.map((movie) => {
              const list = document.createElement("div");
                const description = document.createElement("div");
              list.classList.add("movieContainer");
              list.innerHTML = `
                <img src="${movie.image}"/>
                `;

              description.classList.add("infoContainer");
              description.innerHTML = `
                  <img src="${movie.image}"/>
                  <p>${movie.title}</p>
                  <p>${movie.description}</p>
                  <p>Made By ${movie.producer}</p>
                  <p>${movie.release_date}</p>
                  `;
              bodyMovieContainer.appendChild(list);
              bodyMovieContainer.appendChild(description);
            });
          });
      }
      getMovies();