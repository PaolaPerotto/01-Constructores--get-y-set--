class CZooAnimal {
  constructor() {
    this.zooAnimals = [];
  }

  agregarAnimal(n, cage, type, weight) {
    const IdAnimal = Math.floor(Math.random() * 1000) + 1;
    this.zooAnimals.push({ IdAnimal, name: n, cageNumber: cage, IdTypeAnimal: type, weight });
  }

  generarTablaAnimales() {
    const tablaBody = document.querySelector('#animalTable tbody');
    tablaBody.innerHTML = '';

    this.zooAnimals.forEach(animal => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${animal.IdAnimal}</td>
        <td>${animal.name}</td>
        <td>${animal.cageNumber}</td>
        <td>${animal.IdTypeAnimal}</td>
        <td>${animal.weight}</td>
      `;
      tablaBody.appendChild(fila);
    });
  }

  contarAnimalesEnJaula5Menor3kg() {
    let count = 0;
    for (const animal of this.zooAnimals) {
      if (animal.cageNumber === 5 && animal.weight < 3) {
        count++;
      }
    }
    return count;
  }

  contarFelinosEntreJaulas2y5() {
    let count = 0;
    for (const animal of this.zooAnimals) {
      if (animal.IdTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5) {
        count++;
      }
    }
    return count;
  }

  listarNombreAnimalJaula4Menor120() {
    for (const animal of this.zooAnimals) {
      if (animal.cageNumber === 4 && animal.weight < 120) {
        return animal.name;
      }
    }
    
  }
}


const zoo = new CZooAnimal();

zoo.agregarAnimal("Tigre", 5, 1, 150); //felino
zoo.agregarAnimal("León", 2, 1, 180); //felino
zoo.agregarAnimal("Águila", 3, 2, 2); //ave
zoo.agregarAnimal("Serpiente", 4, 3, 90);//reptil 
zoo.agregarAnimal("Pantera", 5, 1, 100); //felino
zoo.agregarAnimal("Halcon", 5, 2, 2);//ave
zoo.agregarAnimal("Puma", 2, 1, 64);//felino
zoo.agregarAnimal("Tucan", 3, 2, 620);//ave
zoo.agregarAnimal("Lobo", 4, 2, 75);//mamifero
zoo.agregarAnimal("Cocodrilo", 4, 3, 250);//reptil


zoo.generarTablaAnimales();
document.getElementById("resultado1").textContent = "Cantidad de animales en la jaula 5 con peso menor a 3 kg: " + zoo.contarAnimalesEnJaula5Menor3kg();
document.getElementById("resultado2").textContent = "Cantidad de animales tipo felino entre las jaulas 2 y 5: " + zoo.contarFelinosEntreJaulas2y5();
document.getElementById("resultado3").textContent = "Nombre del animal en la jaula 4 con peso menor a 120: " + zoo.listarNombreAnimalJaula4Menor120();