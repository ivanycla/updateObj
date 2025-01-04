const gallery = {
    'Mona Lisa': 'Leonardo da Vinci',
    'Starry Night': 'Vincent van Gogh',
    'The Scream': 'Edvard Munch',
  }
  
  function updateGallery(obj, name, newProp) {
    if (obj.hasOwnProperty(name)) {
      obj[name] = newProp;
    } else {
      obj[name] = newProp;
    }
  }
