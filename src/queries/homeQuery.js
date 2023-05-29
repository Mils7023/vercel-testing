import { gql } from "@apollo/client";

export const HomeQuery = gql`
  query homePage {
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
    page(id: "133", idType: DATABASE_ID) {
      homePageSections {
        aboutUsSection {
          aboutUsDescription
          aboutUsTitle
          aboutUsImage {
            mediaItemUrl
          }
        }
        bannerSection {
          bannerDescription
          bannerSubtitle
          bannerTitle
          bannerBottomImages {
            bottomImage {
              mediaItemUrl
            }
          }
          bannerButton {
            title
            url
            target
          }
          bannerImage {
            mediaItemUrl
          }
        }
        getInTouchSection {
          getInTouchDescription
          getInTouchTiitle
          getInTouchLink {
            title
            url
          }
        }
        ourLatestWorkSection {
          ourWorkTitle
          ourWorkDescription
          ourWorkLink {
            title
            url
            target
          }
        }
        ourServiceSection {
          ourServiceDescription
          ourServiceTitle
          ourServiceRepeater {
            contentTitle
            contentDescription
            contentButtonLink {
              target
              title
              url
            }
            contentImage {
              mediaItemUrl
            }
          }
        }
        recentBlogsSection {
          recentBlogsDescription
          recentBlogsTitle
          recentBlogsLink {
            target
            title
            url
          }
        }
        solutionSection {
          solutionDescription
          solutionTiitle
          solutionImage {
            mediaItemUrl
          }
          solutionLink {
            target
            title
            url
          }
        }
        trustedBySection {
          trustedByTitle
          trustedByRepeater {
            trustedByImage {
              mediaItemUrl
            }
          }
        }
        whyChooseBrainspateSection {
          whyChooseDescription
          whyChooseTitle
          whyChooseRepeater {
            addNumber
            addTitle
            classname
            fieldGroupName
          }
        }
        seoSection {
          title
          metaDescription
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
  }
`;
