new Vue({
  el: '#app',
  data: {
    error: '',
    success: false,
    name: '',
    url: '',
  },
  methods: {
    createPuny() {
      const body = {
        name: this.name,
        url: this.url
      };

      fetch('/api/puny', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(result => {
        if (result.isJoi) {
          // there was an error! show it!
          this.error = result.details.map(detail => detail.message).join('. ');
          console.log(this.error);
        } else {
          this.success = true;
        }
      });
    }
  }
});