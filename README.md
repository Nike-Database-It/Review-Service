# Review Module
>


This project was to replacing an existing application’s backend with more powerful database to handle heavy internet traffic request.






## Related Projects

- https://github.com/WARP-V/Sizing-Cart_Service
  - https://github.com/WARP-V/Navigation-Search-Service
  - https://github.com/WARP-V/page-footer
  - https://github.com/WARP-V/similar-products-carousel
  - https://github.com/WARP-V/shoe_name_and_colors
  - https://github.com/WARP-V/main_photo_gallery

## Table of Contents

1. [Setup](#Setup)
1. [Requirements](#requirements)




## To Set Up & Run Locally
- npm install
- npm run dev to run webpack
- npm start to run server
- run mongod in terminal tab, run mongo in new terminal tab
- npm run seed to seed the database for mongoDB(seeds data for 100 records)


## Requirements
-  Node 10.15.3
-  postgresQL DB




### Installing Dependencies

From within the root directory:
npm install -g webpack
npm install

## Running Tests
- npm test to run jest unit test suite for all components 

## Acknowledgements
- Thanks to everyone on the JISHAX team for builing awesome modules that bring to life the Drop Table verison of the Open table restaurant page user experience! 




| Action    | Method | Endpoint                                              | Purpose            |
|-----------|--------|-------------------------------------------------------|--------------------|
| Create    | POST   | /api/reviews                                          | Insert new review  |
| Read      | GET    | /api/:shoeID/reviews                                  | Get review         |
| Update    | PUT    | /api/reviews/:id                                      | Update one review  |
| Delete    | DELETE | /api/reviews/:id                                      | Delete an review   |

