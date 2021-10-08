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

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
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
  }
};

const sample = pAequorFactory(21, mockUpStrand())
const anotherPAequor = mockUpStrand();
console.log(sample.dna)
console.log(anotherPAequor)
sample.compareDNA(anotherPAequor);
// console.log(sample.dna)
// console.log(sample.mutate())




