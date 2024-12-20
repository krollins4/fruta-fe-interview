/* eslint-disable no-undef */
const { UserInputError } = require('apollo-server-lambda');
const fruits = require('../data/data');

const resolvers = {
  Query: {
    fruits: () => fruits,
    // Filtrado por "Familia" o "Origen", ¿debo utilizar una regex?.
    filterFruitsFam: (_, { family }) => {
      return fruits.filter(fruit => fruit.family === family);
    },
    filterFruitsOri: (_, { origin }) => {
      return fruits.filter(fruit => fruit.origin === origin);
    },
    fruit: (_, { id }) => {
      const tree = fruits.find(fruit => fruit.id === Number(id));

      if (id < 1) {
        throw new UserInputError('Error in the id, it must not be less than 1', {
          argumentName: 'id'
        });
      }

      if (tree) return tree;
      throw new Error("Tree Not Found!");
    }
  },
  Mutation: {
    addFruit: (_, args) => {
      const {
        id,
        scientific_name,
        tree_name,
        fruit_name,
        family,
        origin,
        description,
        bloom,
        maturation_fruit,
        life_cycle,
        climatic_zone,
      } = args;

      const newFruit = {
        id: id,
        scientific_name: scientific_name,
        tree_name: tree_name,
        fruit_name: fruit_name,
        family: family,
        origin: origin,
        description: description,
        bloom: bloom,
        maturation_fruit: maturation_fruit,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
        created: new Date().toISOString()
      };

      fruits.push(newFruit);
      return newFruit;
    },
    updateFruit: (_, args) => {
      const {
        id,
        scientific_name,
        tree_name,
        fruit_name,
        family,
        origin,
        description,
        bloom,
        maturation_fruit,
        life_cycle,
        climatic_zone,
      } = args;

      const body = {
        id: id,
        scientific_name: scientific_name,
        tree_name: tree_name,
        fruit_name: fruit_name,
        family: family,
        origin: origin,
        description: description,
        bloom: bloom,
        maturation_fruit: maturation_fruit,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
      };

      const index = fruits.find((fruit) => fruit.id === Number(id));
      if (index) Object.keys(body).forEach((key) => (index[key] = body[key]));
      return body;
    },
    deleteFruit: (_, { id }) => {
      const deleteOne = fruits.findIndex(fruit => fruit.id === Number(id));
      if (deleteOne > -1) return fruits.splice(deleteOne, 1);
    }
  }
}



module.exports = resolvers;
