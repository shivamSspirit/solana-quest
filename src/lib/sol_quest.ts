export type SolQuest = {
  "version": "0.1.0",
  "name": "sol_quest",
  "instructions": [
    {
      "name": "initializeAdmin",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
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
          "name": "id",
          "type": "i8"
        },
        {
          "name": "deployedUrl",
          "type": "string"
        },
        {
          "name": "transaction",
          "type": "string"
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
    },
    {
      "name": "approveUserQuest",
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
          "name": "admin",
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
    }
  ],
  "accounts": [
    {
      "name": "admin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "matesSubmitted",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
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
              "vec": {
                "defined": "Quest"
              }
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
      "name": "Quest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "i8"
          },
          {
            "name": "deployedUrl",
            "type": "string"
          },
          {
            "name": "transaction",
            "type": "string"
          },
          {
            "name": "updatedTime",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": "Status"
            }
          }
        ]
      }
    },
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
    },
    {
      "name": "Status",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "SUBMITTED"
          },
          {
            "name": "ACCEPTED"
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
      "name": "initializeAdmin",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
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
          "name": "id",
          "type": "i8"
        },
        {
          "name": "deployedUrl",
          "type": "string"
        },
        {
          "name": "transaction",
          "type": "string"
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
    },
    {
      "name": "approveUserQuest",
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
          "name": "admin",
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
    }
  ],
  "accounts": [
    {
      "name": "admin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "matesSubmitted",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
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
              "vec": {
                "defined": "Quest"
              }
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
      "name": "Quest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "i8"
          },
          {
            "name": "deployedUrl",
            "type": "string"
          },
          {
            "name": "transaction",
            "type": "string"
          },
          {
            "name": "updatedTime",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": "Status"
            }
          }
        ]
      }
    },
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
    },
    {
      "name": "Status",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "SUBMITTED"
          },
          {
            "name": "ACCEPTED"
          }
        ]
      }
    }
  ]
};
