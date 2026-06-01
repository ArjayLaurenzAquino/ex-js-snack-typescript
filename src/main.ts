const dati: unknown = undefined

if (typeof dati === 'string') {
  const datiInMaiuscolo = dati.toUpperCase()
  console.log(datiInMaiuscolo)
} if (typeof dati === 'number') {
  const datoPerDue = dati * 2
  console.log(datoPerDue)
} if (typeof dati === 'boolean') {
  console.log(dati ? 'Sì' : 'No')
} else {
  console.log('Dato non supportato')
}