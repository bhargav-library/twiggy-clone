import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";



const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
               <img className="logo"
                 src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
              />
              
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Help</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>
    )
}

const reslist =  [
                  {
                    "info": {
                      "id": "803227",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/02a2679f-92ca-48a0-b90c-b8defe2bce20_803227.JPG",
                      "locality": "Baroi Mart",
                      "areaName": "Borbari",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "6.9K+",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-05 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Best in Bolt"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Best in Corporate"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Bolt",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Corporate",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-fb17d392-8c02-4031-8480-e8d3353831b1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/guwahati/kfc-baroi-mart-borbari-rest803227",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "883876",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/f2dc701f-eb2d-4dee-8833-ae0f66082081_883876.JPG",
                      "locality": "Beltola",
                      "areaName": "BishnuRavaPath",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11633",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.3K+",
                      "sla": {
                        "deliveryTime": 57,
                        "lastMileTravel": 9.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "9.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-05 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹130"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-fb17d392-8c02-4031-8480-e8d3353831b1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/guwahati/olio-the-wood-fired-pizzeria-beltola-bishnuravapath-rest883876",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "69976",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/f391dd66-9118-412e-af60-d3ea3b716a97_69976.JPG",
                      "locality": "Hatigaon",
                      "areaName": "Hatigaon",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.4,
                      "parentId": "721",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "24K+",
                      "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 6.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "6.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-05 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-fb17d392-8c02-4031-8480-e8d3353831b1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/guwahati/pizza-hut-hatigaon-rest69976",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "717989",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c97fec2f-f130-44e6-8bfc-926116e3fd00_717989.jpg",
                      "locality": "six mile",
                      "areaName": "Guwahati",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.5,
                      "parentId": "166",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "12K+",
                      "sla": {
                        "deliveryTime": 54,
                        "lastMileTravel": 7.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "7.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-05 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Best in Bolt"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Best in Corporate"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Bolt",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Corporate",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-fb17d392-8c02-4031-8480-e8d3353831b1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/guwahati/burger-king-six-mile-guwahati-rest717989",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "135748",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/557cf2e7-0318-4557-964e-936ed4281342_135748.JPG",
                      "locality": "Beltola Tiniali",
                      "areaName": "Beltola",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "1",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 7.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "7.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-05 04:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "2.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-fb17d392-8c02-4031-8480-e8d3353831b1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/guwahati/cafe-coffee-day-tiniali-beltola-rest135748",
                      "type": "WEBLINK"
                    }
                  }
                ]

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants..."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {reslist.map((restaurant)=>(
          <RestauranrCard key={restaurant.info.id}  resData={restaurant}/>
        ))}
      </div>

    </div>
  );
};

const RestauranrCard=(props)=>{
  const{resData}=props;
  const{
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  }= resData?.info;

  return(
    <div className="res-card">
      <img className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
       <h4>{costForTwo}</h4>   
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  )

}


            



const AppLayout = ()=>{
    return(
        <div className ="app">
         <Header/>
         <Body/>         
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);