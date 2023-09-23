function getButter() {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve('Butter');
      }, 1000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        resolve('Cold Drinks');
      }, 1000);
    });
  }
  
  function createPost(postData) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve({ message: 'Post created successfully' });
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve({ message: 'Post deleted successfully' });
      }, 1000);
    });
  }
  
  getButter()
    .then((butter) => {
      console.log(`Husband got ${butter}`);
      return getColdDrinks();
    })
    .then((drinks) => {
      console.log(`Husband got ${drinks}`);
      return createPost({ title: 'New Post', content: 'This is a new post.' });
    })
    .then((post) => {
      console.log(post.message);
      return deletePost(1);
    })
    .then((deleteResponse) => {
      console.log(deleteResponse.message);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  