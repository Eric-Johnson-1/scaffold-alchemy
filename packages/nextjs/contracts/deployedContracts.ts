/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  11011: {
    Counter: {
      address: "0xa8774a0143b2a1b73639e18a54243a6ebcb7dd61",
      abi: [
        {
          type: "function",
          name: "decrement",
          stateMutability: "nonpayable",
          inputs: [],
          outputs: [],
        },
        {
          type: "function",
          name: "increment",
          stateMutability: "nonpayable",
          inputs: [],
          outputs: [],
        },
        {
          type: "function",
          name: "x",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
