export type SolQuest = {
  "version": "0.1.0",
  "name": "sol_quest",
  "instructions": [
    {
      "name": "initializeUser",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "addCompletedQuest",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "questId",
          "type": "i8"
        }
      ]
    },
    {
      "name": "addMateSocial",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "socials",
          "type": {
            "vec": {
              "defined": "Social"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "mate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mateNft",
            "type": "publicKey"
          },
          {
            "name": "mateJoinedDate",
            "type": "i64"
          },
          {
            "name": "questCompletedByMate",
            "type": {
              "vec": "i8"
            }
          },
          {
            "name": "mateRole",
            "type": {
              "defined": "MateRole"
            }
          },
          {
            "name": "socials",
            "type": {
              "vec": {
                "defined": "Social"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Social",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "socialName",
            "type": "string"
          },
          {
            "name": "socialLink",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "MateRole",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bronze"
          },
          {
            "name": "Silver"
          },
          {
            "name": "Gold"
          },
          {
            "name": "Platinum"
          }
        ]
      }
    }
  ]
};

export const IDL: SolQuest = {
  "version": "0.1.0",
  "name": "sol_quest",
  "instructions": [
    {
      "name": "initializeUser",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "addCompletedQuest",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "questId",
          "type": "i8"
        }
      ]
    },
    {
      "name": "addMateSocial",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "socials",
          "type": {
            "vec": {
              "defined": "Social"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "mate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mateNft",
            "type": "publicKey"
          },
          {
            "name": "mateJoinedDate",
            "type": "i64"
          },
          {
            "name": "questCompletedByMate",
            "type": {
              "vec": "i8"
            }
          },
          {
            "name": "mateRole",
            "type": {
              "defined": "MateRole"
            }
          },
          {
            "name": "socials",
            "type": {
              "vec": {
                "defined": "Social"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Social",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "socialName",
            "type": "string"
          },
          {
            "name": "socialLink",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "MateRole",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bronze"
          },
          {
            "name": "Silver"
          },
          {
            "name": "Gold"
          },
          {
            "name": "Platinum"
          }
        ]
      }
    }
  ]
};
