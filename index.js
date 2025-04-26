function createDogTag(name, race, weight) {
    const dogName = name.toUpperCase();
  
    const dogRace = race.charAt(0).toUpperCase() + race.slice(1).toLowerCase();
  
    const tag = `
    Meu Pet!
    Nome: ${dogName}
    Raça: ${dogRace}
    Peso: ${weight} kg
    `;
  
    console.log(tag);
  }
  

  createDogTag('buddy', 'golden retriever', 30);
  createDogTag('ShAkIrA', "PiQuInEs", 5.5)