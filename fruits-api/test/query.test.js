import { ApolloServer, gql } from 'apollo-server-lambda';
import { createTestClient } from 'apollo-server-testing';
import { typeDefs, resolvers } from '../graphql/index';
import { describe, it, expect } from 'vitest'


const server = new ApolloServer({ typeDefs, resolvers });

const { query } = createTestClient(server);

describe('Fruit API - Query', () => {


  it("All fruits", async () => {
    const ALL_FRUIT = gql`
    query {
      fruits {
        id
      }
    }
  `;

    const {
      data: { fruits }
    } = await query({ query: ALL_FRUIT });

    expect(fruits).toEqual(expect.arrayContaining(fruits));
  });

  it("Find one fruit", async () => {
    const ONE_FRUIT = gql`
    query {
      fruit(id: "1") {
        id
        family
      }
    }
  `;

    const {
      data: { fruit }
    } = await query({ query: ONE_FRUIT });

    expect(fruit).toEqual({ id: "1", family: "Rosaceae" });
  });

  it("Filter family", async () => {
    const FILTER_FAMILY = gql`
    query {
      filterFruitsFam(family: "Musaceae") {
        id
        family
      }
    }
  `;

    const {
      data: { filterFruitsFam }
    } = await query({ query: FILTER_FAMILY });

    expect(filterFruitsFam).toEqual([{ id: "3", family: "Musaceae" }]);
  });

  it("Filter origin", async () => {
    const FILTER_ORIGIN = gql`
    query {
      filterFruitsOri(origin: "Africa") {
        origin
      }
    }
  `;

    const {
      data: { filterFruitsOri }
    } = await query({ query: FILTER_ORIGIN });

    expect(filterFruitsOri).toEqual([{ origin: "Africa" }]);
  });
})
