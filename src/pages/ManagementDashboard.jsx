import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";
import { ButtonBar } from "../components/ButtonBar";

function logout() {
  window.location.href = "/";
}
export function ManagementDashboard() {
  return (
    <div>
      <h2>Management Dashboard</h2>
      <IconButton
        className="logoutButton"
        type="button"
        onClick={logout}
        colorScheme="red"
        position="absolute"
        top="40px"
        right="40px"
        icon={<ArrowBackIcon />}
      />
      <ButtonBar
        renderCustomers={true}
        renderMenus={true}
        renderOrders={true}
        renderUsers={true}
        renderIngredients={false} //wichtig
        renderPersonals={true}
        renderIncomeExpenses={false} //wichtig
      />
    </div>
  );
}
