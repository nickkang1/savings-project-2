import React from "react";
import { READ_TABLE_PROJECTS } from "../../gql";
import {
  ReadTableProjects,
  ReadTableProjectsVariables
} from "../../gql/__generated__/ReadTableProjects";
import { useQuery } from "@apollo/react-hooks";
import { HandleQuery } from "../HandleQuery";
import { TableProjects } from "./TableProjects";

export const ReadProjects: React.FC<{}> = props => {
  const { data, loading, error } = useQuery<
    ReadTableProjects,
    ReadTableProjectsVariables
  >(READ_TABLE_PROJECTS);

  console.log(data, loading, error);

  return (
    <HandleQuery loading={loading} error={error}>
      {data && <TableProjects projects={data.projects} />}
    </HandleQuery>
  );
};