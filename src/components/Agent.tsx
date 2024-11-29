import React from "react";
import { Person } from "../utils/Types";

export default function Agent({ agent }: { agent: Person }) {
  return (
    <p className="agent">
      Listing courtesy of {agent.firstName} {agent.lastName}
    </p>
  );
}
