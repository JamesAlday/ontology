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
import * as mutations from '../../graphql/mutations';
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
import { useNavigate } from "react-router-dom";

Amplify.configure(config);

const client = generateClient();

const BasicForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    /// validate ...
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const concept = {};
    for (const [key, value] of form.entries()) {
      setValues({
        ...values,
        [key]: value,
      });
    }
    concept["_version"] = 1;
    console.log(concept);
    const createConcept = await client.graphql({
      query: mutations.createConcept,
      variables: { input: values }
    }).then(res => {
      console.log('Success!', res);
      navigate({
        pathname: "/edit-form/" + res.data.createConcept.id,
      });
    }).catch(err => {
      console.log('Failure', err);
    })
  };

  return (
    <>
      <Flex as="form" direction="column" width="100%" onSubmit={handleSubmit}>
        <TextField
          defaultValue={values.name}
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
          defaultValue={values.description}
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
