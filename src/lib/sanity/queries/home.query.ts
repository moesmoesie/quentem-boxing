const image = `{
  alt,
  title,
  ...asset->{
    'src': url,
    'width': metadata.dimensions.width,
    'height': metadata.dimensions.height
  }
}`;

const HomeQuery = `
    *[slug.current == "/"][0]{
        content[]{
          _type,
          _type == "home-landing" => {
            title,
            body,
            background${image},
            callToAction1,
            callToAction2
          },
          _type == "spacer" => {
            height
          },
          _type == "gallery" => {
            images[] {
              image${image},
              row,
              col
            }
          },
          _type == "info-2" => {
            title,
            body,
            image${image},
            list[]{
              title,
              body,
              icon
            }
          },
          _type == "info-1" => {
            title,
            body,
            image${image},
            list[]{
              title,
              body,
              icon
            }
          },
          _type == "testimonial" => {
            title,
            name,
            image${image},
            body
          },
          _type == "contact" => {
            title,
            body,
            email,  
            phone,
            whatsapp,
            image${image}
          },
          _type == "copyright" => {
            text,
          },
          _type == "header" => {
            logo
          }
        }
    }
`;

export default HomeQuery;
