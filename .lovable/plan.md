# Firma nelle email + nuova app "PedFlow"

## 1. Firma "Corporate Boost Service" nelle email
Nella pagina Corsi, i bottoni "Iscriviti" aprono una mail precompilata. Aggiungo la firma in fondo al corpo del messaggio.

- File: `src/routes/corsi.tsx`
- Nel testo del corpo (`buildMailto`), dopo `Grazie,` aggiungo una riga con la firma:
  ```text
  Grazie,
  Corporate Boost Service
  ```

## 2. Nuova app "PedFlow" nella pagina Applicazioni
Aggiungo PedFlow come **prima** card, con l'icona allegata. Tutte le altre app scorrono sotto mantenendo l'ordine: **PedFlow → Smart Maintenance → MiniFAT → FAT → SAT → LP**.

Dati card:
- Titolo: **PedFlow**
- Descrizione: **"Verifica il fluido se appartiene al Gruppo 1 o 2 della CE PED in un Click"**
- Icona: l'immagine caricata (boccetta rossa)
- Stato: attiva (non "in costruzione")

### Modifiche
- **Icona**: carico l'immagine `PED FLOW ICONA rossa con tappo.png` come asset CDN e creo il pointer in `src/assets/gps/` (o `src/assets/`).
- **`src/data/site.ts`**: aggiungo `pedFlow` come primo elemento dell'array `applicazioni`, con `image` puntata all'icona e `wip: false`. L'ordine finale resta quello richiesto.
- **`src/i18n/locales/it.json`** e **`en.json`**: aggiungo le chiavi `app.items.pedFlow.title` e `app.items.pedFlow.desc` (testo identico in IT/EN per il titolo, descrizione tradotta in EN).

Nessuna modifica al layout: la pagina Applicazioni già renderizza dinamicamente le card dall'array, quindi mostrare PedFlow per primo e far slittare le altre avviene automaticamente cambiando l'ordine nell'array.

## Note tecniche
- La griglia in `applicazioni.tsx` gestisce già card con immagine (come Smart Maintenance) e card senza, quindi l'icona di PedFlow viene mostrata nel riquadro immagine.
- Verifico l'aspetto della nuova card e l'apertura corretta della mail con firma dopo l'implementazione.
