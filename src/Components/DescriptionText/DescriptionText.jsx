import React from "react";

const DescriptionText = ({ content, className }) => {
    return (
        <p className={`md:text-md xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed ${className ? className : ""}`}>
            {content.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </p>
    );
};

export default DescriptionText;