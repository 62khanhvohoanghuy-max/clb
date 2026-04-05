let url = "https://api.spotify.com/v1/playlists/65uAjFTt4N8sEJeonhNOBL";
let token = "BQAQXrGvmARwydHkeb22CSzNqj36cPxzINurvuNEN1GbWspoKHZk4J8NN0L5MeDyqLf67jIS8fIuyslYNzPEW3q8V4mkVEeGjabkgjSvVHF-IzDClYlR2iBAX-By2EWRMjfTqoaBurI";
let container = document.getElementById("container")
// async function getplaylists(){
//     await fetch("https://spclient.wg.spotify.com/playlist/v2/user/31uzv2uqmo5srmfvori7rq3vtria/rootlist?decorate=revision%2Clength%2Cattributes%2Ctimestamp%2Cowner&bustCache=1755416921928", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer BQCFhdMeEgTgErYheUcJeOpEy4XRyuo5nXXirto_4oTMy637H4NTErw9t5rI7qJiSm8qdwIGM3O_7VlNOFygrL30-DwnmVfHked90Brx1VCViC5o1mOEJoCPZ07Xzzk9C1s7J7g99_45wkTv8IvRGLJjKVn9f-YWZiHwZoLbMHKqcs2XkwuqiOO1aco3DDGIljZd03suAb6FuY_7uJaeJIw1OZnX6q97uK-7tZz74CHh13SQSYedAlY1EudjtcuGTUDOF6pW4Of1KsWZN7WeJh2sWNPfIE8g5dIXFwQcaLll7TxS3R2t6f_ieyGNuF47Y2Yw1tLLmKM7Gg8oMIlkA4XoZYFT6IXH_5TODEiEatV2DvfxJ2u1xGUBiiS2YfHwXQ`,
//             clientToken: 'AACxT9qqmVYfMQnfmR/Ox1LsrA7ERT457qpJkqYdKtsAD7RLX4IbDliXcxvOamneV0Lr4TTWmYUrn1BeMcTH9t6/argFP3MracgtqjKka9lMLVW2s6sVoOQtNxrUz4hOxt23ZNFkxFKEdg22Mrib6rjSMLKtjBRlJJCXKRavtPgWymsNvA30H49QL546+uR3CcBKE/mMtxotc815e0ZONfCszTgGd1/nUBzd8RA4oznz05Jcln5qSYjjjY02dxUjnP6OZvaJtCR6D51e0evTyBxwwfXWVa3XStUZqKSFEw=='
//         }}
//     )
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//         return result.contents.items
//     })
// }

let dataPlaylist = {
    "revision": "AAAALZZRqN5n5bzIH7Aq+fbkud+7iCVR",
    "length": 40,
    "attributes": {},
    "contents": {
        "pos": 0,
        "truncated": false,
        "items": [
            {
                "uri": "spotify:playlist:65uAjFTt4N8sEJeonhNOBL",
                "attributes": {
                    "timestamp": "1755044193000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DWWY64wDtewQt",
                "attributes": {
                    "timestamp": "1748270787000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:0rLnxRb7csSGqcmg9zA4jW",
                "attributes": {
                    "timestamp": "1742444853277",
                    "public": true
                }
            },
            {
                "uri": "spotify:playlist:3LbCoxcgPC2jUdsWVvbq2N",
                "attributes": {
                    "timestamp": "1740180286380",
                    "public": true
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1FoyQGyinuuvRu",
                "attributes": {
                    "timestamp": "1733923405000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EIZryeCehZItf",
                "attributes": {
                    "timestamp": "1732069215000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DX0D996ZXujBy",
                "attributes": {
                    "timestamp": "1732065037000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZEVXbMDoHDwVN2tF",
                "attributes": {
                    "timestamp": "1731940103000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E38d7tjYvsHlc",
                "attributes": {
                    "timestamp": "1731594004000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E4m0uHm6DE1DC",
                "attributes": {
                    "timestamp": "1730643260000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E4vmmujp8nGFY",
                "attributes": {
                    "timestamp": "1730473473000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EVJHK7Q1TBABQ",
                "attributes": {
                    "timestamp": "1728301554000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DX9tPFwDMOaN1",
                "attributes": {
                    "timestamp": "1728054237000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EIYoEcoc1o1HZ",
                "attributes": {
                    "timestamp": "1728179660000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E4AfEUiirXPyP",
                "attributes": {
                    "timestamp": "1726416764000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DWVlLVXKTOAYa",
                "attributes": {
                    "timestamp": "1725543834000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EQncLwOalG3K7",
                "attributes": {
                    "timestamp": "1725276686000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EQqedj0y9Uwvu",
                "attributes": {
                    "timestamp": "1724813363000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EIUWc0IvWb34V",
                "attributes": {
                    "timestamp": "1724305020000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DWVEaynofUD86",
                "attributes": {
                    "timestamp": "1724071704000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:6JM0cz3FEN2IG7HWXhc9QQ",
                "attributes": {
                    "timestamp": "1722828384000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EIV1oCGxzhRed",
                "attributes": {
                    "timestamp": "1722824878000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EIUu7mk4MUkLV",
                "attributes": {
                    "timestamp": "1722480125000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DWVRSukIED0e9",
                "attributes": {
                    "timestamp": "1721654325000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DZ06evO3wzrW0",
                "attributes": {
                    "timestamp": "1721273362000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:074AoVXFnnlKmSpz28uqe0",
                "attributes": {
                    "timestamp": "1720453691000",
                    "public": true
                }
            },
            {
                "uri": "spotify:playlist:4b4AnHVgXg4nGLaPyoVIZp",
                "attributes": {
                    "timestamp": "1720450748000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1EIUrcFHNN0HOQ",
                "attributes": {
                    "timestamp": "1720443016000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:0jtIQTn00Bw89vLQ487CpW",
                "attributes": {
                    "timestamp": "1719811336000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:6qSYIKJihVKpWr2HDeHjxS",
                "attributes": {
                    "timestamp": "1719674035000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:2azPC5XIdwLQefxuFsouEs",
                "attributes": {
                    "timestamp": "1719567793000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:4GtQVhGjAwcHFz82UKy3Ca",
                "attributes": {
                    "timestamp": "1719502352000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E38XuV18uEb35",
                "attributes": {
                    "timestamp": "1719366446000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:7Fd8nXC3FZk9NtpXmAywdA",
                "attributes": {
                    "timestamp": "1719226470000",
                    "public": true
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DX5KpP2LN299J",
                "attributes": {
                    "timestamp": "1719226457000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:0CCUv26Dx8JD4EczezzM0v",
                "attributes": {
                    "timestamp": "1719213833000",
                    "public": true
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E4oH2NG2UyvvJ",
                "attributes": {
                    "timestamp": "1719213812000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E4nvvnTUO8Jp9",
                "attributes": {
                    "timestamp": "1719213803000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1E4nr6hJNUgTDh",
                "attributes": {
                    "timestamp": "1719213796000",
                    "public": false
                }
            },
            {
                "uri": "spotify:playlist:37i9dQZF1DXbYM3nMM0oPk",
                "attributes": {
                    "timestamp": "1715347555000",
                    "public": false
                }
            }
        ],
        "metaItems": [
            {
                "revision": "AAAAGm8gj3v7SE298nFNtS+fyY/GEsMa",
                "attributes": {
                    "name": "And, baby, that’s show business for you ❤️‍🔥",
                    "picture": "q2dwbAAA2oTc75u8C6e+VQZk/hM="
                },
                "length": 22,
                "timestamp": "1754922343000",
                "ownerUsername": "zzlpwp9oqs59bqkasw2v6d96w"
            },
            {
                "revision": "AAAAAJC4V90xDeFbXfGvzmeEpyuyEa5p",
                "attributes": {
                    "name": "phonk",
                    "description": "the beat of your drift",
                    "collaborative": false,
                    "format": "format-shows-shuffle",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8ac1e452a4da5e33d620c6c419c3d78d"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DWWY64wDtewQt"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "isAlgotorial",
                            "value": "false"
                        },
                        {
                            "key": "primary_color",
                            "value": "#ffffff"
                        },
                        {
                            "key": "recs.hasArtists",
                            "value": "spotify:artist:1kd6WqngBvP0Vthu1sGI0j,spotify:artist:02wf6SCDwrs2qTX09X0IRE,spotify:artist:6s4LSwgbzTAfnN6OUfegJB,spotify:artist:7kk9ucvRJim0NMM89Lml2Y,spotify:artist:2q5vFLZus8uaVSzmIwH4Tz"
                        },
                        {
                            "key": "header_image_url_desktop",
                            "value": "https://i.scdn.co/image/ab6768640000fe8963c2e9fdb62a4e7d7e72c85e"
                        },
                        {
                            "key": "image_url",
                            "value": "https://i.scdn.co/image/ab67686d00003ae067775367195fae57fe1d2d57"
                        },
                        {
                            "key": "episode_description",
                            "value": "the beat of your drift"
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8ac1e452a4da5e33d620c6c419c3d78d"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f0000000271ff720f409999d89f09a8e4"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f0000000171ff720f409999d89f09a8e4"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f0000000371ff720f409999d89f09a8e4"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f0000000371ff720f409999d89f09a8e4"
                        }
                    ]
                },
                "length": 99,
                "timestamp": "1755283373000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAxrGB1sxCTANloSxdcTCMgqkU+t3",
                "attributes": {
                    "name": "Võ Hoàng Huy Khánh\u0027s top tracks ",
                    "description": "",
                    "collaborative": false
                },
                "length": 50,
                "timestamp": "1745159636000",
                "ownerUsername": "31uzv2uqmo5srmfvori7rq3vtria"
            },
            {
                "revision": "AAAAB2tBnEd83Y3ARAUZxKjE0znCAe7x",
                "attributes": {
                    "name": "This Is Taylor Swift (My Version)",
                    "description": "A playlist complete with your top Taylor Swift songs, and other Swiftie favourites!",
                    "picture": "q2dwbAAA2oShXvmnLLGYiWN0/T0="
                },
                "length": 53,
                "timestamp": "1742310767000",
                "ownerUsername": "31uzv2uqmo5srmfvori7rq3vtria"
            },
            {
                "revision": "Z0YMuQAAAACBS+gfb6ynzRDCqh84tfLo",
                "attributes": {
                    "name": "Your Top Songs 2024",
                    "description": "The songs you played most in 2024.",
                    "collaborative": false,
                    "format": "wrapped-2024-top100",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e430c2b1f8f73b3d69568e6920409"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "wrapped.globalUri",
                            "value": "spotify:playlist:37i9dQZF1FoyQGyinuuvRu"
                        },
                        {
                            "key": "header_image_url_desktop",
                            "value": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/wrapped/yts-desktop/en"
                        },
                        {
                            "key": "image_url",
                            "value": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/wrapped/yts-mobile/en"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e430c2b1f8f73b3d69568e6920409"
                        },
                        {
                            "key": "wrapped.isEligible",
                            "value": "true"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/wrapped/yts/en"
                        }
                    ]
                },
                "length": 101,
                "timestamp": "1732644025000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAKg9ZEdFYeBbPTJnpyJUUEJqyhha",
                "attributes": {
                    "name": "BABYMONSTER Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIUu7mk4MUkLV\u003eBLACKPINK\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIY6qzm6t7jm1\u003eJENNIE\u003c/a\u003e and \u003ca href\u003dspotify:playlist:37i9dQZF1EIZqaPk8OiHD6\u003eMEOVV\u003c/a\u003e",
                    "collaborative": false,
                    "format": "artist-mix-reader",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8ac22a57c2dc864b8a2e0a18b6bb31b9"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8ac22a57c2dc864b8a2e0a18b6bb31b9"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/1SIocsqdEefUTE6XKGUiVS/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAABOtSmtAdCw2ZU6YULCJJzIbNjt6",
                "attributes": {
                    "name": "Taylor Swift | The Eras Tour Official Setlist",
                    "description": "All the songs from the new setlist for Taylor Swift | The Eras Tour.",
                    "collaborative": false,
                    "format": "editorial",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b3e5d8087ec0ea34b3bae4f73f8128e"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DX0D996ZXujBy"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "primary_color",
                            "value": "#ffffff"
                        },
                        {
                            "key": "recs.hasArtists",
                            "value": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b3e5d8087ec0ea34b3bae4f73f8128e"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f000000027763f39f192262f9cc088529"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f000000017763f39f192262f9cc088529"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f000000037763f39f192262f9cc088529"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f000000037763f39f192262f9cc088529"
                        }
                    ]
                },
                "length": 44,
                "timestamp": "1722484800000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "MDRNMAAAAAAAAAAAAAAAAAAAAAAAAGVu",
                "attributes": {
                    "name": "Top 50 - Global",
                    "description": "Your daily update of the most played tracks right now - Global.",
                    "collaborative": false,
                    "format": "chart",
                    "formatAttributes": [
                        {
                            "key": "last_updated",
                            "value": "2025-08-16T13:45:39Z"
                        },
                        {
                            "key": "rank_type",
                            "value": "plays"
                        },
                        {
                            "key": "new_entries_count",
                            "value": "3"
                        },
                        {
                            "key": "chart_entity_type",
                            "value": "track"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
                        },
                        {
                            "targetName": "small",
                            "url": "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_small.jpg"
                        },
                        {
                            "targetName": "large",
                            "url": "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_large.jpg"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_xlarge.jpg"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755351939000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAFWENlKftkozS//UW8zGCkND5bX5",
                "attributes": {
                    "name": "Daily Mix 2",
                    "description": "BLACKPINK, LISA, The Weeknd and more",
                    "collaborative": false,
                    "format": "daily-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8a2eb4358b27f1c8d5355f01acef07ab"
                        },
                        {
                            "key": "canContainArtists.uris",
                            "value": "spotify:artist:41MozSoPIsD1dJM0CLPjZF,spotify:artist:5L1lO4eRHmJ7a0Q6csE5cT,spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ,spotify:artist:4nvFFLtv7ZqoTr83387uK4,spotify:artist:0LOK81e9H5lr61HlGGHqwA"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "temporary_hack_prefer_linear_playback",
                            "value": "true"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8a2eb4358b27f1c8d5355f01acef07ab"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eb9b57f5eccf180a0049be84b3/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "aKGQ9wAAAADujz10XFltzvpLgz1V7U3b",
                "attributes": {
                    "name": "BLACKPINK Radio",
                    "description": "With JENNIE, LISA, JISOO and more",
                    "collaborative": false,
                    "format": "inspiredby-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/41MozSoPIsD1dJM0CLPjZF/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755418871000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "aKGQ9wAAAABrX9c/WMWcJIX3gcNTaZwG",
                "attributes": {
                    "name": "ROSÉ Radio",
                    "description": "With JENNIE, JISOO, LISA and more",
                    "collaborative": false,
                    "format": "inspiredby-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/3eVa5w3URK5duf6eyVDbu9/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755418871000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAAAAAAAesmMJXGhDiLBelV5G/b24",
                "attributes": {
                    "name": "Upbeat Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIV1oCGxzhRed\u003eTaylor Swift\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIVNN1WQoxAb6\u003eLady Gaga\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIUrcFHNN0HOQ\u003eLISA\u003c/a\u003e and more",
                    "collaborative": false,
                    "format": "topic-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e3eb25bc2d13857f01741bcccc265"
                        },
                        {
                            "key": "cloud_artists_uris",
                            "value": "spotify:artist:06HL4z0CvFAxyc27GXpf02,spotify:artist:1HY2Jd0NmPuamShAr6KMms,spotify:artist:5L1lO4eRHmJ7a0Q6csE5cT"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e3eb25bc2d13857f01741bcccc265"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/topic/upbeat/06HL4z0CvFAxyc27GXpf02/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAG4p2wWeVLmu6/TYsFhHzj5BOo9y",
                "attributes": {
                    "name": "K-Pop ON! (온)",
                    "description": "Turn on the movement with the latest and greatest in K-Pop! (Cover: HUNTR/X(K-Pop Demon Hunters))",
                    "collaborative": false,
                    "format": "format-shows-shuffle",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4eb5f12f62312813b231060e769238"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DX9tPFwDMOaN1"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "isAlgotorial",
                            "value": "false"
                        },
                        {
                            "key": "moveFollowersJobId",
                            "value": "7af21e0b-9ba6-4dbf-8b5f-ff8ef5814bd9"
                        },
                        {
                            "key": "primary_color",
                            "value": "#FFFFFF"
                        },
                        {
                            "key": "recs.hasArtists",
                            "value": "spotify:artist:2yNNYQBChuox9A5Ka93BIn,spotify:artist:36cgvBn0aadzOijnjjwqMN,spotify:artist:41MozSoPIsD1dJM0CLPjZF,spotify:artist:0BJ2EjOqcfgFvlZXNKrNbE,spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                        },
                        {
                            "key": "autoplay",
                            "value": "spotify:playlist:37i9dQZF1DXdR77H5Z8MIM"
                        },
                        {
                            "key": "header_image_url_desktop",
                            "value": "https://i.scdn.co/image/ab6768640000fe89356ae12d4e5d0398c91eab16"
                        },
                        {
                            "key": "image_url",
                            "value": "https://i.scdn.co/image/ab67686d00003ae0f5ce53e111c9a45923a2529b"
                        },
                        {
                            "key": "episode_description",
                            "value": "Turn on the movement with the latest and greatest in K-Pop! (Cover: HUNTR/X(K-Pop Demon Hunters))"
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4eb5f12f62312813b231060e769238"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f00000002b3217aa90a472b023a4aaffb"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f00000001b3217aa90a472b023a4aaffb"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f00000003b3217aa90a472b023a4aaffb"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f00000003b3217aa90a472b023a4aaffb"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755165672000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAKJUoEJ3HaO+OFFCQVardYBD4HhL",
                "attributes": {
                    "name": "Adele Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIV5Po98yTZ2l\u003eLana Del Rey\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIV1oCGxzhRed\u003eTaylor Swift\u003c/a\u003e and \u003ca href\u003dspotify:playlist:37i9dQZF1EIZ1HkjHHzYzZ\u003eBillie Eilish\u003c/a\u003e",
                    "collaborative": false,
                    "format": "artist-mix-reader",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8af658a4581e06ba6c72ca9f434e59ed"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8af658a4581e06ba6c72ca9f434e59ed"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/4dpARuHxo51G3z768sgnrY/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "aKGQ9wAAAADBhSv/3yYPEziDpG7JA17V",
                "attributes": {
                    "name": "Taylor Swift Radio",
                    "description": "With Harry Styles, Billie Eilish, Chappell Roan and more",
                    "collaborative": false,
                    "format": "inspiredby-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/06HL4z0CvFAxyc27GXpf02/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755418871000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAFYnqVLLPGJY9LlrIHXo9BThSPPL",
                "attributes": {
                    "name": "Pop Right Now",
                    "description": "The most interesting tracks in the current world of pop music.",
                    "collaborative": false,
                    "format": "format-shows-shuffle",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8ac29fe7fb6448a6ec19af54362cbc3b"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DWVlLVXKTOAYa"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "isAlgotorial",
                            "value": "true"
                        },
                        {
                            "key": "primary_color",
                            "value": "#ffffff"
                        },
                        {
                            "key": "autoplay",
                            "value": "spotify:playlist:37i9dQZF1DX4WYpdgoIcn6"
                        },
                        {
                            "key": "header_image_url_desktop",
                            "value": "https://i.scdn.co/image/ab6768640000fe8988394e6e2b332ad89b425bac"
                        },
                        {
                            "key": "image_url",
                            "value": "https://i.scdn.co/image/ab67686d00003ae05b41a0f4e1e41f236c2912d6"
                        },
                        {
                            "key": "episode_description",
                            "value": "The most interesting tracks in the current world of pop music."
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8ac29fe7fb6448a6ec19af54362cbc3b"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f000000022eea4bd22a557b1cbc9072c4"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f000000012eea4bd22a557b1cbc9072c4"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f000000032eea4bd22a557b1cbc9072c4"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f000000032eea4bd22a557b1cbc9072c4"
                        }
                    ]
                },
                "length": 100,
                "timestamp": "1755208828000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAAAAAABS+QkDc8DE8SI8eTgGUbEK",
                "attributes": {
                    "name": "Pop Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIUrcFHNN0HOQ\u003eLISA\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIV1oCGxzhRed\u003eTaylor Swift\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIXya8JbQtUVN\u003eGracie Abrams\u003c/a\u003e and more",
                    "collaborative": false,
                    "format": "topic-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e3e9d9e91e8e1f50318e0ab21d0d8"
                        },
                        {
                            "key": "cloud_artists_uris",
                            "value": "spotify:artist:5L1lO4eRHmJ7a0Q6csE5cT,spotify:artist:06HL4z0CvFAxyc27GXpf02,spotify:artist:4tuJ0bMpJh08umKkEXKUI5"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e3e9d9e91e8e1f50318e0ab21d0d8"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/topic/pop/5L1lO4eRHmJ7a0Q6csE5cT/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAAAAAACefXOmpYWHxiaJlbxwp6hX",
                "attributes": {
                    "name": "2010s Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIV1oCGxzhRed\u003eTaylor Swift\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIUu7mk4MUkLV\u003eBLACKPINK\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIV5Po98yTZ2l\u003eLana Del Rey\u003c/a\u003e and more",
                    "collaborative": false,
                    "format": "topic-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42f9b2e99f090242f84b291401c6"
                        },
                        {
                            "key": "cloud_artists_uris",
                            "value": "spotify:artist:06HL4z0CvFAxyc27GXpf02,spotify:artist:41MozSoPIsD1dJM0CLPjZF,spotify:artist:00FQb4jTyendYWaN8pK0wa"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42f9b2e99f090242f84b291401c6"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/topic/twenty_tens/06HL4z0CvFAxyc27GXpf02/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAADld6dxWulw40LU2iLjcvDoRhGHY",
                "attributes": {
                    "name": "Biển Của Hy Vọng Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIXY24ed5ewBV\u003eQuân A.P\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIVULw75HFCvk\u003eJUUN D\u003c/a\u003e and \u003ca href\u003dspotify:playlist:37i9dQZF1EIUXFP1Q6oPBh\u003eTrịnh Thăng Bình\u003c/a\u003e",
                    "collaborative": false,
                    "format": "artist-mix-reader",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b3e5d8024ec0ea04b3b816f0ab641c6"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b3e5d8024ec0ea04b3b816f0ab641c6"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/6bLRsp9AAj3St5Ai70PPVm/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAC0vfGpDYVNgiBG/oNiGYYAw3i0k",
                "attributes": {
                    "name": "The Summer I Turned Pretty Official Playlist",
                    "description": "It\u0027s not summer without you. Listen to the music from and inspired by The Summer I Turned Pretty, new season now streaming on Prime Video. ",
                    "collaborative": false,
                    "format": "editorial",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4f3033fc35ec517c7e98b0cbb25e93"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DWVEaynofUD86"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "moveFollowersJobId",
                            "value": "ac11004b-f73d-47cf-bf98-6c749de79b8e"
                        },
                        {
                            "key": "primary_color",
                            "value": "#ffffff"
                        },
                        {
                            "key": "recs.hasArtists",
                            "value": "spotify:artist:0p4nmQO2msCgU4IF37Wi3j,spotify:artist:2kxP07DLgs4xlWz8YHlvfh,spotify:artist:6zFYqv1mOsgBRQbae3JJ9e,spotify:artist:1cZQSpDsxgKIX2yW5OR9Ot,spotify:artist:6JL8zeS1NmiOftqZTRgdTz"
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4f3033fc35ec517c7e98b0cbb25e93"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f000000023453cdd322238a2b2de51819"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f000000013453cdd322238a2b2de51819"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f000000033453cdd322238a2b2de51819"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f000000033453cdd322238a2b2de51819"
                        }
                    ]
                },
                "length": 215,
                "timestamp": "1755073829000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAEZWO6j4v4LVMWEIx35VnGQuHqcPnz",
                "attributes": {
                    "name": "LIVE FROM THE ERAS TOUR 2023",
                    "description": "Taylor Swift : The Eras Tour (Live Version) - Some songs have been removed by Spotify, so I will add them back ASAP",
                    "picture": "q2dwbAAA2oSVttuieb7A42YiDYg="
                },
                "length": 273,
                "timestamp": "1755223591000",
                "ownerUsername": "i5x3l0uvmwf2ubxil16l3qz4u"
            },
            {
                "revision": "AAAAAMSjA5ghQBF2QnAssSwsfzY2/Bk9",
                "attributes": {
                    "name": "Taylor Swift Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIZ1HkjHHzYzZ\u003eBillie Eilish\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIWEZ8ZxSQLXq\u003eEd Sheeran\u003c/a\u003e and \u003ca href\u003dspotify:playlist:37i9dQZF1EIVJqRUYjMtlQ\u003eAriana Grande\u003c/a\u003e",
                    "collaborative": false,
                    "format": "artist-mix-reader",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b3e5d8024ec0ea04b3b816f0ab641c6"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b3e5d8024ec0ea04b3b816f0ab641c6"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/06HL4z0CvFAxyc27GXpf02/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAAqj98qUG8MjQ2nhAdEoyZ4XDxpA",
                "attributes": {
                    "name": "BLACKPINK Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIY6qzm6t7jm1\u003eJENNIE\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIWy285w4QwOy\u003eROSÉ\u003c/a\u003e and \u003ca href\u003dspotify:playlist:37i9dQZF1EIUrcFHNN0HOQ\u003eLISA\u003c/a\u003e",
                    "collaborative": false,
                    "format": "artist-mix-reader",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c89a51ffe1148a96c723745f59d77d6c1"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c89a51ffe1148a96c723745f59d77d6c1"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/41MozSoPIsD1dJM0CLPjZF/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAOpR0cWYbvO7eOc1WUylwAtx8J4R",
                "attributes": {
                    "name": "Top Hits of 2019",
                    "description": "Rewind and rediscover big songs of 2019. Cover: Ariana Grande",
                    "collaborative": false,
                    "format": "editorial",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b3e5d8087ec0ea34b3bae4f73f8128e"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DWVRSukIED0e9"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "isAlgotorial",
                            "value": "true"
                        },
                        {
                            "key": "moveFollowersJobId",
                            "value": "3509ef96-aee9-4c79-921a-81569dd81107"
                        },
                        {
                            "key": "primary_color",
                            "value": "#ffffff"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b3e5d8087ec0ea34b3bae4f73f8128e"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f00000002f5f2a36c4c0367c678cf2385"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f00000001f5f2a36c4c0367c678cf2385"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f00000003f5f2a36c4c0367c678cf2385"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f00000003f5f2a36c4c0367c678cf2385"
                        }
                    ]
                },
                "length": 100,
                "timestamp": "1707435101000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "aJ54gAAAAACd26QB2bmvTbBoeRM8wkrx",
                "attributes": {
                    "name": "This Is Miley Cyrus",
                    "description": "This is Miley Cyrus. The essential tracks, all in one playlist.",
                    "collaborative": false,
                    "format": "artistsets",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42d6470505f61cbb2d93b9f8edcf"
                        },
                        {
                            "key": "artistGid",
                            "value": "c472d26e283742859c5bad915d70556a"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42d6470505f61cbb2d93b9f8edcf"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://thisis-images.spotifycdn.com/v2/37i9dQZF1DZ06evO3wzrW0-default.jpg"
                        },
                        {
                            "targetName": "small",
                            "url": "https://thisis-images.spotifycdn.com/v2/37i9dQZF1DZ06evO3wzrW0-small.jpg"
                        },
                        {
                            "targetName": "large",
                            "url": "https://thisis-images.spotifycdn.com/v2/37i9dQZF1DZ06evO3wzrW0-large.jpg"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://thisis-images.spotifycdn.com/v2/37i9dQZF1DZ06evO3wzrW0-xlarge.jpg"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755216000000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAOYE6u9zMob5tfgvMlpNcZweB/DNv",
                "attributes": {
                    "name": "rep Tour and Friends",
                    "description": "The complete setlist from the Taylor Swift reputation Stadium Tour including special guests",
                    "picture": "q2dwbAAA2oTRfhktSgi42Htrqhg="
                },
                "length": 37,
                "timestamp": "1582640987504",
                "ownerUsername": "zzlpwp9oqs59bqkasw2v6d96w"
            },
            {
                "revision": "AAAAMC+oZuVTygm2VQxjVcZnlxQU/VXu",
                "attributes": {
                    "name": "LISA - Alter Ego",
                    "picture": "q2dwbAAA2oSCznXByUpy7Qi9Jd0="
                },
                "length": 25,
                "timestamp": "1746209459073",
                "ownerUsername": "31qqrhz646otsvnof6qsxzm353ge"
            },
            {
                "revision": "AAAAAMX4L/HOsnwk8To87zO7fsHyr0mt",
                "attributes": {
                    "name": "LISA Mix",
                    "description": "\u003ca href\u003dspotify:playlist:37i9dQZF1EIY6qzm6t7jm1\u003eJENNIE\u003c/a\u003e, \u003ca href\u003dspotify:playlist:37i9dQZF1EIUu7mk4MUkLV\u003eBLACKPINK\u003c/a\u003e and \u003ca href\u003dspotify:playlist:37i9dQZF1EIZ1HkjHHzYzZ\u003eBillie Eilish\u003c/a\u003e",
                    "collaborative": false,
                    "format": "artist-mix-reader",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b3e5d8024ec0ea04b3b816f0ab641c6"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b3e5d8024ec0ea04b3b816f0ab641c6"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/artistmix/5L1lO4eRHmJ7a0Q6csE5cT/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAbcP4BX1+hjefq5ejG92UW2bGHQBA",
                "attributes": {
                    "name": "THE ERAS TOUR SETLIST 2024 ",
                    "description": "🩷💛❤️💜🖤🩶🤎🩵🤍💚💙",
                    "picture": "q2dwbAAA2oQCrlZp6C1BOnVZd8s="
                },
                "length": 44,
                "timestamp": "1716748229000",
                "ownerUsername": "altrico"
            },
            {
                "revision": "AAABS4ipIVouO1fQXFiwVHKJQ4tl8E5k",
                "attributes": {
                    "name": "ERAS TOUR SETLIST",
                    "description": "eras tour setlist || 🦋🫶🎆🧣🏙️🐍💕🪩🌲🕰️🪶",
                    "picture": "q2dwbAAA2oQmlhl8z78RSU/xRvY="
                },
                "length": 42,
                "timestamp": "1749747971000",
                "ownerUsername": "gy7r24emokgau7hx89gqdz0l2"
            },
            {
                "revision": "AAAYxocg68FvQiTR6GaOGapngsBEENZh",
                "attributes": {
                    "name": "Killin\u0027 It Girl - J-HOPE X BTS",
                    "description": "BTS COMEBACK: j-hope\u0026#x27;s Single \u0026#x27;Killin\u0026#x27; It Girl (feat. GloRilla)\u0026#x27; is out now! | BTS FESTA 2025, All New Songs Focused 💜",
                    "picture": "q2dwbAAA2oT/9kLaVrmTp1gUK+w="
                },
                "length": 123,
                "timestamp": "1755107353000",
                "ownerUsername": "laryporto"
            },
            {
                "revision": "AAAC1IQp1ESytWVaR/3kvB3ASif81RRQ",
                "attributes": {
                    "name": "Taylor Swift Complete Collection",
                    "description": "Everything \u003ca href\u003d\"https://www.taylorswift.com/\"\u003eTaylor Swift\u003c/a\u003e Right Here",
                    "picture": "q2dwbAAA2oRgTyTXnSRLWuPK5GY="
                },
                "length": 404,
                "timestamp": "1726239417000",
                "ownerUsername": "zzlpwp9oqs59bqkasw2v6d96w"
            },
            {
                "revision": "AAAAALttfEIqlOWRf8UdGFchGUAdX8/y",
                "attributes": {
                    "name": "Daily Mix 1",
                    "description": "Lana Del Rey, Taylor Swift, Lady Gaga and more",
                    "collaborative": false,
                    "format": "daily-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b3e5d7cfaec0e8d4b3bfd92804badff"
                        },
                        {
                            "key": "canContainArtists.uris",
                            "value": "spotify:artist:00FQb4jTyendYWaN8pK0wa,spotify:artist:06HL4z0CvFAxyc27GXpf02,spotify:artist:1HY2Jd0NmPuamShAr6KMms,spotify:artist:6M2wZ9GZgrQXHCFfjv46we,spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "temporary_hack_prefer_linear_playback",
                            "value": "true"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b3e5d7cfaec0e8d4b3bfd92804badff"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebb99cacf8acd5378206767261/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "0",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAFvnAWe6+R/4kE6dSYuvoxiQppSBH",
                "attributes": {
                    "name": "Liked songs"
                },
                "length": 1091,
                "timestamp": "1747234008000",
                "ownerUsername": "31uzv2uqmo5srmfvori7rq3vtria"
            },
            {
                "revision": "AAAAAH/xuH0f4BQZW2BBoFWPnM2niEX3",
                "attributes": {
                    "name": "This Is Taylor Swift",
                    "description": "The essential tracks, all in one playlist.",
                    "collaborative": false,
                    "format": "format-shows-shuffle",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4ebfc049335b638f38e4046c711d16"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DX5KpP2LN299J"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "editorial.series",
                            "value": "this-is"
                        },
                        {
                            "key": "primary_color",
                            "value": "#FFFFFF"
                        },
                        {
                            "key": "recs.hasArtists",
                            "value": "spotify:artist:06HL4z0CvFAxyc27GXpf02,spotify:artist:5ZsFI1h6hIdQRw2ti0hz81"
                        },
                        {
                            "key": "header_image_url_desktop",
                            "value": "https://i.scdn.co/image/ab6768640000fe89ef3d1cd11950086cf0613cb1"
                        },
                        {
                            "key": "image_url",
                            "value": "https://i.scdn.co/image/ab67686d00003ae0b29608669fe8117b2b9d5227"
                        },
                        {
                            "key": "episode_description",
                            "value": "The essential tracks, all in one playlist."
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4ebfc049335b638f38e4046c711d16"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f000000021e838cde937bb792aedc731b"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f000000011e838cde937bb792aedc731b"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f000000031e838cde937bb792aedc731b"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f000000031e838cde937bb792aedc731b"
                        }
                    ]
                },
                "length": 75,
                "timestamp": "1755401035000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAhX8Ak4zCXXtpYEs+ZVlyr74kJWH",
                "attributes": {
                    "name": "Sia Radio"
                },
                "length": 50,
                "timestamp": "1719213832000",
                "ownerUsername": "31uzv2uqmo5srmfvori7rq3vtria"
            },
            {
                "revision": "aKGQ9wAAAAAl31/+XLV/Tan10pqcWBCt",
                "attributes": {
                    "name": "Sia Radio",
                    "description": "With Dua Lipa, Imagine Dragons, Adele and more",
                    "collaborative": false,
                    "format": "inspiredby-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5WUlDfRSoLAfcVSX1WnrxN/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755418871000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "aKGQ9wAAAADYJD6FbAOtvnYQOssriX3d",
                "attributes": {
                    "name": "Adele Radio",
                    "description": "With Bruno Mars, James Arthur, Billie Eilish and more",
                    "collaborative": false,
                    "format": "inspiredby-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4dpARuHxo51G3z768sgnrY/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755418871000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "aKGQ9wAAAACsmJ+aQrOO3keJCO/9iG89",
                "attributes": {
                    "name": "Britney Spears Radio",
                    "description": "With Rihanna, Spice Girls, Destiny\u0027s Child and more",
                    "collaborative": false,
                    "format": "inspiredby-mix",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "should_show_promo_disclosure",
                            "value": "true"
                        },
                        {
                            "key": "send-impression-for-rows",
                            "value": "true"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8b4e42d1720505bb1cbbbdb4a1d2434d"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/26dSoYclwsYLMAKD3tpOr4/en"
                        }
                    ]
                },
                "length": 50,
                "timestamp": "1755418871000",
                "ownerUsername": "spotify"
            },
            {
                "revision": "AAAAAMkc/FJs+CNg5gTZ0fZyqZy8IqiB",
                "attributes": {
                    "name": "Mega Hit Mix",
                    "description": "A mega mix of 75 favorites from the last few years! ",
                    "collaborative": false,
                    "format": "editorial",
                    "formatAttributes": [
                        {
                            "key": "request_id",
                            "value": "ssp~063c8ab8717bd08e7b7701ce7856278e5b53"
                        },
                        {
                            "key": "uri",
                            "value": "spotify:user:spotify:playlist:37i9dQZF1DXbYM3nMM0oPk"
                        },
                        {
                            "key": "status",
                            "value": "PUBLISHED"
                        },
                        {
                            "key": "isAlgotorial",
                            "value": "true"
                        },
                        {
                            "key": "primary_color",
                            "value": "#ffffff"
                        },
                        {
                            "key": "autoplay",
                            "value": "spotify:playlist:37i9dQZF1DX0s5kDXi1oC5"
                        },
                        {
                            "key": "madeFor.username",
                            "value": "31uzv2uqmo5srmfvori7rq3vtria"
                        },
                        {
                            "key": "is_video_first",
                            "value": "false"
                        },
                        {
                            "key": "correlation-id",
                            "value": "ssp~063c8ab8717bd08e7b7701ce7856278e5b53"
                        }
                    ],
                    "pictureSize": [
                        {
                            "targetName": "default",
                            "url": "https://i.scdn.co/image/ab67706f000000023909428545db5e34677f01f0"
                        },
                        {
                            "targetName": "small",
                            "url": "https://i.scdn.co/image/ab67706f000000013909428545db5e34677f01f0"
                        },
                        {
                            "targetName": "large",
                            "url": "https://i.scdn.co/image/ab67706f000000033909428545db5e34677f01f0"
                        },
                        {
                            "targetName": "xlarge",
                            "url": "https://i.scdn.co/image/ab67706f000000033909428545db5e34677f01f0"
                        }
                    ]
                },
                "length": 75,
                "timestamp": "1750267679000",
                "ownerUsername": "spotify"
            }
        ]
    },
    "timestamp": "1755044193000"
}


fetch(url, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`
    }
})
const PLAYLIST_IDS = [
    "65uAjFTt4N8sEJeonhNOBL", 
    "2WxbQjSs5xcKRRcgIH5xQW", 
    "6RqrENENCcRsQ9sbStAJ8X" ,
    "4GtQVhGjAwcHFz82UKy3Ca",
    "7vUylkUvrdaCcKWfjeFfDp",
    "0fZm7ygIaFLpTX7AEd38WT",
    "4OHlLEj27Q23cAK92IpYVZ",
    "7AR8QfzYvwod9cr0bmuDAt",
    "1hbiVdQ5Pczcb1RsBUkPay",
    "0qWRjNE4vAzzFIWSzIe0wg",
    "2UrZudVtKmKk9c2hqrj155",
    "2z2Qiy21PhjYWGBP2FVZBI",
    "4MDcy6xRO5NGRqejcoB8NK",
    "0uFhZpiffd4h8fcBgw42i1",
    "5OXDtZIi6bkC9cWsaptaPk",
    "3IsiEIh3FvRIauS2rcpwVy",
    "5xpSGrkfR2MsYDfkjJixFb",
    "3h8PSvzoY85NhAVULw27PP",
    "0y49b6ZdfURVOPawfVDIYq",
    "0aL7M6qKDacHCtUUch3AhB",
    "3YJHq7WNGej4RIsNfTMSe9",
    "53EV6ylFWqPfiUyyKuotwv",
    "1KkrZhsZoGKV5EN7ihPRxa",
    "1d35rtHvmKx6SlgXrWWTvU",
    "3sREbslsLCnp15LWg8ilzc",
    "3KYxa1WIJwanBKhTr9poa3",
    "5UMBt54p6ogdo5qBpWXtMj",
    "7lO4QSQAMI4h7Q23ckf3kR",
    "4b4AnHVgXg4nGLaPyoVIZp",
    "5o46jBydbJfVNS8nSwmbKo",
    "7yyTfDGxCtnzy2wwWI6xYn",
    "6E8sLG3bm1meTRj8n5l0ll",
    "2nE96O1qvXtNPRBpPxYmbm",
    "5Y7YdKAksCWnAsdjq51dsj",
    "4lXLUGtdiDFUbmDSHpt699",
    "6AgEwibUPC5JZaY9ETk7B6",
    "6TFHI1i8f8AyS4SbVmvjd8",
    "2CY7QkkiAHs3EK9OzVuXjd",
    "1NP7YSlu0KwlbazhvSLzSF",
    "5G9lbpRTLenYF8RFM08Z0v",
    "6gDqhVd2qySRUQVWnyJRkh",
    "5bxcjrqJZ5XZUHTOuqb5kU",
    "06HMEOceFUNQi86pnBKsQX",
    "01JAmYtVBXs1G2zEfkZwIu",
    "67LhQqPAREWuNZyhLSZc5d",
    "5T7dYFyHm6lhIuzj2XpDOZ",
    "1I4PKtTVDlPcsvwvYtQOXj",
    "3Rx56sdhXTrBa8iHwMcu5o"
  ];

//   const listPlaylist = dataPlaylist.contents.items

//   console.log(listPlaylist.forEach(e => console.log(e.attributes.public)))
//   let PLAYLIST_IDS = listPlaylist.map((playlist, index) =>{
//     return playlist.uri.split(":")[2]
//   })


//   console.log("Khanh",PLAYLIST_IDS)
  
  // helper
  const ext = (obj, type, id) =>
    obj?.external_urls?.spotify || (id ? `https://open.spotify.com/${type}/${id}` : "#");
  const n = (x) => (x || x === 0) ? Number(x).toLocaleString() : "—";
  
  // ----- render 1 card playlist (chưa có track) -----
  function renderPlaylistCard(playlist) {
    const card = document.createElement("div");
    card.style.border = "1px solid #e5e5e5";
    card.style.borderRadius = "12px";
    card.style.padding = "12px";
    card.style.background = "#fafafa";
  
    const cover = playlist.images?.[0]?.url
      ? `<a href="${ext(playlist, "playlist", playlist.id)}" target="_blank" rel="noopener">
           <img src="${playlist.images[0].url}" width="260" style="max-width:100%;border-radius:10px;display:block">
         </a>`
      : "";
  
    card.innerHTML = `
      ${cover}
      <h2 style="margin:8px 0 4px;font-size:18px;line-height:1.3">
        <a href="${ext(playlist, "playlist", playlist.id)}" target="_blank" rel="noopener">
          ${playlist.name}
        </a>
      </h2>
      <div style="color:#555;font-size:14px;margin-bottom:6px">
        ${playlist.owner?.display_name ? `By <strong>${playlist.owner.display_name}</strong>` : ""}
        ${playlist.followers?.total != null ? ` • ${n(playlist.followers.total)} likes` : ""}
      </div>
    `;
  
    // nút toggle bài hát
    const btn = document.createElement("button");
    btn.textContent = "Xem bài hát";
    btn.style.marginTop = "6px";
    btn.style.padding = "6px 10px";
    btn.style.cursor = "pointer";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.background = "#0a66c2";
    btn.style.color = "#fff";
  
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      let list = card.querySelector(".tracks");
      if (list) {
        // toggle hiển thị
        const opened = list.style.display !== "none";
        list.style.display = opened ? "none" : "block";
        btn.textContent = opened ? "Xem bài hát" : "Ẩn bài hát";
        return;
      }
  
      // lần đầu: fetch toàn bộ track (tự paging)
      btn.disabled = true;
      btn.textContent = "Đang tải...";
      try {
        list = document.createElement("div");
        list.className = "tracks";
        list.style.marginTop = "10px";
        card.appendChild(list);
  
        // trang đầu có sẵn trong playlist.tracks
        await renderAllTracks(playlist.id, list);
        btn.textContent = "Ẩn bài hát";
      } catch (err) {
        console.error(err);
        list.innerHTML = `<div style="color:crimson">Không tải được bài hát: ${err.message}</div>`;
        btn.textContent = "Xem bài hát";
      } finally {
        btn.disabled = false;
      }
    });
  
    card.appendChild(btn);
    container.appendChild(card);
  }
  
  // ----- fetch & render toàn bộ track của 1 playlist -----
  async function renderAllTracks(playlistId, listEl) {
    let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=VN&limit=100`;
    let index = 0;
  
    while (url) {
      const page = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(async (res) => {
        if (!res.ok) {
          let detail = "";
          try { const j = await res.json(); detail = j?.error?.message || JSON.stringify(j); }
          catch { detail = await res.text(); }
          throw new Error(`HTTP ${res.status} – ${detail}`);
        }
        return res.json();
      });
  
      (page.items || []).forEach((it, i) => {
        const t = it?.track;
        if (!t) return;
  
        const trackUrl = ext(t, "track", t.id);
        const albumUrl = ext(t.album, "album", t.album?.id);
        const artistsLinks = (t.artists || [])
          .map(a => `<a href="${ext(a, "artist", a.id)}" target="_blank" rel="noopener">${a.name}</a>`)
          .join(", ");
  
        const row = document.createElement("div");
        row.style.padding = "8px 0";
        row.style.borderBottom = "1px solid #eee";
        row.innerHTML = `
          <strong>${index + i + 1}. <a href="${trackUrl}" target="_blank" rel="noopener">${t.name}</a></strong><br>
          <em>${artistsLinks}</em><br>
          Album: <a href="${albumUrl}" target="_blank" rel="noopener">${t.album?.name ?? "—"}</a><br>
          ${t.preview_url ? `<audio controls src="${t.preview_url}"></audio>` : `<small>No preview</small>`}
        `;
        listEl.appendChild(row);
      });
  
      index += page.items?.length || 0;
      url = page.next; // trang kế tiếp (nếu có)
    }
  
    if (index === 0) {
      listEl.innerHTML = "<em>Playlist không có bài hát.</em>";
    }
  }
  
  // ----- tải nhiều playlist song song -----
  function fetchPlaylist(id) {
    const url = `https://api.spotify.com/v1/playlists/${id}?market=VN`;
    return fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(async (res) => {
      if (!res.ok) {
        let detail = "";
        try { const j = await res.json(); detail = j?.error?.message || JSON.stringify(j); }
        catch { detail = await res.text(); }
        throw new Error(`HTTP ${res.status} – ${detail}`);
      }
      return res.json();
    });
  }
  
  // lưới hiển thị
  (function mountGridStyles() {
    const grid = container;
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
    grid.style.gap = "18px";
  })();
  
  // gọi tất cả playlist
  Promise.allSettled(PLAYLIST_IDS.map(fetchPlaylist))
    .then((results) => {
      let okCount = 0;
      results.forEach((r, idx) => {
        if (r.status === "fulfilled") {
          okCount++;
          renderPlaylistCard(r.value);
        } else {
          const errDiv = document.createElement("div");
          errDiv.style.border = "1px solid #ffd7d7";
          errDiv.style.background = "#fff4f4";
          errDiv.style.borderRadius = "10px";
          errDiv.style.padding = "12px";
          errDiv.innerHTML = `
            <strong>Lỗi playlist #${idx + 1}</strong><br>
            <code style="color:#b00020">${r.reason}</code>
          `;
          container.appendChild(errDiv);
        }
      });
      if (okCount === 0) {
        const e = document.createElement("div");
        e.style.color = "crimson";
        e.textContent = "Không tải được playlist nào. Kiểm tra token/ID.";
        container.appendChild(e);
      }
    })
    .catch(err => {
      console.error(err);
      const e = document.createElement("div");
      e.style.color = "crimson";
      e.textContent = "Lỗi không xác định: " + err.message;
      container.appendChild(e);
    })

    .catch(error => console.error("Fetch error:", error));