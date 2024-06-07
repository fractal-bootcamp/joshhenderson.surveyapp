import React from "react";
import { useActionData, useLoaderData } from "@remix-run/react";
import client from "~/client";
import { json } from "@remix-run/node"


export const loader = async () => {
    return json({
        surveys: await client.survey.findMany()
    });
};

export default function Surveys() {
    const data = useLoaderData<typeof loader>();
    return (
        <ul>
            {data.surveys.map((survey) => (
                <li key={survey.ID}>{survey.Title}{survey.Question}</li>
            ))}
        </ul>
    )
}