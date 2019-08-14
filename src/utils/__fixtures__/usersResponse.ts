import UsersSearch from "../../../queries/users";

/**
 * The following responses are a set of 3 specific calls to graphql
 * It tries to simulate that the user:
 * 1) searched for the first time
 * 2) moves forward
 * 3) moves forward
 */
export const UsersResponses = [
  {
    request: {
      query: UsersSearch,
      variables: {
        query: "facundo",
        after: null
      }
    },
    result: {
      data: {
        search: {
          userCount: 1258,
          edges: [
            {
              node: {
                avatarUrl:
                  "https://avatars2.githubusercontent.com/u/1040941?v=4",
                bio:
                  "Things I like: elegant code and clean APIs; the Unix philosophy and the Zen of Python; pragmatic functional programming; semicolon-separated lists.",
                followers: {
                  totalCount: 193
                },
                starredRepositories: {
                  totalCount: 190
                },
                name: "Facundo Olano",
                url: "https://github.com/facundoolano"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars2.githubusercontent.com/u/184060?v=4",
                bio: null,
                followers: {
                  totalCount: 109
                },
                starredRepositories: {
                  totalCount: 14
                },
                name: "Facundo Batista",
                url: "https://github.com/facundobatista"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars1.githubusercontent.com/u/2700564?v=4",
                bio: "CTO",
                followers: {
                  totalCount: 65
                },
                starredRepositories: {
                  totalCount: 1234
                },
                name: "Facundo Farias",
                url: "https://github.com/facundofarias"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars1.githubusercontent.com/u/1200667?v=4",
                bio: "",
                followers: {
                  totalCount: 30
                },
                starredRepositories: {
                  totalCount: 4
                },
                name: "Facundo Domínguez",
                url: "https://github.com/facundominguez"
              }
            },
            {
              node: {
                avatarUrl: "https://avatars1.githubusercontent.com/u/29705?v=4",
                bio: "",
                followers: {
                  totalCount: 27
                },
                starredRepositories: {
                  totalCount: 692
                },
                name: "Facundo Cabrera",
                url: "https://github.com/facundocabrera"
              }
            }
          ],
          pageInfo: {
            startCursor: "Y3Vyc29yOjE=",
            endCursor: "Y3Vyc29yOjU=",
            hasPreviousPage: false,
            hasNextPage: true
          }
        }
      }
    }
  },
  {
    request: {
      query: UsersSearch,
      variables: {
        query: "facundo",
        after: "Y3Vyc29yOjU="
      }
    },
    result: {
      data: {
        search: {
          userCount: 1258,
          edges: [
            {
              node: {
                avatarUrl:
                  "https://avatars3.githubusercontent.com/u/14063057?v=4",
                bio: "",
                followers: {
                  totalCount: 21
                },
                starredRepositories: {
                  totalCount: 820
                },
                name: null,
                url: "https://github.com/facundomedica"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars1.githubusercontent.com/u/15897578?v=4",
                bio: "",
                followers: {
                  totalCount: 15
                },
                starredRepositories: {
                  totalCount: 142
                },
                name: "Facundo Victor",
                url: "https://github.com/facundovictor"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars2.githubusercontent.com/u/1576711?v=4",
                bio: "",
                followers: {
                  totalCount: 17
                },
                starredRepositories: {
                  totalCount: 78
                },
                name: "Facundo Quiroga",
                url: "https://github.com/facundoq"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars1.githubusercontent.com/u/1851497?v=4",
                bio: "",
                followers: {
                  totalCount: 10
                },
                starredRepositories: {
                  totalCount: 3
                },
                name: "Facundo",
                url: "https://github.com/facugon"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars2.githubusercontent.com/u/184751?v=4",
                bio: "Scala & JS Dev",
                followers: {
                  totalCount: 48
                },
                starredRepositories: {
                  totalCount: 591
                },
                name: "Facundo Viale",
                url: "https://github.com/Jarlakxen"
              }
            }
          ],
          pageInfo: {
            startCursor: "Y3Vyc29yOjY=",
            endCursor: "Y3Vyc29yOjEw",
            hasPreviousPage: true,
            hasNextPage: true
          }
        }
      }
    }
  },
  {
    request: {
      query: UsersSearch,
      variables: {
        query: "facundo",
        after: "Y3Vyc29yOjEw"
      }
    },
    result: {
      data: {
        search: {
          userCount: 1258,
          edges: [
            {
              node: {
                avatarUrl:
                  "https://avatars2.githubusercontent.com/u/1382608?v=4",
                bio: "",
                followers: {
                  totalCount: 16
                },
                starredRepositories: {
                  totalCount: 46
                },
                name: "Facundo Mainere",
                url: "https://github.com/FacundoMainere"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars0.githubusercontent.com/u/5167196?v=4",
                bio: "",
                followers: {
                  totalCount: 9
                },
                starredRepositories: {
                  totalCount: 6
                },
                name: "Facundo Flores",
                url: "https://github.com/FacundoGFlores"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars0.githubusercontent.com/u/3741108?v=4",
                bio:
                  "A nerdy noob programmer from Argentina.\r\n\r\nSome acknowledge about PHP, Bash, Batch, C/C++, Basic, VB.Net, jQuery, SQL and Pascal. Learning Android development.",
                followers: {
                  totalCount: 21
                },
                starredRepositories: {
                  totalCount: 34
                },
                name: "Facundo Montero",
                url: "https://github.com/FacuM"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars0.githubusercontent.com/u/5693966?v=4",
                bio:
                  "Bayesian methods and Spatial(-temporal) statistics applied to the interplay between life sciences and the environment",
                followers: {
                  totalCount: 33
                },
                starredRepositories: {
                  totalCount: 137
                },
                name: "Facundo Muñoz",
                url: "https://github.com/famuvie"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars2.githubusercontent.com/u/353511?v=4",
                bio: null,
                followers: {
                  totalCount: 3
                },
                starredRepositories: {
                  totalCount: 19
                },
                name: "Facundo Chamut",
                url: "https://github.com/facundo"
              }
            }
          ],
          pageInfo: {
            startCursor: "Y3Vyc29yOjEx",
            endCursor: "Y3Vyc29yOjE1",
            hasPreviousPage: true,
            hasNextPage: true
          }
        }
      }
    }
  }
];
