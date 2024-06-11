import { CardArticle } from "../templates/templateCreator";

const ArticleContainer = (data) => {
  return `
        <div class="container">

            <div class="article">
                <h3>All Article</h3>
                <p>Related articles about tourism</p>
                <div class="row row-cols-1 row-cols-md-3 g-4 articleCard">
                ${data.map((article) => CardArticle(article)).join(``)}
                
                </div>
            </div>
        </div>
    
    `;
};

export default ArticleContainer;
