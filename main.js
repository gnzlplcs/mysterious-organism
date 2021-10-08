// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// starts challenge

// Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
// The first parameter is a number (no two organisms should have the same number).
// The second parameter is an array of 15 DNA bases.
// pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,

    // To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
    // .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
    mutate() {
      let mutatedDna = [];
      for (let i = 0; i < this.dna.length; i++) {
        const item = this.dna[i];
        let newItem = returnRandBase();
        if (item !== newItem){
          mutatedDna.push(newItem);
        } else {
          while (item === newItem) {
            newItem = returnRandBase();
          }
          mutatedDna.push(newItem);
        }
      }
      return mutatedDna;
    },

    // You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.
    // .compareDNA() has one parameter, another pAequor object.
    // The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
    compareDNA(pAequor) {
      let matchedValue = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          matchedValue++;
        }
      }
      let percetage = matchedValue * 100 / this.dna.length;
      console.log(`specimen #1 and specimen #2 have ${percetage.toFixed(0)}% DNA in common`);
    },

    // P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
    // In the returned object of pAequorFactory(), add another method .willLikelySurvive().
    // .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
    willLikelySurvive() {
      let countBases = 0;
      this.dna.map(item => {
        if(item === 'C' || item === 'G') countBases++;
      })
      return countBases >= this.dna.length * 0.6 ? true : false;
    }
  }
};



// test 1: create a pAequorFactory instance
const sample = pAequorFactory(21, mockUpStrand());
console.log(sample);

// test 2: mutate the sample array
const mutatedSample = sample.mutate();
console.log(mutatedSample);

// test 3: compare percentage in common between two arrays
const newSample = mockUpStrand();
const compareDNAArrays = sample.compareDNA(newSample);
console.log(compareDNAArrays);

// test 4: know if an DNA array has chance to survive
const willSurvive = sample.willLikelySurvive();
console.log(willSurvive);