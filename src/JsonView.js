import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase";

const JsonView = () => {
  const { id } = useParams();
  const [jsonContent, setJsonContent] = useState(null);

  useEffect(() => {
    // Retrieve JSON content from Firestore based on the provided ID
    db.collection("jsonFiles")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setJsonContent(doc.data().content);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error retrieving JSON content:", error);
      });
  }, [id]);

  return (
    <div>
      {jsonContent ? (
        <pre>{JSON.stringify(JSON.parse(jsonContent), null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JsonView;
