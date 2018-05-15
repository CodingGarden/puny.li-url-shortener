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
        return response.json();
      }).then(result => {
        if (result.isJoi) {
          this.error = result.details.map(detail => detail.message).join('. ');
        } else {
          this.success = true;
        }
      });
    }
  }
});