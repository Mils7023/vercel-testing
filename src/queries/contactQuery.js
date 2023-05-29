import { gql } from "@apollo/client";


export const ContactQuery = gql`
  query contactPage {
    generalSettings {
      acfGeneralSettings {
        ourClientsSection {
          ourClientsContentRepeater {
            ourClientsContentDescription
            ourClientsContentText
            ourClientsContentTitle
            ourClientsRatings
            ourClientsImage {
              mediaItemUrl
            }
          }
          ourClientsDescription
          ourClientsTitle
        }
      }
    }
    page(id: "553", idType: DATABASE_ID) {
      contactPage {
        contactDetailsSection {
          addAddress
          addEmail
          addNumber
          countryTitle
        }
        seoSection {
          title
          metaDescription
        }
      }
    }
  }
`;


