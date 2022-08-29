import React, { useState } from "react";

const PhotoList = ({ category }) => {
    const [photos] = useState([
      {
        name: "Grocery aisle",
        category: "commercial",
        description: "lorem.a;slgkna;oweg",
      },
      {
        name: "Grocery booth",
        category: "commercial",
        description: "lorem;ladkgna;lgke",
      },
      {
        name: "Building exterior",
        category: "commercial",
        description: "Lorem.alkdfgn;alawetqt",
      },
      {
        name: "Restaurant table",
        category: "commercial",
        description: ";alknegea;lwejha;weitga;woe",
      },
      {
        name: "Cafe interior",
        category: "commercial",
        description: ";alskng;awioerhwoejgta;owie",
      },
      {
        name: "Cat green eyes",
        category: "portraits",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Green parrot",
        category: "portraits",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Yellow macaw",
        category: "portraits",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Pug smile",
        category: "portraits",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Pancakes",
        category: "food",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Burrito",
        category: "food",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Scallop pasta",
        category: "food",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Burger",
        category: "food",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Fruit bowl",
        category: "food",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Green river",
        category: "landscape",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Docks",
        category: "landscape",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Panoramic village by sea",
        category: "landscape",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Domestic landscape",
        category: "landscape",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
      {
        name: "Park bench",
        category: "landscape",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      },
    ]);
    
    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    // console.log(photos[0].category);
    // console.log('above = photos category, below = current category');
    // console.log(category);
    // console.log(currentPhotos);

    return(
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                  <img 
                    src={require(`../../assets/small/${category}/${i}.jpg`).default}
                    alt={image.name}
                    className='img-thumbnail mx-1'
                    key={image.name}
                  />
                ))}
                {/* <img src={require('../../assets/small/commercial/0.jpg').default} alt={'test'} className='img-thumbnail mx-1' key={0}/> */}
            </div>
        </div>
    );
};

export default PhotoList;