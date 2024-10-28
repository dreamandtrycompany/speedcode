import React from 'react';
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className = "flex justify-center p-24">
            <SignUp />
        </div>
    )
}