'use strict';
// Business contact: Egyptian mobile, normalized to international format.
const WHATSAPP_NUMBER = '201099599888';
const products = [
  {id:'EW-F06',name:'Window Seat with Storage',category:'bespoke',image:'window-retreat-3.jpg',description:'A fitted cushioned window seat with three storage drawers, shown in The Window Retreat, EW-003. Dimensions, upholstery and finish are confirmed to suit your space.'},
  {id:'EW-F07',name:'Floating Console & Mirror',category:'accents',image:'window-retreat-2.jpg',description:'A wall-mounted drawer console with an extended shelf and illuminated mirror, shown alongside the window seat in EW-003. Dimensions, materials, lighting and installation requirements are reviewed before quotation.'},
  {id:'EW-F05',name:'Natural Wood TV Console',category:'bespoke',image:'tv-console-2.jpg',description:'A TV console with expressive wood grain, natural contours and block-style supports. Shown in project EW-002. Wood species, dimensions and finish are confirmed for each quotation.'},
  {id:'EW-F01',name:'Natural Cane Bed',category:'bedroom',image:'IMG_0123.jpg',description:'A warm wooden frame and cane headboard, made to suit your bedroom. Shown in our Natural Wood Suite.'},
  {id:'EW-F02',name:'Wooden Daybed',category:'bedroom',image:'IMG_0125.jpg',description:'A wood-framed daybed with upholstered cushions, shown at the foot of the bed. Dimensions and upholstery are discussed for each order.'},
  {id:'EW-F03',name:'Arched Mirror & Stool',category:'accents',image:'IMG_0131.jpg',description:'An arched wood-framed mirror paired with a handcrafted stool. A thoughtful accent for bedrooms and dressing spaces.'},
  {id:'EW-F04',name:'Custom Wood Cladding',category:'bespoke',image:'IMG_0120.jpg',description:'Made-to-measure wood cladding and steps, shown around a jacuzzi. Site dimensions, material suitability and installation requirements are reviewed before quoting.'}
];
const suitePhotos = [
  ['IMG_0123.jpg','The bedroom','Cane headboard, wood frame and upholstered daybed.'],
  ['IMG_0126.jpg','The complete space','Furniture, textures and finishing details together.'],
  ['IMG_0125.jpg','A different perspective','A closer look at the bedroom and seating.'],
  ['IMG_0131.jpg','Mirror & stool','Handcrafted accents for the dressing space.'],
  ['IMG_0972.jpg','Finishing details','Another view of the arched mirror and stool.'],
  ['IMG_0120.jpg','Custom woodwork','Jacuzzi wood cladding and integrated steps.'],
  ['IMG_3541.jpg','During installation','Work in progress, before the final styling.']
];
const projectData = {
 retreat:{code:'EW-003',title:'The Window Retreat',quote:'The Window Retreat · EW-003',description:'A made-to-fit window seat with three storage drawers and cushioned seating, framed by recessed shelves. A floating drawer console, extended shelf and illuminated mirror complete the space.',photos:[
 ['window-retreat-2.jpg','The complete setting','Window seat, floating drawer console and illuminated mirror together.'],
 ['window-retreat-1.jpg','The window seat','Cushioned seating above three storage drawers.'],
 ['window-retreat-3.jpg','Seating & storage','A closer view of the seat, cushions and drawer fronts.'],
 ['window-retreat-4.jpg','Shelf & console details','Recessed shelves alongside the seat and floating drawer console.'],
 ['window-retreat-5.jpg','Front perspective','The fitted seat framed by shelves on either side.'],
 ['window-retreat-6.jpg','Upholstery details','Close-up of the cushions, seat upholstery and integrated storage.']
 ]},
 console:{code:'EW-002',title:'Natural Wood TV Console',quote:'Natural Wood TV Console · EW-002',description:'A standalone TV console with expressive wood texture and sculptural supports. Explore the overall setting and close-up details.',photos:[
 ['tv-console-2.jpg','The complete console','Overall view of the TV console and its block-style supports.'],
 ['tv-console-4.jpg','Front elevation','A front view showing the proportions of the installed console.'],
 ['tv-console-5.jpg','In the living space','The console shown alongside woven seating.'],
 ['tv-console-1.jpg','Natural grain','Close-up of the wood texture and supporting block.'],
 ['tv-console-3.jpg','Edge & support','A closer look at the end profile and support.']
 ]},
 suite:{code:'EW-001',title:'The Natural Wood Suite',quote:'The Natural Wood Suite · EW-001',description:'Custom cane headboard, wooden daybed, mirror and stool, and jacuzzi wood cladding. Furniture by Elite Wood, in collaboration with Mohamed Yassin Designs.',photos:suitePhotos}
};
Object.assign(projectData,{
  "p4": {
    "code": "EW-004",
    "title": "The Soft Arch Bedroom",
    "category": "bedroom",
    "cover": "p04-01.jpeg",
    "quote": "The Soft Arch Bedroom · EW-004",
    "description": "An upholstered bed with lift-up storage, bedside drawers and fitted cabinetry with arched shelving.",
    "photos": [
      [
        "p04-01.jpeg",
        "The overall setting",
        "The Soft Arch Bedroom — actual project view 1."
      ],
      [
        "p04-02.jpeg",
        "Project detail 2",
        "The Soft Arch Bedroom — actual project view 2."
      ],
      [
        "p04-03.jpg",
        "Project detail 3",
        "The Soft Arch Bedroom — actual project view 3."
      ],
      [
        "p04-04.jpeg",
        "Project detail 4",
        "The Soft Arch Bedroom — actual project view 4."
      ],
      [
        "p04-05.jpeg",
        "Project detail 5",
        "The Soft Arch Bedroom — actual project view 5."
      ],
      [
        "p04-06.jpeg",
        "Project detail 6",
        "The Soft Arch Bedroom — actual project view 6."
      ],
      [
        "p04-07.jpeg",
        "Project detail 7",
        "The Soft Arch Bedroom — actual project view 7."
      ],
      [
        "p04-08.jpg",
        "Project detail 8",
        "The Soft Arch Bedroom — actual project view 8."
      ],
      [
        "p04-09.jpeg",
        "Project detail 9",
        "The Soft Arch Bedroom — Lift-up bed storage."
      ]
    ]
  },
  "p5": {
    "code": "EW-005",
    "title": "The Warm Grain Kitchen",
    "category": "kitchens",
    "cover": "p05-03.jpeg",
    "quote": "The Warm Grain Kitchen · EW-005",
    "description": "Wood-look cabinetry, glazed upper doors and a curved, fluted peninsula bring the kitchen together.",
    "photos": [
      [
        "p05-03.jpeg",
        "The overall setting",
        "The Warm Grain Kitchen — Kitchen and peninsula."
      ],
      [
        "p05-01.jpeg",
        "Project detail 1",
        "The Warm Grain Kitchen — actual project view 1."
      ],
      [
        "p05-02.jpeg",
        "Project detail 2",
        "The Warm Grain Kitchen — actual project view 2."
      ],
      [
        "p05-04.jpeg",
        "Project detail 4",
        "The Warm Grain Kitchen — actual project view 4."
      ],
      [
        "p05-05.jpeg",
        "Project detail 5",
        "The Warm Grain Kitchen — actual project view 5."
      ]
    ]
  },
  "p6": {
    "code": "EW-006",
    "title": "The Open Living Edit",
    "category": "living",
    "cover": "p06-03.jpeg",
    "quote": "The Open Living Edit · EW-006",
    "description": "A round dining setting, floating media console and fitted shelving within an open living space.",
    "photos": [
      [
        "p06-03.jpeg",
        "The overall setting",
        "The Open Living Edit — actual project view 3."
      ],
      [
        "p06-01.jpeg",
        "Project detail 1",
        "The Open Living Edit — Round dining setting."
      ],
      [
        "p06-02.jpeg",
        "Project detail 2",
        "The Open Living Edit — actual project view 2."
      ],
      [
        "p06-04.jpeg",
        "Project detail 4",
        "The Open Living Edit — actual project view 4."
      ],
      [
        "p06-05.jpeg",
        "Project detail 5",
        "The Open Living Edit — actual project view 5."
      ],
      [
        "p06-06.jpeg",
        "Project detail 6",
        "The Open Living Edit — actual project view 6."
      ],
      [
        "p06-07.jpeg",
        "Project detail 7",
        "The Open Living Edit — actual project view 7."
      ]
    ]
  },
  "p7": {
    "code": "EW-007",
    "title": "The Floating Timber Bedroom",
    "category": "bedroom",
    "cover": "p07-03.jpg",
    "quote": "The Floating Timber Bedroom · EW-007",
    "description": "A broad wood headboard and raised bed frame, shown during installation and in the furnished room.",
    "photos": [
      [
        "p07-03.jpg",
        "The overall setting",
        "The Floating Timber Bedroom — Furnished bedroom."
      ],
      [
        "p07-01.jpeg",
        "During installation",
        "Bed frame and timber headboard during installation."
      ],
      [
        "p07-02.jpeg",
        "During installation",
        "Bed frame and timber headboard during installation."
      ]
    ]
  },
  "p8": {
    "code": "EW-008",
    "title": "The Quiet Timber Room",
    "category": "bedroom",
    "cover": "p08-04.jpeg",
    "quote": "The Quiet Timber Room · EW-008",
    "description": "A light bedroom setting with a timber bed, floating surfaces, mirror and slatted wardrobe.",
    "photos": [
      [
        "p08-04.jpeg",
        "The overall setting",
        "The Quiet Timber Room — actual project view 4."
      ],
      [
        "p08-01.jpeg",
        "Project detail 1",
        "The Quiet Timber Room — actual project view 1."
      ],
      [
        "p08-02.jpeg",
        "Project detail 2",
        "The Quiet Timber Room — actual project view 2."
      ],
      [
        "p08-03.jpeg",
        "Project detail 3",
        "The Quiet Timber Room — Slatted wardrobe detail."
      ]
    ]
  },
  "p9": {
    "code": "EW-009",
    "title": "The Woven Light Suite",
    "category": "bedroom",
    "cover": "p09-03.jpeg",
    "quote": "The Woven Light Suite · EW-009",
    "description": "Cane-front cabinetry, an upholstered bed, dressing table and mirrors with warm wood surrounds.",
    "photos": [
      [
        "p09-03.jpeg",
        "The overall setting",
        "The Woven Light Suite — Dressing table and stool."
      ],
      [
        "p09-01.jpeg",
        "Project detail 1",
        "The Woven Light Suite — actual project view 1."
      ],
      [
        "p09-02.jpeg",
        "Project detail 2",
        "The Woven Light Suite — actual project view 2."
      ],
      [
        "p09-04.jpeg",
        "Project detail 4",
        "The Woven Light Suite — actual project view 4."
      ],
      [
        "p09-05.jpeg",
        "Project detail 5",
        "The Woven Light Suite — actual project view 5."
      ],
      [
        "p09-06.jpeg",
        "Project detail 6",
        "The Woven Light Suite — actual project view 6."
      ],
      [
        "p09-07.jpeg",
        "Project detail 7",
        "The Woven Light Suite — actual project view 7."
      ]
    ]
  },
  "p10": {
    "code": "EW-010",
    "title": "The Everyday Media Corner",
    "category": "living",
    "cover": "p10-03.jpeg",
    "quote": "The Everyday Media Corner · EW-010",
    "description": "A fitted media corner combining open storage, floating shelves and a wood coffee table.",
    "photos": [
      [
        "p10-03.jpeg",
        "The overall setting",
        "The Everyday Media Corner — Media console and coffee table."
      ],
      [
        "p10-01.jpeg",
        "Project detail 1",
        "The Everyday Media Corner — actual project view 1."
      ],
      [
        "p10-04.jpeg",
        "Project detail 4",
        "The Everyday Media Corner — actual project view 4."
      ]
    ],
    "video": "p10-02.mp4"
  },
  "p11": {
    "code": "EW-011",
    "title": "The Soft Gathering",
    "category": "living",
    "cover": "p11-03.jpeg",
    "quote": "The Soft Gathering · EW-011",
    "description": "A light upholstered corner sofa, accent chairs and round wood coffee table arranged for conversation.",
    "photos": [
      [
        "p11-03.jpeg",
        "The overall setting",
        "The Soft Gathering — actual project view 3."
      ],
      [
        "p11-01.jpeg",
        "Project detail 1",
        "The Soft Gathering — Round pedestal coffee table."
      ],
      [
        "p11-02.jpeg",
        "Project detail 2",
        "The Soft Gathering — actual project view 2."
      ],
      [
        "p11-04.jpeg",
        "Project detail 4",
        "The Soft Gathering — actual project view 4."
      ],
      [
        "p11-05.jpeg",
        "Project detail 5",
        "The Soft Gathering — actual project view 5."
      ]
    ]
  },
  "p12": {
    "code": "EW-012",
    "title": "The Cane Dining Room",
    "category": "dining",
    "cover": "p12-04.jpeg",
    "quote": "The Cane Dining Room · EW-012",
    "description": "A wood dining table and cane chairs, complemented by a cane-front sideboard and arched console mirror.",
    "photos": [
      [
        "p12-04.jpeg",
        "The overall setting",
        "The Cane Dining Room — Dining table and cane chairs."
      ],
      [
        "p12-01.jpeg",
        "Project detail 1",
        "The Cane Dining Room — actual project view 1."
      ],
      [
        "p12-02.jpeg",
        "Project detail 2",
        "The Cane Dining Room — actual project view 2."
      ],
      [
        "p12-03.jpeg",
        "Project detail 3",
        "The Cane Dining Room — actual project view 3."
      ],
      [
        "p12-05.jpeg",
        "Project detail 5",
        "The Cane Dining Room — actual project view 5."
      ],
      [
        "p12-06.jpeg",
        "Project detail 6",
        "The Cane Dining Room — actual project view 6."
      ]
    ]
  },
  "p13": {
    "code": "EW-013",
    "title": "The Social Kitchen",
    "category": "kitchens",
    "cover": "p13-06.jpeg",
    "quote": "The Social Kitchen · EW-013",
    "description": "A breakfast bar with cane stools, illuminated shelving and a framed opening linking kitchen and living spaces.",
    "photos": [
      [
        "p13-06.jpeg",
        "The overall setting",
        "The Social Kitchen — Breakfast bar and cane stools."
      ],
      [
        "p13-01.jpeg",
        "Project detail 1",
        "The Social Kitchen — actual project view 1."
      ],
      [
        "p13-02.jpeg",
        "Project detail 2",
        "The Social Kitchen — actual project view 2."
      ],
      [
        "p13-03.jpeg",
        "Project detail 3",
        "The Social Kitchen — actual project view 3."
      ],
      [
        "p13-04.jpeg",
        "Project detail 4",
        "The Social Kitchen — actual project view 4."
      ],
      [
        "p13-05.jpeg",
        "Project detail 5",
        "The Social Kitchen — actual project view 5."
      ],
      [
        "p13-07.jpg",
        "Project detail 7",
        "The Social Kitchen — actual project view 7."
      ],
      [
        "p13-08.jpeg",
        "Project detail 8",
        "The Social Kitchen — actual project view 8."
      ],
      [
        "p13-09.jpeg",
        "Project detail 9",
        "The Social Kitchen — actual project view 9."
      ],
      [
        "p13-10.jpeg",
        "Project detail 10",
        "The Social Kitchen — actual project view 10."
      ],
      [
        "p13-11.jpeg",
        "Project detail 11",
        "The Social Kitchen — actual project view 11."
      ],
      [
        "p13-12.jpeg",
        "Project detail 12",
        "The Social Kitchen — actual project view 12."
      ]
    ]
  }
});
Object.assign(projectData.suite,{category:'bedroom',cover:'IMG_0126.jpg'});
Object.assign(projectData.console,{category:'living',cover:'tv-console-2.jpg'});
Object.assign(projectData.retreat,{category:'bespoke',cover:'window-retreat-2.jpg'});
products.unshift(...[
  {
    "id": "EW-F08",
    "name": "Upholstered Storage Bed",
    "category": "bedroom",
    "image": "p04-09.jpeg",
    "description": "Lift-up bed storage, shown in The Soft Arch Bedroom, EW-004. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F09",
    "name": "Bespoke Kitchen Cabinetry",
    "category": "kitchens",
    "image": "p05-03.jpeg",
    "description": "Kitchen and peninsula, shown in The Warm Grain Kitchen, EW-005. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F10",
    "name": "Round Dining Table & Chairs",
    "category": "dining",
    "image": "p06-01.jpeg",
    "description": "Round dining setting, shown in The Open Living Edit, EW-006. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F11",
    "name": "Floating Bed & Headboard",
    "category": "bedroom",
    "image": "p07-03.jpg",
    "description": "Furnished bedroom, shown in The Floating Timber Bedroom, EW-007. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F12",
    "name": "Slatted Wardrobe",
    "category": "bedroom",
    "image": "p08-03.jpeg",
    "description": "Slatted wardrobe detail, shown in The Quiet Timber Room, EW-008. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F13",
    "name": "Dressing Table & Stool",
    "category": "accents",
    "image": "p09-03.jpeg",
    "description": "Dressing table and stool, shown in The Woven Light Suite, EW-009. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F14",
    "name": "Open Media Console",
    "category": "living",
    "image": "p10-03.jpeg",
    "description": "Media console and coffee table, shown in The Everyday Media Corner, EW-010. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F15",
    "name": "Round Pedestal Coffee Table",
    "category": "living",
    "image": "p11-01.jpeg",
    "description": "Round pedestal coffee table, shown in The Soft Gathering, EW-011. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F16",
    "name": "Cane Dining Set",
    "category": "dining",
    "image": "p12-04.jpeg",
    "description": "Dining table and cane chairs, shown in The Cane Dining Room, EW-012. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  },
  {
    "id": "EW-F17",
    "name": "Breakfast Bar & Cane Stools",
    "category": "kitchens",
    "image": "p13-06.jpeg",
    "description": "Breakfast bar and cane stools, shown in The Social Kitchen, EW-013. Dimensions, materials, finish and installation requirements are reviewed before quotation."
  }
]);
Object.assign(projectData,{
  "p14": {
    "code": "EW-014",
    "title": "The Workshop Dining Set",
    "category": "dining",
    "cover": "p14-03.jpeg",
    "quote": "The Workshop Dining Set · EW-014",
    "description": "A wood dining table with cane-backed armchairs and upholstered seats, photographed at the workshop.",
    "photos": [
      [
        "p14-03.jpeg",
        "The overall setting",
        "The Workshop Dining Set — workshop photography, view 3."
      ],
      [
        "p14-01.jpeg",
        "Project detail 1",
        "The Workshop Dining Set — workshop photography, view 1."
      ],
      [
        "p14-02.jpeg",
        "Project detail 2",
        "The Workshop Dining Set — workshop photography, view 2."
      ],
      [
        "p14-04.jpeg",
        "Project detail 4",
        "The Workshop Dining Set — workshop photography, view 4."
      ],
      [
        "p14-05.jpeg",
        "Project detail 5",
        "The Workshop Dining Set — workshop photography, view 5."
      ],
      [
        "p14-06.jpeg",
        "Project detail 6",
        "The Workshop Dining Set — workshop photography, view 6."
      ],
      [
        "p14-07.jpeg",
        "Project detail 7",
        "The Workshop Dining Set — workshop photography, view 7."
      ]
    ]
  },
  "p15": {
    "code": "EW-015",
    "title": "The Woven Home",
    "category": "living",
    "cover": "p15-03.jpeg",
    "quote": "The Woven Home · EW-015",
    "description": "A coordinated dining and living setting with cane-backed chairs, a cane-front sideboard, round coffee table and media unit.",
    "photos": [
      [
        "p15-03.jpeg",
        "The overall setting",
        "The Woven Home — project photography, view 3."
      ],
      [
        "p15-01.jpeg",
        "Project detail 1",
        "The Woven Home — project photography, view 1."
      ],
      [
        "p15-02.jpeg",
        "Project detail 2",
        "The Woven Home — project photography, view 2."
      ],
      [
        "p15-04.jpeg",
        "Project detail 4",
        "The Woven Home — project photography, view 4."
      ],
      [
        "p15-05.jpeg",
        "Project detail 5",
        "The Woven Home — project photography, view 5."
      ],
      [
        "p15-06.jpeg",
        "Project detail 6",
        "The Woven Home — project photography, view 6."
      ],
      [
        "p15-07.jpeg",
        "Project detail 7",
        "The Woven Home — project photography, view 7."
      ],
      [
        "p15-08.jpeg",
        "Project detail 8",
        "The Woven Home — project photography, view 8."
      ],
      [
        "p15-09.jpeg",
        "Project detail 9",
        "The Woven Home — project photography, view 9."
      ],
      [
        "p15-10.jpeg",
        "Project detail 10",
        "The Woven Home — project photography, view 10."
      ]
    ]
  },
  "p16": {
    "code": "EW-016",
    "title": "The Timber Glow Suite",
    "category": "bedroom",
    "cover": "p16-04.jpeg",
    "quote": "The Timber Glow Suite · EW-016",
    "description": "A bedroom with a slatted wood headboard, floating bedside drawers, glazed wardrobe doors and an illuminated dressing mirror.",
    "photos": [
      [
        "p16-04.jpeg",
        "The overall setting",
        "The Timber Glow Suite — project photography, view 4."
      ],
      [
        "p16-01.jpeg",
        "Project detail 1",
        "The Timber Glow Suite — project photography, view 1."
      ],
      [
        "p16-02.jpeg",
        "Project detail 2",
        "The Timber Glow Suite — project photography, view 2."
      ],
      [
        "p16-03.jpeg",
        "Project detail 3",
        "The Timber Glow Suite — project photography, view 3."
      ],
      [
        "p16-05.jpeg",
        "Project detail 5",
        "The Timber Glow Suite — project photography, view 5."
      ],
      [
        "p16-06.jpeg",
        "Project detail 6",
        "The Timber Glow Suite — project photography, view 6."
      ],
      [
        "p16-07.jpeg",
        "Project detail 7",
        "The Timber Glow Suite — project photography, view 7."
      ],
      [
        "p16-08.jpeg",
        "Project detail 8",
        "The Timber Glow Suite — project photography, view 8."
      ],
      [
        "p16-09.jpeg",
        "Project detail 9",
        "The Timber Glow Suite — project photography, view 9."
      ],
      [
        "p16-10.jpeg",
        "Project detail 10",
        "The Timber Glow Suite — project photography, view 10."
      ]
    ]
  },
  "p17": {
    "code": "EW-017",
    "title": "The Ivory Line Kitchen",
    "category": "kitchens",
    "cover": "p17-05.jpeg",
    "quote": "The Ivory Line Kitchen · EW-017",
    "description": "A fitted kitchen with light cabinet fronts, dark linear details, glazed upper doors and integrated appliance spaces.",
    "photos": [
      [
        "p17-05.jpeg",
        "The overall setting",
        "The Ivory Line Kitchen — project photography, view 5."
      ],
      [
        "p17-01.jpeg",
        "Project detail 1",
        "The Ivory Line Kitchen — project photography, view 1."
      ],
      [
        "p17-03.jpeg",
        "Project detail 3",
        "The Ivory Line Kitchen — project photography, view 3."
      ],
      [
        "p17-07.jpeg",
        "Project detail 7",
        "The Ivory Line Kitchen — project photography, view 7."
      ],
      [
        "p17-09.jpeg",
        "Project detail 9",
        "The Ivory Line Kitchen — project photography, view 9."
      ]
    ]
  }
});
products.unshift(...[
  {
    "id": "EW-F18",
    "name": "Cane Dining Armchairs",
    "category": "dining",
    "image": "p14-02.jpeg",
    "description": "Shown in The Workshop Dining Set, EW-014. Dimensions, materials, finish and installation requirements are confirmed during your quotation."
  },
  {
    "id": "EW-F19",
    "name": "Cane-front Sideboard",
    "category": "accents",
    "image": "p15-01.jpeg",
    "description": "Shown in The Woven Home, EW-015. Dimensions, materials, finish and installation requirements are confirmed during your quotation."
  },
  {
    "id": "EW-F20",
    "name": "Glazed Wardrobe",
    "category": "bedroom",
    "image": "p16-02.jpeg",
    "description": "Shown in The Timber Glow Suite, EW-016. Dimensions, materials, finish and installation requirements are confirmed during your quotation."
  },
  {
    "id": "EW-F21",
    "name": "Linear Kitchen Cabinetry",
    "category": "kitchens",
    "image": "p17-05.jpeg",
    "description": "Shown in The Ivory Line Kitchen, EW-017. Dimensions, materials, finish and installation requirements are confirmed during your quotation."
  }
]);
let activeProject='p16';
let photos=projectData[activeProject].photos;
const spaceInfo={"bedroom":["Bedrooms","Beds, wardrobes and complete bedroom settings.","p16-04.jpeg"],"dining":["Dining Rooms","Dining tables, chairs, sideboards and spaces for gathering.","p12-04.jpeg"],"living":["Living & Reception","Sofas, media units and comfortable spaces to unwind.","p11-03.jpeg"],"kitchens":["Kitchens","Fitted kitchens, breakfast bars and cabinetry.","p17-05.jpeg"],"accents":["Accent Pieces","Mirrors, occasional chairs, consoles and individual details.","IMG_0131.jpg"]};
const roomViews={"suite":{"bedroom":{"files":["IMG_0123.jpg","IMG_0125.jpg","IMG_0126.jpg","IMG_3541.jpg"],"items":["EW-F01","EW-F02"]}},"console":{"living":{"items":["EW-F05"]}},"retreat":{"living":{"items":["EW-F06","EW-F07"]}},"p4":{"bedroom":{"items":["EW-F08"]}},"p5":{"kitchens":{"items":["EW-F09"]}},"p6":{"dining":{"indices":[1,3],"items":["EW-F10"]},"living":{"indices":[2,4,5,6,7],"items":[]}},"p7":{"bedroom":{"items":["EW-F11"]}},"p8":{"bedroom":{"items":["EW-F12"]}},"p9":{"bedroom":{"indices":[2,4],"items":["EW-F13"]}},"p10":{"living":{"items":["EW-F14"]}},"p11":{"living":{"items":["EW-F15"]}},"p12":{"dining":{"indices":[1,2,4,5],"items":["EW-F16"]}},"p13":{"kitchens":{"items":["EW-F17"]}},"p14":{"dining":{"items":["EW-F18"]}},"p15":{"dining":{"indices":[1,2,3,4,5,8],"items":["EW-F19"]},"living":{"indices":[6,7,9,10],"items":[]}},"p16":{"bedroom":{"indices":[1,2,4,5,6,8,9,10],"items":["EW-F20"]}},"p17":{"kitchens":{"items":["EW-F21"]}}};
const productSpaces={"EW-F01":["bedroom"],"EW-F02":["bedroom"],"EW-F03":["accents"],"EW-F04":["accents"],"EW-F05":["living","accents"],"EW-F06":["living"],"EW-F07":["accents"],"EW-F08":["bedroom"],"EW-F09":["kitchens"],"EW-F10":["dining"],"EW-F11":["bedroom"],"EW-F12":["bedroom"],"EW-F13":["accents"],"EW-F14":["living"],"EW-F15":["living","accents"],"EW-F16":["dining"],"EW-F17":["kitchens"],"EW-F18":["dining","accents"],"EW-F19":["dining","accents"],"EW-F20":["bedroom"],"EW-F21":["kitchens"]};
let currentSpace='bedroom';
function roomEntries(){return Object.entries(projectData).filter(([key])=>roomViews[key]?.[currentSpace]).sort((a,b)=>b[1].code.localeCompare(a[1].code));}
function getProjectView(key){
 const original=projectData[key],view=roomViews[key]?.[currentSpace];if(!view)return original;
 const subset=original.photos.filter(photo=>view.files?view.files.includes(photo[0]):view.indices?view.indices.includes(parseInt(photo[0].match(/-(\d+)\./)?.[1])):true);
 return {...original,photos:subset,cover:subset.some(photo=>photo[0]===original.cover)?original.cover:subset[0][0],description:spaceInfo[currentSpace][1],items:view.items};
}
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const menu = $('#menu');
const mobileNav = $('#mobile-nav');
function closeMenu(){mobileNav.hidden=true;mobileNav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';mobileNav.hidden=!open;mobileNav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
mobileNav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
window.matchMedia('(min-width:851px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

let category='bedroom';
function renderProducts(){
 const query=$('#catalogue-search').value.trim().toLowerCase();
 const shown=products.filter(p=>productSpaces[p.id].includes(category)&&`${p.name} ${p.id} ${p.description}`.toLowerCase().includes(query));
 $('#catalogue').replaceChildren(...shown.map(p=>{
  const article=document.createElement('article');article.className='product';
  // Content below comes exclusively from the fixed local catalogue.
  article.innerHTML=`<button class="image-button" data-product="${p.id}" aria-label="View ${p.name} details"><img src="assets/${p.image}" alt="${p.name} in an actual Elite Wood project" loading="lazy" decoding="async"></button><div class="product-code">${p.id} · MADE TO ORDER</div><h3>${p.name}</h3><button class="text-button" data-quote="${p.name} · ${p.id}">REQUEST THIS PIECE →</button>`;
  return article;
 }));
 $('#catalogue-count').textContent=`${shown.length} ${shown.length===1?'piece':'pieces'}${category==='all'?' in the catalogue':' in this category'}`;
 $('#catalogue-empty').hidden=shown.length>0;
}
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>selectSpace(button.dataset.filter)));
$('#catalogue-search').addEventListener('input',renderProducts);
renderProducts();
function renderProject(key){
 activeProject=key;const project=getProjectView(key);photos=project.photos;galleryIndex=0;
 $('#project-code').textContent='Project · '+project.code;
 $('#project-heading').textContent=project.title;
 $('#project-description').textContent=project.description;
 $('#project-enquiry').dataset.quote=project.quote;
 $('#gallery-title').textContent=project.title;
 $('#project-picker').value=key;
 const pieces=products.filter(item=>(project.items||[]).includes(item.id));
 $('#room-pieces-wrap').hidden=pieces.length===0;
 $('#room-pieces').innerHTML=pieces.map(item=>`<button class="room-piece" data-product="${item.id}"><img src="assets/${item.image}" alt="" loading="lazy"><span>${item.name}<small>View piece →</small></span></button>`).join('');
 const video=$('#project-video');video.pause();video.removeAttribute('src');video.load();
 $('#project-video-wrap').hidden=!project.video;
 if(project.video){video.src='assets/'+project.video;video.poster='assets/'+project.cover;}
 $$('.project-tabs [data-project]').forEach(button=>{const active=button.dataset.project===key;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
 $('#project-gallery').replaceChildren(...photos.map((photo,index)=>{
  const button=document.createElement('button');button.className='gallery-thumb';button.dataset.gallery=index;button.setAttribute('aria-label',project.title+': '+photo[1]);
  button.innerHTML=`<img src="assets/${photo[0]}" alt="${photo[2]}" loading="lazy" decoding="async"><span>${photo[1]}<small>${key==='suite'&&index===6?'Work in progress':'Project photography'} ↗</small></span>`;
  return button;
 }));
}
let galleryIndex=0;
let fullProjectGallery=false;
renderProject(activeProject);
let projectLimit=6;
function renderProjectCards(){
 const query=$('#project-search').value.trim().toLowerCase();
 const accent=currentSpace==='accents';
 const entries=accent?products.filter(p=>productSpaces[p.id].includes('accents')).map(p=>[p.id,p]):roomEntries().map(([key])=>[key,getProjectView(key)]);
 const shown=entries.filter(([key,p])=>[p.title||p.name,p.description,p.code||p.id].join(' ').toLowerCase().includes(query));
 $('#project-list').innerHTML=shown.slice(0,projectLimit).map(([key,p])=>accent?`<article class="project-card"><button class="image-button" data-product="${p.id}" aria-label="View ${p.name} details"><img src="assets/${p.image}" alt="${p.name}" loading="lazy"><span class="image-tag">VIEW PIECE ↗</span></button><div class="label"><div class="eyebrow">${p.id} · ACCENT PIECES</div><h3>${p.name}</h3><button class="text-button" data-quote="${p.name} · ${p.id}">ENQUIRE ABOUT THIS PIECE →</button></div></article>`:`<article class="project-card"><button class="image-button" data-project="${key}" aria-label="Explore ${p.title} project"><img src="assets/${p.cover}" alt="${p.title} — ${spaceInfo[currentSpace][0]}" loading="lazy"><span class="image-tag">EXPLORE ROOM ↗</span></button><div class="label"><div class="eyebrow">${p.code} · ${spaceInfo[currentSpace][0]}</div><h3>${p.title}</h3><p>${p.photos.length} photos${p.video?' + video':''}</p><button class="text-button" data-project="${key}">STEP INSIDE →</button></div></article>`).join('');
 $('#project-count').textContent=shown.length+' '+(accent?'pieces':'spaces')+' · Showing '+Math.min(shown.length,projectLimit);
 $('#project-empty').hidden=shown.length>0;$('#project-more').hidden=shown.length<=projectLimit;
}
function selectSpace(key){
 if(!spaceInfo[key])return;
 currentSpace=key;category=key;projectLimit=6;$('#project-search').value='';$('#catalogue-search').value='';
 $('#space-heading').textContent=spaceInfo[key][0];$('#space-description').textContent=spaceInfo[key][1];
 $('#space-pieces-heading').textContent=spaceInfo[key][0]+' · Pieces';
 $$('[data-project-filter]').forEach(button=>{const selected=button.dataset.projectFilter===key;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});
 $$('[data-filter]').forEach(button=>{const selected=button.dataset.filter===key;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});
 $$('[data-space]').forEach(link=>{if(link.dataset.space===key)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
 $('#project-details').hidden=key==='accents';$('#products').hidden=key==='accents';
 if(key!=='accents'){
  const entries=roomEntries();$('#project-picker').innerHTML=entries.map(([id,p])=>`<option value="${id}">${p.title} · ${p.code}</option>`).join('');renderProject(entries[0][0]);
 }else{$('#project-video').pause();}
 renderProjectCards();renderProducts();
}
$$('[data-project-filter]').forEach(button=>button.addEventListener('click',()=>selectSpace(button.dataset.projectFilter)));
$$('[data-space]').forEach(link=>link.addEventListener('click',()=>selectSpace(link.dataset.space)));
$('#project-search').addEventListener('input',()=>{projectLimit=6;renderProjectCards();});
$('#project-more').addEventListener('click',()=>{projectLimit+=6;renderProjectCards();});
$('#project-picker').addEventListener('change',event=>renderProject(event.target.value));
selectSpace('bedroom');
function showPhoto(index){const source=fullProjectGallery?projectData[activeProject].photos:photos;galleryIndex=(index+source.length)%source.length;const photo=source[galleryIndex];$('#gallery-image').src='assets/'+photo[0];$('#gallery-image').alt=photo[2];$('#gallery-caption').textContent=(galleryIndex+1)+' / '+source.length+' · '+photo[1]+' — '+photo[2];}
function openDialog(dialog){dialog.showModal();document.body.classList.add('dialog-open');}
$$('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{if(!$('dialog[open]'))document.body.classList.remove('dialog-open');});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});});
$('#gallery-prev').addEventListener('click',()=>showPhoto(galleryIndex-1));
$('#gallery-next').addEventListener('click',()=>showPhoto(galleryIndex+1));
$('#gallery-dialog').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(galleryIndex-1);}if(e.key==='ArrowRight'){e.preventDefault();showPhoto(galleryIndex+1);}});
function selectQuote(piece){$$('dialog[open]').forEach(d=>d.close());$('#quote-piece').value=piece;invalidateReview();$('#contact').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});$('#quote-piece').focus({preventScroll:true});}
document.addEventListener('click',e=>{
 const fullProject=e.target.closest('[data-full-project]');if(fullProject){fullProjectGallery=true;$('#gallery-title').textContent=projectData[activeProject].title+' · Complete project';showPhoto(0);openDialog($('#gallery-dialog'));return;}
 const project=e.target.closest('[data-project]');if(project){renderProject(project.dataset.project);$('#project-details').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});return;}
 const gallery=e.target.closest('[data-gallery]');if(gallery){fullProjectGallery=false;$('#gallery-title').textContent=projectData[activeProject].title;showPhoto(Number(gallery.dataset.gallery));openDialog($('#gallery-dialog'));return;}
 const quote=e.target.closest('[data-quote]');if(quote){selectQuote(quote.dataset.quote);return;}
 const product=e.target.closest('[data-product]');if(product){const p=products.find(p=>p.id===product.dataset.product);$('#detail-image').src=`assets/${p.image}`;$('#detail-image').alt=p.name;$('#detail-code').textContent=p.id;$('#product-title').textContent=p.name;$('#detail-description').textContent=p.description;$('#detail-quote').onclick=()=>selectQuote(`${p.name} · ${p.id}`);openDialog($('#product-dialog'));}
});
const form=$('#quote-form');
let currentMessage='';
function invalidateReview(){currentMessage='';$('#quote-review').hidden=true;$('#quote-status').textContent='';$('#whatsapp-send').removeAttribute('href');}
form.addEventListener('input',invalidateReview);
form.addEventListener('change',invalidateReview);
form.addEventListener('submit',e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form);const get=key=>String(data.get(key)||'').trim();
 if(!get('name')){$('[name="name"]').setCustomValidity('Please enter your name.');$('[name="name"]').reportValidity();return;}
 const phoneDigits=get('phone').replace(/\D/g,'');
 if(phoneDigits.length<7){$('[name="phone"]').setCustomValidity('Please enter a valid phone number.');$('[name="phone"]').reportValidity();return;}
 if(!get('need')){$('#quote-piece').setCustomValidity('Please tell us briefly what you need.');$('#quote-piece').reportValidity();return;}
 currentMessage=`Hello Elite Wood, please contact me about my enquiry.\n\nName: ${get('name')}\nPhone / WhatsApp: ${get('phone')}\nI need: ${get('need')}\n\nPlease contact me to discuss the details.`;
 $('#quote-message').textContent=currentMessage;
 $('#whatsapp-send').href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(currentMessage)}`;
 $('#quote-review').hidden=false;$('#quote-review').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
});
['name','phone','need'].forEach(name=>document.querySelector('[name="'+name+'"]').addEventListener('input',e=>e.target.setCustomValidity('')));
$('#clear-quote').addEventListener('click',()=>{form.reset();['name','phone','need'].forEach(name=>document.querySelector('[name="'+name+'"]').setCustomValidity(''));invalidateReview();$('[name="name"]').focus();});
$('#copy-quote').addEventListener('click',async()=>{
 try{if(!navigator.clipboard)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(currentMessage);$('#quote-status').textContent='Request copied. Paste it into your conversation with Elite Wood.';}
 catch{const selection=window.getSelection();const range=document.createRange();range.selectNodeContents($('#quote-message'));selection.removeAllRanges();selection.addRange(range);$('#quote-status').textContent='Automatic copy is unavailable. The request is selected: press Ctrl+C / Cmd+C, or download it below.';}
});
$('#download-quote').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob(['\uFEFF'+currentMessage],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='Elite-Wood-Quote-Request.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#quote-status').textContent='Request downloaded. You can attach it in your conversation with Elite Wood.';});
