import { gql } from "@apollo/client";

export const FooterQuery = gql`
  query webSettings {
    generalSettings {
      acfGeneralSettings {
        footerSection {
          bottomSection {
            copyrightText
            reservedText
            links {
              pageId
              title
              url
            }
          }
          companyDescription
          contactUs {
            companyAddress
            companyEmail
            companyPhone
          }
          countriesWeServe {
            countryName
            countryIcon {
              mediaItemUrl
            }
          }
          ourExpertise {
            pageId
            title
            url
          }
          socialIcons {
            iconLink
            iconImage {
              mediaItemUrl
            }
          }
        }
        webSettings {
          siteLogo {
            mediaItemUrl
          }
        }
      }
    }
    menu(id: "react-header", idType: SLUG) {
      menuItems(where: { parentId: "0" }) {
        nodes {
          url
          label
          childItems {
            nodes {
              url
              label
              cssClasses
            }
          }
          cssClasses
        }
      }
    }
  }
`;
