"use client";

import { Placeholder } from "@/components/placeholder";

export default function Error({error}: { error: Error }) {
    //return <div>{error.message || "Something went wrong!"}</div>
    return <Placeholder label={error.message || "Something went wrong!"} />
}