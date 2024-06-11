import { cardDestinations } from "../templates/templateCreator";

const Destinations = (destinations) => {
  return `
        <div class="container">
            <div class="card-other-destination">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                ${destinations
                  .slice(0, 20)
                  .map((destination) => cardDestinations(destination))
                  .join(``)}
                </div>
            </div>
        
        </div>
    
    `;
};

export default Destinations;
