
//snack 1 + bonus

let dati: unknown

if (typeof dati === 'string') {
  const datiInMaiuscolo = dati.toUpperCase()
  console.log(datiInMaiuscolo)
} else if (typeof dati === 'number') {
  const datoPerDue = dati * 2
  console.log(datoPerDue)
} else if (typeof dati === 'boolean') {
  console.log(dati ? 'Sì' : 'No')
} else if (dati === null) {
  console.log('Il dato è vuoto')
} else if (Array.isArray(dati)) {
  console.log(dati.length)
} else if (dati instanceof Promise) {
  dati.then((msg) => console.log(msg))
} else {
  console.log('Dato non supportato')
}

// snack 2 + bonus

type Dipendente = {
  nome: 'string',
  cognome: 'string',
  annoNascita: 'number',
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'Freelance'
}

//snack 3

type Developer = {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
}

type ProjectManager = {
  teamSize: null | number,
  budgetGestito?: number,
  stakeHolderPrincipali: string[]
}

type DipendenteDeveloper = Dipendente & Developer

type DipendenteProgectManager = Dipendente & ProjectManager