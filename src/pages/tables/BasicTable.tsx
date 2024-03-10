import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

// import { mockSongsData } from "../../data/mock";

import { useNavigate, createSearchParams } from "react-router-dom";

import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';

Amplify.configure(config);
// const data = mockSongsData(10);

const client = generateClient();

// Simple query
const res = await client.graphql({
   query: queries.listConcepts 
});
// console.log(res); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }

const BasicTable = () => {
  const navigate = useNavigate();
  const items = res.data.listConcepts.items
  const editConcept = (item) =>
    navigate({
      pathname: "/edit-form",
      search: createSearchParams({id: item.id}).toString()
    });
  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">Title</TableCell>
            <TableCell as="th">Description</TableCell>
            <TableCell as="th">Parents</TableCell>
            <TableCell as="th">Children</TableCell>
            <TableCell as="th"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.parents}</TableCell>
                <TableCell>{item.children}</TableCell>
                <TableCell>
                  <Button onClick={() => navigate(`/edit-form/${item.id}`)}>Edit</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default BasicTable;
