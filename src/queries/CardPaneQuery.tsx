export const query = `{
    newsPageCollection{
        items{
            cardComponentCollection{
              items{    
                  ... on Card{
                    title,
                    subtitle,
                    autor,
                    date,
                    image {
                      url
                    }, 
                    id
                  } 
              }
           }
        }
      }
}`