"use client";
import React from "react";

// Define the interface for the button properties
interface ButtonProps {
    text?: string;
    onClick?: () => void;
    textColor?: string | null;
    textSize?: string | null;
    backgroundColor?: string | null;
    borderRadius?: string | null;
    width?: string | null;
    height?: string | null;
    category?: "default" | "success" | "warning" | "danger" | "custom";
}

// Define the ButtonComponent with default property values
const ButtonComponent: React.FC<ButtonProps> = ({
    text, // Default button text
    onClick = () => { }, // Default click handler
    textColor, // Default text color
    textSize, // Default text size
    backgroundColor, // Default background color
    borderRadius, // Default border radius
    width, // Default width
    height, // Default height
    category = "default", // Default category
}) => {
    // Function to determine styles based on the category
    const getCategoryStyles = (category: string) => {
        switch (category) {
            case "default":
                return "text-black text-[18px] bg-white rounded-[10px] w-[302px] h-[55px]";
            case "success":
                return "text-white text-[18px] bg-[#3FC04B] rounded-[10px] w-[155px] h-[50px]";
            case "warning":
                return "text-black text-[18px] bg-[#FFB800] rounded-[15px] w-[556px] h-[80px]";
            case "danger":
                return "text-white text-[18px] bg-[#A246FF] rounded-[10px] w-[302px] h-[55px]";
            case "custom":
                return ""; // Custom styles will be applied through props
            default:
                return "text-black text-[18px] bg-white rounded-[10px] w-[302px] h-[55px]";
        }
    };

    // Get the styles for the selected category
    const categoryStyles = getCategoryStyles(category);

    // Function to override category styles with custom props
    const getMergedStyles = () => {
        const styles: React.CSSProperties = {};

        if (textColor) styles.color = textColor;
        if (textSize) styles.fontSize = textSize;
        if (backgroundColor) styles.backgroundColor = backgroundColor;
        if (borderRadius) styles.borderRadius = borderRadius;
        if (width) styles.width = width;
        if (height) styles.height = height;

        return styles;
    };

    const customStyles = getMergedStyles();

    return (
        <button
            onClick={onClick}
            className={category !== "custom" ? categoryStyles : ""}
            style={
                category === "custom"
                    ? customStyles
                    : {
                        color: textColor ?? undefined, // Apply text color
                        fontSize: textSize ?? undefined, // Apply text size
                        backgroundColor: backgroundColor ?? undefined, // Apply background color
                        borderRadius: borderRadius ?? undefined, // Apply border radius
                        width: width ?? undefined, // Apply width
                        height: height ?? undefined, // Apply height
                    }
            }
        >
            {text ?? "Button"}
        </button>
    );
};

export default ButtonComponent;
