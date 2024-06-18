import { Link } from "@remix-run/react"
import { useState } from "react"
import client from "~/client"
import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
// import { prisma } from "../db";
import { useLoaderData, useActionData } from "@remix-run/react";
import NewSurvey from "../components/newSurvey";

export default function Index() {

  return (
    <div>
      <input />
      <Link to="/surveys">
        Surveys
      </Link>
      <NewSurvey />
    </div >
  )
}


