import React from "react";
import { useActionData, useLoaderData } from "@remix-run/react";
import client from "~/client";
import { json } from "@remix-run/node"
import { Link } from "@remix-run/react";

export const loader = async () => {
    return json({
        surveys: await client.survey.findMany()
    });
};

//{survey.Question}

export default function Surveys() {
    const data = useLoaderData<typeof loader>();
    return (
        <div>
            <ul>
                {data.surveys.map((survey) => (
                    <li key={survey.ID}>{survey.Title}</li>
                ))}
            </ul>
            <ul>
                <Link to="new">
                    add new survey
                </Link>
            </ul>
        </div>
    );
}