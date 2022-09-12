## Fruta Functional Requirements:
*All functionality should be start via the already established /fruits route*
1. Should list all existing fruit

   a. List must have the following columns:
     * Fruit Name
     * Description
     * Origin
     * Bloom
     * Family
     * Created date *(presented in a friendly format)*
     
   b. List should be sortable by Fruit Name and Bloom
   
   c. List should be filterable by Origin or Family

2. Should be able to add a new fruit
3. Should be able to delete an existing fruit

Any further functionality (e.g. update fruit) is out of scope for the initial version of Fruta

#### GraphQL API

All api requests can be made with the fruits-api `yarn fruits:api` Use the playground at `http://localhost:9000/graphql` to determine the structure of your requests. 
A GraphQL client is already available in this application from [villus](https://villus.logaretm.com/guide/overview/), see the documentation for implementation in the project.
One incomplete query has been added to the [fruits store](../stores/fruits.js) as a starting point.