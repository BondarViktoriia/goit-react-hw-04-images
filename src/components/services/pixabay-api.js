
 function fetchImages(query, page) {
     return     fetch(
        `https://pixabay.com/api/?q=${query}}&page=${page}&key=30472076-91990f645bc169d0b44b794c0&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(`По Вашему запросу ${query} ничего не найдено!`)
          );
          
        })
}

const api = {fetchImages}

export default api;