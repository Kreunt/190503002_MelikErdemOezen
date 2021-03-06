import { Button, Flex, Input, Td, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchableDropdown } from "../SearchableDropdown";

interface OrdersListRowUI {
  position: number;
  order: {
    id: number;
    customerId: number;
    menuId: number;
    date: string;
    price: number;
  };
  customers: any[];
  menus: any[];
  handleOrderRemove: (id: number) => void;
  handleSaveClick: (event: any, order: any) => void;
}

export const EditableOrdersListRow = (props: OrdersListRowUI) => {
  const [changeForm, setChangeForm] = useState({
    id: props.order.id,
    customerId: props.order.customerId,
    menuId: props.order.menuId,
    date: props.order.date,
    price: props.order.price,
  });
  const setCustomerId = (value: number) => {
    setChangeForm({
      ...changeForm,
      customerId: value,
    });
  };

  const setMenuId = (value: number) => {
    setChangeForm({
      ...changeForm,
      menuId: value,
    });
  };
  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.order)
        .slice(1)
        .map((key: string, index: number) => {
          if (key === "customerId") {
            return (
              <Td key={index} className="table-item">
                <SearchableDropdown
                  name={"Kunde"}
                  values={props.customers}
                  currentValue={changeForm.customerId}
                  setValue={setCustomerId}
                />
              </Td>
            );
          } else if (key === "menuId") {
            return (
              <Td key={index} className="table-item">
                <SearchableDropdown
                  name={"Menü"}
                  currentValue={changeForm.menuId}
                  values={props.menus}
                  setValue={setMenuId}
                />
              </Td>
            );
          }
          return (
            <Td key={index} className="table-item">
              <Input
                type="text"
                required={true}
                placeholder={`Enter the ${key}...`}
                name={`${key}`}
                value={changeForm[key as keyof typeof changeForm]}
                onChange={(e) => {
                  setChangeForm({
                    ...changeForm,
                    [key]: e.target.value,
                  });
                }}
              />
            </Td>
          );
        })}
      <Td className="table-item">
        <Flex direction={"row"} gap="5">
          <Button
            className="btn btn-save"
            onClick={(event) => props.handleSaveClick(event, changeForm)}
            colorScheme={"green"}
          >
            Speichern
          </Button>
          <Button
            className="btn btn-remove"
            colorScheme={"red"}
            onClick={() => {
              props.handleOrderRemove(props.order.id);
            }}
          >
            Bestellung löschen
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
