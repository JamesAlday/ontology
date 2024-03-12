import React, { useState } from "react";
import {
  Autocomplete,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';

Amplify.configure(config);

const client = generateClient();

const getConcepts = await client.graphql({
   query: queries.listConcepts,
   variables: {
    filter: {
      _deleted: { ne: true }
    }
   }
});

const deleteItem = async (item) => {
  await client.graphql({
    query: mutations.deleteConcept,
    variables: { input: item }
  }).then(res => {
    console.log('Success!', res);
  }).catch(err => {
    console.log('Failure', err);
  })
}

const ListSearchBar = (items) => {
  const options = items;
  console.log(options.items);
  return (
    <div className="header-search-bar">
      <Autocomplete
        label="Autocomplete"
        options={options ? options : [{"id":"apple","label":"apple"}]}
        placeholder="Search here..."
        size="small"
      />
    </div>
  );
};

const BasicTable = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(getConcepts.data.listConcepts.items)

  const deleteConcept = (id, version) => {
    const item = {
      id: id,
      _version: version
    }
    deleteItem(item);
    setItems(items);  
  };

  return (
    <>
      <ListSearchBar items={items} />
      <Table caption="" highlightOnHover={true}>
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
                  <Button onClick={() => deleteConcept(item.id, item._version)}>Delete</Button>
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
