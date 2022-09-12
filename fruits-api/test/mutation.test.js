import { ApolloServer, gql } from 'apollo-server-lambda';
import { createTestClient } from 'apollo-server-testing';
import { typeDefs, resolvers } from '../graphql/index';
import { describe, it, expect } from 'vitest'

const server = new ApolloServer({ typeDefs, resolvers });

const { mutate } = createTestClient(server);

describe('Fruit API - Query', () => {
  it("Add fruit", async () => {
    const ADD_FRUIT = gql`
    mutation {
     addFruit(
      id: "0"
      scientific_name: "Malus Domestica"
      tree_name: "Manzano"
      fruit_name: "Manzana"
      family: "Rosaceae"
      origin: "Asia Central"
      description: "La manzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma"
      bloom: "Primavera"
      maturation_fruit: "Finales del verano o otoño"
      life_cycle: "60-80 años"
      climatic_zone: "Frio"
  ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
  `;

    const {
      data: { addFruit }
    } = await mutate({ mutation: ADD_FRUIT });

    expect(addFruit).toEqual({
      id: "0",
      scientific_name: "Malus Domestica",
      tree_name: "Manzano",
      fruit_name: "Manzana",
      family: "Rosaceae",
      origin: "Asia Central",
      description: "La manzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma",
      bloom: "Primavera",
      maturation_fruit: "Finales del verano o otoño",
      life_cycle: "60-80 años",
      climatic_zone: "Frio"
    });
  });

  it("Update fruit", async () => {
    const UPDATE_FRUIT = gql`
    mutation {
     updateFruit(
      id: "0"
      scientific_name: "Malus Domestica"
      tree_name: "Manzano"
      fruit_name: "Manzana"
      family: "Rosaceae"
      origin: "Asia Central"
      description: "La manzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma"
      bloom: "Primavera"
      maturation_fruit: "Finales del verano o otoño"
      life_cycle: "60-80 años"
      climatic_zone: "Frio"
  ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
  `;

    const {
      data: { updateFruit }
    } = await mutate({ mutation: UPDATE_FRUIT });

    expect(updateFruit).toEqual({
      id: "0",
      scientific_name: "Malus Domestica",
      tree_name: "Manzano",
      fruit_name: "Manzana",
      family: "Rosaceae",
      origin: "Asia Central",
      description: "La manzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma",
      bloom: "Primavera",
      maturation_fruit: "Finales del verano o otoño",
      life_cycle: "60-80 años",
      climatic_zone: "Frio"
    });
  });

  it("Delete fruit", async () => {
    const DELETE_FRUIT = gql`
    mutation {
      deleteFruit(id: "3") {
        id
      }
    }
  `;

    const {
      data: { deleteFruit }
    } = await mutate({ mutation: DELETE_FRUIT });

    expect(deleteFruit).toEqual({ id: null });
  });
});
