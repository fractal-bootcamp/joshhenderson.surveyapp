import React from "react";
import { useActionData, useLoaderData } from "@remix-run/react";
import Surveys from "./surveys";
import client from "~/client";

// export const loader = async () => {
//     return const survey = await client.await.findUnique({
//         where: { id: Surveys },
//     });
// }