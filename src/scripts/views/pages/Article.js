const Article = {
  async render() {
    return `
      <h2>Article Destination</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Article;
