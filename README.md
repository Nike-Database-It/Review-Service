# Review Module
>


This project was to replacing an existing application’s backend with more powerful database to handle heavy internet traffic request.


![ec2 service](https://user-images.githubusercontent.com/39642408/54904213-24742680-4e9b-11e9-8562-a668de16a37a.png)
![Screen Shot 2019-03-21 at 4 59 12 PM](https://user-images.githubusercontent.com/39642408/54904217-2807ad80-4e9b-11e9-9186-c9022059b457.png)





## Related Projects

  - https://github.com/Nike-Database-It/Sizing-Cart_Service.git
  - https://github.com/Nike-Database-It/Navigation-Search-Service.git
  - https://github.com/Nike-Database-It/page-footer.git
  - https://github.com/Nike-Database-It/similar-products-carousel.git
  - https://github.com/Nike-Database-It/shoe_name_and_colors.git
  - https://github.com/Nike-Database-It/main_photo_gallery.git

## Table of Contents

1. [Setup](#Setup)
1. [Requirements](#requirements)




## To Set Up & Run Locally
- npm install
- npm run watch to run webpack
- npm server-dev to run server
- npm run db-seed to seed the database for mongoDB(seeds data for 100 records)


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
- Thanks to everyone on the Nike-Datase-ir team for builing awesome modules. 



| Action    | Method | Endpoint                                              | Purpose            |
|-----------|--------|-------------------------------------------------------|--------------------|
| Create    | POST   | /api/reviews                                          | Insert new review  |
| Read      | GET    | /api/:shoeID/reviews                                  | Get review         |
| Update    | PUT    | /api/reviews/:id                                      | Update one review  |
| Delete    | DELETE | /api/reviews/:id                                      | Delete an review   |

