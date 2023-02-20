export const query = `{
    cardCollection{
        items {
          title,
          subtitle,
          autor,
          date,
          image{
            url
          },
          id
       }   
    }
}`