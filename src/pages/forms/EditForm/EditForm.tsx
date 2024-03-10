import React, { useState } from "react";
import { View, Flex, useTheme } from "@aws-amplify/ui-react";
import { useLocation,useParams,useSearchParams } from "react-router-dom";
import FormFields from "./FormFields";
import FormActions from "./FormActions";
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../../graphql/queries';
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';

Amplify.configure(config);

const client = generateClient();


const GetConcept = async () => {
  const { conceptId } = useParams();
  console.log(conceptId);

  if (conceptId) {
    const oneConcept = await client.graphql({
      query: queries.getConcept,
      variables: { id: conceptId }
    });
    const item = oneConcept.data.getConcept;
    console.log(item);

    return item;
  }
}
// mock api request
const postForm = (data) =>
  new Promise((resolve, reject) => {
    if (!data.title) {
      reject(new Error("Not all information provided"));
    }
    setTimeout(() => resolve(data), 750);
  });

const EditForm = () => {
  const [concept, setConcept] = useState<any>();
  if (!concept) {
    GetConcept().then(res => {
      setConcept(res);
    })
  }
  const item = concept;
  console.log(item);

  // const [values, setValues] = useState(item);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  // const [isValid, setIsValid] = useState<boolean>(false);

  const { tokens } = useTheme();

  const saveData = () => {
    setIsLoading(true);

    const doPostForm = async (data) => {
      try {
        const result = await postForm(data);
        console.log(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    // doPostForm(values);
  };

  const formFieldChange = (name: string, value: string) => {
    console.log(name);
    console.log(value);
    // setValues({
    //   ...values,
    //   [name]: value,
    // });
  };

  const formFieldIsValid = (name: string, valid: boolean) => {
    setIsDisabled(!valid);
    console.log(name);
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
            values={item}
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
