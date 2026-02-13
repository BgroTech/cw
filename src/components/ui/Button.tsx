import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    href?: string;
    children: React.ReactNode;
}

export default function Button({ variant = "primary", href, children, className = "", ...props }: ButtonProps) {
    const classes = `btn btn-${variant} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
