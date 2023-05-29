import { gql } from "@apollo/client";

export const SalesForceQuery = gql`
query salesforceCommerce {
  page(id: "241", idType: DATABASE_ID) {
    template {
      ... on Template_Services {
        templateName
        commanServicesSection {
          bannerSection {
            bannerButton {
              title
              url
            }
            bannerRepeater {
              bannerLogos {
                mediaItemUrl
              }
            }
            bannerSubtitle
            bannerTitle
            bannerImage {
              mediaItemUrl
            }
          }
          bestServicesSection {
            bestServicesDescription
            bestServicesTitle
            bestServicesImage {
              mediaItemUrl
            }
          }
          developmentProcessSection {
            developmentProcessDescription
            developmentProcessTitle
            developmentProcessImage {
              mediaItemUrl
            }
            developmentProcessRepeater {
              addClassname
              addProcessDescription
              addProcessTitle
              addProcessIcon {
                mediaItemUrl
              }
            }
          }
          getInTouchSection {
            getInTouchTiitle
            getInTouchDescription
            getInTouchLink {
              title
              url
            }
          }
          ourSolutionsSection {
            ourSolutionsDescription
            ourSolutionsTitle
            ourSolutionsButton {
              title
              url
            }
          }
          servicesFaqSection {
            faqTitle
            faqDescription
            faqContent {
              faqQuestion
              faqAnswer
              faqId
            }
          }
          whyChooseSection {
            whyChooseDescription
            whyChooseTitle
            whyChooseRepeater {
              addContentDescription
              addContentNumber
              addContentTitle
            }
          }
          ourServicesSection {
            ourWorkTitle
            ourWorkDescription
            ourWorkRepeater {
              bgClass
              contentDescription
              contentNumber
              contentTitle
              textClass
            }
          }
          ourLatestWorkSection {
            ourWorkTitle
            ourWorkDescription
            ourWorkLink {
              title
              url
            }
          }
          solutionSection {
            solutionTiitle
            solutionDescription
            solutionImage {
              mediaItemUrl
            }
            solutionLink {
              title
              url
            }
          }
          seoSection {
            metaDescription
            title
          }
        }
      }
    }
    salesforceSections {
      cloudServicesSection {
        cloudServicesDescription
        cloudServicesTitle
        cloudServicesRepeater {
          addContentDescription
          addContentTitle
          addClassname
        }
      }
      criticalFeaturesSection {
        whyContentDescription
        whyContentRepeater {
          addClassname
          addDescription
          addTitle
          addImage {
            mediaItemUrl
          }
        }
        whyContentTitle
      }
    }
  }
  ourWorks(last: 2) {
    edges {
      node {
        title
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        ourWorkAcf {
          ourWorkSection {
            ourWorkDescription
            ourWorkLogo {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
  posts(last: 3) {
    edges {
      node {
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
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
}
`;
