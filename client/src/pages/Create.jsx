/* create a review page */

import Layout from "../components/Layout";
import Form from "../components/Form";
import "../styles/styles.css"; // Import styles for the form
import { useState } from "react";   

function Create() {
    const handleSave = (formData) => {
        console.log("Review saved:", formData);
        // TODO: Send to backend here
    };

    const handleCancel = () => {
        console.log("Review creation cancelled");
        // TODO: Navigate back or clear state
    };

    return(
        <Layout title="Create a New Review">
            <div className="create-page">
                <Form onSubmit={handleSave} onCancel={handleCancel} />
            </div>
        </Layout>
    )
}

export default Create;