import React from "react";
import { Link } from "react-router-dom";

// Renders the list of thoughts
const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought.createdAt.N} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thought.username.S}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thought.username.S}'s thought on{" "}
                {new Date(parseInt(thought.createdAt.N)).toString()}
              </Link>{" "}
            </p>
            {thought.thought.S && (
              <p className="px-2 mt-2">{thought.thought.S}</p>
            )}
            {thought.image && (
              <p className="px-2">
                <img
                  className="mt-3 ml-4 thought-image"
                  src={thought.image.S}
                  alt="S3 bucket response"
                />
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
