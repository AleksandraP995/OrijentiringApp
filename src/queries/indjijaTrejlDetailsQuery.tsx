export const query = `
{
    indjijaTrejlDetailsCollection {
        items {
          adresa,
          datum,
          vreme,
          prijava {
            url
          }
          linkSajta
        }
      }
}`;