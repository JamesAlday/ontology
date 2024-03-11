import React, { useEffect, useState } from "react";
import { View, Flex, useTheme } from "@aws-amplify/ui-react";
import { useLocation,useParams,useSearchParams } from "react-router-dom";
import FormFields from "./FormFields";
import FormActions from "./FormActions";
import { del, generateClient } from 'aws-amplify/api';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';

Amplify.configure(config);

const client = generateClient();

const GetConcept = async () => {
  const { conceptId } = useParams();
  if (conceptId) {
    const oneConcept = await client.graphql({
      query: queries.getConcept,
      variables: { id: conceptId }
    });
    return oneConcept.data.getConcept;
  }
  return null;
}

const saveForm = async (data) => {
  const updatedData = {
    id: data.id,
    parents: data.parents,
    children: data.parents,
    name: data.name,
    description: data.description,
    altNames: data.altNames,
    _version: data._version
  };
  const updateConcept = await client.graphql({
    query: mutations.updateConcept,
    variables: { input: updatedData }
  }).then(res => {
    console.log('Success!', res);
  }).catch(err => {
    console.log('Failure :( ', err);
  });
}

const EditForm = () => {
  const [concept, setConcept] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  // const [isValid, setIsValid] = useState<boolean>(true);

  if (!concept) {
    GetConcept().then(res => {
      setConcept(res);
    })
  }
  const { tokens } = useTheme();

  const saveData = () => {
    setIsLoading(true);

    const doPostForm = async (data) => {
      try {
        const result = await saveForm(data);
        console.log(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    doPostForm(concept);
  };

  const formFieldChange = (name: string, value: string) => {
    setConcept({
      ...concept,
      [name]: value,
    });
  };

  const formFieldIsValid = (name: string, valid: boolean) => {
    // console.log(name, valid);
    setIsDisabled(!valid);
  };

  return (
    <>
      <div>
        <h2>Edit Concept</h2>
      </div>
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
        gap={tokens.space.xl}
        minHeight="100vh"
      >
        <View
          backgroundColor="var(--amplify-colors-white)"
          borderRadius="6px"
          width={{ base: "100%", large: "70%" }}
          padding="1rem"
        >
          <br></br>
          <FormFields
            values={concept}
            formFieldChange={formFieldChange}
            formFieldIsValid={formFieldIsValid}
          />
        </View>
        <View
          backgroundColor="var(--amplify-colors-white)"
          borderRadius="6px"
          width={{ base: "100%", large: "30%" }}
          padding="1rem"
          minHeight="40vh"
        >
          <FormActions
            formOnSubmit={saveData}
            isLoading={isLoading}
            isDisabled={isDisabled}
          />
        </View>
      </Flex>
    </>
  );
};

export default EditForm;
