import React, { useState } from "react";
import {
  Button,
  Flex,
  Text,
  TextField,
  Radio,
  RadioGroupField,
  TextAreaField,
} from "@aws-amplify/ui-react";

import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';

Amplify.configure(config);

const client = generateClient();

const oneConcept = await client.graphql({
  query: queries.getConcept,
  variables: { id: "802a799c-cdbd-4c8c-8f5e-d5e9dbd27e50" }
});
const item = oneConcept.data.getConcept;
console.log(item);

const BasicForm = () => {
  const [values, setValues] = useState(item);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    // setValues({
    //   ...values,
    //   [name]: value,
    // });
  };

  const handleSubmit = (e) => {
    /// validate ...
    e.preventDefault();
  };

  return (
    <>
      <Flex as="form" direction="column" width="100%" onSubmit={handleSubmit}>
        <TextField
          value={values?.name}
          onChange={handleInputChange}
          name="name"
          label={
            <Text>
              Name
              <Text as="span" fontSize="0.8rem" color="red">
                (required)
              </Text>
            </Text>
          }
          type="text"
          isRequired={true}
        />
        <TextAreaField
          label="Description"
          value={values?.description}
          onChange={handleInputChange}
          name="description"
          rows={6}
        />

        <Button
          type="submit"
          variation="primary"
          width={{ base: "100%", large: "50%" }}
          style={{ marginLeft: "auto" }}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default BasicForm;
