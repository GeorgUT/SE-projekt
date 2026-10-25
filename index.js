// Punktide vahelised ühendused
const paths = [
    // Esimene korrus
    {100: [101, 102, 126, 500]},
    {101: [100, 103, 500]},
    {102: [100, 104]},
    {103: [101, 105, 106, 107, 108]},
    {104: [102, 109, 1004]},
    {105: [103, 106, 1037]},
    {106: [103, 105, 107]},
    {107: [103, 106, 110, 1024]},
    {108: [103, 111, 1022]},
    {109: [104, 112, 1005]},
    {110: [107, 113, 1025, 1035]},
    {111: [108, 114, 1021]},
    {112: [109, 115, 1006]},
    {113: [110, 116, 1026]},
    {114: [111, 117, 1020]},
    {115: [112, 118, 1007]},
    {116: [113, 119, 1030]},
    {117: [114, 120, 1019]},
    {118: [115, 121, 1008]},
    {119: [116]},
    {120: [117, 122, 1018]},
    {121: [118, 127]},
    {122: [120, 124, 1017]},
    {123: [127, 125, 1013]},
    {124: [122, 125]},
    {125: [123, 124, 1015]},
    {126: [100, 1039, 1040]},
    {127: [121, 123, 501]},

    // Teine korrus
    {200: [201, 500]},
    {201: [200, 202, 203, 204, 2048]},
    {202: [201, 205, 206, 207]},
    {203: [201, 204, 208]},
    {204: [201, 203, 209, 2027]},
    {205: [202, 2002, 2051]},
    {206: [202, 207, 2049]},
    {207: [202, 206, 210, 2047]},
    {208: [203, 211, 2028]},
    {209: [204, 212, 2003, 2026]},
    {210: [207, 213, 2046]},
    {211: [208, 214, 2029]},
    {212: [209, 215, 2024, 2025]},
    {213: [210, 216, 2045]},
    {214: [211, 216, 217, 2030]},
    {215: [212, 218, 2005]},
    {216: [213, 214, 217]},
    {217: [214, 216, 219]},
    {218: [215, 220, 2006]},
    {219: [217, 221, 2034]},
    {220: [218, 222, 2022, 2023]},
    {221: [219, 223, 2035]},
    {222: [220, 224, 2007]},
    {223: [221, 225, 2036]},
    {224: [222, 226, 227, 2019]},
    {225: [223, 228, 2039]},
    {226: [224, 227, 2020, 2019, 2021]},
    {227: [224, 226, 229, 235, 2019]},
    {228: [225, 231, 2040]},
    {229: [227, 232, 2016, 2018]},
    {230: [233, 235, 2010]},
    {231: [228, 2041, 2042]},
    {232: [229, 2017]},
    {233: [230, 234, 2011]},
    {234: [233, 2012]},
    {235: [227, 230, 501]},
    {2036: [2038]},
    
    // Kolmas korrus
    {300: [301, 302, 500]},
    {301: [300, 303, 304, 305]},
    {302: [300, 306, 309, 313, 319, 322, 324]},
    {303: [301, 307, 3124]},
    {304: [301, 3002]},
    {305: [301, 308]},
    {306: [302, 309, 310, 322, 3118]},
    {307: [303, 311, 3122, 3123]},
    {308: [305, 312, 3003, 3004]},
    {309: [302, 306, 313, 322, 3117]},
    {310: [306, 314, 315]},
    {311: [307, 316, 317, 3121]},
    {312: [308, 318, 3005, 3006]},
    {313: [302, 309, 319, 322, 3116]},
    {314: [310, 320, 3070, 3071]},
    {315: [310, 321, 3068]},
    {316: [311, 3120]},
    {317: [311, 322, 3119]},
    {318: [312, 323, 3007]},
    {319: [302, 313, 322, 324, 3115]},
    {320: [314, 325, 3072, 3073]},
    {321: [315, 326, 3067]},
    {322: [302, 306, 309, 313, 317, 319, 324]},
    {323: [318, 327, 3008, 3009]},
    {324: [302, 319, 322, 328]},
    {325: [320, 329, 3074, 3075]},
    {326: [321, 330, 3065, 3066]},
    {327: [323, 331, 3010]},
    {328: [324, 332, 3113]},
    {329: [325, 333, 3076]},
    {330: [326, 334, 3064]},
    {331: [327, 335, 3011]},
    {332: [328, 336, 3113]},
    {333: [329, 337, 3077]},
    {334: [330, 338, 3062]},
    {335: [331, 339, 3013]},
    {336: [332, 340, 3111, 3112]},
    {337: [333, 341, 3078]},
    {338: [334, 342, 3063]},
    {339: [335, 343, 3012, 3014]},
    {340: [336, 344, 3109, 3110]},
    {341: [337, 345, 3079, 3080]},
    {342: [338, 346, 3061]},
    {343: [339, 347, 3015]},
    {344: [340, 348, 3108]},
    {345: [341, 349, 3081, 3082]},
    {346: [342, 350, 3059, 3060]},
    {347: [343, 351, 3016, 3017]},
    {348: [344, 352, 3106, 3107]},
    {349: [345, 353, 3085]},
    {350: [346, 354, 3058]},
    {351: [347, 355, 3018, 3019]},
    {352: [348, 356, 3105]},
    {353: [349, 357, 3086]},
    {354: [350, 358, 3056, 3057]},
    {355: [351, 359, 3020, 3021]},
    {356: [352, 360, 3104]},
    {357: [353, 361, 3087, 3088]},
    {358: [354, 362, 3055]},
    {359: [355, 363, 3022, 3023]},
    {360: [356, 364, 3102, 3103]},
    {361: [357, 365, 3089]},
    {362: [358, 366, 3053, 3054]},
    {363: [359, 367, 3024, 3025]},
    {364: [360, 368, 3101]},
    {365: [361, 369, 3090]},
    {366: [362, 370, 3052]},
    {367: [363, 371, 3026, 3027]},
    {368: [364, 372, 3100]},
    {369: [365, 373, 377, 3092]},
    {370: [366, 374, 3050]},
    {371: [367, 375, 3028]},
    {372: [368, 376, 3099]},
    {373: [369, 377, 381]},
    {374: [370, 378, 3048, 3051]},
    {375: [371, 379, 394, 3029]},
    {376: [372, 380]},
    {377: [369, 373, 384, 3092]},
    {378: [374, 382, 3049]},
    {379: [375, 383, 387, 3032]},
    {380: [376, 384, 3087, 3096]},
    {381: [373, 3095]},
    {382: [378, 385, 3046]},
    {383: [379, 386, 387, 3033]},
    {384: [377, 380, 3091]},
    {385: [382, 388, 3045, 3047]},
    {386: [383, 3034]},
    {387: [379, 383, 389, 3038]},
    {388: [385, 390, 3044]},
    {389: [387, 391, 3039]},
    {390: [388, 392, 395, 3043]},
    {391: [389, 393, 395, 3040]},
    {392: [390, 393, 395, 3042]},
    {393: [391, 392, 395, 3041]},
    {394: [375, 395, 501]},
    {395: [390, 391, 392, 393, 394]},


    // Neljas korrus
    {400: [401, 402, 500]},
    {401: [400, 403, 404, 405]},
    {402: [400, 406, 407, 408, 409, 421]},
    {403: [401, 410, 4109, 4110]},
    {404: [401, 4002]},
    {405: [401, 411]},
    {406: [402, 407, 408, 412, 421]},
    {407: [402, 406, 408, 421, 4103]},
    {408: [402, 407, 409, 421, 4104]},
    {409: [402, 408, 413, 414, 421]},
    {410: [403, 415, 416, 4108]},
    {411: [405, 417, 4003]},
    {412: [406, 418, 4102]},
    {413: [409, 419, 4066, 4067]},
    {414: [409, 420, 4063, 4064]},
    {415: [410, 4107]},
    {416: [410, 421, 4107]},
    {417: [411, 422, 4004]},
    {418: [412, 423, 4101]},
    {419: [413, 424, 4068, 4069]},
    {420: [414, 425, 4061, 4062]},
    {421: [402, 406, 407, 408, 409, 416]},
    {422: [417, 426, 4005]},
    {423: [418, 427, 4099, 4100]},
    {424: [419, 428, 4070]},
    {425: [420, 429, 4060]},
    {426: [422, 430]},
    {427: [423, 431, 4098]},
    {428: [424, 432, 4071]},
    {429: [425, 433, 4058, 4059]},
    {430: [426, 434, 4006]},
    {431: [427, 435, 4096, 4097]},
    {432: [428, 436, 4072, 4073]},
    {433: [429, 437, 4057]},
    {434: [430, 438, 4007, 4008]},
    {435: [431, 439, 4094, 4095]},
    {436: [432, 440, 4074]},
    {437: [433, 441, 4056]},
    {438: [434, 442, 4009]},
    {439: [435, 443, 4093]},
    {440: [436, 444, 4075, 4076]},
    {441: [437, 445, 4055]},
    {442: [438, 446, 4010]},
    {443: [439, 447, 4091, 4092]},
    {444: [440, 448, 4077, 4078]},
    {445: [441, 449, 4054]},
    {446: [442, 450, 4011]},
    {447: [443, 451, 4089, 4090]},
    {448: [444, 452, 4079]},
    {449: [445, 453, 4052]},
    {450: [446, 454, 4012]},
    {451: [447, 455, 4087, 4088]},
    {452: [448, 456, 4080, 4083]},
    {453: [449, 457, 4053]},
    {454: [450, 458, 4014]},
    {455: [451, 459, 4086]},
    {456: [452, 460]},
    {457: [453, 461, 4051]},
    {458: [454, 462, 4015]},
    {459: [455, 463, 4085]},
    {460: [456, 463, 4084]},
    {461: [457, 464, 4050]},
    {462: [458, 465, 4013]},
    {463: [459, 460]},
    {464: [461, 466, 4048, 4049]},
    {465: [462, 467, 4016]},
    {466: [464, 468, 4047]},
    {467: [465, 469, 4018]},
    {468: [466, 470, 4046]},
    {469: [467, 471, 4017]},
    {470: [468, 472, 4045]},
    {471: [469, 473, 4019]},
    {472: [470, 474, 476, 4044]},
    {473: [471, 475, 4020, 4021]},
    {474: [472, 476, 478, 480, 482, 485, 486, 488]},
    {475: [473, 477, 4022, 4023]},
    {476: [472, 474, 478, 4043]},
    {477: [475, 479, 4024]},
    {478: [474, 476, 480, 486, 4042]},
    {479: [477, 481, 4025]},
    {480: [474, 478, 482, 486, 4041]},
    {481: [479, 483, 484, 4026]},
    {482: [474, 480, 485, 486, 4040]},
    {483: [481, 486, 501]},
    {484: [481, 487, 491, 4029]},
    {485: [474, 482, 486, 488, 4039]},
    {486: [474, 478, 480, 482, 483, 485, 488]},
    {487: [484, 489, 491, 403, 4030, 4035]},
    {488: [485, 486, 490, 4038]},
    {489: [487, 4031, 4032]},
    {490: [488, 491, 4037]},
    {491: [484, 487, 490, 4036]},

    // Trepikojad
    {500: [100, 101, 200, 300, 400]},
    {501: [127, 235, 394, 483]}
];

// Iga korruse ruumid ja checkpointid (kaardil)
const firstFloorRooms = [
    document.getElementById("mark1004"),
    document.getElementById("mark1005"),
    document.getElementById("mark1006"),
    document.getElementById("mark1007"),
    document.getElementById("mark1008"),
    document.getElementById("mark1013"),
    document.getElementById("mark1015"),
    document.getElementById("mark1017"),
    document.getElementById("mark1018"),
    document.getElementById("mark1019"),
    document.getElementById("mark1020"),
    document.getElementById("mark1021"),
    document.getElementById("mark1022"),
    document.getElementById("mark1024"),
    document.getElementById("mark1025"),
    document.getElementById("mark1026"),
    document.getElementById("mark1030"),
    document.getElementById("mark1035"),
    document.getElementById("mark1037"),
    document.getElementById("mark1039"),
    document.getElementById("mark1040")
];

const firstFloorCheckpoints = [
    document.getElementById("mark100"),
    document.getElementById("mark101"),
    document.getElementById("mark102"),
    document.getElementById("mark103"),
    document.getElementById("mark104"),
    document.getElementById("mark105"),
    document.getElementById("mark106"),
    document.getElementById("mark107"),
    document.getElementById("mark108"),
    document.getElementById("mark109"),
    document.getElementById("mark110"),
    document.getElementById("mark111"),
    document.getElementById("mark112"),
    document.getElementById("mark113"),
    document.getElementById("mark114"),
    document.getElementById("mark115"),
    document.getElementById("mark116"),
    document.getElementById("mark117"),
    document.getElementById("mark118"),
    document.getElementById("mark119"),
    document.getElementById("mark120"),
    document.getElementById("mark121"),
    document.getElementById("mark122"),
    document.getElementById("mark123"),
    document.getElementById("mark124"),
    document.getElementById("mark125"),
    document.getElementById("mark126"),
    document.getElementById("mark127")
];

const secondFloorRooms = [
    document.getElementById("mark2002"),
    document.getElementById("mark2003"),
    document.getElementById("mark2004"),
    document.getElementById("mark2005"),
    document.getElementById("mark2006"),
    document.getElementById("mark2007"),
    document.getElementById("mark2010"),
    document.getElementById("mark2011"),
    document.getElementById("mark2012"),
    document.getElementById("mark2016"),
    document.getElementById("mark2017"),
    document.getElementById("mark2018"),
    document.getElementById("mark2019"),
    document.getElementById("mark2020"),
    document.getElementById("mark2021"),
    document.getElementById("mark2022"),
    document.getElementById("mark2023"),
    document.getElementById("mark2024"),
    document.getElementById("mark2025"),
    document.getElementById("mark2026"),
    document.getElementById("mark2027"),
    document.getElementById("mark2028"),
    document.getElementById("mark2029"),
    document.getElementById("mark2030"),
    document.getElementById("mark2034"),
    document.getElementById("mark2035"),
    document.getElementById("mark2036"),
    document.getElementById("mark2038"),
    document.getElementById("mark2039"),
    document.getElementById("mark2040"),
    document.getElementById("mark2041"),
    document.getElementById("mark2042"),
    document.getElementById("mark2045"),
    document.getElementById("mark2046"),
    document.getElementById("mark2047"),
    document.getElementById("mark2048"),
    document.getElementById("mark2049"),
    document.getElementById("mark2051")
];

const secondFloorCheckpoints = [
    document.getElementById("mark200"),
    document.getElementById("mark201"),
    document.getElementById("mark202"),
    document.getElementById("mark203"),
    document.getElementById("mark204"),
    document.getElementById("mark205"),
    document.getElementById("mark206"),
    document.getElementById("mark207"),
    document.getElementById("mark208"),
    document.getElementById("mark209"),
    document.getElementById("mark210"),
    document.getElementById("mark211"),
    document.getElementById("mark212"),
    document.getElementById("mark213"),
    document.getElementById("mark214"),
    document.getElementById("mark215"),
    document.getElementById("mark216"),
    document.getElementById("mark217"),
    document.getElementById("mark218"),
    document.getElementById("mark219"),
    document.getElementById("mark220"),
    document.getElementById("mark221"),
    document.getElementById("mark222"),
    document.getElementById("mark223"),
    document.getElementById("mark224"),
    document.getElementById("mark225"),
    document.getElementById("mark226"),
    document.getElementById("mark227"),
    document.getElementById("mark228"),
    document.getElementById("mark229"),
    document.getElementById("mark230"),
    document.getElementById("mark231"),
    document.getElementById("mark232"),
    document.getElementById("mark233"),
    document.getElementById("mark234"),
    document.getElementById("mark235")
];

const thirdFloorRooms = [
    document.getElementById("mark3002"),
    document.getElementById("mark3003"),
    document.getElementById("mark3004"),
    document.getElementById("mark3005"),
    document.getElementById("mark3006"),
    document.getElementById("mark3007"),
    document.getElementById("mark3008"),
    document.getElementById("mark3009"),
    document.getElementById("mark3010"),
    document.getElementById("mark3011"),
    document.getElementById("mark3012"),
    document.getElementById("mark3013"),
    document.getElementById("mark3014"),
    document.getElementById("mark3015"),
    document.getElementById("mark3016"),
    document.getElementById("mark3017"),
    document.getElementById("mark3018"),
    document.getElementById("mark3019"),
    document.getElementById("mark3020"),
    document.getElementById("mark3021"),
    document.getElementById("mark3022"),
    document.getElementById("mark3023"),
    document.getElementById("mark3024"),
    document.getElementById("mark3025"),
    document.getElementById("mark3026"),
    document.getElementById("mark3027"),
    document.getElementById("mark3028"),
    document.getElementById("mark3029"),
    document.getElementById("mark3032"),
    document.getElementById("mark3033"),
    document.getElementById("mark3034"),
    document.getElementById("mark3037"),
    document.getElementById("mark3038"),
    document.getElementById("mark3039"),
    document.getElementById("mark3040"),
    document.getElementById("mark3041"),
    document.getElementById("mark3042"),
    document.getElementById("mark3043"),
    document.getElementById("mark3044"),
    document.getElementById("mark3045"),
    document.getElementById("mark3046"),
    document.getElementById("mark3047"),
    document.getElementById("mark3048"),
    document.getElementById("mark3049"),
    document.getElementById("mark3050"),
    document.getElementById("mark3051"),
    document.getElementById("mark3052"),
    document.getElementById("mark3053"),
    document.getElementById("mark3054"),
    document.getElementById("mark3055"),
    document.getElementById("mark3056"),
    document.getElementById("mark3057"),
    document.getElementById("mark3058"),
    document.getElementById("mark3059"),
    document.getElementById("mark3060"),
    document.getElementById("mark3061"),
    document.getElementById("mark3062"),
    document.getElementById("mark3063"),
    document.getElementById("mark3064"),
    document.getElementById("mark3065"),
    document.getElementById("mark3066"),
    document.getElementById("mark3067"),
    document.getElementById("mark3068"),
    document.getElementById("mark3070"),
    document.getElementById("mark3071"),
    document.getElementById("mark3072"),
    document.getElementById("mark3073"),
    document.getElementById("mark3074"),
    document.getElementById("mark3075"),
    document.getElementById("mark3076"),
    document.getElementById("mark3077"),
    document.getElementById("mark3078"),
    document.getElementById("mark3079"),
    document.getElementById("mark3080"),
    document.getElementById("mark3081"),
    document.getElementById("mark3082"),
    document.getElementById("mark3085"),
    document.getElementById("mark3086"),
    document.getElementById("mark3087"),
    document.getElementById("mark3088"),
    document.getElementById("mark3089"),
    document.getElementById("mark3090"),
    document.getElementById("mark3091"),
    document.getElementById("mark3092"),
    document.getElementById("mark3095"),
    document.getElementById("mark3096"),
    document.getElementById("mark3097"),
    document.getElementById("mark3099"),
    document.getElementById("mark3100"),
    document.getElementById("mark3101"),
    document.getElementById("mark3102"),
    document.getElementById("mark3103"),
    document.getElementById("mark3104"),
    document.getElementById("mark3105"),
    document.getElementById("mark3106"),
    document.getElementById("mark3107"),
    document.getElementById("mark3108"),
    document.getElementById("mark3109"),
    document.getElementById("mark3110"),
    document.getElementById("mark3111"),
    document.getElementById("mark3112"),
    document.getElementById("mark3113"),
    document.getElementById("mark3114"),
    document.getElementById("mark3115"),
    document.getElementById("mark3116"),
    document.getElementById("mark3117"),
    document.getElementById("mark3118"),
    document.getElementById("mark3119"),
    document.getElementById("mark3120"),
    document.getElementById("mark3121"),
    document.getElementById("mark3122"),
    document.getElementById("mark3123"),
    document.getElementById("mark3124")
];

const thirdFloorCheckpoints = [
    document.getElementById("mark300"),
    document.getElementById("mark301"),
    document.getElementById("mark302"),
    document.getElementById("mark303"),
    document.getElementById("mark304"),
    document.getElementById("mark305"),
    document.getElementById("mark306"),
    document.getElementById("mark307"),
    document.getElementById("mark308"),
    document.getElementById("mark309"),
    document.getElementById("mark310"),
    document.getElementById("mark311"),
    document.getElementById("mark312"),
    document.getElementById("mark313"),
    document.getElementById("mark314"),
    document.getElementById("mark315"),
    document.getElementById("mark316"),
    document.getElementById("mark317"),
    document.getElementById("mark318"),
    document.getElementById("mark319"),
    document.getElementById("mark320"),
    document.getElementById("mark321"),
    document.getElementById("mark322"),
    document.getElementById("mark323"),
    document.getElementById("mark324"),
    document.getElementById("mark325"),
    document.getElementById("mark326"),
    document.getElementById("mark327"),
    document.getElementById("mark328"),
    document.getElementById("mark329"),
    document.getElementById("mark330"),
    document.getElementById("mark331"),
    document.getElementById("mark332"),
    document.getElementById("mark333"),
    document.getElementById("mark334"),
    document.getElementById("mark335"),
    document.getElementById("mark336"),
    document.getElementById("mark337"),
    document.getElementById("mark338"),
    document.getElementById("mark339"),
    document.getElementById("mark340"),
    document.getElementById("mark341"),
    document.getElementById("mark342"),
    document.getElementById("mark343"),
    document.getElementById("mark344"),
    document.getElementById("mark345"),
    document.getElementById("mark346"),
    document.getElementById("mark347"),
    document.getElementById("mark348"),
    document.getElementById("mark349"),
    document.getElementById("mark350"),
    document.getElementById("mark351"),
    document.getElementById("mark352"),
    document.getElementById("mark353"),
    document.getElementById("mark354"),
    document.getElementById("mark355"),
    document.getElementById("mark356"),
    document.getElementById("mark357"),
    document.getElementById("mark358"),
    document.getElementById("mark359"),
    document.getElementById("mark360"),
    document.getElementById("mark361"),
    document.getElementById("mark362"),
    document.getElementById("mark363"),
    document.getElementById("mark364"),
    document.getElementById("mark365"),
    document.getElementById("mark366"),
    document.getElementById("mark367"),
    document.getElementById("mark368"),
    document.getElementById("mark369"),
    document.getElementById("mark370"),
    document.getElementById("mark371"),
    document.getElementById("mark372"),
    document.getElementById("mark373"),
    document.getElementById("mark374"),
    document.getElementById("mark375"),
    document.getElementById("mark376"),
    document.getElementById("mark377"),
    document.getElementById("mark378"),
    document.getElementById("mark379"),
    document.getElementById("mark380"),
    document.getElementById("mark381"),
    document.getElementById("mark382"),
    document.getElementById("mark383"),
    document.getElementById("mark384"),
    document.getElementById("mark385"),
    document.getElementById("mark386"),
    document.getElementById("mark387"),
    document.getElementById("mark388"),
    document.getElementById("mark389"),
    document.getElementById("mark390"),
    document.getElementById("mark391"),
    document.getElementById("mark392"),
    document.getElementById("mark393"),
    document.getElementById("mark394"),
    document.getElementById("mark395")
];

const fourthFloorRooms = [
    document.getElementById("mark4002"),
    document.getElementById("mark4003"),
    document.getElementById("mark4004"),
    document.getElementById("mark4005"),
    document.getElementById("mark4006"),
    document.getElementById("mark4007"),
    document.getElementById("mark4008"),
    document.getElementById("mark4009"),
    document.getElementById("mark4010"),
    document.getElementById("mark4011"),
    document.getElementById("mark4012"),
    document.getElementById("mark4013"),
    document.getElementById("mark4014"),
    document.getElementById("mark4015"),
    document.getElementById("mark4016"),
    document.getElementById("mark4017"),
    document.getElementById("mark4018"),
    document.getElementById("mark4019"),
    document.getElementById("mark4020"),
    document.getElementById("mark4021"),
    document.getElementById("mark4022"),
    document.getElementById("mark4023"),
    document.getElementById("mark4024"),
    document.getElementById("mark4025"),
    document.getElementById("mark4026"),
    document.getElementById("mark4029"),
    document.getElementById("mark4030"),
    document.getElementById("mark4031"),
    document.getElementById("mark4032"),
    document.getElementById("mark4035"),
    document.getElementById("mark4036"),
    document.getElementById("mark4037"),
    document.getElementById("mark4038"),
    document.getElementById("mark4039"),
    document.getElementById("mark4040"),
    document.getElementById("mark4041"),
    document.getElementById("mark4042"),
    document.getElementById("mark4043"),
    document.getElementById("mark4044"),
    document.getElementById("mark4045"),
    document.getElementById("mark4046"),
    document.getElementById("mark4047"),
    document.getElementById("mark4048"),
    document.getElementById("mark4049"),
    document.getElementById("mark4050"),
    document.getElementById("mark4051"),
    document.getElementById("mark4052"),
    document.getElementById("mark4053"),
    document.getElementById("mark4054"),
    document.getElementById("mark4055"),
    document.getElementById("mark4056"),
    document.getElementById("mark4057"),
    document.getElementById("mark4058"),
    document.getElementById("mark4059"),
    document.getElementById("mark4060"),
    document.getElementById("mark4061"),
    document.getElementById("mark4062"),
    document.getElementById("mark4063"),
    document.getElementById("mark4064"),
    document.getElementById("mark4066"),
    document.getElementById("mark4067"),
    document.getElementById("mark4068"),
    document.getElementById("mark4069"),
    document.getElementById("mark4070"),
    document.getElementById("mark4071"),
    document.getElementById("mark4072"),
    document.getElementById("mark4073"),
    document.getElementById("mark4074"),
    document.getElementById("mark4075"),
    document.getElementById("mark4076"),
    document.getElementById("mark4077"),
    document.getElementById("mark4078"),
    document.getElementById("mark4079"),
    document.getElementById("mark4080"),
    document.getElementById("mark4083"),
    document.getElementById("mark4084"),
    document.getElementById("mark4085"),
    document.getElementById("mark4086"),
    document.getElementById("mark4087"),
    document.getElementById("mark4088"),
    document.getElementById("mark4089"),
    document.getElementById("mark4090"),
    document.getElementById("mark4091"),
    document.getElementById("mark4092"),
    document.getElementById("mark4093"),
    document.getElementById("mark4094"),
    document.getElementById("mark4095"),
    document.getElementById("mark4096"),
    document.getElementById("mark4097"),
    document.getElementById("mark4098"),
    document.getElementById("mark4099"),
    document.getElementById("mark4100"),
    document.getElementById("mark4101"),
    document.getElementById("mark4102"),
    document.getElementById("mark4103"),
    document.getElementById("mark4104"),
    document.getElementById("mark4105"),
    document.getElementById("mark4106"),
    document.getElementById("mark4107"),
    document.getElementById("mark4108"),
    document.getElementById("mark4109"),
    document.getElementById("mark4110")
];

const fourthFloorCheckpoints = [
    document.getElementById("mark400"),
    document.getElementById("mark401"),
    document.getElementById("mark402"),
    document.getElementById("mark403"),
    document.getElementById("mark404"),
    document.getElementById("mark405"),
    document.getElementById("mark406"),
    document.getElementById("mark407"),
    document.getElementById("mark408"),
    document.getElementById("mark409"),
    document.getElementById("mark410"),
    document.getElementById("mark411"),
    document.getElementById("mark412"),
    document.getElementById("mark413"),
    document.getElementById("mark414"),
    document.getElementById("mark415"),
    document.getElementById("mark416"),
    document.getElementById("mark417"),
    document.getElementById("mark418"),
    document.getElementById("mark419"),
    document.getElementById("mark420"),
    document.getElementById("mark421"),
    document.getElementById("mark422"),
    document.getElementById("mark423"),
    document.getElementById("mark424"),
    document.getElementById("mark425"),
    document.getElementById("mark426"),
    document.getElementById("mark427"),
    document.getElementById("mark428"),
    document.getElementById("mark429"),
    document.getElementById("mark430"),
    document.getElementById("mark431"),
    document.getElementById("mark432"),
    document.getElementById("mark433"),
    document.getElementById("mark434"),
    document.getElementById("mark435"),
    document.getElementById("mark436"),
    document.getElementById("mark437"),
    document.getElementById("mark438"),
    document.getElementById("mark439"),
    document.getElementById("mark440"),
    document.getElementById("mark441"),
    document.getElementById("mark442"),
    document.getElementById("mark443"),
    document.getElementById("mark444"),
    document.getElementById("mark445"),
    document.getElementById("mark446"),
    document.getElementById("mark447"),
    document.getElementById("mark448"),
    document.getElementById("mark449"),
    document.getElementById("mark450"),
    document.getElementById("mark451"),
    document.getElementById("mark452"),
    document.getElementById("mark453"),
    document.getElementById("mark454"),
    document.getElementById("mark455"),
    document.getElementById("mark456"),
    document.getElementById("mark457"),
    document.getElementById("mark458"),
    document.getElementById("mark459"),
    document.getElementById("mark460"),
    document.getElementById("mark461"),
    document.getElementById("mark462"),
    document.getElementById("mark463"),
    document.getElementById("mark464"),
    document.getElementById("mark465"),
    document.getElementById("mark466"),
    document.getElementById("mark467"),
    document.getElementById("mark468"),
    document.getElementById("mark469"),
    document.getElementById("mark470"),
    document.getElementById("mark471"),
    document.getElementById("mark472"),
    document.getElementById("mark473"),
    document.getElementById("mark474"),
    document.getElementById("mark475"),
    document.getElementById("mark476"),
    document.getElementById("mark477"),
    document.getElementById("mark478"),
    document.getElementById("mark479"),
    document.getElementById("mark480"),
    document.getElementById("mark481"),
    document.getElementById("mark482"),
    document.getElementById("mark483"),
    document.getElementById("mark484"),
    document.getElementById("mark485"),
    document.getElementById("mark486"),
    document.getElementById("mark487"),
    document.getElementById("mark488"),
    document.getElementById("mark489"),
    document.getElementById("mark490"),
    document.getElementById("mark491")
];

// Kui kasutaja sisestab sõne, seatakse see vastavusse ruumivalikuga
const shortCuts = [
    {"abasi-amefon affia-jomants": [3067]},
    {"abbas cheddad": [3097]},
    {"abdesselam ferdi": [3107]},
    {"adeyinka akintola": [3044]},
    {"agnes luhtaru": [3068]},
    {"ahti põder": [3018]},
    {"ahto ahas": [3049]},
    {"aira reiska": [3123]},
    {"aleksei dorkin": [3063]},
    {"aleksei ivanov": [3060]},
    {"ali ihsan güllü": [3006]},
    {"ali maharramov": [3103]},
    {"ali zeynalli": [3080]},
    {"alo peets": [3033]},
    {"alvo aabloo": [3050]},
    {"ami sild": [3106]},
    {"amith manoharan": [3054]},
    {"amnir hadachi": [3039]},
    {"anastasija nikiforova": [3007]},
    {"andres namm": [3033]},
    {"anett sommer": [3002]},
    {"anna aljanaki": [3082]},
    {"anneli vainumäe": [3121]},
    {"antti ainamo": [3024]},
    {"anu piirisild": [3009]},
    {"anu toom": [3120]},
    {"ardi tampuu": [3077]},
    {"armando da silva vieira": [3013]},
    {"artjom lind": [3043]},
    {"arun kumar singh": [3052]},
    {"asad munir": [3105]},

    {"basant sharma": [3054]},
    {"boris kudryashov": [3089]},
    {"britt-kathleen mere": [3060]},
    {"bruno de lima": [3023]},

    {"chad nester": [3026]},

    {"daisy alatare": [3123]},
    {"danel ahman": [3020]},
    {"daniel würsch": [3070]},
    {"david chapela": [3013]},
    {"deniss ruder": [3063]},
    {"diana pilvar": [3112]},
    {"dietmar pfahl": [3004]},
    {"dimitrios symeonidis": [3067]},
    {"dirk theis": [3027]},
    {"dmytro fishman": [3110]},
    {"dmytro pashshcenko": [3068]},
    {"dmytro zabolotnii": [3066]},
    {"dzvenymyra-marta yarish": [3086]},

    {"eduard barbu": [3059]},
    {"eduard ševtšenko": [3013]},
    {"edvin martin andrejev": [3054]},
    {"eerik muuli": [3017]},
    {"eero vainikko": [3038]},
    {"ekaterina sedykh": [3049]},
    {"elena sügis": [3106]},
    {"elsa triin raidla": [3050, 3051]},
    {"emil kalbaliyev": [3063]},
    {"erick martin fiestas sorogastua": [3103]},
    {"erik jaaniso": [3096]},
    {"erki külaots": [3070]},
    {"erkki laaneots": [3037]},
    {"evgenii dolzkhov": [3027]},

    {"faiz ali shah": [3065]},
    {"fatemeh rastgar": [3054]},
    {"fauzia khan": [3006]},
    {"fredrik milani": [3011]},

    {"gamal elkoumy": [3024]},
    {"gerly tamm": [3076]},
    {"giacomo magnifico": [3068]},
    {"glib manaiev": [3049]},

    {"garderoob": [1035]},

    {"halil ibrahim aysel": [3024]},
    {"hans hõrak": [3048]},
    {"harry-anton talvik": [3109]},
    {"hasan mohammed tanvir": [3107]},
    {"hedi peterson": [3111]},
    {"heidi taveter": [3015]},
    {"heiki-jaan kaalep": [3058]},
    {"heili aavola": [3028]},
    {"heili kase": [3114]},
    {"heili orav": [3059]},
    {"hele-andra kuulmets": [3068]},
    {"helen tera": [3041]},
    {"helena sokk": [3041]},
    {"helena talimaa": [3020]},
    {"heleri inno": [3112]},
    {"helger lipmaa": [3088]},
    {"helle hein": [3014]},
    {"hendrik hollmann": [3089]},
    {"hendrik šuvalov": [3109]},
    {"henri lakk": [3012]},
    {"henry narits": [3120]},
    {"hina anwar": [3007]},
    {"huber flores": [3045]},

    {"ijeoma faustina ekeh": [3053]},
    {"ilja pavlovs": [3049]},
    {"illia tsiporenko": [3080]},
    {"irina bocharova": [3089]},
    {"ivan kuzmin": [3112]},

    {"jaak vilo": [3119]},
    {"jaan aru": [3076]},
    {"jaan janno": [3018]},
    {"jan timko": [3101]},
    {"janno siim": [3073]},
    {"jesus javier reyes torres": [3077]},
    {"jevgenijs protopopovs": [3023]},
    {"joonas ariva": [3080]},
    {"joonas järve": [3078]},
    {"jose luis medina cartuche": [3043]},
    {"jüri kiho": [3117]},

    {"kadri muischnek": [3058]},
    {"kaia kask": [3114]},
    {"kairit sirts": [3063]},
    {"kaisa raadik": [3003]},
    {"kallol roy": [3082]},
    {"kalmer apinis": [3022]},
    {"karis meister": [3114]},
    {"karl kaspar haavel": [3071]},
    {"karl kristjan kaup": [3079]},
    {"karoliine holter": [3023]},
    {"kaspar papli": [3015]},
    {"kaur alasoo": [3113]},
    {"kelem negasi amare": [3101]},
    {"kerli mooses": [3108]},
    {"kersti taurus": [3116]},
    {"kevin post": [3044]},
    {"kirill rodionov": [3067]},
    {"krisliin rohtla": [3051]},
    {"krista killo": [3086]},
    {"krista liin": [3056]},
    {"kristi salum": [3021]},
    {"kristiina kuningas": [3086]},
    {"kristiina rahkema": [3006]},
    {"kristjan krips": [3037]},
    {"kristjan-julius laak": [3079]},
    {"kristo väljako": [3012]},
    {"kulda taveter": [3005]},
    {"kübra seyhan": [3075]},

    {"köök": [2038]},

    {"laura altin": [3071]},
    {"leon de franca nascimento": [3103]},
    {"lidia feklistova": [3017]},
    {"liina juuse": [3048]},
    {"liis lemsalu": [3112]},
    {"liis tamm": [3002]},
    {"liisa rätsep": [3060]},
    {"liivi luik": [3002]},
    {"linda rosenkron": [3008]},
    {"lisa yankovskaya": [3056]},
    {"ljubov jaanuska": [3015]},
    {"lotte parksepp": [3120]},
    {"lukaš daubner": [3053]},

    {"madis vasser": [3076]},
    {"maia boltovsky": [3029]},
    {"maiara francine bollauf": [3072]},
    {"maj-annika tammisto": [3006]},
    {"maksyk avramenko": [3011]},
    {"maksym del": [3062]},
    {"mare koit": [3117]},
    {"marek leibl": [3071]},
    {"marek oja": [3106]},
    {"marharyta domnich": [3077]},
    {"mari seeba": [3010]},
    {"mari-liis allikivi": [3078]},
    {"maria iqbal": [3124]},
    {"maria khan": [3008]},
    {"maria malk": [3109]},
    {"maria medina": [3010]},
    {"mariana kukk": [3050, 3051]},
    {"mariana milicich": [3023]},
    {"marianne liiv": [3120]},
    {"marili rõõm": [3019]},
    {"marilin moor": [3096]},
    {"marina lepp": [3021]},
    {"marinos gerogiadis": [3010]},
    {"mark fišel": [3061]},
    {"mark lütter": [3048]},
    {"markus haug": [3109]},
    {"markus kängsepp": [3078]},
    {"martin kaljula": [3123]},
    {"martin vainikko": [3068]},
    {"martti reinet": [3050, 3051]},
    {"mary-ann kubre": [3077, 3079]},
    {"mateus surrage reis": [3048]},
    {"matevž borjan zorec": [3066]},
    {"matthew earnshaw": [3026]},
    {"mayowa olapade": [3037]},
    {"meelis kull": [3102]},
    {"mehak mushtaq malik": [3103]},
    {"merilin kasesalu": [3028]},
    {"merilin piirmann": [3002]},
    {"merilin säde": [3015]},
    {"mihkel lepson": [3071]},
    {"miika juhani hannula": [3097]},
    {"mirjam paales": [3014]},

    {"mits": [3064]},

    {"mohamad gharib": [3009]},
    {"mohamed maher zenhom abdelrahman": [3101]},
    {"mohammad anagreh": [3042]},
    {"mubashar iqbal": [3053]},
    {"muhammad bilal akhtar": [3008]},
    {"mykhailo dorokhov": [3015]},

    {"natali belinska": [3114]},
    {"naveed muhammad": [3066]},
    {"navneet agarwal": [3062]},
    {"neha sharma": [3063]},
    {"nesma mahmoud": [3067]},
    {"novin shahroudi": [3071]},

    {"olumba chima anya": [3003]},
    {"orlenys lopez pintado": [3003]},

    {"peep kolberg": [3086]},
    {"pelle jakovits": [3040]},
    {"phil labuschagne": [3017]},
    {"piret luik": [3019]},
    {"piret orav": [3122]},
    {"prasoon kumar vinodkumar": [3049]},
    {"priit adler": [3112]},
    {"priit paluoja": [3015]},
    {"pritam pal": [3070]},
    
    {"raamatukogu": [1013, 1015]},

    {"raimundas matulevicius": [3055]},
    {"raivo kolde": [3104]},
    {"ralf tambets": [3086]},
    {"rasmus lellep": [3057]},
    {"raul vicente": [3100]},
    {"rauno jaaska": [3062]},
    {"reelika suviste": [3020]},
    {"reet adamsoo": [3124]},
    {"reili liiver": [3121]},
    {"reimo palm": [3012]},
    {"renato perotto machado": [3028]},
    {"reo kuchida": [3044]},
    {"riin saadjärv": [3017]},
    {"roberto parisella": [3072]},

    {"sandbox": [3092]},

    {"saili petti": [3121]},
    {"sander sats": [3067]},
    {"sedat akleylek": [3075]},
    {"shahla novruzova": [3027]},
    {"shan wu": [3042]},
    {"siim orasmaa": [3059]},
    {"simmo saan": [3023]},
    {"simon idoko": [3054]},
    {"sirli tamm": [3106]},
    {"somnath banerjee": [3057]},
    {"stefan kuhn": [3012]},
    {"sulev reisberg": [3108]},
    {"sven aller": [3059]},
    {"sven laur": [3108]},
    {"svetlana golovko": [3017]},
    {"syazwanie zulkifli": [3006]},
    {"syed qasim gilani": [3080]},

    {"söökla": [119]},

    {"zhigang yin": [3028]},
    {"zofia dominika mizgalewicz": [3067]},

    {"taavi kivisik": [3079]},
    {"taavi luik": [3079]},
    {"taido purason": [3068]},
    {"tahira iqbal": [3010]},
    {"tarmo vaino": [3058]},
    {"taranika nurmik": [3067]},
    {"tarun khajuria": [3079]},
    {"tauno palts": [3018]},
    {"teija elina vainio": [3065]},
    {"tiina lasn": [3117]},
    {"toomas krips": [3072]},
    {"tõnis hendrik hlebnikov": [3042]},
    
    {"uku raudvere": [3096]},
    {"urmas luhaäär": [3070]},

    {"varmo vene": [3025]},
    {"vesal vojdani": [3022]},
    {"victor pinheiro": [3107]},
    {"vikash chander maheshwari": [3101]},
    {"viktoriia abakumova": [3011]},
    {"vinayak khavasi": [3033]},
    {"vitaly skachek": [3074]},
    {"vjatšeslav antipenko": [3003]},

    {"õie renate siimon": [3105]},

    {"ülle holm": [3002]},

    {"yana halas": [3065]},
    {"yan-martin tamm": [3067]},
];


// Defineerime alguspunkti (peauks) ning soovitud sihtpunkti
const start = 100;
var wish;

// Funktsioon, mis leiab tee alguspunktist sihtpunkti
function findPath(startPoint, destination) {
    const path = [];

    // Rekursioon: kui lõpuks ei leia, väljastame errori
    if (!search(startPoint, destination, path, new Set([startPoint]))) console.log("Ruumi ei leitud!");
    else document.getElementById(`mark${destination}`).classList.add("active");
    // Kui tee leiti, väljastame selle sammude kujul
    return path;
}

// Tee, millel on kõige vähem läbivaid punkte.
function search(startPoint, destination, path, visited) {
    const queue = [startPoint];
    const previous = new Map();
    visited.add(startPoint);

    for (let index = 0; index < queue.length; index++) {
        const point = queue[index];

        if (point === destination) {
            const reversedPath = [];
            let current = destination;

            while (current !== startPoint) {
                const previousPoint = previous.get(current);
                reversedPath.push([previousPoint, current]);
                current = previousPoint;
            }

            path.push(...reversedPath.reverse());
            return true;
        }

        // ?. tagastab undefined kui find() ei leia ühtegi entry't; ?? kasutab [] kui tulemus on NULL või undefined.
        const nextPoints = paths.find((entry) => Object.hasOwn(entry, point))?.[point] ?? [];

        for (const nextPoint of nextPoints) {
            if (visited.has(nextPoint)) {
                continue;
            }

            visited.add(nextPoint);
            previous.set(nextPoint, point);
            queue.push(nextPoint);
        }
    }

    return false;
}

// Muutujad kasutaja sisendiks
const numberInput = document.getElementById("number-input");

var inputTimeout;
var pathToShow = [];

// Uurime, kas sisendiväljal on olnud muutusi
numberInput.addEventListener("input", () => {
    
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => {

        // Kontrollime sisendit
        wish = numberInput.value;
        resetActive();


        // Kui sisend on number
        if (wish == Number(wish)) {
            pathToShow = findPath(start, Number(wish));
        }


        // Kui sisendiks on sõne, otsime vastavat õppejõudu ning kabinetti
        // Primitiivne näide
        else {
            wish = wish.trim().toLowerCase();
            pathToShow = [];
            for (const shortcut of shortCuts) {
                for (const [key, destinations] of Object.entries(shortcut)) {
                    if (key == wish) {
                        pathToShow = findPath(start, destinations[0]);
                        break;
                    }
                }
                if (pathToShow.length > 0) {
                    break;
                }
            }
        }
        drawPath();
    }, 1000);
});

// Joonistame teekonna
function drawPath() {
    var svg = document.getElementById("path-lines");
    if (!svg) {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = "path-lines";
        Object.assign(svg.style, {
            position: "fixed",
            inset: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: "1"
        });
        document.body.appendChild(svg);
    }

    svg.replaceChildren();
    for (const [from, to] of pathToShow) {
        const fromMark = document.getElementById(`mark${from}`);
        const toMark = document.getElementById(`mark${to}`);
        if (!fromMark || !toMark || fromMark.getClientRects().length === 0 || toMark.getClientRects().length === 0) {
            continue;
        }

        const fromRect = fromMark.getBoundingClientRect();
        const toRect = toMark.getBoundingClientRect();
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", fromRect.left + fromRect.width / 2);
        line.setAttribute("y1", fromRect.top + fromRect.height / 2);
        line.setAttribute("x2", toRect.left + toRect.width / 2);
        line.setAttribute("y2", toRect.top + toRect.height / 2);
        line.setAttribute("stroke", "cyan");
        line.setAttribute("stroke-width", "0.15rem");
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
    }
}

const floor1 = document.getElementById("floor-1");
const floor2 = document.getElementById("floor-2");
const floor3 = document.getElementById("floor-3");
const floor4 = document.getElementById("floor-4");
const floorNumber = document.getElementById("floor");
const firstFloorBg = document.getElementById("background1");
const secondFloorBg = document.getElementById("background2");
const thirdFloorBg = document.getElementById("background3");
const fourthFloorBg = document.getElementById("background4");

var currentFloor = 1;

floor1.onclick = () => {
    currentFloor = 1;
    updateFloor();
    updatePoints();
    drawPath();
}
floor2.onclick = () => {
    currentFloor = 2;
    updateFloor();
    updatePoints();
    drawPath();
}
floor3.onclick = () => {
    currentFloor = 3;
    updateFloor();
    updatePoints();
    drawPath();
}
floor4.onclick = () => {
    currentFloor = 4;
    updateFloor();
    updatePoints();
    drawPath();
}

function updateFloor() {
    firstFloorBg.style.display = currentFloor == 1 ? "flex" : "none";
    secondFloorBg.style.display = currentFloor == 2 ? "flex" : "none";
    thirdFloorBg.style.display = currentFloor == 3 ? "flex" : "none";
    fourthFloorBg.style.display = currentFloor == 4 ? "flex" : "none";

    floor1.style.color = currentFloor == 1 ? "whitesmoke" : "#8d898d";
    floor2.style.color = currentFloor == 2 ? "whitesmoke" : "#8d898d";
    floor3.style.color = currentFloor == 3 ? "whitesmoke" : "#8d898d";
    floor4.style.color = currentFloor == 4 ? "whitesmoke" : "#8d898d";
}

function resetActive() {
    document.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
    });
}

// Ajutine lisand, et toggle'ida ruume ja checkpointe
function updatePoints() {
    firstFloorRooms.forEach((element) => {
        element.style.display = currentFloor === 1 ? "block" : "none";
    });
    firstFloorCheckpoints.forEach((element) => {
        element.style.display = currentFloor === 1 ? "block" : "none";
    });
    secondFloorRooms.forEach((element) => {
        element.style.display = currentFloor === 2 ? "block" : "none";
    });
    secondFloorCheckpoints.forEach((element) => {
        element.style.display = currentFloor === 2 ? "block" : "none";
    });
    thirdFloorRooms.forEach((element) => {
        element.style.display = currentFloor === 3 ? "block" : "none";
    });
    thirdFloorCheckpoints.forEach((element) => {
        element.style.display = currentFloor === 3 ? "block" : "none";
    });
    fourthFloorRooms.forEach((element) => {
        element.style.display = currentFloor === 4 ? "block" : "none";
    });
    fourthFloorCheckpoints.forEach((element) => {
        element.style.display = currentFloor === 4 ? "block" : "none";
    });
}

updateFloor();
updatePoints();
