/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardB from "./CardB";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function NewHomes(props) {
  const { Home, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const itemsPagination = { sort: (s) => s.createdAt(SortDirection.ASCENDING) };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      templateColumns="1fr 1fr 1fr"
      type="grid"
      alignItems="stretch"
      justifyContent="stretch"
      autoFlow="row"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardB
          width="auto"
          margin="10px 10px 10px 10px"
          Home={item}
          height="auto"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardB[0]")}
        ></CardB>
      )}
    </Collection>
  );
}
